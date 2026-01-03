<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { 
		type Tab, 
		getTabId, 
		getTabUrl,
		createBibleTab, 
		createAboutTab, 
		createChooseTab,
		createStopwatchTab
	} from "$lib/app";
	import { NavigationServiceLive } from "$lib/services/NavigationService";
	import { ResponsiveServiceLive } from "$lib/services/ResponsiveService";
	import TabBar from "$lib/components/tabs/TabBar.svelte";
	import TabContent from "$lib/components/tabs/TabContent.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { Effect } from "effect";

	let { translation }: { translation: Translation } = $props();

	// State management
	let tabs = $state<Tab[]>([]);
	let activeTabId = $state<string>("tab1");
	let nextTabId = $state<number>(2);

	// Initialize the first tab using Effect
	async function initializeTab() {
		try {
			const initialState = await Effect.runPromise(NavigationServiceLive.getInitialState());
			
			let initialTab: Tab;
			if (initialState.isAbout) {
				// Create About tab if URL is /about
				initialTab = await Effect.runPromise(createAboutTab("tab1"));
			} else if (initialState.isStopwatch) {
				// Create Stopwatch tab if URL is /stopwatch
				initialTab = await Effect.runPromise(createStopwatchTab("tab1"));
			} else {
				// Create Bible tab with parsed book/chapter
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				initialTab = await Effect.runPromise(
					createBibleTab(
						"tab1", 
						initialState.book, 
						initialState.chapter, 
						translation, 
						canonState
					)
				);
			}
			
			tabs = [initialTab];
		} catch (error) {
			console.error("Failed to initialize tab:", error);
			// Fallback to default
			const fallbackTab = await Effect.runPromise(
				createBibleTab("tab1", BibleBook.John, 1, translation, true)
			);
			tabs = [fallbackTab];
		}
	}

	// Get active tab reference
	let activeTab = $derived(tabs.find(tab => getTabId(tab) === activeTabId));

	// Update tab state
	function updateTabState(updatedTab: Tab) {
		const tabId = getTabId(updatedTab);
		tabs = tabs.map(tab => getTabId(tab) === tabId ? updatedTab : tab);
		
		// Update URL if this is the active tab
		if (tabId === activeTabId) {
			const url = getTabUrl(updatedTab);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		}
	}

	// Add new tab
	async function addTab() {
		try {
			const tabId = `tab${nextTabId}`;
			const newTab = await Effect.runPromise(createChooseTab(tabId));
			tabs = [...tabs, newTab];
			activeTabId = tabId;
			nextTabId++;
		} catch (error) {
			console.error("Failed to add tab:", error);
		}
	}

	// Remove tab
	async function removeTab(tabId: string) {
		if (tabs.length === 1) return;
		
		// Clean up background tasks for the removed tab (no longer needed with simplified approach)
		
		tabs = tabs.filter(tab => getTabId(tab) !== tabId);
		
		if (activeTabId === tabId) {
			const firstTab = tabs[0];
			if (firstTab) {
				activeTabId = getTabId(firstTab);
			}
		}
	}

	// Set active tab
	function setActiveTab(tabId: string) {
		activeTabId = tabId;
		
		// Update URL for any tab type using the mapping function
		const tab = tabs.find(tab => getTabId(tab) === tabId);
		if (tab) {
			const url = getTabUrl(tab);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		}
	}

	// Handle app choice in ChooseApp tabs
	async function handleAppChoice(appType: "bible" | "about" | "stopwatch") {
		try {
			const tabIndex = tabs.findIndex(tab => getTabId(tab) === activeTabId);
			if (tabIndex === -1) return;

			let newTab: Tab;
			if (appType === "bible") {
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				newTab = await Effect.runPromise(
					createBibleTab(activeTabId, BibleBook.John, 1, translation, canonState)
				);
			} else if (appType === "about") {
				newTab = await Effect.runPromise(createAboutTab(activeTabId));
			} else if (appType === "stopwatch") {
				newTab = await Effect.runPromise(createStopwatchTab(activeTabId));
			} else {
				throw new Error(`Unknown app type: ${appType}`);
			}
			
			tabs = tabs.map((tab, index) => index === tabIndex ? newTab : tab);
			
			// Update URL using the mapping function
			const url = getTabUrl(newTab);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		} catch (error) {
			console.error("Failed to handle app choice:", error);
		}
	}

	// Handle browser navigation
	async function syncFromURL() {
		try {
			const currentPage = $page;
			const params = currentPage.params;
			if (params.book && params.chapter) {
				const urlState = await Effect.runPromise(
					NavigationServiceLive.parseURL(currentPage.url.pathname)
				);
				
				if (urlState && activeTab && activeTab.app._tag === "Bible") {
					const currentBook = activeTab.app.bibleState.currentBook;
					const currentChapter = activeTab.app.bibleState.currentChapter;
					
					if (currentBook !== urlState.book || currentChapter !== urlState.chapter) {
						const updatedTab = await Effect.runPromise(
							createBibleTab(
								activeTab.id,
								urlState.book,
								urlState.chapter,
								activeTab.app.bibleState.translation,
								activeTab.app.bibleState.showCanonExplorer
							)
						);
						updateTabState(updatedTab);
					}
				}
			}
		} catch (error) {
			console.error("Failed to sync from URL:", error);
		}
	}

	// Initialize on mount
	onMount(async () => {
		await initializeTab();
		await syncFromURL();
	});

	// Watch for URL changes
	$effect(() => {
		$page;
		syncFromURL();
	});
</script>

<div class="h-full flex flex-col bg-gray-900">
	<TabBar 
		{tabs}
		{activeTabId}
		onTabSelect={setActiveTab}
		onTabRemove={removeTab}
		onAddTab={addTab}
	/>

	<TabContent 
		{tabs}
		{activeTabId}
		{getTabId}
		onStateChange={updateTabState}
		onAppChoice={handleAppChoice}
	/>
</div>
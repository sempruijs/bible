<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import {
		type TabsState,
		type TabState,
		getTabId,
		getTabUrl,
		getDisplayName,
		createTab
	} from "$lib/app";
	import { NavigationServiceLive } from "$lib/services/NavigationService";
	import { ResponsiveServiceLive } from "$lib/services/ResponsiveService";
	import TabBar from "$lib/components/tabs/TabBar.svelte";
	import TabContent from "$lib/components/tabs/TabContent.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { Effect } from "effect";

	let { translation }: { translation: Translation } = $props();

	// State management - single source of truth
	let tabsState = $state<TabsState>({
		tabs: [],
		activeTabId: "tab1",
		nextTabId: 2
	});

	// Initialize the first tab using Effect
	async function initializeTab() {
		try {
			const initialState = await Effect.runPromise(NavigationServiceLive.getInitialState());

			let initialTab: TabState;
			if (initialState.isAbout) {
				// Create About tab if URL is /about
				initialTab = await Effect.runPromise(createTab({ app: "About", id: "tab1" }));
			} else if (initialState.isStopwatch) {
				// Create Stopwatch tab if URL is /stopwatch
				initialTab = await Effect.runPromise(createTab({ app: "Stopwatch", id: "tab1" }));
			} else {
				// Create Bible tab with parsed book/chapter
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				initialTab = await Effect.runPromise(
					createTab({
						app: "Bible",
						id: "tab1",
						book: initialState.book,
						chapter: initialState.chapter,
						translation,
						showCanonExplorer: canonState
					})
				);
			}

			tabsState.tabs = [initialTab];
		} catch (error) {
			console.error("Failed to initialize tab:", error);
			// Fallback to default
			const fallbackTab = await Effect.runPromise(
				createTab({
					app: "Bible",
					id: "tab1",
					book: BibleBook.John,
					chapter: 1,
					translation,
					showCanonExplorer: true
				})
			);
			tabsState.tabs = [fallbackTab];
		}
	}

	// Get active tab reference - derived from tabsState
	let activeTab = $derived(tabsState.tabs.find(tab => getTabId(tab) === tabsState.activeTabId));

	// Update browser title when active tab changes
	$effect(() => {
		if (activeTab && typeof document !== 'undefined') {
			document.title = getDisplayName(activeTab);
		}
	});

	// Update tab state
	function updateTabState(updatedTab: TabState) {
		const tabId = getTabId(updatedTab);
		tabsState.tabs = tabsState.tabs.map(tab => getTabId(tab) === tabId ? updatedTab : tab);

		// Update URL if this is the active tab
		if (tabId === tabsState.activeTabId) {
			const url = getTabUrl(updatedTab);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		}
	}

	// Add new tab
	async function addTab() {
		try {
			const tabId = `tab${tabsState.nextTabId}`;
			const newTab = await Effect.runPromise(createTab({ app: "ChooseApp", id: tabId }));
			tabsState.tabs = [...tabsState.tabs, newTab];
			tabsState.activeTabId = tabId;
			tabsState.nextTabId++;
		} catch (error) {
			console.error("Failed to add tab:", error);
		}
	}

	// Remove tab
	async function removeTab(tabId: string) {
		if (tabsState.tabs.length === 1) return;

		// Clean up background tasks for the removed tab (no longer needed with simplified approach)

		tabsState.tabs = tabsState.tabs.filter(tab => getTabId(tab) !== tabId);

		if (tabsState.activeTabId === tabId) {
			const firstTab = tabsState.tabs[0];
			if (firstTab) {
				tabsState.activeTabId = getTabId(firstTab);
			}
		}
	}

	// Set active tab
	function setActiveTab(tabId: string) {
		tabsState.activeTabId = tabId;

		// Update URL for any tab type using the mapping function
		const tab = tabsState.tabs.find(tab => getTabId(tab) === tabId);
		if (tab) {
			const url = getTabUrl(tab);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		}
	}

	// Tab navigation functions
	function goToNextTab() {
		const currentIndex = tabsState.tabs.findIndex(tab => getTabId(tab) === tabsState.activeTabId);
		if (currentIndex !== -1 && currentIndex < tabsState.tabs.length - 1) {
			setActiveTab(getTabId(tabsState.tabs[currentIndex + 1]));
		} else if (tabsState.tabs.length > 1) {
			// Wrap to first tab
			setActiveTab(getTabId(tabsState.tabs[0]));
		}
	}

	function goToPreviousTab() {
		const currentIndex = tabsState.tabs.findIndex(tab => getTabId(tab) === tabsState.activeTabId);
		if (currentIndex > 0) {
			setActiveTab(getTabId(tabsState.tabs[currentIndex - 1]));
		} else if (tabsState.tabs.length > 1) {
			// Wrap to last tab
			setActiveTab(getTabId(tabsState.tabs[tabsState.tabs.length - 1]));
		}
	}

	// Handle keyboard shortcuts
	function handleGlobalKeydown(event: KeyboardEvent) {
		// Only handle shortcuts if not typing in an input/textarea
		const target = event.target as HTMLElement;
		if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true')) {
			return;
		}

		if (event.key === 't') {
			event.preventDefault();
			addTab();
		} else if (event.key === 'n') {
			event.preventDefault();
			goToNextTab();
		} else if (event.key === 'p') {
			event.preventDefault();
			goToPreviousTab();
		} else if (event.key === 'w') {
			event.preventDefault();
			removeTab(tabsState.activeTabId);
		}
	}

	// Handle app choice in ChooseApp tabs
	async function handleAppChoice(appType: "bible" | "about" | "stopwatch") {
		try {
			const tabIndex = tabsState.tabs.findIndex(tab => getTabId(tab) === tabsState.activeTabId);
			if (tabIndex === -1) return;

			let newTab: TabState;
			if (appType === "bible") {
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				newTab = await Effect.runPromise(
					createTab({
						app: "Bible",
						id: tabsState.activeTabId,
						book: BibleBook.John,
						chapter: 1,
						translation,
						showCanonExplorer: canonState
					})
				);
			} else if (appType === "about") {
				newTab = await Effect.runPromise(createTab({ app: "About", id: tabsState.activeTabId }));
			} else if (appType === "stopwatch") {
				newTab = await Effect.runPromise(createTab({ app: "Stopwatch", id: tabsState.activeTabId }));
			} else {
				throw new Error(`Unknown app type: ${appType}`);
			}

			tabsState.tabs = tabsState.tabs.map((tab, index) => index === tabIndex ? newTab : tab);

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
							createTab({
								app: "Bible",
								id: activeTab.id,
								book: urlState.book,
								chapter: urlState.chapter,
								translation: activeTab.app.bibleState.translation,
								showCanonExplorer: activeTab.app.bibleState.showCanonExplorer
							})
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
	onMount(() => {
		// Start async initialization (don't await in onMount)
		initializeTab().then(() => syncFromURL());

		// Add global keyboard event listener
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', handleGlobalKeydown);
			return () => window.removeEventListener('keydown', handleGlobalKeydown);
		}
	});

	// Watch for URL changes
	$effect(() => {
		$page;
		syncFromURL();
	});
</script>

<div class="h-full flex flex-col bg-gray-900">
	<TabBar
		tabs={tabsState.tabs}
		activeTabId={tabsState.activeTabId}
		onTabSelect={setActiveTab}
		onTabRemove={removeTab}
		onAddTab={addTab}
	/>

	<TabContent
		tabs={tabsState.tabs}
		activeTabId={tabsState.activeTabId}
		{getTabId}
		onStateChange={updateTabState}
		onAppChoice={handleAppChoice}
	/>
</div>
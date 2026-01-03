<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { 
		type App, 
		getTabId, 
		getAppUrl,
		createBibleApp, 
		createAboutApp, 
		createChooseApp,
		createStopwatchApp
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
	let apps = $state<App[]>([]);
	let activeTabId = $state<string>("tab1");
	let nextTabId = $state<number>(2);

	// Initialize the first tab using Effect
	async function initializeApp() {
		try {
			const initialState = await Effect.runPromise(NavigationServiceLive.getInitialState());
			
			let initialApp: App;
			if (initialState.isAbout) {
				// Create About tab if URL is /about
				initialApp = await Effect.runPromise(createAboutApp("tab1"));
			} else if (initialState.isStopwatch) {
				// Create Stopwatch tab if URL is /stopwatch
				initialApp = await Effect.runPromise(createStopwatchApp("tab1"));
			} else {
				// Create Bible tab with parsed book/chapter
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				initialApp = await Effect.runPromise(
					createBibleApp(
						"tab1", 
						initialState.book, 
						initialState.chapter, 
						translation, 
						canonState
					)
				);
			}
			
			apps = [initialApp];
		} catch (error) {
			console.error("Failed to initialize app:", error);
			// Fallback to default
			const fallbackApp = await Effect.runPromise(
				createBibleApp("tab1", BibleBook.John, 1, translation, true)
			);
			apps = [fallbackApp];
		}
	}

	// Get active app reference
	let activeApp = $derived(apps.find(app => getTabId(app) === activeTabId));

	// Update app state
	function updateAppState(updatedApp: App) {
		const tabId = getTabId(updatedApp);
		apps = apps.map(app => getTabId(app) === tabId ? updatedApp : app);
		
		// Update URL if this is the active tab
		if (tabId === activeTabId) {
			const url = getAppUrl(updatedApp);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		}
	}

	// Add new tab
	async function addTab() {
		try {
			const tabId = `tab${nextTabId}`;
			const newApp = await Effect.runPromise(createChooseApp(tabId));
			apps = [...apps, newApp];
			activeTabId = tabId;
			nextTabId++;
		} catch (error) {
			console.error("Failed to add tab:", error);
		}
	}

	// Remove tab
	async function removeTab(tabId: string) {
		if (apps.length === 1) return;
		
		// Clean up background tasks for the removed tab (no longer needed with simplified approach)
		
		apps = apps.filter(app => getTabId(app) !== tabId);
		
		if (activeTabId === tabId) {
			const firstApp = apps[0];
			if (firstApp) {
				activeTabId = getTabId(firstApp);
			}
		}
	}

	// Set active tab
	function setActiveTab(tabId: string) {
		activeTabId = tabId;
		
		// Update URL for any app type using the mapping function
		const app = apps.find(app => getTabId(app) === tabId);
		if (app) {
			const url = getAppUrl(app);
			Effect.runPromise(NavigationServiceLive.navigateToUrl(url));
		}
	}

	// Handle app choice in ChooseApp tabs
	async function handleAppChoice(appType: "bible" | "about" | "stopwatch") {
		try {
			const tabIndex = apps.findIndex(app => getTabId(app) === activeTabId);
			if (tabIndex === -1) return;

			let newApp: App;
			if (appType === "bible") {
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				newApp = await Effect.runPromise(
					createBibleApp(activeTabId, BibleBook.John, 1, translation, canonState)
				);
			} else if (appType === "about") {
				newApp = await Effect.runPromise(createAboutApp(activeTabId));
			} else if (appType === "stopwatch") {
				newApp = await Effect.runPromise(createStopwatchApp(activeTabId));
			} else {
				throw new Error(`Unknown app type: ${appType}`);
			}
			
			apps = apps.map((app, index) => index === tabIndex ? newApp : app);
			
			// Update URL using the mapping function
			const url = getAppUrl(newApp);
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
				
				if (urlState && activeApp && activeApp._tag === "Bible") {
					const currentBook = activeApp.bibleState.currentBook;
					const currentChapter = activeApp.bibleState.currentChapter;
					
					if (currentBook !== urlState.book || currentChapter !== urlState.chapter) {
						const updatedApp = await Effect.runPromise(
							createBibleApp(
								activeApp.bibleState.id,
								urlState.book,
								urlState.chapter,
								activeApp.bibleState.translation,
								activeApp.bibleState.showCanonExplorer
							)
						);
						updateAppState(updatedApp);
					}
				}
			}
		} catch (error) {
			console.error("Failed to sync from URL:", error);
		}
	}

	// Initialize on mount
	onMount(async () => {
		await initializeApp();
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
		{apps}
		{activeTabId}
		onTabSelect={setActiveTab}
		onTabRemove={removeTab}
		onAddTab={addTab}
	/>

	<TabContent 
		{apps}
		{activeTabId}
		{getTabId}
		onStateChange={updateAppState}
		onAppChoice={handleAppChoice}
	/>
</div>
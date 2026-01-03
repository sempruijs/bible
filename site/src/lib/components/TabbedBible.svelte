<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { 
		type App, 
		getTabId, 
		createBibleApp, 
		createAboutApp, 
		createChooseApp 
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
			const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
			
			const initialApp = await Effect.runPromise(
				createBibleApp(
					"tab1", 
					initialState.book, 
					initialState.chapter, 
					translation, 
					canonState
				)
			);
			
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
		
		// Update URL for Bible apps
		if (updatedApp._tag === "Bible" && tabId === activeTabId) {
			Effect.runPromise(
				NavigationServiceLive.updateURL(
					updatedApp.bibleState.currentBook, 
					updatedApp.bibleState.currentChapter
				)
			);
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
	function removeTab(tabId: string) {
		if (apps.length === 1) return;
		
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
		
		// Update URL when switching to Bible tabs
		const app = apps.find(app => getTabId(app) === tabId);
		if (app && app._tag === "Bible") {
			Effect.runPromise(
				NavigationServiceLive.updateURL(
					app.bibleState.currentBook, 
					app.bibleState.currentChapter
				)
			);
		}
	}

	// Handle app choice in ChooseApp tabs
	async function handleAppChoice(appType: "bible" | "about") {
		try {
			const tabIndex = apps.findIndex(app => getTabId(app) === activeTabId);
			if (tabIndex === -1) return;

			let newApp: App;
			if (appType === "bible") {
				const canonState = await Effect.runPromise(ResponsiveServiceLive.getInitialCanonState());
				newApp = await Effect.runPromise(
					createBibleApp(activeTabId, BibleBook.John, 1, translation, canonState)
				);
				// Update URL for new Bible tab
				Effect.runPromise(NavigationServiceLive.updateURL(BibleBook.John, 1));
			} else {
				newApp = await Effect.runPromise(createAboutApp(activeTabId));
			}
			
			apps = apps.map((app, index) => index === tabIndex ? newApp : app);
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
					
					if (currentBook._tag !== urlState.book._tag || currentChapter !== urlState.chapter) {
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
		{activeApp}
		onStateChange={updateAppState}
		onAppChoice={handleAppChoice}
	/>
</div>
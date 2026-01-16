<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import {
		type TabsState,
		type TabState,
		App,
		TabsState as TabsStateNS,
		createTab,
		ChooseApp
	} from "$lib/app";
	import { NavigationServiceLive } from "$lib/services/NavigationService";
	import { ResponsiveServiceLive } from "$lib/services/ResponsiveService";
	import TabBar from "$lib/components/tabs/TabBar.svelte";
	import TabContent from "$lib/components/tabs/TabContent.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { Effect, Option } from "effect";

	let { translation }: { translation: Translation } = $props();

	// State management - single source of truth
	let tabsState = $state<TabsState>({
		tabs: [],
		activeTabId: "tab1",
		nextTabId: 2
	});

	// Initialize the first tab using Effect
	async function initializeTab() {
		const initialState = await Effect.runPromise(NavigationServiceLive.getInitialState())
			.catch(error => {
				console.error("Failed to get initial state:", error);
				return { book: BibleBook.John, chapter: 1, isAbout: false, isStopwatch: false };
			});

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
	}

	// Get active tab reference - derived from tabsState
	let activeTabOption = $derived(TabsStateNS.getActiveTab(tabsState));

	// Update browser title when active tab changes
	$effect(() => {
		if (Option.isSome(activeTabOption) && typeof document !== 'undefined') {
			document.title = App.getTitle(activeTabOption.value.app);
		}
	});

	// Update tab state
	function updateTabState(updatedTab: TabState) {
		Effect.runPromise(TabsStateNS.updateTab(tabsState, updatedTab))
			.then(newState => {
				tabsState = newState;

				// Update URL if this is the active tab
				if (updatedTab.id === tabsState.activeTabId) {
					const url = App.getUrl(updatedTab.app);
					Effect.runPromise(NavigationServiceLive.navigateToUrl(url))
						.catch(error => console.error("Failed to navigate:", error));
				}
			})
			.catch(error => console.error("Failed to update tab:", error));
	}

	// Add new tab
	function addTab() {
		Effect.runPromise(TabsStateNS.addTab(tabsState, ChooseApp()))
			.then(newState => {
				tabsState = newState;
			})
			.catch(error => console.error("Failed to add tab:", error));
	}

	// Remove tab
	function removeTab(tabId: string) {
		Effect.runPromise(TabsStateNS.removeTab(tabsState, tabId))
			.then(newState => {
				tabsState = newState;
			})
			.catch(error => console.error("Failed to remove tab:", error));
	}

	// Set active tab
	function setActiveTab(tabId: string) {
		Effect.runPromise(TabsStateNS.setActiveTab(tabsState, tabId))
			.then(newState => {
				tabsState = newState;

				// Update URL
				const activeTabOption = TabsStateNS.getActiveTab(newState);
				if (Option.isSome(activeTabOption)) {
					const url = App.getUrl(activeTabOption.value.app);
					Effect.runPromise(NavigationServiceLive.navigateToUrl(url))
						.catch(error => console.error("Failed to navigate:", error));
				}
			})
			.catch(error => console.error("Failed to set active tab:", error));
	}

	// Tab navigation functions
	function goToNextTab() {
		Effect.runPromise(TabsStateNS.nextTab(tabsState))
			.then(newState => {
				tabsState = newState;
				const activeTabOption = TabsStateNS.getActiveTab(newState);
				if (Option.isSome(activeTabOption)) {
					const url = App.getUrl(activeTabOption.value.app);
					Effect.runPromise(NavigationServiceLive.navigateToUrl(url))
						.catch(error => console.error("Failed to navigate:", error));
				}
			})
			.catch(error => console.error("Failed to navigate to next tab:", error));
	}

	function goToPreviousTab() {
		Effect.runPromise(TabsStateNS.previousTab(tabsState))
			.then(newState => {
				tabsState = newState;
				const activeTabOption = TabsStateNS.getActiveTab(newState);
				if (Option.isSome(activeTabOption)) {
					const url = App.getUrl(activeTabOption.value.app);
					Effect.runPromise(NavigationServiceLive.navigateToUrl(url))
						.catch(error => console.error("Failed to navigate:", error));
				}
			})
			.catch(error => console.error("Failed to navigate to previous tab:", error));
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
		const tabIndex = tabsState.tabs.findIndex(tab => tab.id === tabsState.activeTabId);
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
			console.error(`Unknown app type: ${appType}`);
			return;
		}

		tabsState.tabs = tabsState.tabs.map((tab, index) => index === tabIndex ? newTab : tab);

		// Update URL using the mapping function
		const url = App.getUrl(newTab.app);
		Effect.runPromise(NavigationServiceLive.navigateToUrl(url))
			.catch(error => console.error("Failed to navigate:", error));
	}

	// Handle browser navigation
	async function syncFromURL() {
		const currentPage = $page;
		const params = currentPage.params;

		if (!params.book || !params.chapter) return;

		const urlStateOption = await Effect.runPromise(
			NavigationServiceLive.parseURL(currentPage.url.pathname)
		).catch(error => {
			console.error("Failed to parse URL:", error);
			return Option.none();
		});

		if (Option.isNone(urlStateOption)) return;
		if (Option.isNone(activeTabOption)) return;

		const activeTab = activeTabOption.value;
		if (activeTab.app._tag !== "Bible") return;

		const urlState = urlStateOption.value;
		const currentBook = activeTab.app.bibleState.currentBook;
		const currentChapter = activeTab.app.bibleState.currentChapter;

		if (currentBook === urlState.book && currentChapter === urlState.chapter) return;

		const updatedTab = await Effect.runPromise(
			createTab({
				app: "Bible",
				id: activeTab.id,
				book: urlState.book,
				chapter: urlState.chapter,
				translation: activeTab.app.bibleState.translation,
				showCanonExplorer: activeTab.app.bibleState.showCanonExplorer
			})
		).catch(error => {
			console.error("Failed to create updated tab:", error);
			return activeTab; // Return unchanged on error
		});

		updateTabState(updatedTab);
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
		onStateChange={updateTabState}
		onAppChoice={handleAppChoice}
	/>
</div>
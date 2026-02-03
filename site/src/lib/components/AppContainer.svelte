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
	import * as NavigationService from "$lib/services/NavigationService";
	import * as ResponsiveService from "$lib/services/ResponsiveService";
	import TabBar from "$lib/components/tabs/TabBar.svelte";
	import TabContent from "$lib/components/tabs/TabContent.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { Option } from "effect";
	import { useKeyboardShortcuts } from "$lib/utils/keyboard";

	let { translation }: { translation: Translation } = $props();

	// State management - single source of truth
	let tabsState = $state<TabsState>({
		tabs: [],
		activeTabId: "tab1",
		nextTabId: 2
	});

	// Flag to prevent syncFromURL during programmatic navigation
	let isProgrammaticNavigation = $state(false);

	// Mobile responsiveness state
	let isMobile = $state<boolean>(false);

	// Initialize the first tab
	function initializeTab() {
		const initialState = NavigationService.getInitialState();

		let initialTab: TabState;
		if (initialState.isAbout) {
			// Create About tab if URL is /about
			initialTab = createTab({ app: "About", id: "tab1" });
		} else if (initialState.isStopwatch) {
			// Create Stopwatch tab if URL is /stopwatch
			initialTab = createTab({ app: "Stopwatch", id: "tab1" });
		} else {
			// Create Bible tab with parsed book/chapter
			const canonState = ResponsiveService.getInitialCanonState();
			initialTab = createTab({
				app: "Bible",
				id: "tab1",
				book: initialState.book,
				chapter: initialState.chapter,
				translation,
				showCanonExplorer: canonState
			});
		}

		tabsState.tabs = [initialTab];
	}

	// Get active tab reference - derived from tabsState
	let activeTabOption = $derived(TabsStateNS.getActiveTab(tabsState));


	// Update tab state
	async function updateTabState(updatedTab: TabState) {
		console.log('📝 updateTabState called with:', updatedTab);
		tabsState = TabsStateNS.updateTab(tabsState, updatedTab);

		// Update URL only for Bible tabs (they have routes)
		// Other apps (About, Stopwatch, ChooseApp) are client-side only
		if (updatedTab.id === tabsState.activeTabId && updatedTab.app._tag === "Bible") {
			const url = App.getUrl(updatedTab.app);
			console.log('🔗 Navigating to URL:', url);
			isProgrammaticNavigation = true;
			await NavigationService.navigateToUrl(url);
			// Reset flag after navigation completes
			isProgrammaticNavigation = false;
		}
	}

	// Add new tab
	function addTab() {
		tabsState = TabsStateNS.addTab(tabsState, ChooseApp());
	}

	// Remove tab
	function removeTab(tabId: string) {
		tabsState = TabsStateNS.removeTab(tabsState, tabId);
	}

	// Set active tab
	async function setActiveTab(tabId: string) {
		tabsState = TabsStateNS.setActiveTab(tabsState, tabId);

		// Update URL only for Bible tabs
		const activeTabOption = TabsStateNS.getActiveTab(tabsState);
		if (Option.isSome(activeTabOption) && activeTabOption.value.app._tag === "Bible") {
			const url = App.getUrl(activeTabOption.value.app);
			isProgrammaticNavigation = true;
			await NavigationService.navigateToUrl(url);
			isProgrammaticNavigation = false;
		}
	}

	// Tab navigation functions
	async function goToNextTab() {
		tabsState = TabsStateNS.nextTab(tabsState);
		const activeTabOption = TabsStateNS.getActiveTab(tabsState);
		if (Option.isSome(activeTabOption) && activeTabOption.value.app._tag === "Bible") {
			const url = App.getUrl(activeTabOption.value.app);
			isProgrammaticNavigation = true;
			await NavigationService.navigateToUrl(url);
			isProgrammaticNavigation = false;
		}
	}

	async function goToPreviousTab() {
		tabsState = TabsStateNS.previousTab(tabsState);
		const activeTabOption = TabsStateNS.getActiveTab(tabsState);
		if (Option.isSome(activeTabOption) && activeTabOption.value.app._tag === "Bible") {
			const url = App.getUrl(activeTabOption.value.app);
			isProgrammaticNavigation = true;
			await NavigationService.navigateToUrl(url);
			isProgrammaticNavigation = false;
		}
	}

	// Handle app choice in ChooseApp tabs
	async function handleAppChoice(appType: "bible" | "about" | "stopwatch") {
		const tabIndex = tabsState.tabs.findIndex(tab => tab.id === tabsState.activeTabId);
		if (tabIndex === -1) return;

		let newTab: TabState;
		if (appType === "bible") {
			const canonState = ResponsiveService.getInitialCanonState();
			newTab = createTab({
				app: "Bible",
				id: tabsState.activeTabId,
				book: BibleBook.John,
				chapter: 1,
				translation,
				showCanonExplorer: canonState
			});
		} else if (appType === "about") {
			newTab = createTab({ app: "About", id: tabsState.activeTabId });
		} else if (appType === "stopwatch") {
			newTab = createTab({ app: "Stopwatch", id: tabsState.activeTabId });
		} else {
			console.error(`Unknown app type: ${appType}`);
			return;
		}

		tabsState.tabs = tabsState.tabs.map((tab, index) => index === tabIndex ? newTab : tab);

		// Update URL only for Bible tabs
		if (newTab.app._tag === "Bible") {
			const url = App.getUrl(newTab.app);
			isProgrammaticNavigation = true;
			await NavigationService.navigateToUrl(url);
			isProgrammaticNavigation = false;
		}
	}

	// Handle browser navigation
	function syncFromURL() {
		// Skip sync if we're in the middle of programmatic navigation
		if (isProgrammaticNavigation) {
			console.log('⏭️ Skipping syncFromURL - programmatic navigation in progress');
			return;
		}

		const currentPage = $page;
		const params = currentPage.params;

		if (!params.book || !params.chapter) return;

		const urlStateOption = NavigationService.parseURL(currentPage.url.pathname);

		if (Option.isNone(urlStateOption)) return;
		if (Option.isNone(activeTabOption)) return;

		const activeTab = activeTabOption.value;
		if (activeTab.app._tag !== "Bible") return;

		const urlState = urlStateOption.value;
		const currentBook = activeTab.app.bibleState.currentBook;
		const currentChapter = activeTab.app.bibleState.currentChapter;

		if (currentBook === urlState.book && currentChapter === urlState.chapter) return;

		console.log('🔄 syncFromURL: URL changed via browser navigation');
		const updatedTab = createTab({
			app: "Bible",
			id: activeTab.id,
			book: urlState.book,
			chapter: urlState.chapter,
			translation: activeTab.app.bibleState.translation,
			showCanonExplorer: activeTab.app.bibleState.showCanonExplorer
		});

		updateTabState(updatedTab);
	}

	// Initialize on mount
	onMount(() => {
		// Initialize the first tab
		initializeTab();
		syncFromURL();

		// Initialize mobile state
		isMobile = ResponsiveService.isMobile();

		// Listen for window resize to update mobile state
		const cleanupResize = ResponsiveService.createResizeObserver((mobile) => {
			isMobile = mobile;
		});

		// Setup global keyboard shortcuts
		const cleanupKeyboard = useKeyboardShortcuts({
			't': () => addTab(),
			'n': () => goToNextTab(),
			'p': () => goToPreviousTab(),
			'w': () => removeTab(tabsState.activeTabId)
		}, { skipInInputs: true });

		return () => {
			cleanupResize();
			cleanupKeyboard();
		};
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
		{isMobile}
	/>

	<TabContent
		tabs={tabsState.tabs}
		activeTabId={tabsState.activeTabId}
		onStateChange={updateTabState}
		onAppChoice={handleAppChoice}
		onTabRemove={removeTab}
	/>
</div>
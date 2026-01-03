<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook, getShortName, toBibleBook } from "$lib/book";
	import { type App, Bible, BibleState, About, ChooseApp, getDisplayName } from "$lib/app";
	import Tab from "$lib/components/tab.svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { Option } from "effect";

	let { translation }: { translation: Translation } = $props();

	// Initialize with URL params or default to John 1
	function getInitialBookAndChapter() {
		if (typeof window !== 'undefined') {
			const urlParts = window.location.pathname.split('/');
			if (urlParts.length >= 3) {
				const bookOption = toBibleBook(urlParts[1]);
				const chapter = parseInt(urlParts[2]);
				if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
					return { book: bookOption.value, chapter };
				}
			}
		}
		return { book: BibleBook.John, chapter: 1 };
	}

	// Determine initial canon explorer state based on device type
	function getInitialCanonExplorerState() {
		if (typeof window !== 'undefined') {
			const isMobile = window.innerWidth < 768;
			// On mobile, start with canon closed to show the chapter content
			// On desktop, start with canon open for better usability
			return !isMobile;
		}
		// Default to open for SSR
		return true;
	}

	const initial = getInitialBookAndChapter();
	const initialCanonState = getInitialCanonExplorerState();

	// Store apps instead of just BibleStates
	let apps = $state<App[]>([
		Bible({ bibleState: BibleState({
			id: "tab1",
			currentBook: initial.book,
			currentChapter: initial.chapter,
			translation: translation,
			showCanonExplorer: initialCanonState
		}) })
	]);

	let activeTabId = $state<string>("tab1");
	let nextTabId = $state<number>(2);

	// Track tab IDs separately for non-Bible apps
	let tabIds = $state<Record<string, string>>({});

	// Get active app reference
	let activeApp = $derived(apps.find((app, index) => {
		const tabId = getTabId(app, index);
		return tabId === activeTabId;
	}));

	// Update a specific app's state
	function updateAppState(app: App) {
		if (app._tag === "Bible") {
			apps = apps.map(existingApp => 
				existingApp._tag === "Bible" && existingApp.bibleState.id === app.bibleState.id
					? app
					: existingApp
			);
			
			// Update URL if this is the active tab
			if (app.bibleState.id === activeTabId) {
				updateURL(app.bibleState.currentBook, app.bibleState.currentChapter);
			}
		}
	}

	function addTab() {
		const tabId = `tab${nextTabId}`;
		const newApp = ChooseApp({});
		const newIndex = apps.length;
		apps = [...apps, newApp];
		tabIds[newIndex] = tabId;
		activeTabId = tabId;
		nextTabId++;
	}

	function handleAppChoice(appType: "bible" | "about") {
		// Find the current active tab index
		const activeIndex = apps.findIndex((app, index) => getTabId(app, index) === activeTabId);
		if (activeIndex === -1) return;

		if (appType === "bible") {
			const newBibleApp = Bible({ bibleState: BibleState({
				id: activeTabId,
				currentBook: BibleBook.John,
				currentChapter: 1,
				translation: translation,
				showCanonExplorer: getInitialCanonExplorerState()
			}) });
			apps = apps.map((app, index) => index === activeIndex ? newBibleApp : app);
			// Update URL for the new Bible tab
			updateURL(BibleBook.John, 1);
		} else if (appType === "about") {
			const newAboutApp = About({});
			apps = apps.map((app, index) => index === activeIndex ? newAboutApp : app);
		}
	}

	// Helper function to get tab ID from any app type
	function getTabId(app: App, index?: number): string {
		if (app._tag === "Bible") {
			return app.bibleState.id;
		} else {
			// For non-Bible apps, use index-based ID
			const appIndex = index !== undefined ? index : apps.indexOf(app);
			return tabIds[appIndex] || `tab${appIndex + 1}`;
		}
	}

	function removeTab(tabId: string) {
		if (apps.length === 1) return; // Don't allow removing the last tab
		
		// Find the index of the tab to remove
		const indexToRemove = apps.findIndex((app, index) => getTabId(app, index) === tabId);
		if (indexToRemove === -1) return;
		
		// Remove the app and update tabIds
		apps = apps.filter((_, index) => index !== indexToRemove);
		
		// Update tabIds mapping (shift indices down)
		const newTabIds: Record<string, string> = {};
		Object.entries(tabIds).forEach(([index, id]) => {
			const numIndex = parseInt(index);
			if (numIndex < indexToRemove) {
				newTabIds[numIndex] = id;
			} else if (numIndex > indexToRemove) {
				newTabIds[numIndex - 1] = id;
			}
		});
		tabIds = newTabIds;
		
		// If we removed the active tab, switch to the first remaining tab
		if (activeTabId === tabId) {
			const firstApp = apps[0];
			if (firstApp) {
				activeTabId = getTabId(firstApp, 0);
			}
		}
	}

	function setActiveTab(tabId: string) {
		activeTabId = tabId;
		
		// Update URL when switching tabs
		const app = apps.find(app => app._tag === "Bible" && app.bibleState.id === tabId);
		if (app && app._tag === "Bible") {
			updateURL(app.bibleState.currentBook, app.bibleState.currentChapter);
		}
	}

	// Update the URL to reflect current book and chapter
	function updateURL(book: typeof BibleBook.John, chapter: number) {
		const bookShort = getShortName(book);
		goto(`/${bookShort}/${chapter}`, { replaceState: true });
	}

	// Handle browser navigation (back/forward buttons)
	function syncFromURL() {
		const params = $page.params;
		if (params.book && params.chapter) {
			const bookOption = toBibleBook(params.book);
			const chapter = parseInt(params.chapter);
			
			if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
				const book = bookOption.value;
				
				// Update the active tab to match the URL only if it's different
				if (activeApp && activeApp._tag === "Bible") {
					const currentBook = activeApp.bibleState.currentBook;
					const currentChapter = activeApp.bibleState.currentChapter;
					
					// Only update if the URL state differs from current state
					if (currentBook._tag !== book._tag || currentChapter !== chapter) {
						const updatedBibleState = BibleState({
							...activeApp.bibleState,
							currentBook: book,
							currentChapter: chapter
						});
						// Update without triggering URL change
						apps = apps.map(existingApp => 
							existingApp._tag === "Bible" && existingApp.bibleState.id === activeApp.bibleState.id
								? Bible({ bibleState: updatedBibleState })
								: existingApp
						);
					}
				}
			}
		}
	}

	// Initialize from URL params on mount and handle route changes
	onMount(() => {
		syncFromURL();
	});

	// Watch for URL changes (browser back/forward)
	$effect(() => {
		// Access $page.params to create dependency
		$page.params;
		syncFromURL();
	});


</script>

<div class="h-full flex flex-col bg-gray-900">
	<!-- Tab Bar -->
	<div class="bg-gray-800 border-b border-gray-700 flex items-center px-4 py-2">
		<div class="flex items-center gap-2 flex-1 overflow-x-auto">
			{#each apps as app, index}
				{@const tabId = getTabId(app, index)}
				{@const tabTitle = getDisplayName(app)}
				<div class="flex items-center bg-gray-700 rounded-lg overflow-hidden min-w-0">
					<button
						onclick={() => setActiveTab(tabId)}
						class="px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap {
							activeTabId === tabId 
								? 'bg-blue-600 text-white' 
								: 'text-gray-300 hover:bg-gray-600'
						}"
					>
						{tabTitle}
					</button>
					{#if apps.length > 1}
						<button
							onclick={() => removeTab(tabId)}
							class="px-2 py-2 text-gray-400 hover:text-red-400 hover:bg-gray-600 transition-colors"
							title="Close tab"
						>
							×
						</button>
					{/if}
				</div>
			{/each}
		</div>
		
		<button
			onclick={addTab}
			class="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
			title="Add new tab"
		>
			+ New Tab
		</button>
	</div>

	<!-- App Content -->
	<div class="flex-1 overflow-hidden">
		{#if activeApp}
			<Tab 
				app={activeApp}
				onStateChange={updateAppState}
				onAppChoice={handleAppChoice}
			/>
		{/if}
	</div>
</div>
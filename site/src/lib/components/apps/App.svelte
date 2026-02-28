<script lang="ts">
	import type { TabState, BibleSelection } from "$lib/app";
	import { Bible, BibleState, Stopwatch, Wiki, WikiState } from "$lib/app";
	import AboutApp from "$lib/components/apps/About.svelte";
	import BibleApp from "$lib/components/apps/Bible.svelte";
	import StopwatchApp from "$lib/components/apps/Stopwatch.svelte";
	import WikiApp from "$lib/components/apps/Wiki.svelte";
	import ChooseAppComponent from "$lib/components/apps/ChooseApp.svelte";

	let {
		tabState,
		isActive = false,
		onStateChange,
		onSelectionChange,
		onAppChoice,
		onTabClose,
	}: {
		tabState: TabState;
		isActive?: boolean;
		onStateChange?: (tab: TabState) => void;
		onSelectionChange?: (tab: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch" | "wiki") => void;
		onTabClose?: () => void;
	} = $props();

	// Handle scroll state change (doesn't update URL - just internal view position)
	function handleBibleScrollStateChange(book: any, chapter: any, verse: any) {
		console.log("App: handleBibleScrollStateChange called", book, chapter, verse);
		if (tabState.app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({
				...tabState.app.bibleState,
				currentBook: book,
				currentChapter: chapter,
				currentVerse: verse,
			});
			const updatedTab = {
				...tabState,
				app: Bible({ bibleState: updatedBibleState }),
			};
			onStateChange(updatedTab);
		}
	}

	// Handle selection change (updates URL only, NOT scroll position)
	function handleBibleSelectionChange(selection: BibleSelection | null) {
		console.log("App: handleBibleSelectionChange called", selection);
		console.log("App: onSelectionChange prop is:", onSelectionChange ? "defined" : "undefined");
		console.log("App: app._tag is:", tabState.app._tag);
		if (tabState.app._tag === "Bible" && onSelectionChange) {
			const updatedBibleState = BibleState({
				...tabState.app.bibleState,
				selection,
				// Keep current scroll position - selection is independent
			});
			const updatedTab = {
				...tabState,
				app: Bible({ bibleState: updatedBibleState }),
			};
			console.log("App: calling onSelectionChange with updatedTab");
			onSelectionChange(updatedTab);
		} else {
			console.log("App: NOT calling onSelectionChange - condition failed");
		}
	}

	function handleToggleCanonExplorer() {
		if (tabState.app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({
				...tabState.app.bibleState,
				showCanonExplorer: !tabState.app.bibleState.showCanonExplorer,
			});
			onStateChange({
				...tabState,
				app: Bible({ bibleState: updatedBibleState }),
			});
		}
	}

	function handleTranslationChange(translation: any) {
		if (tabState.app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({
				...tabState.app.bibleState,
				translation,
			});
			onStateChange({
				...tabState,
				app: Bible({ bibleState: updatedBibleState }),
			});
		}
	}

	function handleStopwatchStateChange(newStopwatchState: any) {
		if (tabState.app._tag === "Stopwatch" && onStateChange) {
			onStateChange({
				...tabState,
				app: Stopwatch({ stopwatchState: newStopwatchState }),
			});
		}
	}

	function handleWikiNavigate(page: string) {
		if (tabState.app._tag === "Wiki" && onStateChange) {
			onStateChange({
				...tabState,
				app: Wiki({ wikiState: WikiState({ page }) }),
			});
		}
	}
</script>

<!-- Content rendering based on app type -->
{#if tabState.app._tag === "Bible"}
	<BibleApp
		bibleState={tabState.app.bibleState}
		{isActive}
		onScrollStateChange={handleBibleScrollStateChange}
		onSelectionChange={handleBibleSelectionChange}
		onToggleCanonExplorer={handleToggleCanonExplorer}
		onTranslationChange={handleTranslationChange}
	/>
{:else if tabState.app._tag === "About"}
	<AboutApp />
{:else if tabState.app._tag === "ChooseApp"}
	<ChooseAppComponent onChooseApp={(appType) => onAppChoice?.(appType)} onClose={onTabClose} />
{:else if tabState.app._tag === "Stopwatch"}
	<StopwatchApp
		stopwatchState={tabState.app.stopwatchState}
		{isActive}
		onStateChange={handleStopwatchStateChange}
	/>
{:else if tabState.app._tag === "Wiki"}
	<WikiApp
		wikiState={tabState.app.wikiState}
		onNavigate={handleWikiNavigate}
	/>
{/if}

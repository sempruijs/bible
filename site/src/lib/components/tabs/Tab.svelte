<script lang="ts">
	import type { TabState, BibleSelection } from "$lib/app";
	import { Bible, BibleState, Stopwatch } from "$lib/app";
	import BibleComponent from "$lib/components/bible/BibleReader.svelte";
	import ChooseAppComponent from "$lib/components/ui/ChooseApp.svelte";
	import StopwatchComponent from "$lib/components/ui/Stopwatch.svelte";

	let {
		app,
		isActive = false,
		onScrollStateChange,
		onSelectionChange,
		onAppChoice,
		onTabClose,
	}: {
		app: TabState;
		isActive?: boolean;
		onScrollStateChange?: (app: TabState) => void;
		onSelectionChange?: (app: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
		onTabClose?: () => void;
	} = $props();

	// Handle scroll state change (doesn't update URL - just internal view position)
	function handleBibleScrollStateChange(book: any, chapter: any, verse: any) {
		console.log("Tab: handleBibleScrollStateChange called", book, chapter, verse);
		if (app.app._tag === "Bible" && onScrollStateChange) {
			const updatedBibleState = BibleState({
				...app.app.bibleState,
				currentBook: book,
				currentChapter: chapter,
				currentVerse: verse,
			});
			const updatedTab = {
				...app,
				app: Bible({ bibleState: updatedBibleState }),
			};
			onScrollStateChange(updatedTab);
		}
	}

	// Handle selection change (updates URL only, NOT scroll position)
	function handleBibleSelectionChange(selection: BibleSelection | null) {
		console.log("Tab: handleBibleSelectionChange called", selection);
		if (app.app._tag === "Bible" && onSelectionChange) {
			const updatedBibleState = BibleState({
				...app.app.bibleState,
				selection,
				// Keep current scroll position - selection is independent
			});
			const updatedTab = {
				...app,
				app: Bible({ bibleState: updatedBibleState }),
			};
			onSelectionChange(updatedTab);
		}
	}

	function handleToggleCanonExplorer() {
		if (app.app._tag === "Bible" && onScrollStateChange) {
			const updatedBibleState = BibleState({
				...app.app.bibleState,
				showCanonExplorer: !app.app.bibleState.showCanonExplorer,
			});
			onScrollStateChange({
				...app,
				app: Bible({ bibleState: updatedBibleState }),
			});
		}
	}

	function handleTranslationChange(translation: any) {
		if (app.app._tag === "Bible" && onScrollStateChange) {
			const updatedBibleState = BibleState({
				...app.app.bibleState,
				translation,
			});
			onScrollStateChange({
				...app,
				app: Bible({ bibleState: updatedBibleState }),
			});
		}
	}

	function handleStopwatchStateChange(newStopwatchState: any) {
		if (app.app._tag === "Stopwatch" && onScrollStateChange) {
			onScrollStateChange({
				...app,
				app: Stopwatch({ stopwatchState: newStopwatchState }),
			});
		}
	}
</script>

<!-- Content rendering based on app type -->
{#if app.app._tag === "Bible"}
	<BibleComponent
		translation={app.app.bibleState.translation}
		currentBook={app.app.bibleState.currentBook}
		currentChapter={app.app.bibleState.currentChapter}
		currentVerse={app.app.bibleState.currentVerse}
		selection={app.app.bibleState.selection}
		showCanonExplorer={app.app.bibleState.showCanonExplorer}
		{isActive}
		onScrollStateChange={handleBibleScrollStateChange}
		onSelectionChange={handleBibleSelectionChange}
		onToggleCanonExplorer={handleToggleCanonExplorer}
		onTranslationChange={handleTranslationChange}
	/>
{:else if app.app._tag === "About"}
	<div class="flex items-center justify-center h-full">
		<div class="text-center text-gray-300">
			<h1 class="text-3xl font-bold mb-4">About Bible Computer</h1>
			<p class="text-lg mb-6">
				A modern Bible reading application built with SvelteKit and
				Effect.
			</p>
			<div class="flex justify-center gap-6 text-lg">
				<a
					href="https://github.com/biblecomputer/bible"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300 underline"
				>
					GitHub
				</a>
				<a
					href="https://x.com/biblecomputer"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300 underline"
				>
					X
				</a>
			</div>
		</div>
	</div>
{:else if app.app._tag === "ChooseApp"}
	<ChooseAppComponent onChooseApp={(appType) => onAppChoice?.(appType)} onClose={onTabClose} />
{:else if app.app._tag === "Stopwatch"}
	<StopwatchComponent
		stopwatchState={app.app.stopwatchState}
		{isActive}
		onStateChange={handleStopwatchStateChange}
	/>
{/if}

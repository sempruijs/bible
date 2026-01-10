<script lang="ts">
	import type { Tab } from "$lib/app";
	import { Bible, BibleState, Stopwatch, StopwatchState } from "$lib/app";
	import BibleComponent from "$lib/components/bible/BibleReader.svelte";
	import ChooseAppComponent from "$lib/components/ui/ChooseApp.svelte";
	import StopwatchComponent from "$lib/components/ui/Stopwatch.svelte";

	let { 
		app,
		onStateChange,
		onAppChoice
	}: { 
		app: Tab; 
		onStateChange?: (app: Tab) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
	} = $props();

	function handleBibleStateChange(book: any, chapter: any) {
		if (app.app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({ 
				...app.app.bibleState, 
				currentBook: book, 
				currentChapter: chapter 
			});
			onStateChange({
				...app,
				app: Bible({ bibleState: updatedBibleState })
			});
		}
	}

	function handleToggleCanonExplorer() {
		if (app.app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({
				...app.app.bibleState,
				showCanonExplorer: !app.app.bibleState.showCanonExplorer
			});
			onStateChange({
				...app,
				app: Bible({ bibleState: updatedBibleState })
			});
		}
	}

	function handleTranslationChange(translation: any) {
		if (app.app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({
				...app.app.bibleState,
				translation
			});
			onStateChange({
				...app,
				app: Bible({ bibleState: updatedBibleState })
			});
		}
	}

	function handleStopwatchStateChange(newStopwatchState: any) {
		if (app.app._tag === "Stopwatch" && onStateChange) {
			onStateChange({
				...app,
				app: Stopwatch({ stopwatchState: newStopwatchState })
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
		showCanonExplorer={app.app.bibleState.showCanonExplorer}
		onStateChange={handleBibleStateChange}
		onToggleCanonExplorer={handleToggleCanonExplorer}
		onTranslationChange={handleTranslationChange}
	/>
{:else if app.app._tag === "About"}
	<div class="flex items-center justify-center h-full">
		<div class="text-center text-gray-300">
			<h1 class="text-3xl font-bold mb-4">About Bible Computer</h1>
			<p class="text-lg">A modern Bible reading application built with SvelteKit and Effect.</p>
		</div>
	</div>
{:else if app.app._tag === "ChooseApp"}
	<ChooseAppComponent onChooseApp={(appType) => onAppChoice?.(appType)} />
{:else if app.app._tag === "Stopwatch"}
	<StopwatchComponent 
		stopwatchState={app.app.stopwatchState}
		onStateChange={handleStopwatchStateChange}
	/>
{/if}
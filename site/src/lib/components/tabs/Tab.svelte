<script lang="ts">
	import type { App } from "$lib/app";
	import { Bible, BibleState, Stopwatch, StopwatchState } from "$lib/app";
	import BibleComponent from "$lib/components/bible/BibleReader.svelte";
	import ChooseAppComponent from "$lib/components/ui/ChooseApp.svelte";
	import StopwatchComponent from "$lib/components/ui/Stopwatch.svelte";

	let { 
		app,
		onStateChange,
		onAppChoice
	}: { 
		app: App; 
		onStateChange?: (app: App) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
	} = $props();

	function handleBibleStateChange(book: any, chapter: any) {
		if (app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({ 
				...app.bibleState, 
				currentBook: book, 
				currentChapter: chapter 
			});
			onStateChange(Bible({ bibleState: updatedBibleState }));
		}
	}

	function handleToggleCanonExplorer() {
		if (app._tag === "Bible" && onStateChange) {
			const updatedBibleState = BibleState({ 
				...app.bibleState, 
				showCanonExplorer: !app.bibleState.showCanonExplorer
			});
			onStateChange(Bible({ bibleState: updatedBibleState }));
		}
	}

	function handleStopwatchStateChange(newStopwatchState: any) {
		if (app._tag === "Stopwatch" && onStateChange) {
			onStateChange(Stopwatch({ stopwatchState: newStopwatchState }));
		}
	}
</script>

<!-- Content rendering based on app type -->
{#if app._tag === "Bible"}
	<BibleComponent 
		translation={app.bibleState.translation}
		currentBook={app.bibleState.currentBook}
		currentChapter={app.bibleState.currentChapter}
		showCanonExplorer={app.bibleState.showCanonExplorer}
		onStateChange={handleBibleStateChange}
		onToggleCanonExplorer={handleToggleCanonExplorer}
	/>
{:else if app._tag === "About"}
	<div class="flex items-center justify-center h-full">
		<div class="text-center text-gray-300">
			<h1 class="text-3xl font-bold mb-4">About Bible Computer</h1>
			<p class="text-lg">A modern Bible reading application built with SvelteKit and Effect.</p>
		</div>
	</div>
{:else if app._tag === "ChooseApp"}
	<ChooseAppComponent onChooseApp={(appType) => onAppChoice?.(appType)} />
{:else if app._tag === "Stopwatch"}
	<StopwatchComponent 
		stopwatchState={app.stopwatchState}
		onStateChange={handleStopwatchStateChange}
	/>
{/if}
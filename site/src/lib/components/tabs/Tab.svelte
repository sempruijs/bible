<script lang="ts">
	import type { TabState } from "$lib/app";
	import { Bible, BibleState, Stopwatch, StopwatchState } from "$lib/app";
	import BibleComponent from "$lib/components/bible/BibleReader.svelte";
	import ChooseAppComponent from "$lib/components/ui/ChooseApp.svelte";
	import StopwatchComponent from "$lib/components/ui/Stopwatch.svelte";

	let {
		app,
		isActive = false,
		onStateChange,
		onAppChoice
	}: {
		app: TabState;
		isActive?: boolean;
		onStateChange?: (app: TabState) => void;
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
		{isActive}
		onStateChange={handleBibleStateChange}
		onToggleCanonExplorer={handleToggleCanonExplorer}
		onTranslationChange={handleTranslationChange}
	/>
{:else if app.app._tag === "About"}
	<div class="flex items-center justify-center h-full">
		<div class="text-center text-gray-300">
			<h1 class="text-3xl font-bold mb-4">About Bible Computer</h1>
			<p class="text-lg mb-6">A modern Bible reading application built with SvelteKit and Effect.</p>
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
	<ChooseAppComponent onChooseApp={(appType) => onAppChoice?.(appType)} />
{:else if app.app._tag === "Stopwatch"}
	<StopwatchComponent
		stopwatchState={app.app.stopwatchState}
		{isActive}
		onStateChange={handleStopwatchStateChange}
	/>
{/if}
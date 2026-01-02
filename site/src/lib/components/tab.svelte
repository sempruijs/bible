<script lang="ts">
	import type { App } from "$lib/app";
	import type { Translation } from "$lib/translations/translation";
	import { getDisplayName } from "$lib/book";
	import Bible from "$lib/bible.svelte";

	let { 
		app, 
		translation,
		onStateChange 
	}: { 
		app: App; 
		translation: Translation;
		onStateChange?: (app: App) => void;
	} = $props();

	function getTabTitle(app: App): string {
		switch (app._tag) {
			case "Bible":
				return `${getDisplayName(app.bibleTab.currentBook)} ${app.bibleTab.currentChapter}`;
			case "About":
				return "About";
		}
	}

	function handleBibleStateChange(book: any, chapter: any) {
		if (app._tag === "Bible" && onStateChange) {
			const updatedBibleTab = { ...app.bibleTab, currentBook: book, currentChapter: chapter };
			onStateChange({ _tag: "Bible", bibleTab: updatedBibleTab });
		}
	}

	// Export the title function so parent can access it
	export { getTabTitle };
</script>

<!-- Tab Title (exported function handles this) -->
<!-- Content rendering based on app type -->
{#if app._tag === "Bible"}
	<Bible 
		{translation}
		currentBook={app.bibleTab.currentBook}
		currentChapter={app.bibleTab.currentChapter}
		onStateChange={handleBibleStateChange}
	/>
{:else if app._tag === "About"}
	<div class="flex items-center justify-center h-full">
		<div class="text-center text-gray-300">
			<h1 class="text-3xl font-bold mb-4">About Bible Computer</h1>
			<p class="text-lg">A modern Bible reading application built with SvelteKit and Effect.</p>
		</div>
	</div>
{/if}
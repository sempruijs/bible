<script lang="ts">
	import type { BibleState, BibleSelection } from "$lib/app";
	import type { BibleBook } from "$lib/book";
	import type { Translation } from "$lib/translations/translation";
	import BibleReader from "$lib/components/bible/BibleReader.svelte";

	let {
		bibleState,
		isActive = false,
		onScrollStateChange,
		onSelectionChange,
		onToggleCanonExplorer,
		onTranslationChange,
	}: {
		bibleState: BibleState;
		isActive?: boolean;
		onScrollStateChange?: (book: BibleBook, chapter: number, verse: number | null) => void;
		onSelectionChange?: (selection: BibleSelection | null) => void;
		onToggleCanonExplorer?: () => void;
		onTranslationChange?: (translation: Translation) => void;
	} = $props();
</script>

<BibleReader
	translation={bibleState.translation}
	currentBook={bibleState.currentBook}
	currentChapter={bibleState.currentChapter}
	currentVerse={bibleState.currentVerse}
	selection={bibleState.selection}
	showCanonExplorer={bibleState.showCanonExplorer}
	{isActive}
	{onScrollStateChange}
	{onSelectionChange}
	{onToggleCanonExplorer}
	{onTranslationChange}
/>

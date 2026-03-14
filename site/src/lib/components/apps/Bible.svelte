<script lang="ts">
	import type { BibleState, BibleSelection } from "$lib/app";
	import type { BibleBook } from "$lib/book";
	import type { Translation } from "$lib/translations/translation";
	import { Option } from "effect";
	import BibleReader from "$lib/components/bible/BibleReader.svelte";

	let {
		bibleState,
		isActive = false,
		onScrollStateChange,
		onSelectionChange,
		onToggleCanonExplorer,
		onTranslationChange,
		onWikiLinkClick,
	}: {
		bibleState: BibleState;
		isActive?: boolean;
		onScrollStateChange?: (book: BibleBook, chapter: number, verse: Option.Option<number>) => void;
		onSelectionChange?: (selection: Option.Option<BibleSelection>) => void;
		onToggleCanonExplorer?: () => void;
		onTranslationChange?: (translation: Translation) => void;
		onWikiLinkClick?: (page: string) => void;
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
	{onWikiLinkClick}
/>

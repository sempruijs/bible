<script lang="ts">
	import type { TranslationContent } from "$lib/translations/translation";
	import type { BibleBook } from "$lib/book";
	import { getDisplayName, getShortName } from "$lib/book";
	import SearchResults from "$lib/components/ui/SearchResults.svelte";

	let {
		content,
		searchQuery = "",
		onChapterSelect = () => {}
	}: {
		content: TranslationContent;
		searchQuery: string;
		onChapterSelect?: (bookShort: string, chapter: number) => void;
	} = $props();

	interface BibleSearchResult {
		book: BibleBook;
		bookShort: string;
		bookDisplay: string;
		chapter: number;
		displayText: string;
	}

	// Build search items from content
	let searchItems = $derived.by(() => {
		const items: BibleSearchResult[] = [];
		for (const book of content.books) {
			const bookDisplay = getDisplayName(book.name);
			const bookShort = getShortName(book.name);
			for (const chapter of book.chapters) {
				items.push({
					book: book.name,
					bookShort,
					bookDisplay,
					chapter: chapter.chapter,
					displayText: `${bookDisplay} ${chapter.chapter}`
				});
			}
		}
		return items;
	});

	function filterFn(item: BibleSearchResult, query: string): boolean {
		// Parse query to extract book name and chapter
		const parts = query.split(/\s+/);
		let bookQuery = "";
		let chapterQuery = "";

		if (parts.length === 1) {
			const match = parts[0].match(/^(.+?)(\d+)$/);
			if (match) {
				bookQuery = match[1];
				chapterQuery = match[2];
			} else {
				bookQuery = parts[0];
			}
		} else {
			bookQuery = parts.slice(0, -1).join(" ");
			chapterQuery = parts[parts.length - 1];
		}

		// Check if book name matches
		const bookMatches =
			item.bookDisplay.toLowerCase().includes(bookQuery) ||
			item.bookShort.toLowerCase().includes(bookQuery) ||
			item.book.toLowerCase().includes(bookQuery);

		if (!bookMatches) return false;

		// If chapter query, check chapter
		if (chapterQuery) {
			const chapterStr = item.chapter.toString();
			return chapterStr.startsWith(chapterQuery);
		}

		// No chapter query, show first 5 chapters per book
		return item.chapter <= 5;
	}

	function handleSelect(item: BibleSearchResult) {
		onChapterSelect(item.bookShort, item.chapter);
	}
</script>

<SearchResults
	items={searchItems}
	{searchQuery}
	{filterFn}
	onSelect={handleSelect}
	emptyMessage="No matches found"
	emptyHint="Try 'genesis 1' or 'matt 5'"
	placeholderMessage="Search for chapters"
	placeholderHint="Type book name and chapter"
>
	{#snippet resultSnippet({ item })}
		<span class="text-blue-400 text-xs font-mono min-w-[3rem]">
			{item.bookShort}
		</span>
		<span class="text-sm ml-2">
			{item.displayText}
		</span>
	{/snippet}
</SearchResults>

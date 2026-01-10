<script lang="ts">
	import type { TranslationContent } from "$lib/translations/translation";
	import type { BibleBook } from "$lib/book";
	import { getDisplayName, getShortName } from "$lib/book";
	import { Option } from "effect";

	let {
		content,
		searchQuery = "",
		onChapterSelect = () => {}
	}: {
		content: TranslationContent;
		searchQuery: string;
		onChapterSelect?: (bookShort: string, chapter: number) => void;
	} = $props();

	let selectedIndex = $state(0);

	interface SearchResult {
		book: BibleBook;
		bookShort: string;
		bookDisplay: string;
		chapter: number;
		displayText: string;
	}

	let searchResults = $derived.by(() => {
		if (!searchQuery.trim()) return [];

		const query = searchQuery.toLowerCase().trim();
		const results: SearchResult[] = [];

		// Parse query to extract book name and chapter
		const parts = query.split(/\s+/);
		let bookQuery = "";
		let chapterQuery = "";

		if (parts.length === 1) {
			// Could be book name or "book chapter" format
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

		// Find matching books
		for (const book of content.books) {
			const bookDisplay = getDisplayName(book.name);
			const bookShort = getShortName(book.name);
			
			// Check if book name matches
			const bookMatches = 
				bookDisplay.toLowerCase().includes(bookQuery) ||
				bookShort.toLowerCase().includes(bookQuery) ||
				book.name.toLowerCase().includes(bookQuery);

			if (bookMatches) {
				if (chapterQuery) {
					// Look for specific chapter or chapters starting with the query
					const chapterNum = parseInt(chapterQuery);
					if (!isNaN(chapterNum)) {
						// Exact chapter match
						const chapter = book.chapters.find(c => c.chapter === chapterNum);
						if (chapter) {
							results.push({
								book: book.name,
								bookShort,
								bookDisplay,
								chapter: chapterNum,
								displayText: `${bookDisplay} ${chapterNum}`
							});
						}
					}
					
					// Also find chapters that start with the query digits
					if (chapterQuery.length > 0) {
						book.chapters.forEach(chapter => {
							const chapterStr = chapter.chapter.toString();
							if (chapterStr.startsWith(chapterQuery) && chapterStr !== chapterQuery) {
								results.push({
									book: book.name,
									bookShort,
									bookDisplay,
									chapter: chapter.chapter,
									displayText: `${bookDisplay} ${chapter.chapter}`
								});
							}
						});
					}
				} else {
					// No chapter specified, show first few chapters
					const chaptersToShow = Math.min(5, book.chapters.length);
					for (let i = 0; i < chaptersToShow; i++) {
						const chapter = book.chapters[i];
						results.push({
							book: book.name,
							bookShort,
							bookDisplay,
							chapter: chapter.chapter,
							displayText: `${bookDisplay} ${chapter.chapter}`
						});
					}
				}
			}
		}

		// Sort results: exact matches first, then by book order, then by chapter
		return results.sort((a, b) => {
			// Prioritize exact book name matches
			const aExact = a.bookDisplay.toLowerCase() === bookQuery;
			const bExact = b.bookDisplay.toLowerCase() === bookQuery;
			if (aExact && !bExact) return -1;
			if (!aExact && bExact) return 1;

			// Then by book name
			if (a.bookDisplay !== b.bookDisplay) {
				return a.bookDisplay.localeCompare(b.bookDisplay);
			}

			// Then by chapter number
			return a.chapter - b.chapter;
		}).slice(0, 20); // Limit to 20 results
	});

	function handleResultClick(result: SearchResult) {
		onChapterSelect(result.bookShort, result.chapter);
	}

	function handleKeyNavigation(event: KeyboardEvent) {
		if (searchResults.length === 0) return;

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			selectedIndex = Math.min(selectedIndex + 1, searchResults.length - 1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			selectedIndex = Math.max(selectedIndex - 1, 0);
		} else if (event.key === 'Enter') {
			event.preventDefault();
			if (searchResults[selectedIndex]) {
				handleResultClick(searchResults[selectedIndex]);
			}
		}
	}

	// Reset selection when search results change
	$effect(() => {
		selectedIndex = 0;
	});

	// Expose key navigation handler for parent
	$effect(() => {
		const handler = (event: KeyboardEvent) => handleKeyNavigation(event);
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', handler);
			return () => window.removeEventListener('keydown', handler);
		}
	});
</script>

<div class="p-4 h-full overflow-y-auto">
	{#if searchQuery.trim()}
		{#if searchResults.length > 0}
			<div class="space-y-1">
				<div class="text-xs text-gray-400 mb-2">
					{searchResults.length} result{searchResults.length === 1 ? '' : 's'}
				</div>
				{#each searchResults as result, index}
					<button
						onclick={() => handleResultClick(result)}
						class="w-full text-left px-3 py-2 rounded text-gray-200 hover:bg-gray-700 transition-colors flex items-center gap-2
							{index === selectedIndex ? 'bg-gray-600' : 'bg-gray-800'}"
					>
						<span class="text-blue-400 text-xs font-mono min-w-[3rem]">
							{result.bookShort}
						</span>
						<span class="text-sm">
							{result.displayText}
						</span>
					</button>
				{/each}
			</div>
		{:else}
			<div class="text-center text-gray-500 py-8">
				<div class="text-sm">No matches found</div>
				<div class="text-xs mt-1">Try "genesis 1" or "matt 5"</div>
			</div>
		{/if}
	{:else}
		<div class="text-center text-gray-500 py-8">
			<div class="text-sm">Search for chapters</div>
			<div class="text-xs mt-1">Type book name and chapter</div>
		</div>
	{/if}
</div>
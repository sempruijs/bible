<script lang="ts">
	import { Option } from "effect";
	import { VList } from "virtua/svelte";
	import type { TranslationContent, Chapter } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { protestantBookOrder } from "$lib/translations/bookOrder";
	import BibleChapterViewer from "$lib/components/bible/BibleChapterViewer.svelte";

	let {
		translationContent,
		scrollTarget,
		onStateChange = () => {},
		onVerseSelect = (_book: BibleBook, _chapter: number, _verse: number) => {},
		isActive = true
	}: {
		translationContent: Option.Option<TranslationContent>;
		scrollTarget: { book: BibleBook; chapter: number; verse: number | null; version: number };
		onStateChange?: (book: BibleBook, chapter: number, verse: number | null) => void;
		onVerseSelect?: (book: BibleBook, chapter: number, verse: number) => void;
		isActive?: boolean;
	} = $props();

	interface ChapterItem {
		book: BibleBook;
		chapterNumber: number;
		chapter: Chapter;
		showBookHeader: boolean;
	}

	// Build flat list of all chapters
	let items = $state<ChapterItem[]>([]);
	let virtualListRef: any = $state(null);

	$effect(() => {
		if (Option.isSome(translationContent)) {
			const chapterItems: ChapterItem[] = [];

			protestantBookOrder.books.forEach((book) => {
				const bookData = translationContent.value.books.find(b => b.name === book);

				if (bookData) {
					bookData.chapters.forEach((chapterData, index) => {
						chapterItems.push({
							book: book,
							chapterNumber: chapterData.chapter,
							chapter: chapterData,
							showBookHeader: index === 0
						});
					});
				}
			});

			items = chapterItems;
		}
	});

	// Track the last version and position we scrolled to
	let lastScrolledVersion = $state(0);
	let lastScrolledBook = $state<BibleBook | null>(null);
	let lastScrolledChapter = $state<number | null>(null);
	// Flag to pause scroll tracking during navigation
	let isNavigating = $state(false);

	// Scroll to chapter/verse when scrollTarget.version changes (explicit navigation)
	$effect(() => {
		const currentVersion = scrollTarget.version;

		// Only scroll if version actually incremented
		if (currentVersion > lastScrolledVersion && virtualListRef && items.length > 0) {
			// Pause scroll tracking during navigation
			isNavigating = true;
			lastScrolledVersion = currentVersion;

			// Check if we need to scroll to a different chapter
			const chapterChanged = lastScrolledBook !== scrollTarget.book || lastScrolledChapter !== scrollTarget.chapter;

			if (chapterChanged) {
				const targetIndex = items.findIndex(
					item => item.book === scrollTarget.book && item.chapterNumber === scrollTarget.chapter
				);

				if (targetIndex >= 0) {
					virtualListRef.scrollToIndex(targetIndex, { align: 'start' });
					lastScrolledBook = scrollTarget.book;
					lastScrolledChapter = scrollTarget.chapter;
				}

				// After scrolling to chapter, scroll to specific verse if specified
				setTimeout(() => {
					if (scrollTarget.verse) {
						const verseId = `verse-${scrollTarget.book}-${scrollTarget.chapter}-${scrollTarget.verse}`;
						const verseElement = document.getElementById(verseId);
						if (verseElement) {
							verseElement.scrollIntoView({ block: 'start' });
							verseElement.focus();
						}
					} else {
						const headingId = `chapter-${scrollTarget.book}-${scrollTarget.chapter}`;
						const heading = document.getElementById(headingId);
						if (heading) {
							heading.focus();
						}
					}
					setTimeout(() => { isNavigating = false; }, 100);
				}, 100);
			} else {
				// Same chapter - just scroll to the verse directly
				if (scrollTarget.verse) {
					const verseId = `verse-${scrollTarget.book}-${scrollTarget.chapter}-${scrollTarget.verse}`;
					const verseElement = document.getElementById(verseId);
					if (verseElement) {
						verseElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
						verseElement.focus();
					}
				}
				setTimeout(() => { isNavigating = false; }, 100);
			}
		}
	});

	// Force virtual list to recalculate when tab becomes active
	$effect(() => {
		if (isActive && virtualListRef) {
			// Small delay to ensure tab transition completes
			setTimeout(() => {
				if (virtualListRef && typeof virtualListRef.scrollTo === 'function') {
					// Trigger a tiny scroll to force re-render without changing visible content
					const currentOffset = virtualListRef.getScrollOffset();
					virtualListRef.scrollTo(currentOffset);
				}
			}, 50);
		}
	});

	// Track scroll position and update URL/canon explorer (but don't trigger scroll)
	let lastReportedBook = $state<BibleBook | null>(null);
	let lastReportedChapter = $state<number | null>(null);
	let lastReportedVerse = $state<number | null>(null);
	let scrollThrottleTimer: ReturnType<typeof setTimeout> | null = null;

	// Find the first visible verse in the viewport
	function findVisibleVerse(): { book: BibleBook; chapter: number; verse: number } | null {
		const verseElements = document.querySelectorAll('.verse-marker');
		for (const element of verseElements) {
			const rect = element.getBoundingClientRect();
			// Check if the verse is visible in the viewport (use a buffer zone to avoid flickering)
			if (rect.top >= -20 && rect.top < window.innerHeight / 3) {
				const id = element.id; // verse-{book}-{chapter}-{verse}
				const parts = id.replace('verse-', '').match(/^(.+)-(\d+)-(\d+)$/);
				if (parts) {
					return {
						book: parts[1] as BibleBook,
						chapter: parseInt(parts[2]),
						verse: parseInt(parts[3])
					};
				}
			}
		}
		return null;
	}

	function updateScrollState() {
		if (!virtualListRef || items.length === 0) {
			return;
		}

		try {
			const scrollOffset = virtualListRef.getScrollOffset();
			const visibleIndex = virtualListRef.findItemIndex(scrollOffset + 10);

			if (visibleIndex >= 0 && visibleIndex < items.length) {
				const visibleItem = items[visibleIndex];

				// Try to find the specific verse that's visible
				const visibleVerse = findVisibleVerse();
				const verse = visibleVerse?.verse ?? null;

				// Only update if something changed
				if (lastReportedBook !== visibleItem.book || lastReportedChapter !== visibleItem.chapterNumber || lastReportedVerse !== verse) {
					lastReportedBook = visibleItem.book;
					lastReportedChapter = visibleItem.chapterNumber;
					lastReportedVerse = verse;

					// Update URL and canon explorer (but NOT scrollTarget, so no scroll triggered)
					onStateChange(visibleItem.book, visibleItem.chapterNumber, verse);
				}
			}
		} catch (error) {
			console.error('Error detecting scroll position:', error);
		}
	}

	function handleScroll() {
		// Skip scroll tracking during navigation to avoid state conflicts
		if (isNavigating) return;

		// Throttle scroll updates to avoid flickering
		if (scrollThrottleTimer) return;

		scrollThrottleTimer = setTimeout(() => {
			scrollThrottleTimer = null;
			if (!isNavigating) {
				updateScrollState();
			}
		}, 100);
	}
</script>

{#if items.length > 0}
	<VList bind:this={virtualListRef} data={items} style="height: 100%;" onscroll={handleScroll}>
		{#snippet children(item)}
			{@const isCurrentChapter = item.book === scrollTarget.book && item.chapterNumber === scrollTarget.chapter}
			<BibleChapterViewer
				chapter={item.chapter}
				book={item.book}
				chapterNumber={item.chapterNumber}
				showBookHeader={item.showBookHeader}
				selectedVerse={isCurrentChapter ? scrollTarget.verse : null}
				onVerseClick={(verse) => onVerseSelect(item.book, item.chapterNumber, verse)}
			/>
		{/snippet}
	</VList>
{:else}
	<div class="flex items-center justify-center h-full">
		<div class="text-center text-gray-400">
			<p>Loading Bible...</p>
		</div>
	</div>
{/if}

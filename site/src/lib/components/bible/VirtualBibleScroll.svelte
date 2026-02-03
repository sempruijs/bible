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
		isActive = true
	}: {
		translationContent: Option.Option<TranslationContent>;
		scrollTarget: { book: BibleBook; chapter: number; version: number };
		onStateChange?: (book: BibleBook, chapter: number) => void;
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

	// Track the last version we scrolled to
	let lastScrolledVersion = $state(0);

	// Scroll to chapter ONLY when scrollTarget.version changes (explicit navigation)
	$effect(() => {
		const currentVersion = scrollTarget.version;

		// Only scroll if version actually incremented
		if (currentVersion > lastScrolledVersion && virtualListRef && items.length > 0) {
			const targetIndex = items.findIndex(
				item => item.book === scrollTarget.book && item.chapterNumber === scrollTarget.chapter
			);

			if (targetIndex >= 0) {
				virtualListRef.scrollToIndex(targetIndex, { align: 'start' });
				lastScrolledVersion = currentVersion;

				// Focus the chapter heading for screen reader users after scroll completes
				setTimeout(() => {
					const headingId = `chapter-${scrollTarget.book}-${scrollTarget.chapter}`;
					const heading = document.getElementById(headingId);
					if (heading) {
						heading.focus();
					}
				}, 100);
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

	function handleScrollEnd() {
		if (!virtualListRef || items.length === 0) {
			return;
		}

		try {
			const scrollOffset = virtualListRef.getScrollOffset();
			const visibleIndex = virtualListRef.findItemIndex(scrollOffset + 10);

			if (visibleIndex >= 0 && visibleIndex < items.length) {
				const visibleItem = items[visibleIndex];

				// Only update if we've scrolled to a different chapter
				if (lastReportedBook !== visibleItem.book || lastReportedChapter !== visibleItem.chapterNumber) {
					lastReportedBook = visibleItem.book;
					lastReportedChapter = visibleItem.chapterNumber;

					// Update URL and canon explorer (but NOT scrollTarget, so no scroll triggered)
					onStateChange(visibleItem.book, visibleItem.chapterNumber);
				}
			}
		} catch (error) {
			console.error('Error detecting scroll position:', error);
		}
	}
</script>

{#if items.length > 0}
	<VList bind:this={virtualListRef} data={items} style="height: 100%;" onscrollend={handleScrollEnd}>
		{#snippet children(item)}
			<BibleChapterViewer
				chapter={item.chapter}
				book={item.book}
				chapterNumber={item.chapterNumber}
				showBookHeader={item.showBookHeader}
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

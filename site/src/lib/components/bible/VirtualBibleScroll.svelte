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
		onStateChange = () => {}
	}: {
		translationContent: Option.Option<TranslationContent>;
		scrollTarget: { book: BibleBook; chapter: number; version: number };
		onStateChange?: (book: BibleBook, chapter: number) => void;
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
			console.log('Building chapter items...');
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

			console.log('Built', chapterItems.length, 'chapters');
			items = chapterItems;
		}
	});

	// Scroll to chapter ONLY when scrollTarget.version changes (explicit navigation)
	$effect(() => {
		// This effect only triggers when scrollTarget.version increments (canon explorer clicks)
		// It does NOT trigger when state updates from scroll events
		if (virtualListRef && items.length > 0 && scrollTarget.version > 0) {
			const targetIndex = items.findIndex(
				item => item.book === scrollTarget.book && item.chapterNumber === scrollTarget.chapter
			);

			if (targetIndex >= 0) {
				console.log(`🎯 Navigating to ${scrollTarget.book} ${scrollTarget.chapter} at index ${targetIndex}`);
				virtualListRef.scrollToIndex(targetIndex, { align: 'start' });
			}
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
					console.log(`📜 Scrolled to: ${visibleItem.book} ${visibleItem.chapterNumber}`);
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
		{#snippet children(item, index)}
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

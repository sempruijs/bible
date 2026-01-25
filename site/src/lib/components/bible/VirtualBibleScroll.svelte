<script lang="ts">
	import { Option } from "effect";
	import { VList } from "virtua/svelte";
	import type { TranslationContent, Chapter } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { protestantBookOrder } from "$lib/translations/bookOrder";
	import BibleChapterViewer from "$lib/components/bible/BibleChapterViewer.svelte";

	let {
		translationContent,
		initialBook,
		initialChapter,
		onStateChange = () => {}
	}: {
		translationContent: Option.Option<TranslationContent>;
		initialBook: BibleBook;
		initialChapter: number;
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
</script>

{#if items.length > 0}
	<VList data={items} style="height: 100%;">
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

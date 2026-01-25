<script lang="ts">
	import type { Chapter } from "$lib/translations/translation";
	import { BibleBook, getDisplayName } from "$lib/book";

	let {
		chapter,
		book,
		chapterNumber,
		showBookHeader = false
	}: {
		chapter: Chapter;
		book: BibleBook;
		chapterNumber: number;
		showBookHeader: boolean;
	} = $props();
</script>

<div class="w-full">
	<div class="p-8">
		<div class="max-w-2xl mx-auto">
			<!-- Book header (when crossing book boundaries) -->
			{#if showBookHeader}
				<header class="mb-6 text-center">
					<h1 class="text-4xl font-bold text-gray-100 uppercase tracking-wide">{getDisplayName(book)}</h1>
					<div class="h-1 w-32 bg-blue-500 rounded mx-auto mt-3"></div>
				</header>
			{/if}

			<!-- Chapter number header -->
			<div class="text-center mb-8">
				<h2 class="text-xl text-gray-400 font-light">— {chapterNumber} —</h2>
			</div>

			<!-- Verses as continuous paragraph -->
			<div class="text-gray-200 leading-relaxed text-lg">
				{#each chapter.verses as verse}
					<sup class="text-blue-400 font-medium text-xs mr-1">{verse.verse}</sup><span class="text-gray-200">{verse.text} </span>
				{/each}
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { Option } from "effect";
	import { bibleData, books, isLoading, error, getBook, getChapter } from "$lib/stores/bible";
	
	let selectedBook = $state("");
	let selectedChapter = $state(1);
	
	const book = $derived(selectedBook ? getBook(selectedBook) : null);
	const chapter = $derived(selectedBook ? getChapter(selectedBook, selectedChapter) : null);
	const bookValue = $derived(book ? Option.getOrNull($book) : null);
	const chapterValue = $derived(chapter ? Option.getOrNull($chapter) : null);
</script>

<div class="p-4">
	{#if $isLoading}
		<div class="text-center">Loading Bible data...</div>
	{:else if Option.isSome($error)}
		<div class="text-red-400">Error: {$error.value}</div>
	{:else if Option.isSome($bibleData)}
		<div class="mb-4">
			<label class="block mb-2">Select Book:</label>
			<select bind:value={selectedBook} class="bg-gray-700 text-white p-2 rounded">
				<option value="">-- Select a book --</option>
				{#each $books as book}
					<option value={book.name}>{book.name}</option>
				{/each}
			</select>
		</div>
		
		{#if book && selectedBook && bookValue}
			{#if bookValue}
				<div class="mb-4">
					<label class="block mb-2">Select Chapter:</label>
					<select bind:value={selectedChapter} class="bg-gray-700 text-white p-2 rounded">
						{#each bookValue.chapters as chap}
							<option value={chap.chapter}>Chapter {chap.chapter}</option>
						{/each}
					</select>
				</div>
			{/if}
		{/if}
		
		{#if chapter && chapterValue}
			{#if chapterValue}
				<div class="mt-4">
					<h2 class="text-2xl mb-4">{chapterValue.name}</h2>
					<div class="space-y-2">
						{#each chapterValue.verses as verse}
							<p class="leading-relaxed">
								<span class="text-blue-300 mr-2">{verse.verse}</span>
								{verse.text}
							</p>
						{/each}
					</div>
				</div>
			{/if}
		{/if}
	{/if}
</div>
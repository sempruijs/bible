<script lang="ts">
  import { Option } from "effect";
  import { error } from '@sveltejs/kit';
  import type { Bible, Book, Chapter } from '$lib/types';
  import bibleData from '$lib/translations/stv.json';

  export let data: {
    book: string;
    chapter: string;
  };

  const bible: Bible = bibleData;

  const selectedBookName = data.book.toLowerCase();
  const chapterNumber = Number(data.chapter);

  const selectedBook: Option.Option<Book> = Option.fromNullable(
    bible.books.find((b) => b.name.toLowerCase() === selectedBookName)
  );

  const selectedChapter: Option.Option<Chapter> = Option.flatMap(selectedBook, (b) =>
    Option.fromNullable(b.chapters.find((c) => c.chapter === chapterNumber))
  );
</script>

<main class="p-6 max-w-2xl mx-auto">
  {#if Option.isSome(selectedBook) && Option.isSome(selectedChapter)}
    <h1 class="text-3xl font-bold mb-4">
      {selectedBook.value.name} {selectedChapter.value.chapter}
    </h1>

    {#each selectedChapter.value.verses as verse}
      <p class="mb-2">
        <strong>{verse.name}</strong>: {verse.text}
      </p>
    {/each}
  {:else}
    <h1 class="text-red-600 text-xl font-bold">
      {selectedBookName} chapter {data.chapter} was not found
    </h1>
  {/if}
</main>

<script lang="ts">
  import { Option } from "effect";
  import type { Bible, Chapter, Book } from "$lib/types";
  import { getSafe, findSafe } from "$lib/getSave";
  import { chapterToPath } from "$lib/types";
  import { goto } from "$app/navigation";

  const { currentChapter, bible } = $props<{
    currentChapter: Chapter;
    bible: Bible;
  }>();

  const allChapters = bible.books.flatMap((book: Book) => book.chapters);

  let next = $state<Option.Option<Chapter>>(Option.none());
  let previous = $state<Option.Option<Chapter>>(Option.none());

  $effect(() => {
    const index = findSafe(allChapters, currentChapter);
    next = Option.flatMap(index, (i) => getSafe(allChapters, i + 1));
    previous = Option.flatMap(index, (i) => getSafe(allChapters, i - 1));
  });
</script>

{#if Option.isSome(previous)}
  <button
    onclick={() => {
      const path = chapterToPath(previous.value);
      goto(path);
    }}
  >
    previous
  </button>
{/if}

{#if Option.isSome(next)}
  <button
    onclick={() => {
      const path = chapterToPath(next.value);
      goto(path);
    }}
  >
    next
  </button>
{/if}

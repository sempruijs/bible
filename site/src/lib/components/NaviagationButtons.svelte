<script lang="ts">
  import { Option } from "effect";
  import { onMount } from "svelte";
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

  $effect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
        return;
      }

      if (e.key === "ArrowRight" && Option.isSome(next)) {
        const path = chapterToPath(next.value);
        goto(path);
      } else if (e.key === "ArrowLeft" && Option.isSome(previous)) {
        const path = chapterToPath(previous.value);
        goto(path);
      }
  	}

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
	});
</script>

<div class="flex justify-center mb-20">
  {#if Option.isSome(previous)}
    <button
      class="m-1 bg-gray-400 w-15 h-15 p-3 rounded-full text-white"
      onclick={() => {
        const path = chapterToPath(previous.value);
        goto(path);
      }}
      aria-label="previous"
    >
      ←
    </button>
  {/if}

  {#if Option.isSome(next)}
    <button
      class="m-1 bg-gray-400 w-15 h-15 p-3 rounded-full text-white"
      onclick={() => {
        const path = chapterToPath(next.value);
        goto(path);
      }}
      aria-label="next"
    >
      →
    </button>
  {/if}
</div>

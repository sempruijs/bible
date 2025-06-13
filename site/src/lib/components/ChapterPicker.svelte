<script lang="ts">
  import { Option } from "effect";
  import { onMount } from "svelte";
  import { type Bible, type Chapter, type Book } from "$lib/types";
  import { goto } from "$app/navigation";

  const { bible } = $props<{ bible: Bible }>();

  let isOpen = $state(false);
  let query = $state("");
  let inputRef: HTMLInputElement | null = null;

  const allChapters: Chapter[] = bible.books.flatMap((book: Book) => book.chapters);

  const handleSubmit = (book: string, chapter: number) => {
    goto(`/${book}/${chapter}`, { invalidateAll: true });
    query = "";
    isOpen = false;
  }

  const head = <T>(xs: T[]) => xs.length === 0 ? Option.none() : Option.some(xs[0])

  const searchChapter = (chapters: Chapter[], q: string) => {
  const query = q.toLowerCase().trim();
    return chapters
      .filter((c) => c.name.toLowerCase().includes(query))
      .slice(0, 7); // limit to 7 results
  };

  onMount(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen = true;
        setTimeout(() => inputRef?.focus(), 0);
      } else if (e.key === "Escape") {
        isOpen = false;
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  const filteredBooks = $derived(() =>
    bible.books.filter((b) =>
      b.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  function selectBook(name: string) {
    isOpen = false;
    query = "";
    goto(`/${name.toLowerCase()}/1`);
  }

  function removeTrailingNumber(input: string): string {
    return input.replace(/\s\d+$/, "");
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
      <form on:submit|preventDefault={() => {
            const chapter: Option.Option<Chapter> = head(searchChapter(allChapters, query));
            const name = removeTrailingNumber(chapter.value.name);
            if (Option.isSome(chapter)) {
              handleSubmit(name, chapter.value.chapter)
            } else {
              console.error("could not find chapter");
            }
          }
        }>
        <input
          bind:this={inputRef}
          type="text"
          bind:value={query}
          placeholder="Type a book name..."
          class="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      {#each searchChapter(allChapters, query) as book}
        <p>{book.name}</p>
      {/each}
    </div>
  </div>
{/if}

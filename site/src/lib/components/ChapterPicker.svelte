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
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
      <input
        bind:this={inputRef}
        type="text"
        bind:value={query}
        placeholder="Type a book name..."
        class="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {#each searchChapter(allChapters, query) as book}
        <p>{book.name}</p>
      {/each}
    </div>
  </div>
{/if}

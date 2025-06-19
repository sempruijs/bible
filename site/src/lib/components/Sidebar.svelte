<script lang="ts">
  import { fly, slide } from 'svelte/transition';
  import { goto } from "$app/navigation";
  import { chapterToPath, type Bible } from "$lib/types";
  import { tick } from 'svelte';

  const { bible, visible, selectedBookName, selectedChapterNumber } = $props<{
    bible: Bible;
    visible: boolean;
    selectedBookName: string;
    selectedChapterNumber: number;
  }>();

  let openBook = $state(selectedBookName);
  let previousSelectedBookName = $state(selectedBookName);
  let selectedChapterEl: HTMLButtonElement | null = null;
  let lastScrollKey = "";

  $effect(() => {
    if (selectedBookName.toLowerCase() !== previousSelectedBookName.toLowerCase()) {
      openBook = selectedBookName;
      previousSelectedBookName = selectedBookName;
    }
  });

  $effect(() => {
    const currentKey = `${selectedBookName}-${selectedChapterNumber}`;

    if (currentKey !== lastScrollKey) {
      lastScrollKey = currentKey;

      (async () => {
        await tick(); // wait for DOM update
        await new Promise((r) => setTimeout(r, 100)); 
        selectedChapterEl?.scrollIntoView({ behavior: "smooth", block: "center" });
      })();
    }
  });

  function toggleBook(name: string) {
    const isSame = openBook.toLowerCase() === name.toLowerCase();
    openBook = isSame ? '' : name;
  }

  function isSelected(bookName: string, chapterNumber: number): boolean {
    return (
      bookName.toLowerCase() === selectedBookName.toLowerCase() &&
      chapterNumber === selectedChapterNumber
    );
  }
</script>

{#if visible}
<aside
  class="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto h-screen"
  aria-label="sidebar"
  transition:fly={{ x: -300, duration: 250 }}
>
  <ul class="space-y-2">
    {#each bible.books as book}
      <li>
        <button
          onclick={() => toggleBook(book.name)}
          class="w-full text-left block px-2 py-1 rounded hover:bg-gray-200 transition text-gray-700 font-medium"
        >
          {book.name}
        </button>

        {#if openBook.toLowerCase() === book.name.toLowerCase()}
          <div
            transition:slide
            class="pl-4 mt-2 grid grid-cols-5 gap-2 text-sm text-gray-600"
          >
            {#each book.chapters as chapter}
              <button
                bind:this={selectedChapterEl}
                class={`rounded px-2 py-1 transition ${
                  isSelected(book.name, chapter.chapter)
                    ? 'bg-blue-500 text-white'
                    : 'bg-white hover:bg-gray-300'
                }`}
                aria-label={isSelected(book.name, chapter.chapter) ? `${chapter.chapter}, selected` : `${chapter.chapter}`}
                onclick={() => goto(chapterToPath(chapter))}
              >
                {chapter.chapter}
              </button>
            {/each}
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</aside>
{/if}

<script lang="ts">
  import { Option } from "effect";
  import { fly, slide } from 'svelte/transition';
  import { goto } from "$app/navigation";
  import { chapterToPath, type Bible } from "$lib/types";

  const { bible, visible } = $props<{
    bible: Bible;
    visible: boolean;
  }>();

  // Track the currently opened book name
  let openBook: Option.Option<string> = $state(Option.none());

  function toggleBook(name: string) {
    openBook = Option.some(name);
  }
</script>

{#if visible}
<aside
  class="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto h-screen"
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

        {#if Option.isSome(openBook)}
          {#if openBook.value === book.name}
            <div
              transition:slide
              class="pl-4 mt-2 grid grid-cols-5 gap-2 text-sm text-gray-600"
            >
              {#each book.chapters as chapter}
                <button
                  class="bg-white hover:bg-gray-300 rounded px-2 py-1 transition"
                  onclick={() => goto(chapterToPath(chapter))}
                >
                  {chapter.chapter}
                </button>
              {/each}
            </div>
          {/if}
        {/if}
      </li>
    {/each}
  </ul>
</aside>
{/if}

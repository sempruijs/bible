<script lang="ts">
  import { Option } from "effect";
  import { goto } from "$app/navigation";
  import { type Bible } from "$lib/types";

  const { bible } = $props<{
    bible: Bible;
  }>();

  // Track the currently opened book name
  let openBook: Option.Option<string> = $state(Option.none());

  function toggleBook(name: string) {
    openBook = Option.some(name);
  }
</script>

<aside class="w-64 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto h-screen">
  <h2 class="text-xl font-bold mb-4 text-gray-800">Bijbel</h2>

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
            <ul class="pl-4 mt-1 space-y-1 text-sm text-gray-600">
              {#each book.chapters as chapter}
                <li>
                  <button onclick={() => goto(`/${book.name.toLowerCase()}/${chapter.chapter}`)}>
                    {chapter.chapter}
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        {/if}
      </li>
    {/each}
  </ul>
</aside>

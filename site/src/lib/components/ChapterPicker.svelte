<script lang="ts">
  import { Option } from "effect";
  import { onMount } from "svelte";
  import { type Bible, type Chapter, type Book, chapterToPath } from "$lib/types";
  import { goto } from "$app/navigation";

  const { bible } = $props<{ bible: Bible }>();

  let isOpen = $state(false);
  let query = $state("");
  let inputRef: HTMLInputElement | null = null;

  const allChapters: Chapter[] = bible.books.flatMap((book: Book) => book.chapters);

  const handleSubmit = (c: Chapter) => {
    const path = chapterToPath(c);
    goto(path);
    query = "";
    isOpen = false;
  };

  const head = <T>(xs: T[]) => xs.length === 0 ? Option.none() : Option.some(xs[0])

  const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9]/g, ' ')      // spaces only
    .split(' ')
    .filter(Boolean);

const searchChapter = (chapters: Chapter[], q: string): Chapter[] => {
  const queryParts = normalize(q);
  const queryWords = queryParts.filter(part => isNaN(+part));
  const queryNums = queryParts.filter(part => !isNaN(+part));

  return chapters
    .map((chapter) => {
      const name = chapter.name.toLowerCase();
      const chapterNum = chapter.chapter.toString();

      let nameScore = 0;
      let chapterScore = 0;

      // Book name fuzzy match
      for (const word of queryWords) {
        if (name === word) nameScore += 5;
        else if (name.startsWith(word)) nameScore += 3;
        else if (name.includes(word)) nameScore += 1;
      }

      // Chapter number match
      for (const num of queryNums) {
        if (chapterNum === num) chapterScore += 3;
        else if (chapterNum.startsWith(num)) chapterScore += 1;
      }

      const totalScore = nameScore > 0 ? nameScore + chapterScore : 0;

      return { chapter, score: totalScore };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 7)
    .map(({ chapter }) => chapter);
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
      <form onsubmit={(e) => {
            e.preventDefault();
            const chapter: Option.Option<Chapter> = head(searchChapter(allChapters, query));
            if (Option.isSome(chapter)) {
              handleSubmit(chapter.value);
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
      {#each searchChapter(allChapters, query) as chapter}
        <div>
          <button
            class="bg-white hover:bg-gray-300 rounded px-2 py-1 transition"
            onclick={() => {
              const name = removeTrailingNumber(chapter.name);
              handleSubmit(name, chapter.chapter)
            }}
          >
            {chapter.name}
          </button>
        </div>
      {/each}
    </div>
  </div>
{/if}

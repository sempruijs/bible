<script lang="ts">
  import { type Chapter } from "$lib/types";

  const { chapter } = $props<{
    chapter: Chapter;
  }>();
</script>

<!-- One continuous paragraph of text -->
<div class="grid place-items-center min-h-screen px-4 text-center">
<h1 class="text-3xl font-bold mb-6">{chapter.name}</h1>
<p class="mb-40 text-lg leading-relaxed max-w-prose mx-auto ml-20 mr-20">
  {#each chapter.verses as verse, i}
    <span class="inline">
      <span class="text-gray-500 text-sm align-super pr-1">
        {verse.verse}
      </span>
      {verse.text}{i < chapter.verses.length - 1 ? ' ' : ''}
    </span>
  {/each}
</p>
</div>

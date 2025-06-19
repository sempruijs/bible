<script lang="ts">
  import { type Chapter } from "$lib/types";

  const { chapter } = $props<{
    chapter: Chapter;
  }>();
</script>


<!-- One continuous paragraph of text -->
<div class="grid place-items-center px-4 text-center">
<h1 class="text-3xl font-bold mb-6">{chapter.name}</h1>
<p class="mb-10 text-lg leading-relaxed max-w-prose mx-auto text-left ml-20 mr-20">
  {#each chapter.verses as verse, i}
    <span class="inline">
      {#if verse.verse != 1}
      <span class="text-gray-500 text-sm align-super -pr-1 pl-1">
        {verse.verse}
      </span>
      {/if}
      {verse.text}{i < chapter.verses.length - 1 ? ' ' : ''}
    </span>
  {/each}
</p>
</div>

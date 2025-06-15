<script lang="ts">
  import { type Chapter } from "$lib/types";

  const { chapter } = $props<{
    chapter: Chapter;
  }>();
</script>

<h1 class="text-3xl font-bold mb-6">{chapter.name}</h1>

<!-- One continuous paragraph of text -->
<p class="mb-40 text-xl leading-relaxed">
  {#each chapter.verses as verse, i}
    <span class="inline">
      {verse.text}{i < chapter.verses.length - 1 ? ' ' : ''}
    </span>
  {/each}
</p>

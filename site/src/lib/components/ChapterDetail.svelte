<script lang="ts">
  import { type Chapter } from "$lib/types";

  const { chapter } = $props<{
    chapter: Chapter;
  }>();
</script>
<h1>{chapter.name}</h1>
<div class="mb-40">
{#each chapter.verses as verse}
  <p class="mb-2">
    {verse.verse}: {verse.text}
  </p>
{/each}
</div>

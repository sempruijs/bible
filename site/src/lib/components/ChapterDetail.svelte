<script lang="ts">
  import { type Chapter } from "$lib/types";

  const { chapter } = $props<{
    chapter: Chapter;
  }>();
</script>
<h1>{chapter.name}</h1>
{#each chapter.verses as verse}
  <p class="mb-2">
    {verse.verse}: {verse.text}
  </p>
{/each}

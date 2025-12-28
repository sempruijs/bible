<script lang="ts">
    import { getChapter } from "$lib/translations/translation";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<h2>{data.chapter.name}</h2>
{#each data.chapter.verses as verse}
    <div>
        <span>{verse.verse}</span>
        <span>{verse.text}</span>
    </div>
{/each}

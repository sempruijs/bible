<script lang="ts">
    import type { Translation } from "$lib/translations/translation";

    export let data: { bibleData: Translation };
</script>

<h1>Bible Computer</h1>

<ul>
    {#each data.bibleData.books as book}
        <li>{book.name}</li>
        {#each book.chapters as chapter}
            <a href="/{book.name}/{chapter.chapter}">{chapter.chapter}</a>
        {/each}
    {/each}
</ul>

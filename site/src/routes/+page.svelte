<script lang="ts">
    import type { Translation } from "$lib/translations/translation";

    export let data: { bibleData: Translation };
</script>

<h1>Bible Computer</h1>

<p>{data.bibleData.books[0].chapters[0].verses[0].text}</p>

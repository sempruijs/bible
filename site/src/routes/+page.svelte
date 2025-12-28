<script lang="ts">
    import { Effect, Option } from "effect";
    import { loadBibleData } from "$lib/translations/loadBibleData";
    import type { Translation } from "$lib/translations/translation";
    import { onMount } from "svelte";

    let bibleData: Option.Option<Translation> = Option.none();

    onMount(() => {
        Effect.runPromise(loadBibleData()).then(
            (data) => {
                console.log("Bible data loaded:", data);
                bibleData = Option.some(data);
            },
            (error) => console.error("Failed to load Bible data:", error),
        );
    });
</script>

<h1>Bible Computer</h1>

{#if Option.isSome(bibleData)}
    <p>{bibleData.value.books[0].chapters[0].verses[0].text}</p>
{:else}
    <p>loading...</p>
{/if}

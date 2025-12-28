<script lang="ts">
    import { Effect, Option } from "effect";
    import { loadBibleData } from "$lib/translations/loadBibleData";
    import type { TranslationV0 } from "$lib/translations/v0";
    import { onMount } from "svelte";

    let bibleData: Option.Option<TranslationV0> = Option.none();

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

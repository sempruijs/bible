<script lang="ts">
    import { Effect } from "effect";
    import { loadBibleData } from "$lib/translations/loadBibleData";
    import { onMount } from "svelte";

    onMount(() => {
        Effect.runPromise(loadBibleData()).then(
            (data) => console.log("Bible data loaded:", data),
            (error) => console.error("Failed to load Bible data:", error),
        );
    });
</script>

<h1>Bible Computer</h1>

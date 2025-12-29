<script lang="ts">
    import type { BookOrder } from "$lib/translations/bookOrder";
    import {
        protestantBookOrder,
        jewishBookOrder,
    } from "$lib/translations/bookOrder";
    import type { Translation } from "$lib/translations/translation";
    let { translation }: { translation: Translation } = $props();

    let bookOrder = $state<BookOrder>(protestantBookOrder);

    let orderedBooks = $derived(
        bookOrder
            .map((bookName) =>
                translation?.books?.find((book) => book.name === bookName),
            )
            .filter((book) => book !== undefined),
    );
</script>

<div class="mb-4 space-x-2">
    <button onclick={() => (bookOrder = protestantBookOrder)}>
        Greek Order
    </button>
    <button
        onclick={() => (bookOrder = jewishBookOrder)}
        class="px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors"
    >
        Tenach Order
    </button>
</div>
<ul>
    {#each orderedBooks as book}
        <li>{book.name}</li>
        {#each book.chapters as chapter}
            <a href="/{book.name}/{chapter.chapter}">{chapter.chapter}</a>
        {/each}
    {/each}
</ul>

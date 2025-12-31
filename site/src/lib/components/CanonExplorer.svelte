<script lang="ts">
    import { BibleBook, getDisplayName, getShortName } from "$lib/book";
    import type { BookOrder } from "$lib/translations/bookOrder";
    import { bookOrders } from "$lib/translations/bookOrder";
    import type { Translation } from "$lib/translations/translation";
    import { Option } from "effect";
    let { translation }: { translation: Translation } = $props();

    let bookOrder = $state<BookOrder>(bookOrders[0]);
    let selectedBook = $state<Option.Option<BibleBook>>(Option.none());

    function setSelected(book: BibleBook) {
        const result =
            Option.isSome(selectedBook) && selectedBook.value._tag === book._tag
                ? Option.none()
                : Option.some(book);
        selectedBook = result;
    }

    let orderedBooks = $derived(
        bookOrder.books
            .map((bookName) =>
                translation?.books?.find((book) => book.name._tag === bookName._tag),
            )
            .filter((book) => book !== undefined),
    );
</script>

<div class="mb-4 space-x-2">
    {#each bookOrders as order}
        <button
            onclick={() => (bookOrder = order)}
            class="px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors"
        >
            {order.name}
        </button>
    {/each}
</div>
<ul>
    {#each orderedBooks as book}
        <li>
            <button onclick={() => setSelected(book.name)}>
                {getDisplayName(book.name)}
            </button>
        </li>
        {#if Option.isSome(selectedBook) && selectedBook.value._tag === book.name._tag}
            {#each book.chapters as chapter}
                <a href="/{getShortName(book.name)}/{chapter.chapter}">{chapter.chapter}</a>
            {/each}
        {/if}
    {/each}
</ul>

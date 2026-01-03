<script lang="ts">
    import { BibleBook, getDisplayName, getShortName } from "$lib/book";
    import type { BookOrder } from "$lib/translations/bookOrder";
    import { bookOrders } from "$lib/translations/bookOrder";
    import type { Translation } from "$lib/translations/translation";
    import { Option } from "effect";
    let { translation, currentPath }: { translation: Translation; currentPath: string } = $props();

    let bookOrder = $state<BookOrder>(bookOrders[0]);
    let selectedBook = $state<Option.Option<BibleBook>>(Option.none());

    // Parse current path to get book and chapter
    const parseCurrentPath = (path: string) => {
        const parts = path.split('/').filter(Boolean);
        if (parts.length >= 2) {
            return {
                book: parts[0],
                chapter: parseInt(parts[1])
            };
        }
        return null;
    };

    let currentChapter = $derived(parseCurrentPath(currentPath));

    // Auto-expand the book that contains the current chapter only when no book is manually selected
    $effect(() => {
        if (currentChapter && Option.isNone(selectedBook)) {
            const currentBook = orderedBooks.find(book => getShortName(book.name) === currentChapter.book);
            if (currentBook) {
                selectedBook = Option.some(currentBook.name);
            }
        }
    });

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

<div class="mb-6">
    <h2 class="text-xl font-semibold mb-3 text-gray-800">Book Order</h2>
    <div class="flex gap-2 flex-wrap">
        {#each bookOrders as order}
            <button
                onclick={() => (bookOrder = order)}
                class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {
                    bookOrder.name === order.name 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }"
            >
                {order.name}
            </button>
        {/each}
    </div>
</div>

<div class="space-y-4">
    {#each orderedBooks as book}
        <div class="border border-gray-600 rounded-lg overflow-hidden bg-gray-800">
            <button 
                onclick={() => setSelected(book.name)}
                class="w-full px-4 py-3 text-left font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors flex justify-between items-center"
            >
                <span>{getDisplayName(book.name)}</span>
                <span class="text-sm text-gray-400">
                    {Option.isSome(selectedBook) && selectedBook.value._tag === book.name._tag ? '−' : '+'}
                </span>
            </button>
            
            {#if Option.isSome(selectedBook) && selectedBook.value._tag === book.name._tag}
                <div class="p-4 bg-gray-900 border-t border-gray-700">
                    <div class="flex flex-col gap-3 max-w-fit">
                        {#each Array.from({ length: Math.ceil(book.chapters.length / 5) }, (_, rowIndex) => book.chapters.slice(rowIndex * 5, (rowIndex + 1) * 5)) as chapterRow}
                            <div class="flex gap-3">
                                {#each chapterRow as chapter}
                                    {@const isCurrentChapter = currentChapter && 
                                        getShortName(book.name) === currentChapter.book && 
                                        chapter.chapter === currentChapter.chapter}
                                    <a 
                                        href="/{getShortName(book.name)}/{chapter.chapter}"
                                        class="flex items-center justify-center w-12 h-12 font-medium rounded border transition-colors {
                                            isCurrentChapter 
                                                ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-700' 
                                                : 'bg-gray-800 hover:bg-gray-700 text-gray-200 border-gray-600 hover:border-gray-500'
                                        }"
                                    >
                                        {chapter.chapter}
                                    </a>
                                {/each}
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</div>

<script lang="ts">
    import { BibleBook, getDisplayName, getShortName } from "$lib/book";
    import { protestantBookOrder } from "$lib/translations/bookOrder";
    import type { Translation, TranslationContent } from "$lib/translations/translation";
    import { load } from "$lib/translations/storage";
    import { Effect, Option } from "effect";
    let { translation, currentPath }: { translation: Translation; currentPath: string } = $props();

    // Use Greek order as default (keeping the type system for potential future use)
    const bookOrder = protestantBookOrder;
    let selectedBook = $state<Option.Option<BibleBook>>(Option.none());
    let content = $state<TranslationContent | null>(null);
    let isLoading = $state(false);

    // Load translation content
    $effect(() => {
        if (translation.content._tag === "Local") {
            content = translation.content.data;
            isLoading = false;
        } else {
            isLoading = true;
            Effect.runPromise(load(translation.content))
                .then((loadedContent) => {
                    content = loadedContent;
                    isLoading = false;
                })
                .catch((error) => {
                    console.error("Failed to load translation:", error);
                    isLoading = false;
                });
        }
    });

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
            Option.isSome(selectedBook) && selectedBook.value === book
                ? Option.none()
                : Option.some(book);
        selectedBook = result;
    }

    let orderedBooks = $derived(
        content ? bookOrder.books
            .map((bookName) =>
                content.books.find((book) => book.name === bookName),
            )
            .filter((book) => book !== undefined) : []
    );
</script>

<div class="space-y-4">
    {#if isLoading}
        <div class="flex items-center justify-center py-8 text-gray-400">
            <span>Loading...</span>
        </div>
    {:else}
    {#each orderedBooks as book}
        <div class="border border-gray-600 rounded-lg overflow-hidden bg-gray-800">
            <button 
                onclick={() => setSelected(book.name)}
                class="w-full px-4 py-3 text-left font-medium text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors flex justify-between items-center"
            >
                <span>{getDisplayName(book.name)}</span>
                <span class="text-sm text-gray-400">
                    {Option.isSome(selectedBook) && selectedBook.value === book.name ? '−' : '+'}
                </span>
            </button>
            
            {#if Option.isSome(selectedBook) && selectedBook.value === book.name}
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
    {/if}
</div>

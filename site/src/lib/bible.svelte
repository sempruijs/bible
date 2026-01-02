<script lang="ts">
    import type { Translation } from "$lib/translations/translation";
    import { getChapter } from "$lib/translations/translation";
    import { BibleBook, getShortName, toBibleBook } from "$lib/book";
    import { Option, Effect } from "effect";
    import BibleCanonExplorer from "$lib/components/BibleCanonExplorer.svelte";
    import BibleChapterViewer from "$lib/components/BibleChapterViewer.svelte";

    let {
        translation,
        currentBook = BibleBook.John,
        currentChapter = 1,
        showCanonExplorer = true,
        onStateChange = () => {},
        onToggleCanonExplorer = () => {},
    }: {
        translation: Translation;
        currentBook?: BibleBook;
        currentChapter?: number;
        showCanonExplorer?: boolean;
        onStateChange?: (book: BibleBook, chapter: number) => void;
        onToggleCanonExplorer?: () => void;
    } = $props();

    // Internal state that gets updated by user interactions
    let internalBook = $state<BibleBook>(currentBook);
    let internalChapter = $state<number>(currentChapter);

    // Update internal state when props change (tab switch)
    $effect(() => {
        internalBook = currentBook;
        internalChapter = currentChapter;
    });

    let currentChapterData = $state<Option.Option<any>>(Option.none());

    // Update chapter data when internal state changes
    $effect(() => {
        if (internalBook && internalChapter && translation) {
            Effect.runPromise(getChapter(translation, internalBook, internalChapter))
                .then((chapterOption) => {
                    currentChapterData = chapterOption;
                })
                .catch(() => {
                    currentChapterData = Option.none();
                });
        } else {
            currentChapterData = Option.none();
        }
    });

    function selectChapter(bookShort: string, chapter: number) {
        const bookOption = toBibleBook(bookShort);
        if (Option.isSome(bookOption)) {
            internalBook = bookOption.value;
            internalChapter = chapter;
            onStateChange(bookOption.value, chapter);
        }
    }
</script>

<div class="h-full flex flex-col">
    <!-- Toolbar -->
    <div class="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2">
        <button
            onclick={onToggleCanonExplorer}
            class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors flex items-center gap-1"
            title={showCanonExplorer ? "Hide Canon Explorer" : "Show Canon Explorer"}
        >
            {#if showCanonExplorer}
                ← Hide
            {:else}
                → Show
            {/if}
            Canon
        </button>
    </div>

    <!-- Main Content -->
    <div class="h-full flex flex-1">
        <!-- Canon Explorer Sidebar -->
        {#if showCanonExplorer}
            <div
                class="w-80 bg-gray-800 border-r border-gray-700 h-full overflow-y-auto flex-shrink-0"
            >
                <BibleCanonExplorer
                    {translation}
                    currentBook={internalBook}
                    currentChapter={internalChapter}
                    onChapterSelect={selectChapter}
                />
            </div>
        {/if}

        <!-- Chapter Viewer -->
        <BibleChapterViewer chapterData={currentChapterData} />
    </div>
</div>

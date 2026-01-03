<script lang="ts">
    import type { Translation } from "$lib/translations/translation";
    import { getChapter } from "$lib/translations/translation";
    import { BibleBook, getShortName, toBibleBook } from "$lib/book";
    import { Option, Effect } from "effect";
    import BibleCanonExplorer from "$lib/components/bible/BibleCanonExplorer.svelte";
    import BibleChapterViewer from "$lib/components/bible/BibleChapterViewer.svelte";
    import { onMount } from "svelte";

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
    
    // Mobile responsiveness state
    let isMobile = $state<boolean>(false);

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
            
            // Auto-hide canon explorer on mobile after chapter selection
            if (isMobile) {
                onToggleCanonExplorer();
            }
        }
    }

    // Mobile detection and responsive behavior
    function checkIsMobile() {
        if (typeof window !== 'undefined') {
            isMobile = window.innerWidth < 768; // md breakpoint
        }
    }

    onMount(() => {
        checkIsMobile();
        
        // Listen for window resize
        const handleResize = () => checkIsMobile();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    });
</script>

<div class="h-full flex flex-col">
    <!-- Toolbar -->
    <div class="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2">
        <button
            onclick={onToggleCanonExplorer}
            class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors flex items-center gap-1"
            title={showCanonExplorer 
                ? (isMobile ? "Show Chapter" : "Hide Canon Explorer") 
                : "Show Canon Explorer"}
        >
            {#if isMobile}
                {#if showCanonExplorer}
                    📖 Chapter
                {:else}
                    📚 Books
                {/if}
            {:else}
                {#if showCanonExplorer}
                    ← Hide
                {:else}
                    → Show
                {/if}
                Canon
            {/if}
        </button>
    </div>

    <!-- Main Content -->
    <div class="h-full flex flex-1 relative">
        <!-- Canon Explorer Sidebar -->
        {#if showCanonExplorer}
            <div
                class="bg-gray-800 border-gray-700 h-full overflow-y-auto flex-shrink-0 
                       {isMobile 
                         ? 'absolute inset-0 z-10 w-full' 
                         : 'w-80 border-r relative'}"
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
        <div class="flex-1 {isMobile && showCanonExplorer ? 'hidden' : 'block'}">
            <BibleChapterViewer chapterData={currentChapterData} />
        </div>
    </div>
</div>

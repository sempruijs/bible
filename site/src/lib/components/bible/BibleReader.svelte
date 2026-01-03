<script lang="ts">
    import type { Translation } from "$lib/translations/translation";
    import { getChapter, getNextChapter, getPreviousChapter } from "$lib/translations/translation";
    import { BibleBook, getShortName, toBibleBook } from "$lib/book";
    import { protestantBookOrder } from "$lib/translations/bookOrder";
    import { Option, Effect } from "effect";
    import BibleCanonExplorerWithSearch from "$lib/components/bible/BibleCanonExplorerWithSearch.svelte";
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
    
    // Track when canon explorer should focus search
    let shouldFocusSearch = $state(false);

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

    function navigateToNextChapter() {
        const nextChapterOption = getNextChapter(translation, internalBook, internalChapter, protestantBookOrder);
        if (Option.isSome(nextChapterOption)) {
            const { book, chapter } = nextChapterOption.value;
            internalBook = book;
            internalChapter = chapter;
            onStateChange(book, chapter);
        }
    }

    function navigateToPreviousChapter() {
        const previousChapterOption = getPreviousChapter(translation, internalBook, internalChapter, protestantBookOrder);
        if (Option.isSome(previousChapterOption)) {
            const { book, chapter } = previousChapterOption.value;
            internalBook = book;
            internalChapter = chapter;
            onStateChange(book, chapter);
        }
    }

    function handleGlobalKeydown(event: KeyboardEvent) {
        // Handle 'o' key to open canon explorer and focus search
        if (event.key === 'o' && !showCanonExplorer) {
            event.preventDefault();
            shouldFocusSearch = true;
            onToggleCanonExplorer();
        }
        // Handle 'b' key to toggle canon explorer
        else if (event.key === 'b') {
            event.preventDefault();
            if (!showCanonExplorer) {
                shouldFocusSearch = false; // Don't auto-focus when using 'b'
            }
            onToggleCanonExplorer();
        }
    }

    // Reset focus flag when canon explorer is hidden
    $effect(() => {
        if (!showCanonExplorer) {
            shouldFocusSearch = false;
        }
    });

    // Mobile detection and responsive behavior
    function checkIsMobile() {
        if (typeof window !== 'undefined') {
            isMobile = window.innerWidth < 768; // md breakpoint
        }
    }

    onMount(() => {
        checkIsMobile();
        
        // Listen for window resize and global keyboard events
        const handleResize = () => checkIsMobile();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            window.addEventListener('keydown', handleGlobalKeydown);
            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('keydown', handleGlobalKeydown);
            };
        }
    });
</script>

<div class="h-full flex flex-col">
    <!-- Toolbar -->
    <div class="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2 justify-between">
        <button
            onclick={onToggleCanonExplorer}
            class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors flex items-center gap-1"
            title={showCanonExplorer 
                ? (isMobile ? "Show Chapter" : "Hide Canon Explorer (b)") 
                : "Show Canon Explorer (b)"}
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

        <!-- Navigation buttons -->
        <div class="flex items-center gap-1">
            <button
                onclick={navigateToPreviousChapter}
                disabled={Option.isNone(getPreviousChapter(translation, internalBook, internalChapter, protestantBookOrder))}
                class="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-gray-300 text-sm rounded transition-colors"
                title="Previous chapter"
            >
                ←
            </button>
            <button
                onclick={navigateToNextChapter}
                disabled={Option.isNone(getNextChapter(translation, internalBook, internalChapter, protestantBookOrder))}
                class="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-gray-300 text-sm rounded transition-colors"
                title="Next chapter"
            >
                →
            </button>
        </div>
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
                <BibleCanonExplorerWithSearch
                    {translation}
                    currentBook={internalBook}
                    currentChapter={internalChapter}
                    onChapterSelect={selectChapter}
                    {shouldFocusSearch}
                />
            </div>
        {/if}

        <!-- Chapter Viewer -->
        <div class="flex-1 {isMobile && showCanonExplorer ? 'hidden' : 'block'}">
            <BibleChapterViewer chapterData={currentChapterData} />
        </div>
    </div>
</div>

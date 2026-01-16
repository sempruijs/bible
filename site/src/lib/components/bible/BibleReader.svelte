<script lang="ts">
    import type { Translation, TranslationContent } from "$lib/translations/translation";
    import { getChapterFromContent, getNextChapterFromContent, getPreviousChapterFromContent } from "$lib/translations/translation";
    import { loadTranslationContent } from "$lib/translations/loadTranslationContent";
    import { BibleBook, getShortName, toBibleBook } from "$lib/book";
    import { protestantBookOrder } from "$lib/translations/bookOrder";
    import { Option, Effect } from "effect";
    import BibleCanonExplorerWithSearch from "$lib/components/bible/BibleCanonExplorerWithSearch.svelte";
    import BibleChapterViewer from "$lib/components/bible/BibleChapterViewer.svelte";
    import { availableTranslations } from "$lib/translations/availableTranslations";
    import { onMount } from "svelte";

    let {
        translation,
        currentBook = BibleBook.John,
        currentChapter = 1,
        showCanonExplorer = true,
        onStateChange = () => {},
        onToggleCanonExplorer = () => {},
        onTranslationChange = () => {},
    }: {
        translation: Translation;
        currentBook?: BibleBook;
        currentChapter?: number;
        showCanonExplorer?: boolean;
        onStateChange?: (book: BibleBook, chapter: number) => void;
        onToggleCanonExplorer?: () => void;
        onTranslationChange?: (translation: Translation) => void;
    } = $props();

    // Internal state that gets updated by user interactions
    let internalBook = $state<BibleBook>(currentBook);
    let internalChapter = $state<number>(currentChapter);

    // Mobile responsiveness state
    let isMobile = $state<boolean>(false);

    // Track when canon explorer should focus search
    let shouldFocusSearch = $state(false);

    // Translation content state
    let translationContent = $state<Option.Option<TranslationContent>>(Option.none());

    // Update internal state when props change (tab switch)
    $effect(() => {
        internalBook = currentBook;
        internalChapter = currentChapter;
    });

    // Load translation content when translation changes
    $effect(() => {
        if (translation) {
            Effect.runPromise(loadTranslationContent(translation))
                .then((content) => {
                    translationContent = Option.some(content);
                })
                .catch((error) => {
                    console.error("Failed to load translation content:", error);
                    translationContent = Option.none();
                });
        }
    });

    let currentChapterData = $state<Option.Option<any>>(Option.none());

    // Update chapter data when internal state or translation content changes
    $effect(() => {
        if (internalBook && internalChapter && Option.isSome(translationContent)) {
            Effect.runPromise(getChapterFromContent(translationContent.value, internalBook, internalChapter))
                .then((chapterOption) => {
                    currentChapterData = chapterOption;
                })
                .catch((error) => {
                    console.error("Failed to get chapter:", error);
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
            // Use setTimeout to ensure state update completes before toggling
            if (isMobile) {
                setTimeout(() => {
                    onToggleCanonExplorer();
                }, 0);
            }
        }
    }

    function navigateToNextChapter() {
        if (Option.isNone(translationContent)) return;
        const nextChapterOption = getNextChapterFromContent(translationContent.value, internalBook, internalChapter, protestantBookOrder);
        if (Option.isSome(nextChapterOption)) {
            const { book, chapter } = nextChapterOption.value;
            internalBook = book;
            internalChapter = chapter;
            onStateChange(book, chapter);
        }
    }

    function navigateToPreviousChapter() {
        if (Option.isNone(translationContent)) return;
        const previousChapterOption = getPreviousChapterFromContent(translationContent.value, internalBook, internalChapter, protestantBookOrder);
        if (Option.isSome(previousChapterOption)) {
            const { book, chapter } = previousChapterOption.value;
            internalBook = book;
            internalChapter = chapter;
            onStateChange(book, chapter);
        }
    }

    function handleTranslationChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        const selectedTranslation = availableTranslations.find(t => t.metadata.shortName === target.value);
        if (selectedTranslation) {
            onTranslationChange(selectedTranslation);
        }
    }

    function handleGlobalKeydown(event: KeyboardEvent) {
        // Only handle if not typing in an input/textarea and if this is a Bible tab
        const target = event.target as HTMLElement;
        if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true')) {
            return;
        }

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
        <div class="flex items-center gap-2">
            <button
                onclick={onToggleCanonExplorer}
                class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors flex items-center gap-1"
                title={showCanonExplorer
                    ? (isMobile ? "Show Chapter" : "Hide Canon Explorer (b)")
                    : "Show Canon Explorer (b)"}
            >
                {#if isMobile}
                    {#if showCanonExplorer}
                        📖 Chapter (b)
                    {:else}
                        📚 Books (b)
                    {/if}
                {:else}
                    {#if showCanonExplorer}
                        ← Hide Canon (b)
                    {:else}
                        → Show Canon (b)
                    {/if}
                {/if}
            </button>

            <!-- Translation Selector -->
            <select
                value={translation.metadata.shortName}
                onchange={handleTranslationChange}
                class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors border border-gray-600 focus:outline-none focus:border-blue-500"
                title="Select translation"
            >
                {#each availableTranslations as trans}
                    <option value={trans.metadata.shortName}>
                        {trans.metadata.shortName}
                    </option>
                {/each}
            </select>
        </div>

        <!-- Navigation buttons -->
        <div class="flex items-center gap-1">
            <button
                onclick={navigateToPreviousChapter}
                disabled={Option.isNone(translationContent) || Option.isNone(getPreviousChapterFromContent(translationContent.value, internalBook, internalChapter, protestantBookOrder))}
                class="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 text-gray-300 text-sm rounded transition-colors"
                title="Previous chapter"
            >
                ←
            </button>
            <button
                onclick={navigateToNextChapter}
                disabled={Option.isNone(translationContent) || Option.isNone(getNextChapterFromContent(translationContent.value, internalBook, internalChapter, protestantBookOrder))}
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
                    content={Option.isSome(translationContent) ? translationContent.value : null}
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

<script lang="ts">
    import type { Translation, TranslationContent } from "$lib/translations/translation";
    import { loadTranslationContent } from "$lib/translations/loadTranslationContent";
    import { BibleBook, getShortName, toBibleBook } from "$lib/book";
    import { Option, Effect } from "effect";
    import BibleCanonExplorerWithSearch from "$lib/components/bible/BibleCanonExplorerWithSearch.svelte";
    import VirtualBibleScroll from "$lib/components/bible/VirtualBibleScroll.svelte";
    import { availableTranslations } from "$lib/translations/availableTranslations";
    import { protestantBookOrder } from "$lib/translations/bookOrder";
    import { onMount } from "svelte";

    let {
        translation,
        currentBook = BibleBook.John,
        currentChapter = 1,
        showCanonExplorer = true,
        isActive = true,
        onStateChange = () => {},
        onToggleCanonExplorer = () => {},
        onTranslationChange = () => {},
    }: {
        translation: Translation;
        currentBook?: BibleBook;
        currentChapter?: number;
        showCanonExplorer?: boolean;
        isActive?: boolean;
        onStateChange?: (book: BibleBook, chapter: number) => void;
        onToggleCanonExplorer?: () => void;
        onTranslationChange?: (translation: Translation) => void;
    } = $props();

    // Internal state that gets updated by user interactions (URL/canon explorer)
    let internalBook = $state<BibleBook>(currentBook);
    let internalChapter = $state<number>(currentChapter);

    // Scroll target - only updated on explicit navigation (clicks), NOT on scroll events
    let scrollTarget = $state({ book: currentBook, chapter: currentChapter, version: 0 });

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

    // Trigger initial scroll when translation content loads
    $effect(() => {
        if (Option.isSome(translationContent) && scrollTarget.version === 0) {
            // Increment version to trigger initial scroll to currentBook/currentChapter
            scrollTarget = { book: currentBook, chapter: currentChapter, version: 1 };
        }
    });

    // Load translation content when translation changes
    $effect(() => {
        if (translation) {
            console.log('BibleReader: Loading translation content for', translation.metadata.shortName);
            Effect.runPromise(loadTranslationContent(translation))
                .then((content) => {
                    console.log('BibleReader: Translation content loaded successfully, books:', content.books.length);
                    translationContent = Option.some(content);
                })
                .catch((error) => {
                    console.error("Failed to load translation content:", error);
                    translationContent = Option.none();
                });
        }
    });

    function selectChapter(bookShort: string, chapter: number) {
        const bookOption = toBibleBook(bookShort);
        if (Option.isSome(bookOption)) {
            // Update scroll target to trigger scrolling in VirtualBibleScroll
            scrollTarget = { book: bookOption.value, chapter, version: scrollTarget.version + 1 };

            // Update internal state for URL/canon explorer
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

    // Handle scroll state changes - update URL/canon explorer but NOT scroll target
    function handleScrollStateChange(book: BibleBook, chapter: number) {
        console.log(`🔄 handleScrollStateChange called with ${book} ${chapter}`);
        console.log(`   Before: internalBook=${internalBook}, internalChapter=${internalChapter}`);
        console.log(`   Before: scrollTarget=`, scrollTarget);
        internalBook = book;
        internalChapter = chapter;
        onStateChange(book, chapter);
        console.log(`   After: scrollTarget=`, scrollTarget);
        // Note: We DON'T update scrollTarget here, so no scroll is triggered
    }

    // Navigate to next chapter
    function goToNextChapter() {
        if (!Option.isSome(translationContent)) return;

        const currentBookData = translationContent.value.books.find(b => b.name === internalBook);
        if (!currentBookData) return;

        // Check if there's a next chapter in the current book
        if (internalChapter < currentBookData.chapters.length) {
            // Go to next chapter in same book
            const nextChapter = internalChapter + 1;
            scrollTarget = { book: internalBook, chapter: nextChapter, version: scrollTarget.version + 1 };
            internalBook = internalBook;
            internalChapter = nextChapter;
            onStateChange(internalBook, nextChapter);
        } else {
            // Go to first chapter of next book
            const currentBookIndex = protestantBookOrder.books.indexOf(internalBook);
            if (currentBookIndex >= 0 && currentBookIndex < protestantBookOrder.books.length - 1) {
                const nextBook = protestantBookOrder.books[currentBookIndex + 1];
                scrollTarget = { book: nextBook, chapter: 1, version: scrollTarget.version + 1 };
                internalBook = nextBook;
                internalChapter = 1;
                onStateChange(nextBook, 1);
            }
        }
    }

    // Navigate to previous chapter
    function goToPreviousChapter() {
        if (!Option.isSome(translationContent)) return;

        // Check if there's a previous chapter in the current book
        if (internalChapter > 1) {
            // Go to previous chapter in same book
            const prevChapter = internalChapter - 1;
            scrollTarget = { book: internalBook, chapter: prevChapter, version: scrollTarget.version + 1 };
            internalBook = internalBook;
            internalChapter = prevChapter;
            onStateChange(internalBook, prevChapter);
        } else {
            // Go to last chapter of previous book
            const currentBookIndex = protestantBookOrder.books.indexOf(internalBook);
            if (currentBookIndex > 0) {
                const prevBook = protestantBookOrder.books[currentBookIndex - 1];
                const prevBookData = translationContent.value.books.find(b => b.name === prevBook);
                if (prevBookData) {
                    const lastChapter = prevBookData.chapters.length;
                    scrollTarget = { book: prevBook, chapter: lastChapter, version: scrollTarget.version + 1 };
                    internalBook = prevBook;
                    internalChapter = lastChapter;
                    onStateChange(prevBook, lastChapter);
                }
            }
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
        // Only handle if this tab is active
        if (!isActive) return;

        // Only handle if not typing in an input/textarea
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
        // Handle arrow keys for chapter navigation
        else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            goToNextChapter();
        }
        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            goToPreviousChapter();
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

            <!-- Chapter Navigation Buttons -->
            <div class="flex items-center gap-1 ml-2">
                <button
                    onclick={goToPreviousChapter}
                    class="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
                    title="Previous chapter (← or ↑)"
                >
                    ←
                </button>
                <button
                    onclick={goToNextChapter}
                    class="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
                    title="Next chapter (→ or ↓)"
                >
                    →
                </button>
            </div>
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
            <VirtualBibleScroll
                {translationContent}
                {scrollTarget}
                onStateChange={handleScrollStateChange}
            />
        </div>
    </div>
</div>

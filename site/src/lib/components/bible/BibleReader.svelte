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
    import * as ResponsiveService from "$lib/services/ResponsiveService";
    import { useKeyboardShortcuts } from "$lib/utils/keyboard";

    let {
        translation,
        currentBook = BibleBook.John,
        currentChapter = 1,
        currentVerse = null as number | null,
        showCanonExplorer = true,
        isActive = true,
        onStateChange = () => {},
        onToggleCanonExplorer = () => {},
        onTranslationChange = () => {},
    }: {
        translation: Translation;
        currentBook?: BibleBook;
        currentChapter?: number;
        currentVerse?: number | null;
        showCanonExplorer?: boolean;
        isActive?: boolean;
        onStateChange?: (book: BibleBook, chapter: number, verse: number | null) => void;
        onToggleCanonExplorer?: () => void;
        onTranslationChange?: (translation: Translation) => void;
    } = $props();

    // Internal state that gets updated by user interactions (URL/canon explorer)
    let internalBook = $state<BibleBook>(currentBook);
    let internalChapter = $state<number>(currentChapter);
    let internalVerse = $state<number | null>(currentVerse);

    // Scroll target - only updated on explicit navigation (clicks), NOT on scroll events
    let scrollTarget = $state({ book: currentBook, chapter: currentChapter, verse: currentVerse, version: 0 });

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
        internalVerse = currentVerse;
    });

    // Trigger initial scroll when translation content loads
    $effect(() => {
        if (Option.isSome(translationContent) && scrollTarget.version === 0) {
            // Increment version to trigger initial scroll to currentBook/currentChapter/currentVerse
            scrollTarget = { book: currentBook, chapter: currentChapter, verse: currentVerse, version: 1 };
        }
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

    function selectChapter(bookShort: string, chapter: number) {
        const bookOption = toBibleBook(bookShort);
        if (Option.isSome(bookOption)) {
            console.log(`📖 selectChapter called: ${bookOption.value} ${chapter}`);
            console.log(`   Before: scrollTarget.version=${scrollTarget.version}`);

            // On mobile, close canon explorer first so VirtualBibleScroll is visible when we scroll
            if (isMobile) {
                onToggleCanonExplorer();
                // Delay scroll update to ensure canon explorer closes and VirtualBibleScroll renders
                setTimeout(() => {
                    scrollTarget = { book: bookOption.value, chapter, verse: null, version: scrollTarget.version + 1 };
                    internalBook = bookOption.value;
                    internalChapter = chapter;
                    internalVerse = null;
                    onStateChange(bookOption.value, chapter, null);
                }, 50);
            } else {
                // On desktop, update immediately
                scrollTarget = { book: bookOption.value, chapter, verse: null, version: scrollTarget.version + 1 };
                console.log(`   After: scrollTarget.version=${scrollTarget.version}`);

                internalBook = bookOption.value;
                internalChapter = chapter;
                internalVerse = null;
                console.log(`   Calling onStateChange(${bookOption.value}, ${chapter}, null)`);
                onStateChange(bookOption.value, chapter, null);
            }
        }
    }

    // Handle scroll state changes - update URL/canon explorer but NOT scroll target
    function handleScrollStateChange(book: BibleBook, chapter: number, verse: number | null) {
        internalBook = book;
        internalChapter = chapter;
        internalVerse = verse;
        onStateChange(book, chapter, verse);
        // Note: We DON'T update scrollTarget here, so no scroll is triggered
    }

    // Handle verse click - select the verse without scrolling
    function handleVerseSelect(book: BibleBook, chapter: number, verse: number) {
        internalBook = book;
        internalChapter = chapter;
        internalVerse = verse;
        // Update scrollTarget to highlight the verse, but keep same version so no scroll happens
        scrollTarget = { book, chapter, verse, version: scrollTarget.version };
        onStateChange(book, chapter, verse);
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
            scrollTarget = { book: internalBook, chapter: nextChapter, verse: null, version: scrollTarget.version + 1 };
            internalBook = internalBook;
            internalChapter = nextChapter;
            internalVerse = null;
            onStateChange(internalBook, nextChapter, null);
        } else {
            // Go to first chapter of next book
            const currentBookIndex = protestantBookOrder.books.indexOf(internalBook);
            if (currentBookIndex >= 0 && currentBookIndex < protestantBookOrder.books.length - 1) {
                const nextBook = protestantBookOrder.books[currentBookIndex + 1];
                scrollTarget = { book: nextBook, chapter: 1, verse: null, version: scrollTarget.version + 1 };
                internalBook = nextBook;
                internalChapter = 1;
                internalVerse = null;
                onStateChange(nextBook, 1, null);
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
            scrollTarget = { book: internalBook, chapter: prevChapter, verse: null, version: scrollTarget.version + 1 };
            internalBook = internalBook;
            internalChapter = prevChapter;
            internalVerse = null;
            onStateChange(internalBook, prevChapter, null);
        } else {
            // Go to last chapter of previous book
            const currentBookIndex = protestantBookOrder.books.indexOf(internalBook);
            if (currentBookIndex > 0) {
                const prevBook = protestantBookOrder.books[currentBookIndex - 1];
                const prevBookData = translationContent.value.books.find(b => b.name === prevBook);
                if (prevBookData) {
                    const lastChapter = prevBookData.chapters.length;
                    scrollTarget = { book: prevBook, chapter: lastChapter, verse: null, version: scrollTarget.version + 1 };
                    internalBook = prevBook;
                    internalChapter = lastChapter;
                    internalVerse = null;
                    onStateChange(prevBook, lastChapter, null);
                }
            }
        }
    }

    // Navigate to next verse
    function goToNextVerse() {
        if (!Option.isSome(translationContent)) return;

        const currentBookData = translationContent.value.books.find(b => b.name === internalBook);
        if (!currentBookData) return;

        const currentChapterData = currentBookData.chapters.find(c => c.chapter === internalChapter);
        if (!currentChapterData) return;

        const currentVerseNum = internalVerse ?? 1;
        const maxVerse = currentChapterData.verses.length;

        if (currentVerseNum < maxVerse) {
            // Go to next verse in same chapter
            const nextVerse = currentVerseNum + 1;
            scrollTarget = { book: internalBook, chapter: internalChapter, verse: nextVerse, version: scrollTarget.version + 1 };
            internalVerse = nextVerse;
            onStateChange(internalBook, internalChapter, nextVerse);
        } else {
            // Go to first verse of next chapter
            goToNextChapter();
        }
    }

    // Navigate to previous verse
    function goToPreviousVerse() {
        if (!Option.isSome(translationContent)) return;

        const currentVerseNum = internalVerse ?? 1;

        if (currentVerseNum > 1) {
            // Go to previous verse in same chapter
            const prevVerse = currentVerseNum - 1;
            scrollTarget = { book: internalBook, chapter: internalChapter, verse: prevVerse, version: scrollTarget.version + 1 };
            internalVerse = prevVerse;
            onStateChange(internalBook, internalChapter, prevVerse);
        } else {
            // Go to last verse of previous chapter
            const currentBookData = translationContent.value.books.find(b => b.name === internalBook);

            if (internalChapter > 1 && currentBookData) {
                // Previous chapter in same book
                const prevChapterData = currentBookData.chapters.find(c => c.chapter === internalChapter - 1);
                if (prevChapterData) {
                    const lastVerse = prevChapterData.verses.length;
                    scrollTarget = { book: internalBook, chapter: internalChapter - 1, verse: lastVerse, version: scrollTarget.version + 1 };
                    internalChapter = internalChapter - 1;
                    internalVerse = lastVerse;
                    onStateChange(internalBook, internalChapter, lastVerse);
                }
            } else {
                // Last verse of previous book's last chapter
                const currentBookIndex = protestantBookOrder.books.indexOf(internalBook);
                if (currentBookIndex > 0) {
                    const prevBook = protestantBookOrder.books[currentBookIndex - 1];
                    const prevBookData = translationContent.value.books.find(b => b.name === prevBook);
                    if (prevBookData) {
                        const lastChapter = prevBookData.chapters.length;
                        const lastChapterData = prevBookData.chapters[lastChapter - 1];
                        const lastVerse = lastChapterData.verses.length;
                        scrollTarget = { book: prevBook, chapter: lastChapter, verse: lastVerse, version: scrollTarget.version + 1 };
                        internalBook = prevBook;
                        internalChapter = lastChapter;
                        internalVerse = lastVerse;
                        onStateChange(prevBook, lastChapter, lastVerse);
                    }
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

    // Reset focus flag when canon explorer is hidden
    $effect(() => {
        if (!showCanonExplorer) {
            shouldFocusSearch = false;
        }
    });

    // Initialize mobile state and setup listeners
    onMount(() => {
        isMobile = ResponsiveService.isMobile();

        // Listen for window resize to update mobile state
        const cleanupResize = ResponsiveService.createResizeObserver((mobile) => {
            isMobile = mobile;
        });

        // Setup keyboard shortcuts (with manual check for isActive since we need that state)
        const handleKeydown = (event: KeyboardEvent) => {
            // Only handle if this tab is active
            if (!isActive) return;

            // Only handle if not typing in an input/textarea
            const target = event.target as HTMLElement;
            if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true')) {
                return;
            }

            if (event.key === 'b') {
                event.preventDefault();
                if (!showCanonExplorer) {
                    shouldFocusSearch = false; // Don't auto-focus when using 'b'
                }
                onToggleCanonExplorer();
            } else if (event.key === 'o' && !showCanonExplorer) {
                event.preventDefault();
                shouldFocusSearch = true;
                onToggleCanonExplorer();
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                goToNextVerse();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                goToPreviousVerse();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                goToNextChapter();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                goToPreviousChapter();
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleKeydown);
        }

        return () => {
            cleanupResize();
            if (typeof window !== 'undefined') {
                window.removeEventListener('keydown', handleKeydown);
            }
        };
    });
</script>

<div class="h-full flex flex-col">
    <!-- Toolbar -->
    <div class="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2 justify-between flex-shrink-0">
        <div class="flex items-center gap-2">
            <button
                onclick={onToggleCanonExplorer}
                class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors flex items-center gap-1"
                title={showCanonExplorer
                    ? (isMobile ? "Show Chapter" : "Hide Canon Explorer (b)")
                    : (isMobile ? "Show Canon Explorer" : "Show Canon Explorer (b)")}
            >
                {#if isMobile}
                    {#if showCanonExplorer}
                        📖 Chapter
                    {:else}
                        📚 Books
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
                    title={isMobile ? "Previous chapter" : "Previous chapter (←)"}
                >
                    ←
                </button>
                <button
                    onclick={goToNextChapter}
                    class="px-2 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
                    title={isMobile ? "Next chapter" : "Next chapter (→)"}
                >
                    →
                </button>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-1 relative overflow-hidden">
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
                    {isMobile}
                />
            </div>
        {/if}

        <!-- Chapter Viewer -->
        <div class="flex-1 {isMobile && showCanonExplorer ? 'hidden' : 'block'}">
            <VirtualBibleScroll
                {translationContent}
                {scrollTarget}
                onStateChange={handleScrollStateChange}
                onVerseSelect={handleVerseSelect}
                {isActive}
            />
        </div>
    </div>
</div>

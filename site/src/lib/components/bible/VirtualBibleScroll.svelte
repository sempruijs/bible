<script lang="ts">
	import { Option, Effect } from "effect";
	import { onDestroy } from "svelte";
	import type { TranslationContent, Chapter, ChapterReference } from "$lib/translations/translation";
	import {
		getChapterFromContent,
		getChapterKey,
		getChapterRangeFromContent,
		isFirstChapterInBible,
		isLastChapterInBible
	} from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { protestantBookOrder } from "$lib/translations/bookOrder";
	import BibleChapterViewer from "$lib/components/bible/BibleChapterViewer.svelte";

	let {
		translationContent,
		initialBook,
		initialChapter,
		onStateChange = () => {}
	}: {
		translationContent: Option.Option<TranslationContent>;
		initialBook: BibleBook;
		initialChapter: number;
		onStateChange?: (book: BibleBook, chapter: number) => void;
	} = $props();

	// State for virtual scrolling
	interface ChapterData {
		ref: ChapterReference;
		chapter: Chapter;
		showBookHeader: boolean;
	}

	let renderedChapters = $state<Map<string, ChapterData>>(new Map());
	let renderedChaptersVersion = $state(0); // Increment this to trigger derived updates
	let activeChapterRef = $state<ChapterReference>({
		book: initialBook,
		chapter: initialChapter,
		key: getChapterKey(initialBook, initialChapter)
	});
	let isLoadingPrevious = $state(false);
	let isLoadingNext = $state(false);

	// Update active chapter ref when props change
	$effect(() => {
		activeChapterRef = {
			book: initialBook,
			chapter: initialChapter,
			key: getChapterKey(initialBook, initialChapter)
		};
	});

	// IntersectionObserver instances
	let topObserver: IntersectionObserver | null = null;
	let middleObserver: IntersectionObserver | null = null;
	let bottomObserver: IntersectionObserver | null = null;

	// Debounce timer for URL updates
	let urlUpdateTimer: ReturnType<typeof setTimeout> | null = null;

	// Derived array of rendered chapters for iteration
	const renderedChaptersArray = $derived.by(() => {
		// Depend on version to trigger recomputation when Map changes
		renderedChaptersVersion;

		const arr = Array.from(renderedChapters.values()).sort((a, b) => {
			// Sort by book order, then by chapter number
			const contentValue = translationContent;
			if (Option.isNone(contentValue)) return 0;

			const aBookIndex = protestantBookOrder.books.findIndex(book => book === a.ref.book);
			const bBookIndex = protestantBookOrder.books.findIndex(book => book === b.ref.book);

			if (aBookIndex !== bBookIndex) {
				return aBookIndex - bBookIndex;
			}
			return a.ref.chapter - b.ref.chapter;
		});
		console.log('renderedChaptersArray computed, length:', arr.length);
		return arr;
	});

	// Load a single chapter and add to rendered map
	async function loadChapter(ref: ChapterReference, showBookHeader: boolean) {
		if (Option.isNone(translationContent)) return;

		try {
			const chapterOption = await Effect.runPromise(
				getChapterFromContent(translationContent.value, ref.book, ref.chapter)
			);

			if (Option.isSome(chapterOption)) {
				console.log('Adding chapter to renderedChapters:', ref.key, 'verses:', chapterOption.value.verses.length);
				renderedChapters.set(ref.key, {
					ref,
					chapter: chapterOption.value,
					showBookHeader
				});
				renderedChaptersVersion++; // Trigger derived update
				console.log('renderedChapters size after add:', renderedChapters.size);
			} else {
				console.log('Chapter option is None for:', ref.key);
			}
		} catch (error) {
			console.error(`Failed to load chapter ${ref.key}:`, error);
		}
	}

	// Load multiple chapters in a range
	async function loadChapterRange(refs: ChapterReference[]) {
		if (refs.length === 0) return;

		// Determine which refs need book headers (first chapter or book transition)
		let lastBook: BibleBook | null = null;

		// Check if there's already a chapter before the first ref to determine book header
		const allRefs = Array.from(renderedChapters.values()).map(c => c.ref);
		const sortedRefs = [...allRefs, ...refs].sort((a, b) => {
			const aIndex = protestantBookOrder.books.findIndex(book => book === a.book);
			const bIndex = protestantBookOrder.books.findIndex(book => book === b.book);
			if (aIndex !== bIndex) return aIndex - bIndex;
			return a.chapter - b.chapter;
		});

		await Promise.all(
			refs.map(async (ref) => {
				// Find previous ref in sorted order
				const refIndex = sortedRefs.findIndex(r => r.key === ref.key);
				const previousRef = refIndex > 0 ? sortedRefs[refIndex - 1] : null;

				// Show book header if first in Bible or book changed
				const showBookHeader =
					!previousRef ||
					previousRef.book !== ref.book ||
					(ref.book === previousRef.book && ref.chapter === 1);

				await loadChapter(ref, showBookHeader);
			})
		);
	}

	// Load chapters before the first rendered chapter
	async function loadPreviousChapters() {
		if (isLoadingPrevious || Option.isNone(translationContent)) return;

		const firstChapter = renderedChaptersArray[0];
		if (!firstChapter) return;

		// Check if at the beginning of the Bible
		if (isFirstChapterInBible(firstChapter.ref, protestantBookOrder)) {
			return;
		}

		isLoadingPrevious = true;

		try {
			const refs = getChapterRangeFromContent(
				translationContent.value,
				firstChapter.ref,
				5, // Load 5 chapters
				'backward',
				protestantBookOrder
			);

			// Filter out already rendered chapters
			const newRefs = refs.filter(ref => !renderedChapters.has(ref.key));
			await loadChapterRange(newRefs);

			// Prune chapters that are too far away
			pruneRenderedChapters();
		} catch (error) {
			console.error("Failed to load previous chapters:", error);
		} finally {
			isLoadingPrevious = false;
		}
	}

	// Load chapters after the last rendered chapter
	async function loadNextChapters() {
		if (isLoadingNext || Option.isNone(translationContent)) return;

		const lastChapter = renderedChaptersArray[renderedChaptersArray.length - 1];
		if (!lastChapter) return;

		// Check if at the end of the Bible
		if (isLastChapterInBible(translationContent.value, lastChapter.ref, protestantBookOrder)) {
			return;
		}

		isLoadingNext = true;

		try {
			const refs = getChapterRangeFromContent(
				translationContent.value,
				lastChapter.ref,
				5, // Load 5 chapters
				'forward',
				protestantBookOrder
			);

			// Filter out already rendered chapters and the start chapter
			const newRefs = refs.filter(ref => !renderedChapters.has(ref.key) && ref.key !== lastChapter.ref.key);
			await loadChapterRange(newRefs);

			// Prune chapters that are too far away
			pruneRenderedChapters();
		} catch (error) {
			console.error("Failed to load next chapters:", error);
		} finally {
			isLoadingNext = false;
		}
	}

	// Remove chapters that are too far from the active chapter
	function pruneRenderedChapters() {
		if (Option.isNone(translationContent) || renderedChapters.size <= 21) return;

		// Find active chapter index in sorted array
		const activeIndex = renderedChaptersArray.findIndex(c => c.ref.key === activeChapterRef.key);
		if (activeIndex === -1) return;

		// Keep chapters within 10 positions of active chapter
		const keysToKeep = new Set<string>();
		const bufferSize = 10;

		for (let i = Math.max(0, activeIndex - bufferSize); i <= Math.min(renderedChaptersArray.length - 1, activeIndex + bufferSize); i++) {
			keysToKeep.add(renderedChaptersArray[i].ref.key);
		}

		// Remove chapters not in the keep set
		let didDelete = false;
		for (const key of renderedChapters.keys()) {
			if (!keysToKeep.has(key)) {
				renderedChapters.delete(key);
				didDelete = true;
			}
		}

		if (didDelete) {
			renderedChaptersVersion++; // Trigger derived update
		}
	}

	// Update active chapter and URL (debounced)
	function updateActiveChapter(ref: ChapterReference) {
		// Don't update if we're in the middle of a programmatic scroll
		if (isProgrammaticScroll) {
			return;
		}

		activeChapterRef = ref;

		// Debounce URL update
		if (urlUpdateTimer) {
			clearTimeout(urlUpdateTimer);
		}

		urlUpdateTimer = setTimeout(() => {
			lastStateChangeTime = Date.now();
			onStateChange(ref.book, ref.chapter);
		}, 500);
	}

	// Setup IntersectionObservers
	function setupObservers() {
		// Top sentinel observer - triggers loading previous chapters
		topObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						loadPreviousChapters();
					}
				});
			},
			{
				rootMargin: '200px 0px 0px 0px',
				threshold: 0
			}
		);

		// Middle sentinel observer - updates active chapter for URL
		middleObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const chapterKey = entry.target.getAttribute('data-chapter-key');
						if (chapterKey) {
							const chapterData = renderedChapters.get(chapterKey);
							if (chapterData) {
								updateActiveChapter(chapterData.ref);
							}
						}
					}
				});
			},
			{
				rootMargin: '-20% 0px -60% 0px', // Trigger when chapter is in the top 20-40% of viewport
				threshold: 0
			}
		);

		// Bottom sentinel observer - triggers loading next chapters
		bottomObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						loadNextChapters();
					}
				});
			},
			{
				rootMargin: '0px 0px 200px 0px',
				threshold: 0
			}
		);

		// Observe all existing sentinels
		observeSentinels();
	}

	// Observe sentinels for all rendered chapters
	function observeSentinels() {
		if (!topObserver || !middleObserver || !bottomObserver) return;

		// Observe all sentinels
		renderedChapters.forEach((chapterData) => {
			const topSentinel = document.getElementById(`top-sentinel-${chapterData.ref.key}`);
			const middleSentinel = document.getElementById(`middle-sentinel-${chapterData.ref.key}`);
			const bottomSentinel = document.getElementById(`bottom-sentinel-${chapterData.ref.key}`);

			if (topSentinel && topObserver) topObserver.observe(topSentinel);
			if (middleSentinel && middleObserver) middleObserver.observe(middleSentinel);
			if (bottomSentinel && bottomObserver) bottomObserver.observe(bottomSentinel);
		});
	}

	// Effect to observe sentinels when chapters are added/removed
	$effect(() => {
		// Access renderedChaptersArray to trigger effect
		renderedChaptersArray.length;

		// Re-observe sentinels after a brief delay to ensure DOM is updated
		setTimeout(() => {
			observeSentinels();
		}, 50);
	});

	// Track if initial load has been done
	let initialLoadDone = $state(false);
	let isProgrammaticScroll = $state(false);
	let lastStateChangeTime = $state(0);

	// Initialize content when translation content becomes available
	$effect(() => {
		// Access translationContent to establish dependency
		const content = translationContent;
		console.log('VirtualBibleScroll effect running:', Option.isSome(content), 'initialLoadDone:', initialLoadDone);

		if (Option.isSome(content) && !initialLoadDone) {
			console.log('Starting to load chapters...');
			// Load initial buffer of chapters (current + 2 before + 2 after)
			const initialRef: ChapterReference = {
				book: initialBook,
				chapter: initialChapter,
				key: getChapterKey(initialBook, initialChapter)
			};

			// Load chapters around initial chapter
			const beforeRefs = getChapterRangeFromContent(
				content.value,
				initialRef,
				10, // Current + 10 before
				'backward',
				protestantBookOrder
			);

			const afterRefs = getChapterRangeFromContent(
				content.value,
				initialRef,
				10, // Current + 10 after (includes current)
				'forward',
				protestantBookOrder
			);

			// Combine and deduplicate
			const allRefs = [...beforeRefs, ...afterRefs.slice(1)]; // Skip duplicate current chapter

			loadChapterRange(allRefs).then(() => {
				console.log('Chapters loaded successfully, count:', allRefs.length);
				initialLoadDone = true;

				// Scroll to target chapter after a brief delay
				setTimeout(() => {
					const targetElement = document.getElementById(`middle-sentinel-${initialRef.key}`);
					if (targetElement) {
						// Scroll to position the chapter near the top of the viewport
						const container = targetElement.closest('.overflow-y-auto');
						if (container) {
							const offsetTop = targetElement.getBoundingClientRect().top + (container as HTMLElement).scrollTop - 100;
							(container as HTMLElement).scrollTo({
								top: offsetTop,
								behavior: 'instant'
							});
						}
					}

					// Setup observers after scroll settles
					setTimeout(() => {
						setupObservers();
					}, 100);
				}, 100);
			});
		}
	});

	// Handle navigation from canon explorer clicks
	$effect(() => {
		const targetKey = getChapterKey(initialBook, initialChapter);

		// Only run after initial load
		if (!initialLoadDone || Option.isNone(translationContent)) {
			return;
		}

		// Don't run if we're currently loading chapters (prevents feedback loop)
		if (isLoadingPrevious || isLoadingNext || isProgrammaticScroll) {
			console.log('Currently loading or scrolling, skipping navigation effect');
			return;
		}

		// Check if this props update came shortly after we called onStateChange (from scrolling)
		const timeSinceLastStateChange = Date.now() - lastStateChangeTime;
		if (timeSinceLastStateChange < 2000) {
			// Props update within 2000ms of our own state change - likely from scrolling
			console.log('Props update from recent scroll feedback, skipping snap:', targetKey);
			return;
		}

		// Check if chapter is already visible in viewport (don't snap if user is already viewing it)
		const targetElement = document.getElementById(`middle-sentinel-${targetKey}`);
		if (targetElement) {
			const rect = targetElement.getBoundingClientRect();
			// Check if chapter is anywhere in the viewport - be very generous
			// If user can see this chapter at all, don't snap
			const isVisible = rect.top >= -200 && rect.top <= window.innerHeight;

			if (isVisible) {
				// Chapter is already visible - don't snap
				console.log('Chapter already visible, skipping snap:', targetKey);
				return;
			}
		}

		// Chapter is not at top position and not from recent scroll - this is a canon explorer click

		console.log('Canon explorer navigation to:', targetKey);

		const targetRef: ChapterReference = {
			book: initialBook,
			chapter: initialChapter,
			key: targetKey
		};

		// Set flag to prevent observer updates during programmatic scroll
		isProgrammaticScroll = true;

		// Check if chapter is already loaded
		if (renderedChapters.has(targetKey)) {
			// Just scroll to it
			setTimeout(() => {
				const targetElement = document.getElementById(`middle-sentinel-${targetKey}`);
				if (targetElement) {
					const container = targetElement.closest('.overflow-y-auto');
					if (container) {
						const offsetTop = targetElement.getBoundingClientRect().top + (container as HTMLElement).scrollTop - 100;
						(container as HTMLElement).scrollTo({
							top: offsetTop,
							behavior: 'instant'
						});
					}
				}
				// Re-enable observer updates after scroll completes
				setTimeout(() => {
					isProgrammaticScroll = false;
				}, 500);
			}, 50);
		} else {
			// Load chapter and surrounding chapters
			const beforeRefs = getChapterRangeFromContent(
				translationContent.value,
				targetRef,
				10,
				'backward',
				protestantBookOrder
			);

			const afterRefs = getChapterRangeFromContent(
				translationContent.value,
				targetRef,
				10,
				'forward',
				protestantBookOrder
			);

			const allRefs = [...beforeRefs, ...afterRefs.slice(1)];
			const newRefs = allRefs.filter(ref => !renderedChapters.has(ref.key));

			loadChapterRange(newRefs).then(() => {
				setTimeout(() => {
					const targetElement = document.getElementById(`middle-sentinel-${targetKey}`);
					if (targetElement) {
						const container = targetElement.closest('.overflow-y-auto');
						if (container) {
							const offsetTop = targetElement.getBoundingClientRect().top + (container as HTMLElement).scrollTop - 100;
							(container as HTMLElement).scrollTo({
								top: offsetTop,
								behavior: 'instant'
							});
						}
					}
					// Re-enable observer updates after scroll completes
					setTimeout(() => {
						isProgrammaticScroll = false;
					}, 500);
				}, 100);

				pruneRenderedChapters();
			});
		}
	});

	// Cleanup on unmount
	onDestroy(() => {
		if (topObserver) topObserver.disconnect();
		if (middleObserver) middleObserver.disconnect();
		if (bottomObserver) bottomObserver.disconnect();
		if (urlUpdateTimer) clearTimeout(urlUpdateTimer);
	});
</script>

<div class="h-full overflow-y-auto">
	{#if renderedChaptersArray.length > 0}
		{#each renderedChaptersArray as chapterData (chapterData.ref.key)}
			<BibleChapterViewer
				chapterData={Option.some(chapterData.chapter)}
				chapterRef={chapterData.ref}
				showBookHeader={chapterData.showBookHeader}
			/>
		{/each}
	{:else}
		<div class="flex items-center justify-center h-full">
			<div class="text-center text-gray-400">
				<h2 class="text-xl font-semibold mb-2">Loading...</h2>
				<p>Please wait while the content loads.</p>
			</div>
		</div>
	{/if}
</div>

<script lang="ts">
	import { BibleBook, getDisplayName, getShortName } from "$lib/book";
	import { protestantBookOrder } from "$lib/translations/bookOrder";
	import type { TranslationContent } from "$lib/translations/translation";
	import { Option } from "effect";
	import BibleCanonExplorer from "$lib/components/bible/BibleCanonExplorer.svelte";
	import BibleSearchResults from "$lib/components/bible/BibleSearchResults.svelte";
	import { onMount } from "svelte";

	let {
		content,
		currentBook,
		currentChapter,
		onChapterSelect,
		shouldFocusSearch = false,
		isMobile = false
	}: {
		content: TranslationContent | null;
		currentBook: BibleBook;
		currentChapter: number;
		onChapterSelect: (book: string, chapter: number) => void;
		shouldFocusSearch?: boolean;
		isMobile?: boolean;
	} = $props();

	let searchInputRef: HTMLInputElement;
	let searchQuery = $state("");
	let isSearchFocused = $state(false);

	function handleSearchFocus() {
		isSearchFocused = true;
	}

	function handleSearchBlur() {
		// Small delay to allow clicks on search results
		setTimeout(() => {
			isSearchFocused = false;
			searchQuery = "";
		}, 150);
	}

	function handleSearchInput(event: Event) {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;
	}

	function handleKeydown(event: KeyboardEvent) {
		// Don't handle shortcuts if typing in an input/textarea
		const target = event.target as HTMLElement;
		const isTyping = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true');

		// Global 'o' key to focus search (only when not typing)
		if (event.key === 'o' && !isSearchFocused && !isTyping && searchInputRef) {
			event.preventDefault();
			searchInputRef.focus();
			return;
		}

		// Handle Escape to blur search field (even when empty)
		if (isSearchFocused && event.key === 'Escape') {
			event.preventDefault();
			searchInputRef?.blur();
			return;
		}

		// Handle navigation within search results
		if (isSearchFocused && searchQuery.trim()) {
			if (event.key === 'ArrowDown') {
				event.preventDefault();
				// This will be handled by the search results component
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				// This will be handled by the search results component
			}
		}
	}

	function handleChapterSelect(bookShort: string, chapter: number) {
		onChapterSelect(bookShort, chapter);
		// Clear search and blur input after selection
		searchQuery = "";
		isSearchFocused = false;
		searchInputRef?.blur();
	}

	// Focus search input when shouldFocusSearch prop changes
	$effect(() => {
		if (shouldFocusSearch && searchInputRef) {
			// Small delay to ensure the component is fully rendered
			setTimeout(() => {
				searchInputRef?.focus();
			}, 100);
		}
	});

	onMount(() => {
		const handleGlobalKeydown = (event: KeyboardEvent) => handleKeydown(event);
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', handleGlobalKeydown);
			return () => window.removeEventListener('keydown', handleGlobalKeydown);
		}
	});
</script>

<div class="h-full flex flex-col">
	<!-- Search Input -->
	<div class="p-4 border-b border-gray-700">
		<div class="relative">
			<input
				bind:this={searchInputRef}
				type="text"
				placeholder={isMobile ? "Search chapters..." : "Search chapters... (o)"}
				value={searchQuery}
				oninput={handleSearchInput}
				onfocus={handleSearchFocus}
				onblur={handleSearchBlur}
				class="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700 transition-colors text-sm"
			/>
			{#if searchQuery}
				<button
					onclick={() => {
						searchQuery = "";
						searchInputRef?.focus();
					}}
					class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
				>
					×
				</button>
			{/if}
		</div>
	</div>

	<!-- Content Area -->
	<div class="flex-1 overflow-hidden">
		{#if content}
			{#if isSearchFocused}
				<!-- Search Results -->
				<BibleSearchResults
					{content}
					{searchQuery}
					onChapterSelect={handleChapterSelect}
				/>
			{:else}
				<!-- Normal Canon Explorer -->
				<div class="h-full overflow-y-auto">
					<BibleCanonExplorer
						{content}
						{currentBook}
						{currentChapter}
						onChapterSelect={handleChapterSelect}
					/>
				</div>
			{/if}
		{:else}
			<div class="flex items-center justify-center h-full text-gray-400">
				<span>Loading...</span>
			</div>
		{/if}
	</div>
</div>
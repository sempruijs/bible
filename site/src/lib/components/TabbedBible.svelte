<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook, getDisplayName } from "$lib/book";
	import Bible from "$lib/bible.svelte";

	let { translation }: { translation: Translation } = $props();

	type BibleTab = {
		id: string;
		currentBook: BibleBook;
		currentChapter: number;
	};

	function getTabTitle(tab: BibleTab): string {
		return `${getDisplayName(tab.currentBook)} ${tab.currentChapter}`;
	}

	let tabs = $state<BibleTab[]>([
		{
			id: "tab1",
			currentBook: BibleBook.John,
			currentChapter: 1
		}
	]);

	let activeTabId = $state<string>("tab1");
	let nextTabId = $state<number>(2);

	// Get active tab reference
	let activeTab = $derived(tabs.find(tab => tab.id === activeTabId));

	// Update a specific tab's state
	function updateTabState(tabId: string, book: BibleBook, chapter: number) {
		tabs = tabs.map(tab => 
			tab.id === tabId 
				? { ...tab, currentBook: book, currentChapter: chapter }
				: tab
		);
	}

	function addTab() {
		const newTab: BibleTab = {
			id: `tab${nextTabId}`,
			currentBook: BibleBook.John,
			currentChapter: 1
		};
		tabs = [...tabs, newTab];
		activeTabId = newTab.id;
		nextTabId++;
	}

	function removeTab(tabId: string) {
		if (tabs.length === 1) return; // Don't allow removing the last tab
		
		tabs = tabs.filter(tab => tab.id !== tabId);
		
		// If we removed the active tab, switch to the first remaining tab
		if (activeTabId === tabId) {
			activeTabId = tabs[0]?.id || "";
		}
	}

	function setActiveTab(tabId: string) {
		activeTabId = tabId;
	}


</script>

<div class="h-full flex flex-col bg-gray-900">
	<!-- Tab Bar -->
	<div class="bg-gray-800 border-b border-gray-700 flex items-center px-4 py-2">
		<div class="flex items-center gap-2 flex-1 overflow-x-auto">
			{#each tabs as tab}
				<div class="flex items-center bg-gray-700 rounded-lg overflow-hidden min-w-0">
					<button
						onclick={() => setActiveTab(tab.id)}
						class="px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap {
							activeTabId === tab.id 
								? 'bg-blue-600 text-white' 
								: 'text-gray-300 hover:bg-gray-600'
						}"
					>
						{getTabTitle(tab)}
					</button>
					{#if tabs.length > 1}
						<button
							onclick={() => removeTab(tab.id)}
							class="px-2 py-2 text-gray-400 hover:text-red-400 hover:bg-gray-600 transition-colors"
							title="Close tab"
						>
							×
						</button>
					{/if}
				</div>
			{/each}
		</div>
		
		<button
			onclick={addTab}
			class="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
			title="Add new tab"
		>
			+ New Tab
		</button>
	</div>

	<!-- Bible Content -->
	<div class="flex-1 overflow-hidden">
		{#if activeTab}
			<Bible 
				{translation} 
				currentBook={activeTab.currentBook}
				currentChapter={activeTab.currentChapter}
				onStateChange={(book, chapter) => updateTabState(activeTabId, book, chapter)}
			/>
		{/if}
	</div>
</div>
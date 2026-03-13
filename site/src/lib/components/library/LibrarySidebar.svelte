<script lang="ts">
	import Sidebar from "$lib/components/ui/Sidebar.svelte";
	import LibraryEntryList from "$lib/components/library/LibraryEntryList.svelte";
	import LibrarySearchResults from "$lib/components/library/LibrarySearchResults.svelte";

	type LibraryEntry = {
		path: string;
		name: string;
		language: string;
		author: string;
	};

	let {
		entries,
		currentDocument,
		onEntrySelect,
		shouldFocusSearch = false,
		isMobile = false,
	}: {
		entries: LibraryEntry[];
		currentDocument: string;
		onEntrySelect: (path: string) => void;
		shouldFocusSearch?: boolean;
		isMobile?: boolean;
	} = $props();

	let searchQuery = $state("");
	let isSearchFocused = $state(false);
	let sidebarRef: Sidebar;

	function handleEntrySelect(path: string) {
		onEntrySelect(path);
		// Clear search and blur after selection
		sidebarRef?.blurSearch();
	}
</script>

<Sidebar
	bind:this={sidebarRef}
	searchPlaceholder="Search documents..."
	{isMobile}
	{shouldFocusSearch}
	bind:searchQuery
	bind:isSearchFocused
>
	{#snippet children()}
		<LibraryEntryList
			{entries}
			{currentDocument}
			onEntrySelect={handleEntrySelect}
		/>
	{/snippet}

	{#snippet searchResults()}
		<LibrarySearchResults
			{entries}
			{searchQuery}
			onEntrySelect={handleEntrySelect}
		/>
	{/snippet}
</Sidebar>

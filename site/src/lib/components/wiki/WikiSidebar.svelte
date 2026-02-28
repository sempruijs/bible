<script lang="ts">
	import Sidebar from "$lib/components/ui/Sidebar.svelte";
	import WikiEntryList from "$lib/components/wiki/WikiEntryList.svelte";
	import WikiSearchResults from "$lib/components/wiki/WikiSearchResults.svelte";

	let {
		entries,
		currentPage,
		onEntrySelect,
		shouldFocusSearch = false,
		isMobile = false,
	}: {
		entries: string[];
		currentPage: string;
		onEntrySelect: (page: string) => void;
		shouldFocusSearch?: boolean;
		isMobile?: boolean;
	} = $props();

	let searchQuery = $state("");
	let isSearchFocused = $state(false);
	let sidebarRef: Sidebar;

	function handleEntrySelect(page: string) {
		onEntrySelect(page);
		// Clear search and blur after selection
		sidebarRef?.blurSearch();
	}
</script>

<Sidebar
	bind:this={sidebarRef}
	searchPlaceholder="Search entries..."
	{isMobile}
	{shouldFocusSearch}
	bind:searchQuery
	bind:isSearchFocused
>
	{#snippet children()}
		<WikiEntryList
			{entries}
			{currentPage}
			onEntrySelect={handleEntrySelect}
		/>
	{/snippet}

	{#snippet searchResults()}
		<WikiSearchResults
			{entries}
			{searchQuery}
			onEntrySelect={handleEntrySelect}
		/>
	{/snippet}
</Sidebar>

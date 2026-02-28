<script lang="ts">
	import SearchResults from "$lib/components/ui/SearchResults.svelte";

	let {
		entries,
		searchQuery = "",
		onEntrySelect,
	}: {
		entries: string[];
		searchQuery: string;
		onEntrySelect: (page: string) => void;
	} = $props();

	function filterFn(entry: string, query: string): boolean {
		return entry.toLowerCase().includes(query);
	}

	function handleSelect(entry: string) {
		onEntrySelect(entry);
	}
</script>

<SearchResults
	items={entries}
	{searchQuery}
	{filterFn}
	onSelect={handleSelect}
	emptyMessage="No matches found"
	emptyHint="Try a different search term"
	placeholderMessage="Search wiki entries"
	placeholderHint="Type to filter"
>
	{#snippet resultSnippet({ item })}
		<span class="text-sm">{item}</span>
	{/snippet}
</SearchResults>

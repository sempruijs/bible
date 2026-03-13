<script lang="ts">
	import SearchResults from "$lib/components/ui/SearchResults.svelte";

	type LibraryEntry = {
		path: string;
		name: string;
		language: string;
		author: string;
	};

	let {
		entries,
		searchQuery = "",
		onEntrySelect,
	}: {
		entries: LibraryEntry[];
		searchQuery: string;
		onEntrySelect: (path: string) => void;
	} = $props();

	// Convert name to display format
	function toDisplayName(name: string): string {
		return name
			.replace(/-/g, ' ')
			.replace(/\b\w/g, (c) => c.toUpperCase());
	}

	function filterFn(entry: LibraryEntry, query: string): boolean {
		const displayName = toDisplayName(entry.name).toLowerCase();
		const authorLower = entry.author.toLowerCase();
		return displayName.includes(query) || authorLower.includes(query);
	}

	function handleSelect(entry: LibraryEntry) {
		onEntrySelect(entry.path);
	}
</script>

<SearchResults
	items={entries}
	{searchQuery}
	{filterFn}
	onSelect={handleSelect}
	emptyMessage="No matches found"
	emptyHint="Try a different search term"
	placeholderMessage="Search documents"
	placeholderHint="Type to filter"
>
	{#snippet resultSnippet({ item })}
		<div class="flex flex-col">
			<span class="text-sm">{toDisplayName(item.name)}</span>
			<span class="text-xs text-gray-500">{item.author}</span>
		</div>
	{/snippet}
</SearchResults>

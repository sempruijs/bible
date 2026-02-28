<script lang="ts">
	import type { WikiState } from "$lib/app";
	import WikiReader from "$lib/components/wiki/WikiReader.svelte";

	let {
		wikiState,
		isActive = false,
		onNavigate,
		onToggleSidebar,
	}: {
		wikiState: WikiState;
		isActive?: boolean;
		onNavigate?: (page: string) => void;
		onToggleSidebar?: () => void;
	} = $props();
</script>

<WikiReader
	page={wikiState.page}
	showSidebar={wikiState.showSidebar}
	{isActive}
	{onNavigate}
	{onToggleSidebar}
/>

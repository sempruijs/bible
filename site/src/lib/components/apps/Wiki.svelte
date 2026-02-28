<script lang="ts">
	import type { WikiState } from "$lib/app";
	import WikiReader from "$lib/components/wiki/WikiReader.svelte";

	let {
		wikiState,
		onNavigate,
	}: {
		wikiState: WikiState;
		onNavigate?: (page: string) => void;
	} = $props();
</script>

<WikiReader
	page={wikiState.page}
	{onNavigate}
/>

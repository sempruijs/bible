<script lang="ts">
	import type { WikiState } from "$lib/app";
	import type { Translation } from "$lib/translations/translation";
	import WikiReader from "$lib/components/wiki/WikiReader.svelte";

	let {
		wikiState,
		isActive = false,
		onNavigate,
		onToggleSidebar,
		onOpenInNewTab,
		translation,
	}: {
		wikiState: WikiState;
		isActive?: boolean;
		onNavigate?: (page: string) => void;
		onToggleSidebar?: () => void;
		onOpenInNewTab?: (path: string) => void;
		translation?: Translation;
	} = $props();
</script>

<WikiReader
	page={wikiState.page}
	showSidebar={wikiState.showSidebar}
	{isActive}
	{onNavigate}
	{onToggleSidebar}
	{onOpenInNewTab}
	{translation}
/>

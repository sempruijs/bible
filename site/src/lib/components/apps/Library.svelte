<script lang="ts">
	import type { LibraryState } from "$lib/app";
	import LibraryReader from "$lib/components/library/LibraryReader.svelte";

	let {
		libraryState,
		isActive = false,
		onNavigate,
		onToggleSidebar,
		onOpenInNewTab,
	}: {
		libraryState: LibraryState;
		isActive?: boolean;
		onNavigate?: (document: string) => void;
		onToggleSidebar?: () => void;
		onOpenInNewTab?: (path: string) => void;
	} = $props();
</script>

<LibraryReader
	document={libraryState.document}
	showSidebar={libraryState.showSidebar}
	{isActive}
	{onNavigate}
	{onToggleSidebar}
	{onOpenInNewTab}
/>

<script lang="ts">
	import type { LibraryState } from "$lib/app";
	import type { Translation } from "$lib/translations/translation";
	import LibraryReader from "$lib/components/library/LibraryReader.svelte";

	let {
		libraryState,
		isActive = false,
		onNavigate,
		onToggleSidebar,
		onOpenInNewTab,
		translation,
	}: {
		libraryState: LibraryState;
		isActive?: boolean;
		onNavigate?: (document: string) => void;
		onToggleSidebar?: () => void;
		onOpenInNewTab?: (path: string) => void;
		translation?: Translation;
	} = $props();
</script>

<LibraryReader
	document={libraryState.document}
	showSidebar={libraryState.showSidebar}
	{isActive}
	{onNavigate}
	{onToggleSidebar}
	{onOpenInNewTab}
	{translation}
/>

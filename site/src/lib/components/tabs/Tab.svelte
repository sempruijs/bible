<script lang="ts">
	import type { TabState } from "$lib/app";
	import App from "$lib/components/apps/App.svelte";

	let {
		app,
		isActive = false,
		onScrollStateChange,
		onSelectionChange,
		onAppChoice,
		onTabClose,
	}: {
		app: TabState;
		isActive?: boolean;
		onScrollStateChange?: (app: TabState) => void;
		onSelectionChange?: (app: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
		onTabClose?: () => void;
	} = $props();
</script>

<App
	tabState={app}
	{isActive}
	onStateChange={onScrollStateChange}
	{onSelectionChange}
	{onAppChoice}
	{onTabClose}
/>

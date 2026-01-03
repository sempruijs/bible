<script lang="ts">
	import type { App } from "$lib/app";
	import Tab from "./Tab.svelte";

	let { 
		activeApp,
		onStateChange,
		onAppChoice
	}: { 
		activeApp: App | undefined;
		onStateChange?: (app: App) => void;
		onAppChoice?: (appType: "bible" | "about") => void;
	} = $props();
</script>

<div class="flex-1 overflow-hidden">
	{#if activeApp}
		<Tab 
			app={activeApp}
			{onStateChange}
			{onAppChoice}
		/>
	{/if}
</div>
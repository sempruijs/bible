<script lang="ts">
	import type { App } from "$lib/app";
	import Tab from "./Tab.svelte";

	let { 
		apps,
		activeTabId,
		onStateChange,
		onAppChoice,
		getTabId
	}: { 
		apps: App[];
		activeTabId: string;
		onStateChange?: (app: App) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
		getTabId: (app: App) => string;
	} = $props();
</script>

<div class="flex-1 overflow-hidden">
	{#each apps as app (getTabId(app))}
		<div 
			class="h-full w-full {getTabId(app) === activeTabId ? 'block' : 'hidden'}"
			aria-hidden={getTabId(app) !== activeTabId}
		>
			<Tab 
				{app}
				{onStateChange}
				{onAppChoice}
			/>
		</div>
	{/each}
</div>
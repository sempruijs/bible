<script lang="ts">
	import type { TabState } from "$lib/app";
	import TabComponent from "./Tab.svelte";

	let {
		tabs,
		activeTabId,
		onStateChange,
		onAppChoice,
		getTabId
	}: {
		tabs: TabState[];
		activeTabId: string;
		onStateChange?: (tab: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
		getTabId: (tab: TabState) => string;
	} = $props();
</script>

<div class="flex-1 overflow-hidden">
	{#each tabs as tab (getTabId(tab))}
		<div 
			class="h-full w-full {getTabId(tab) === activeTabId ? 'block' : 'hidden'}"
			aria-hidden={getTabId(tab) !== activeTabId}
		>
			<TabComponent 
				app={tab}
				{onStateChange}
				{onAppChoice}
			/>
		</div>
	{/each}
</div>
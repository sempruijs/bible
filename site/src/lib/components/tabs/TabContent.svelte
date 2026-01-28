<script lang="ts">
	import type { TabState } from "$lib/app";
	import TabComponent from "./Tab.svelte";

	let {
		tabs,
		activeTabId,
		onStateChange,
		onAppChoice,
		onTabRemove
	}: {
		tabs: TabState[];
		activeTabId: string;
		onStateChange?: (tab: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch") => void;
		onTabRemove?: (tabId: string) => void;
	} = $props();
</script>

<div class="flex-1 overflow-hidden">
	{#each tabs as tab (tab.id)}
		<div
			class="h-full w-full {tab.id === activeTabId ? 'block' : 'hidden'}"
			aria-hidden={tab.id !== activeTabId}
		>
			{#key tab.id}
				<TabComponent
					app={tab}
					isActive={tab.id === activeTabId}
					{onStateChange}
					{onAppChoice}
					onTabClose={() => onTabRemove?.(tab.id)}
				/>
			{/key}
		</div>
	{/each}
</div>
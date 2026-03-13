<script lang="ts">
	import type { TabState } from "$lib/app";
	import TabComponent from "./Tab.svelte";

	let {
		tabs,
		activeTabId,
		onScrollStateChange,
		onSelectionChange,
		onAppChoice,
		onTabRemove,
		onWikiLinkClick
	}: {
		tabs: TabState[];
		activeTabId: string;
		onScrollStateChange?: (tab: TabState) => void;
		onSelectionChange?: (tab: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch" | "wiki" | "library") => void;
		onTabRemove?: (tabId: string) => void;
		onWikiLinkClick?: (page: string) => void;
	} = $props();
</script>

<div class="flex-1 overflow-hidden pb-[env(safe-area-inset-bottom)]">
	{#each tabs as tab (tab.id)}
		<div
			class="h-full w-full {tab.id === activeTabId ? 'block' : 'hidden'}"
			aria-hidden={tab.id !== activeTabId}
		>
			{#key tab.id}
				<TabComponent
					app={tab}
					isActive={tab.id === activeTabId}
					{onScrollStateChange}
					{onSelectionChange}
					{onAppChoice}
					onTabClose={() => onTabRemove?.(tab.id)}
					{onWikiLinkClick}
				/>
			{/key}
		</div>
	{/each}
</div>
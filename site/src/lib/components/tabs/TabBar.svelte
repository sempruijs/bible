<script lang="ts">
	import type { TabState } from "$lib/app";
	import { App } from "$lib/app";

	let {
		tabs,
		activeTabId,
		onTabSelect,
		onTabRemove,
		onAddTab,
		isMobile = false
	}: {
		tabs: TabState[];
		activeTabId: string;
		onTabSelect: (tabId: string) => void;
		onTabRemove: (tabId: string) => void;
		onAddTab: () => void;
		isMobile?: boolean;
	} = $props();
</script>

<div class="bg-gray-800 border-b border-gray-700 flex items-center px-4 py-2">
	<div class="flex items-center gap-2 flex-1 overflow-x-auto" title={isMobile ? "Navigate tabs" : "Navigate tabs: (n) next, (p) previous"}>
		{#each tabs as tab}
			{@const tabId = tab.id}
			{@const tabTitle = App.getTitle(tab.app)}
			<div class="flex items-center bg-gray-700 rounded-lg overflow-hidden min-w-0">
				<button
					onclick={() => onTabSelect(tabId)}
					class="px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap {
						activeTabId === tabId
							? 'bg-blue-600 text-white'
							: 'text-gray-300 hover:bg-gray-600'
					}"
				>
					{tabTitle}
				</button>
				{#if tabs.length > 1}
					<button
						onclick={() => onTabRemove(tabId)}
						class="px-2 py-2 text-gray-400 hover:text-red-400 hover:bg-gray-600 transition-colors"
						title={isMobile ? "Close tab" : "Close tab (w)"}
					>
						×
					</button>
				{/if}
			</div>
		{/each}
		<button
			onclick={onAddTab}
			class="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-gray-300 text-lg rounded-lg transition-colors flex-shrink-0"
			title={isMobile ? "Add new tab" : "Add new tab (t)"}
		>
			+
		</button>
	</div>
</div>
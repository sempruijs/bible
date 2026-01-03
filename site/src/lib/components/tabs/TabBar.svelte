<script lang="ts">
	import type { App } from "$lib/app";
	import { getDisplayName, getTabId } from "$lib/app";

	let { 
		apps,
		activeTabId,
		onTabSelect,
		onTabRemove,
		onAddTab
	}: { 
		apps: App[]; 
		activeTabId: string;
		onTabSelect: (tabId: string) => void;
		onTabRemove: (tabId: string) => void;
		onAddTab: () => void;
	} = $props();
</script>

<div class="bg-gray-800 border-b border-gray-700 flex items-center px-4 py-2">
	<div class="flex items-center gap-2 flex-1 overflow-x-auto">
		{#each apps as app}
			{@const tabId = getTabId(app)}
			{@const tabTitle = getDisplayName(app)}
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
				{#if apps.length > 1}
					<button
						onclick={() => onTabRemove(tabId)}
						class="px-2 py-2 text-gray-400 hover:text-red-400 hover:bg-gray-600 transition-colors"
						title="Close tab"
					>
						×
					</button>
				{/if}
			</div>
		{/each}
	</div>
	
	<button
		onclick={onAddTab}
		class="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
		title="Add new tab"
	>
		+ New Tab
	</button>
</div>
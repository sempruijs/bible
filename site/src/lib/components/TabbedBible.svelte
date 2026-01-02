<script lang="ts">
	import type { Translation } from "$lib/translations/translation";
	import { BibleBook } from "$lib/book";
	import { type App, Bible, BibleState, getDisplayName } from "$lib/app";
	import Tab from "$lib/components/tab.svelte";

	let { translation }: { translation: Translation } = $props();

	// Store apps instead of just BibleStates
	let apps = $state<App[]>([
		Bible({ bibleState: BibleState({
			id: "tab1",
			currentBook: BibleBook.John,
			currentChapter: 1,
			translation: translation,
			showCanonExplorer: true
		}) })
	]);

	let activeTabId = $state<string>("tab1");
	let nextTabId = $state<number>(2);

	// Get active app reference
	let activeApp = $derived(apps.find(app => {
		if (app._tag === "Bible") {
			return app.bibleState.id === activeTabId;
		}
		// For About tab, we could use a special ID or handle differently
		return false;
	}));

	// Update a specific app's state
	function updateAppState(app: App) {
		if (app._tag === "Bible") {
			apps = apps.map(existingApp => 
				existingApp._tag === "Bible" && existingApp.bibleState.id === app.bibleState.id
					? app
					: existingApp
			);
		}
	}

	function addTab() {
		const newApp = Bible({ bibleState: BibleState({
			id: `tab${nextTabId}`,
			currentBook: BibleBook.John,
			currentChapter: 1,
			translation: translation,
			showCanonExplorer: true
		}) });
		apps = [...apps, newApp];
		activeTabId = `tab${nextTabId}`;
		nextTabId++;
	}

	function removeTab(tabId: string) {
		if (apps.length === 1) return; // Don't allow removing the last tab
		
		apps = apps.filter(app => {
			if (app._tag === "Bible") {
				return app.bibleState.id !== tabId;
			}
			return true; // Keep non-Bible apps for now
		});
		
		// If we removed the active tab, switch to the first remaining tab
		if (activeTabId === tabId) {
			const firstApp = apps[0];
			if (firstApp?._tag === "Bible") {
				activeTabId = firstApp.bibleState.id;
			}
		}
	}

	function setActiveTab(tabId: string) {
		activeTabId = tabId;
	}


</script>

<div class="h-full flex flex-col bg-gray-900">
	<!-- Tab Bar -->
	<div class="bg-gray-800 border-b border-gray-700 flex items-center px-4 py-2">
		<div class="flex items-center gap-2 flex-1 overflow-x-auto">
			{#each apps as app}
				{@const tabId = app._tag === "Bible" ? app.bibleState.id : "about"}
				{@const tabTitle = getDisplayName(app)}
				<div class="flex items-center bg-gray-700 rounded-lg overflow-hidden min-w-0">
					<button
						onclick={() => setActiveTab(tabId)}
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
							onclick={() => removeTab(tabId)}
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
			onclick={addTab}
			class="ml-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors"
			title="Add new tab"
		>
			+ New Tab
		</button>
	</div>

	<!-- App Content -->
	<div class="flex-1 overflow-hidden">
		{#if activeApp}
			<Tab 
				app={activeApp}
				onStateChange={updateAppState}
			/>
		{/if}
	</div>
</div>
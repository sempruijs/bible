<script lang="ts">
	import "../app.css";
	import AppContainer from "$lib/components/AppContainer.svelte";
	import type { LayoutData } from "./$types";

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<div class="h-screen bg-gray-900 text-white">
	<div class="h-full">
		{#if data.bibleData}
			<AppContainer translation={data.bibleData} />
		{:else}
			<div class="flex items-center justify-center h-full">
				<div class="text-center">
					<p class="text-xl text-gray-400">Failed to load Bible data</p>
					<p class="text-sm text-gray-500 mt-2">Please refresh the page</p>
				</div>
			</div>
		{/if}
	</div>
</div>

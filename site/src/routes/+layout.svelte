<script lang="ts">
	import "../app.css";
	import { Effect } from "effect";
	import { onMount } from "svelte";
	import { page } from "$app/stores";
	import CanonExplorer from "$lib/components/CanonExplorer.svelte";
	import type { LayoutData } from "./$types";

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<div class="h-screen bg-gray-900 text-white flex">
	<!-- Sidebar -->
	<div class="w-80 bg-gray-800 border-r border-gray-700 h-full overflow-y-auto flex-shrink-0">
		<div class="p-4">
			<h1 class="text-xl font-bold mb-4 text-gray-100">Bible Computer</h1>
			<CanonExplorer translation={data.bibleData} currentPath={$page.url.pathname} />
		</div>
	</div>
	
	<!-- Main content -->
	<div class="flex-1 h-full overflow-y-auto">
		{@render children()}
	</div>
</div>

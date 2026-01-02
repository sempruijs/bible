<script lang="ts">
	import "../app.css";
	import TabbedBible from "$lib/components/TabbedBible.svelte";
	import type { LayoutData } from "./$types";

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<div class="h-screen bg-gray-900 text-white">
	<div class="h-full">
		<TabbedBible translation={data.bibleData} />
	</div>
</div>

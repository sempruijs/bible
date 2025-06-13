<script lang="ts">
	import bibleData from '$lib/translations/stv.json';
	import { type Bible } from "$lib/types";

	let { children } = $props();
	import Sidebar from '$lib/components/Sidebar.svelte';

	const bible: Bible = bibleData;
</script>

<div>
	{@render children()}
</div>


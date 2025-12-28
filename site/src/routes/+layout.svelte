<script lang="ts">
	import "../app.css";
	import { Effect } from "effect";
	import { onMount } from "svelte";

	let { children } = $props();
</script>

<div class="min-h-screen bg-[#0a2540] text-white">
	{@render children()}
</div>

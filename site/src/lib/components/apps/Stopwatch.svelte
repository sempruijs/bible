<script lang="ts">
	import type { StopwatchState } from "$lib/app";
	import StopwatchComponent from "$lib/components/ui/Stopwatch.svelte";

	let {
		stopwatchState,
		isActive = false,
		onStateChange,
	}: {
		stopwatchState: StopwatchState;
		isActive?: boolean;
		onStateChange?: (newState: StopwatchState) => void;
	} = $props();
</script>

<StopwatchComponent
	{stopwatchState}
	{isActive}
	{onStateChange}
/>

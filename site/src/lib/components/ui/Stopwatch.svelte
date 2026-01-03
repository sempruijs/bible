<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import type { StopwatchState } from "$lib/app";

	let { 
		stopwatchState,
		onStateChange 
	}: { 
		stopwatchState: StopwatchState;
		onStateChange?: (newState: StopwatchState) => void;
	} = $props();

	let intervalId: number | undefined;
	let startTime = $state<number>(0);
	let currentTime = $state<number>(stopwatchState.elapsedTime);

	// Format time as MM:SS.mmm
	function formatTime(milliseconds: number): string {
		const totalSeconds = Math.floor(milliseconds / 1000);
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		const ms = Math.floor((milliseconds % 1000) / 10); // Show centiseconds
		
		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
	}

	function startStopwatch() {
		if (!stopwatchState.isRunning) {
			startTime = Date.now() - stopwatchState.elapsedTime;
			
			intervalId = setInterval(() => {
				currentTime = Date.now() - startTime;
			}, 10) as unknown as number; // Update every 10ms for smooth display
			
			updateState({
				...stopwatchState,
				isRunning: true
			});
		}
	}

	function stopStopwatch() {
		if (stopwatchState.isRunning && intervalId) {
			clearInterval(intervalId);
			intervalId = undefined;
			
			updateState({
				...stopwatchState,
				elapsedTime: currentTime,
				isRunning: false
			});
		}
	}

	function resetStopwatch() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = undefined;
		}
		
		currentTime = 0;
		startTime = 0;
		
		updateState({
			...stopwatchState,
			elapsedTime: 0,
			isRunning: false
		});
	}

	function toggleStopwatch() {
		if (stopwatchState.isRunning) {
			stopStopwatch();
		} else {
			startStopwatch();
		}
	}

	function updateState(newState: StopwatchState) {
		onStateChange?.(newState);
	}

	// Sync with prop changes
	$effect(() => {
		currentTime = stopwatchState.elapsedTime;
		
		if (stopwatchState.isRunning && !intervalId) {
			startStopwatch();
		} else if (!stopwatchState.isRunning && intervalId) {
			clearInterval(intervalId);
			intervalId = undefined;
		}
	});

	// Cleanup on unmount
	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div class="h-full flex items-center justify-center bg-gray-900">
	<div class="text-center max-w-md w-full mx-4">
		<!-- Stopwatch Display -->
		<div class="mb-8">
			<h1 class="text-2xl font-bold text-gray-100 mb-6">Stopwatch</h1>
			<div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
				<div class="text-6xl font-mono font-bold text-blue-400 mb-4">
					{formatTime(currentTime)}
				</div>
				<div class="text-sm text-gray-400">
					{stopwatchState.isRunning ? 'Running' : 'Stopped'}
				</div>
			</div>
		</div>

		<!-- Control Buttons -->
		<div class="flex gap-4 justify-center">
			<button
				onclick={toggleStopwatch}
				class="px-6 py-3 rounded-lg font-semibold transition-all duration-200 {
					stopwatchState.isRunning 
						? 'bg-red-600 hover:bg-red-700 text-white' 
						: 'bg-green-600 hover:bg-green-700 text-white'
				}"
			>
				{stopwatchState.isRunning ? 'Stop' : 'Start'}
			</button>

			<button
				onclick={resetStopwatch}
				class="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg font-semibold transition-all duration-200"
			>
				Reset
			</button>
		</div>

		<!-- Additional Info -->
		<div class="mt-6 text-sm text-gray-500">
			<p>Precision: 10ms intervals</p>
		</div>
	</div>
</div>
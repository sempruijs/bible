<script lang="ts">
	import { Option } from "effect";
	import type { Chapter } from "$lib/translations/translation";

	let {
		chapterData = Option.none()
	}: {
		chapterData: Option.Option<Chapter>;
	} = $props();
</script>

<div class="flex-1 h-full overflow-y-auto">
	{#if Option.isSome(chapterData)}
		<div class="p-8">
			<div class="max-w-4xl mx-auto">
				<header class="mb-8">
					<h1 class="text-3xl font-bold text-gray-100 mb-2">{Option.getOrThrow(chapterData).name}</h1>
					<div class="h-1 w-20 bg-blue-500 rounded"></div>
				</header>
				
				<div class="space-y-4">
					{#each Option.getOrThrow(chapterData).verses as verse}
						<div class="flex gap-4 group">
							<span class="text-blue-400 font-medium text-sm mt-1 min-w-[2rem] text-right">
								{verse.verse}
							</span>
							<span class="text-gray-200 leading-relaxed">
								{verse.text}
							</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{:else}
		<div class="flex items-center justify-center h-full">
			<div class="text-center text-gray-400">
				<h2 class="text-xl font-semibold mb-2">Select a Chapter</h2>
				<p>Choose a book and chapter from the sidebar to begin reading.</p>
			</div>
		</div>
	{/if}
</div>
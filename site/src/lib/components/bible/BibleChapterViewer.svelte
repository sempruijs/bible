<script lang="ts">
	import { Option } from "effect";
	import type { Chapter } from "$lib/translations/translation";
	import { BibleBook, getDisplayName } from "$lib/book";

	let {
		chapterData = Option.none(),
		chapterRef = undefined,
		showBookHeader = false
	}: {
		chapterData: Option.Option<Chapter>;
		chapterRef?: { book: BibleBook; chapter: number; key: string };
		showBookHeader?: boolean;
	} = $props();

	// Generate chapter key for sentinels
	const chapterKey = $derived(
		chapterRef ? chapterRef.key : Option.isSome(chapterData) ? Option.getOrThrow(chapterData).name.toLowerCase().replace(/\s+/g, '-') : 'unknown'
	);
</script>

<div class="flex-1 w-full">
	{#if Option.isSome(chapterData)}
		<!-- Top sentinel for IntersectionObserver -->
		<div id="top-sentinel-{chapterKey}" data-sentinel="top" data-chapter-key={chapterKey} style="height: 1px; pointer-events: none;"></div>

		<div class="p-8">
			<div class="max-w-4xl mx-auto">
				<!-- Book header (when crossing book boundaries) -->
				{#if showBookHeader && chapterRef}
					<header class="mb-6 text-center">
						<h1 class="text-4xl font-bold text-gray-100 uppercase tracking-wide">{getDisplayName(chapterRef.book)}</h1>
						<div class="h-1 w-32 bg-blue-500 rounded mx-auto mt-3"></div>
					</header>
				{/if}

				<!-- Chapter number header -->
				{#if chapterRef}
					<div class="text-center mb-8">
						<h2 class="text-xl text-gray-400 font-light">— {chapterRef.chapter} —</h2>
					</div>
				{/if}

				<!-- Middle sentinel for IntersectionObserver (active chapter detection) -->
				<div id="middle-sentinel-{chapterKey}" data-sentinel="middle" data-chapter-key={chapterKey} style="height: 1px; pointer-events: none;"></div>

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

		<!-- Bottom sentinel for IntersectionObserver -->
		<div id="bottom-sentinel-{chapterKey}" data-sentinel="bottom" data-chapter-key={chapterKey} style="height: 1px; pointer-events: none;"></div>
	{:else}
		<div class="flex items-center justify-center h-full">
			<div class="text-center text-gray-400">
				<h2 class="text-xl font-semibold mb-2">Select a Chapter</h2>
				<p>Choose a book and chapter from the sidebar to begin reading.</p>
			</div>
		</div>
	{/if}
</div>
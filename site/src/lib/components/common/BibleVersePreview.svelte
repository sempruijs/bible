<script lang="ts">
	import { onMount } from "svelte";
	import { Option, Effect, Exit, pipe } from "effect";
	import type { Translation } from "$lib/translations/translation";
	import type { TranslationContent } from "$lib/translations/translation";
	import { loadTranslationContent } from "$lib/translations/loadTranslationContent";
	import * as NavigationService from "$lib/services/NavigationService";
	import { getDisplayName } from "$lib/book";

	let {
		path,
		x,
		y,
		translation,
		onClose,
	}: {
		path: string;
		x: number;
		y: number;
		translation: Translation;
		onClose: () => void;
	} = $props();

	let content = $state<Option.Option<TranslationContent>>(Option.none());
	let loading = $state(true);
	let error = $state<Option.Option<string>>(Option.none());
	let verseText = $state<string>("");
	let reference = $state<string>("");

	// Parse the path and extract verse info
	function parseAndLoadVerse() {
		const pathWithoutSlash = path.startsWith('/') ? path.slice(1) : path;
		const selectionOption = NavigationService.parseReferenceUrl(pathWithoutSlash);

		pipe(
			selectionOption,
			Option.match({
				onNone: () => {
					error = Option.some("Invalid reference");
					loading = false;
				},
				onSome: (selection) => {
					// Build reference string
					const bookName = getDisplayName(selection.start.book);
					reference = pipe(
						selection.start.verse,
						Option.match({
							onSome: (v) => `${bookName} ${selection.start.chapter}:${v}`,
							onNone: () => `${bookName} ${selection.start.chapter}`
						})
					);

					// Load translation content and extract verse
					Effect.runPromiseExit(loadTranslationContent(translation))
						.then((exit) => {
							Exit.match(exit, {
								onFailure: (cause) => {
									error = Option.some("Failed to load");
									loading = false;
									console.error("Failed to load translation:", cause);
								},
								onSuccess: (translationContent) => {
									content = Option.some(translationContent);

									// Find the book
									const bookOption = Option.fromNullable(
										translationContent.books.find(b => b.name === selection.start.book)
									);

									pipe(
										bookOption,
										Option.match({
											onNone: () => {
												error = Option.some("Book not found");
												loading = false;
											},
											onSome: (book) => {
												// Find the chapter
												const chapterOption = Option.fromNullable(
													book.chapters.find(c => c.chapter === selection.start.chapter)
												);

												pipe(
													chapterOption,
													Option.match({
														onNone: () => {
															error = Option.some("Chapter not found");
															loading = false;
														},
														onSome: (chapter) => {
															// Get verse(s)
															pipe(
																selection.start.verse,
																Option.match({
																	onSome: (startVerseNum) => {
																		// Single verse or verse range
																		const endVerseNum = pipe(
																			selection.end,
																			Option.flatMap(e => e.verse),
																			Option.getOrElse(() => startVerseNum)
																		);

																		const verses = chapter.verses.filter(v =>
																			v.verse >= startVerseNum && v.verse <= endVerseNum
																		);

																		if (verses.length === 0) {
																			error = Option.some("Verse not found");
																		} else {
																			verseText = verses.map(v => `${v.verse} ${v.text}`).join(" ");
																			if (startVerseNum !== endVerseNum) {
																				reference = `${bookName} ${selection.start.chapter}:${startVerseNum}-${endVerseNum}`;
																			}
																		}
																	},
																	onNone: () => {
																		// Whole chapter - show first few verses
																		const preview = chapter.verses.slice(0, 3);
																		verseText = preview.map(v => `${v.verse} ${v.text}`).join(" ");
																		if (chapter.verses.length > 3) {
																			verseText += "...";
																		}
																	}
																})
															);

															loading = false;
														}
													})
												);
											}
										})
									);
								}
							});
						});
				}
			})
		);
	}

	onMount(() => {
		parseAndLoadVerse();
	});

	// Position the tooltip, keeping it on screen
	let tooltipStyle = $derived(() => {
		const maxWidth = 320;
		const padding = 10;

		// Adjust x to keep tooltip on screen
		let adjustedX = x;
		if (typeof window !== 'undefined') {
			if (x + maxWidth + padding > window.innerWidth) {
				adjustedX = window.innerWidth - maxWidth - padding;
			}
		}

		// Position above or below based on available space
		let adjustedY = y + 20; // Below cursor by default
		if (typeof window !== 'undefined' && y + 200 > window.innerHeight) {
			adjustedY = y - 120; // Above cursor if near bottom
		}

		return `left: ${adjustedX}px; top: ${adjustedY}px;`;
	});

	// Derive error text for display
	let errorText = $derived(Option.getOrNull(error));
</script>

<div
	class="fixed z-50 max-w-xs bg-gray-800 border border-gray-600 rounded-lg shadow-xl p-3"
	style={tooltipStyle()}
	onmouseleave={onClose}
>
	{#if loading}
		<div class="text-gray-400 text-sm">Loading...</div>
	{:else if Option.isSome(error)}
		<div class="text-red-400 text-sm">{errorText}</div>
	{:else}
		<div class="text-blue-400 text-xs font-semibold mb-1">{reference}</div>
		<div class="text-gray-200 text-sm leading-relaxed">{verseText}</div>
	{/if}
</div>

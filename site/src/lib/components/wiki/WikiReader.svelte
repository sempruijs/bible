<script lang="ts">
	import { onMount } from "svelte";

	let {
		page,
		onNavigate,
	}: {
		page: string;
		onNavigate?: (page: string) => void;
	} = $props();

	let content = $state<string>("");
	let loading = $state<boolean>(true);
	let error = $state<string | null>(null);

	// Convert page name to proper case for fetching (e.g., "abraham" -> "Abraham")
	function toProperCase(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}

	// Fetch wiki content from GitHub
	async function fetchWikiContent(pageName: string) {
		loading = true;
		error = null;

		const properName = toProperCase(pageName);
		const url = `https://raw.githubusercontent.com/biblecomputer/wiki/main/${properName}.md`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				if (response.status === 404) {
					error = `Page "${properName}" not found`;
				} else {
					error = `Failed to fetch page: ${response.statusText}`;
				}
				content = "";
			} else {
				content = await response.text();
			}
		} catch (err) {
			error = `Failed to load wiki page: ${err}`;
			content = "";
		} finally {
			loading = false;
		}
	}

	// Parse Obsidian-style links [[PageName]] and convert to clickable links
	function parseWikiLinks(text: string): string {
		return text.replace(/\[\[([^\]]+)\]\]/g, (_, pageName) => {
			return `<a href="/wiki/${pageName.toLowerCase()}" class="wiki-link text-blue-400 hover:text-blue-300 underline cursor-pointer" data-wiki-page="${pageName}">${pageName}</a>`;
		});
	}

	// Simple markdown to HTML conversion
	function renderMarkdown(text: string): string {
		let html = text;

		// Parse wiki links first
		html = parseWikiLinks(html);

		// Headers
		html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-100 mt-6 mb-3">$1</h3>');
		html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-100 mt-8 mb-4">$1</h2>');
		html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gray-100 mt-8 mb-4">$1</h1>');

		// Bold and italic
		html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
		html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
		html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

		// Links (standard markdown)
		html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>');

		// Line breaks - convert double newlines to paragraphs
		html = html.split(/\n\n+/).map(para => {
			para = para.trim();
			if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<ol')) {
				return para;
			}
			return `<p class="text-gray-200 leading-relaxed mb-4">${para.replace(/\n/g, '<br>')}</p>`;
		}).join('\n');

		return html;
	}

	// Handle click events on wiki links
	function handleContentClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (target.classList.contains('wiki-link')) {
			event.preventDefault();
			const pageName = target.getAttribute('data-wiki-page');
			if (pageName && onNavigate) {
				onNavigate(pageName);
			}
		}
	}

	// Fetch content when page changes
	$effect(() => {
		fetchWikiContent(page);
	});
</script>

<div class="h-full overflow-y-auto bg-gray-900">
	<div class="max-w-3xl mx-auto px-8 py-8">
		<!-- Page Title -->
		<header class="mb-8 border-b border-gray-700 pb-4">
			<h1 class="text-4xl font-bold text-gray-100">{toProperCase(page)}</h1>
			<p class="text-sm text-gray-500 mt-2">Wiki</p>
		</header>

		<!-- Content -->
		{#if loading}
			<div class="flex items-center justify-center py-12">
				<div class="text-gray-400">Loading...</div>
			</div>
		{:else if error}
			<div class="bg-red-900/20 border border-red-700 rounded-lg p-6 text-center">
				<p class="text-red-400">{error}</p>
				<p class="text-gray-500 text-sm mt-2">
					Check that the page exists in the <a href="https://github.com/biblecomputer/wiki" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline">wiki repository</a>.
				</p>
			</div>
		{:else if content}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<div class="wiki-content" onclick={handleContentClick}>
				{@html renderMarkdown(content)}
			</div>
		{:else}
			<div class="text-gray-500 text-center py-12">
				<p>This page is empty.</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.wiki-content :global(p) {
		margin-bottom: 1rem;
	}

	.wiki-content :global(h1),
	.wiki-content :global(h2),
	.wiki-content :global(h3) {
		color: #f3f4f6;
	}
</style>

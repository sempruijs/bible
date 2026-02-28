<script lang="ts">
	import { onMount } from "svelte";
	import WikiSidebar from "$lib/components/wiki/WikiSidebar.svelte";
	import * as ResponsiveService from "$lib/services/ResponsiveService";

	let {
		page,
		showSidebar = true,
		isActive = true,
		onNavigate,
		onToggleSidebar,
	}: {
		page: string;
		showSidebar?: boolean;
		isActive?: boolean;
		onNavigate?: (page: string) => void;
		onToggleSidebar?: () => void;
	} = $props();

	let content = $state<string>("");
	let loading = $state<boolean>(true);
	let error = $state<string | null>(null);
	let entries = $state<string[]>([]);
	let entriesLoading = $state<boolean>(true);
	let isMobile = $state<boolean>(false);
	let shouldFocusSearch = $state(false);

	// Normalize page name for comparison (lowercase, underscores to spaces)
	function normalizePageName(str: string): string {
		return str.toLowerCase().replace(/_/g, ' ');
	}

	// Convert URL format to display format (underscores to spaces)
	function toDisplayName(str: string): string {
		return str.replace(/_/g, ' ');
	}

	// Find the correct case-sensitive entry name from the entries list
	function findCorrectCase(pageName: string): string | null {
		const normalized = normalizePageName(pageName);
		return entries.find(entry => normalizePageName(entry) === normalized) || null;
	}

	// Fetch wiki entries list from GitHub
	async function fetchWikiEntries() {
		entriesLoading = true;
		try {
			const response = await fetch('https://api.github.com/repos/biblecomputer/wiki/contents/source/en');
			if (response.ok) {
				const data = await response.json();
				entries = data
					.filter((item: any) => item.name.endsWith('.md') && item.name !== 'README.md')
					.map((item: any) => item.name.replace('.md', ''))
					.sort((a: string, b: string) => a.localeCompare(b));
			}
		} catch (err) {
			console.error('Failed to fetch wiki entries:', err);
			entries = [];
		} finally {
			entriesLoading = false;
		}
	}

	// Fetch wiki content from GitHub
	async function fetchWikiContent(pageName: string) {
		loading = true;
		error = null;

		// Try to find the correct case from entries list
		const correctName = findCorrectCase(pageName);
		const displayName = toDisplayName(pageName);

		// Use the correct case if found, otherwise use the page name as-is
		const fileName = correctName || pageName.replace(/_/g, ' ');
		const url = `https://raw.githubusercontent.com/biblecomputer/wiki/main/source/en/${encodeURIComponent(fileName)}.md`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				if (response.status === 404) {
					error = `Page "${displayName}" not found`;
				} else {
					error = `Failed to fetch page: ${response.statusText}`;
				}
				content = "";
			} else {
				content = await response.text();
				// If we found the correct case, update the URL to reflect it
				if (correctName && correctName !== pageName && onNavigate) {
					// Navigate to the correct case version (this updates the URL)
					onNavigate(correctName);
				}
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
			// Convert spaces to underscores for URL, preserve original case
			const urlName = pageName.replace(/ /g, '_');
			return `<a href="/wiki/${urlName}" class="wiki-link text-blue-400 hover:text-blue-300 underline cursor-pointer" data-wiki-page="${pageName}">${pageName}</a>`;
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

	function handleEntrySelect(entryPage: string) {
		if (onNavigate) {
			onNavigate(entryPage);
		}
	}

	// Fetch content when page changes
	$effect(() => {
		fetchWikiContent(page);
	});

	// Reset focus flag when sidebar is hidden
	$effect(() => {
		if (!showSidebar) {
			shouldFocusSearch = false;
		}
	});

	onMount(() => {
		// Fetch entries list
		fetchWikiEntries();

		// Initialize mobile state
		isMobile = ResponsiveService.isMobile();

		// Listen for window resize
		const cleanupResize = ResponsiveService.createResizeObserver((mobile) => {
			isMobile = mobile;
		});

		// Setup keyboard shortcuts
		const handleKeydown = (event: KeyboardEvent) => {
			if (!isActive) return;

			const target = event.target as HTMLElement;
			if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true')) {
				return;
			}

			if (event.key === 'b') {
				event.preventDefault();
				if (!showSidebar) {
					shouldFocusSearch = false;
				}
				onToggleSidebar?.();
			} else if (event.key === 'o' && !showSidebar) {
				event.preventDefault();
				shouldFocusSearch = true;
				onToggleSidebar?.();
			}
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', handleKeydown);
		}

		return () => {
			cleanupResize();
			if (typeof window !== 'undefined') {
				window.removeEventListener('keydown', handleKeydown);
			}
		};
	});
</script>

<div class="h-full flex flex-col">
	<!-- Toolbar -->
	<div class="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center gap-2 justify-between flex-shrink-0">
		<div class="flex items-center gap-2">
			<button
				onclick={() => onToggleSidebar?.()}
				class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm rounded transition-colors flex items-center gap-1"
				title={showSidebar
					? (isMobile ? "Show Content" : "Hide Sidebar (b)")
					: (isMobile ? "Show Entries" : "Show Sidebar (b)")}
			>
				{#if isMobile}
					{#if showSidebar}
						📖 Content
					{:else}
						📚 Entries
					{/if}
				{:else}
					{#if showSidebar}
						← Hide Sidebar (b)
					{:else}
						→ Show Sidebar (b)
					{/if}
				{/if}
			</button>
		</div>
	</div>

	<!-- Main Content -->
	<div class="flex flex-1 relative overflow-hidden">
		<!-- Sidebar -->
		{#if showSidebar}
			<div
				class="bg-gray-800 border-gray-700 h-full overflow-y-auto flex-shrink-0
					   {isMobile
						 ? 'absolute inset-0 z-10 w-full'
						 : 'w-80 border-r relative'}"
			>
				{#if entriesLoading}
					<div class="flex items-center justify-center h-full text-gray-400">
						<span>Loading entries...</span>
					</div>
				{:else}
					<WikiSidebar
						{entries}
						currentPage={page}
						onEntrySelect={handleEntrySelect}
						{shouldFocusSearch}
						{isMobile}
					/>
				{/if}
			</div>
		{/if}

		<!-- Content Viewer -->
		<div class="flex-1 {isMobile && showSidebar ? 'hidden' : 'block'} overflow-y-auto bg-gray-900">
			<div class="max-w-3xl mx-auto px-8 py-8">
				<!-- Page Title -->
				<header class="mb-8 border-b border-gray-700 pb-4">
					<h1 class="text-4xl font-bold text-gray-100">{findCorrectCase(page) || toDisplayName(page)}</h1>
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

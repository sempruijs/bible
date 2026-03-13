<script lang="ts">
	import type { TabState } from "$lib/app";
	import type { Translation } from "$lib/translations/translation";
	import App from "$lib/components/apps/App.svelte";

	let {
		app,
		isActive = false,
		onScrollStateChange,
		onSelectionChange,
		onAppChoice,
		onTabClose,
		onWikiLinkClick,
		onOpenInNewTab,
		translation,
	}: {
		app: TabState;
		isActive?: boolean;
		onScrollStateChange?: (app: TabState) => void;
		onSelectionChange?: (app: TabState) => void;
		onAppChoice?: (appType: "bible" | "about" | "stopwatch" | "wiki" | "library") => void;
		onTabClose?: () => void;
		onWikiLinkClick?: (page: string) => void;
		onOpenInNewTab?: (path: string) => void;
		translation?: Translation;
	} = $props();
</script>

<App
	tabState={app}
	{isActive}
	onStateChange={onScrollStateChange}
	{onSelectionChange}
	{onAppChoice}
	{onTabClose}
	{onWikiLinkClick}
	{onOpenInNewTab}
	{translation}
/>

<script lang="ts">
	import SearchableAppChooser from "$lib/components/ui/SearchableAppChooser.svelte";

	let {
		onChooseApp,
		onClose,
	}: {
		onChooseApp?: (appType: "bible" | "about" | "stopwatch") => void;
		onClose?: () => void;
	} = $props();
</script>

<SearchableAppChooser
	onChooseApp={(appType) => onChooseApp?.(appType)}
	{onClose}
/>

<script lang="ts">
    import SearchableAppChooser from "$lib/components/ui/SearchableAppChooser.svelte";

    let {
        onChooseApp,
        onClose
    }: {
        onChooseApp: (appType: "bible" | "about" | "stopwatch" | "wiki" | "library") => void;
        onClose?: () => void;
    } = $props();
</script>

<SearchableAppChooser {onChooseApp} {onClose} />
<script lang="ts">
    import SearchableAppChooser from "$lib/components/ui/SearchableAppChooser.svelte";

    let { 
        onChooseApp 
    }: { 
        onChooseApp: (appType: "bible" | "about" | "stopwatch") => void;
    } = $props();
</script>

<SearchableAppChooser {onChooseApp} />
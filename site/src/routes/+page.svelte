<script lang="ts">
    import type { Translation } from "$lib/translations/translation";
    import CanonExplorer from "$lib/components/CanonExplorer.svelte";

    export let data: { bibleData: Translation };
</script>

<h1>Bible Computer</h1>

<!-- this is the cannont explorer -->
<CanonExplorer translation={data.bibleData} />

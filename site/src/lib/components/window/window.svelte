<script lang="ts">
    import { AppType } from "$lib/ts/window";
    import { error } from "@sveltejs/kit";
    import Stopwatch from "./Stopwatch.svelte";
    import Welcome from "./Welcome.svelte";
    import Bible from "./Bible.svelte";
    import Chooser from "./Chooser.svelte";


     export let appType: typeof AppType[keyof typeof AppType];
</script>
<div>
{#if appType == AppType.Bible}
<Bible />
{:else if appType == AppType.Stopwatch}
<Stopwatch />
{:else if appType == AppType.Welcome}
<Welcome />
{:else if appType == AppType.Chooser}
<Chooser />
{:else}
Could not find AppType
{/if}
</div>
<script lang="ts">
    import { AppType } from "$lib/ts/window";
    import { error } from "@sveltejs/kit";
    import Stopwatch from "./Stopwatch.svelte";
    import Welcome from "./Welcome.svelte";
    import Bible from "./Bible.svelte";
    import Chooser from "./Chooser.svelte";
    import Donate from "./donate.svelte";

    let { windowState = $bindable() } = $props();
</script>

<div>
    <button> close window </button>
    {#if windowState.appType == AppType.Bible}
        <Bible />
    {:else if windowState.appType == AppType.Stopwatch}
        <Stopwatch />
    {:else if windowState.appType == AppType.Welcome}
        <Welcome />
    {:else if windowState.appType == AppType.Chooser}
        <Chooser />
    {:else if windowState.appType == AppType.Donate}
        <Donate />
    {:else}
        Could not find AppType
    {/if}
</div>

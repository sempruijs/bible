<script lang="ts">
    import Window from "$lib/components/window/window.svelte";

    import { AppType } from "$lib/ts/window";
    let ws = $state([
        {
            appType: AppType.Bible,
        },
    ]);
</script>

<div class="grid h-screen w-screen grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
    {#each ws as w, i}
        <Window bind:windowState={ws[i]} />
    {/each}
</div>

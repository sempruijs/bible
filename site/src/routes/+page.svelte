<script lang="ts">
    import WindowManager from "$lib/components/window/WindowManager.svelte";

    function handleKeyDown(event: KeyboardEvent) {
        console.log("Global key:", event.key);
    }
</script>

<svelte:window onkeydown={handleKeyDown} />
<div>
    <WindowManager />
</div>

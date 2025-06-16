<script lang="ts">
    import { onMount } from 'svelte';
    import wasm from "rust";
    let x = $state(0);

    onMount(async () => {
        const bindings = await wasm();
        x = bindings.add(3, 5);
    });
</script>
<div class="text-center">
    <h1 class="text-6xl pt-20 pb-10">bijbel</h1>
    <a class="text-xl text-blue-500" href="/genesis/1">lees genesis 1</a>
    <p>{x}</p>
</div>

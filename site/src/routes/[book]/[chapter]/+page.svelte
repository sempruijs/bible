<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div class="p-8">
    <div class="max-w-4xl mx-auto">
        <header class="mb-8">
            <h1 class="text-3xl font-bold text-gray-100 mb-2">{data.chapter.name}</h1>
            <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </header>
        
        <div class="space-y-4">
            {#each data.chapter.verses as verse}
                <div class="flex gap-4 group">
                    <span class="text-blue-400 font-medium text-sm mt-1 min-w-[2rem] text-right">
                        {verse.verse}
                    </span>
                    <span class="text-gray-200 leading-relaxed">
                        {verse.text}
                    </span>
                </div>
            {/each}
        </div>
    </div>
</div>

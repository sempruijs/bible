<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Bible, Book, Chapter } from '$lib/types';
  import bibleData from '$lib/translations/stv.json';
  import Sidebar from "$lib/components/Sidebar.svelte";
  import ChapterDetail from "$lib/components/ChapterDetail.svelte";
	import type { PageProps } from './$types';

	const bible: Bible = bibleData;

	let { data }: PageProps = $props();
</script>

<div class="flex h-screen">
  <Sidebar {bible} class="w-64 border-r border-gray-200 p-4" />

  <div class="flex-1 p-6 overflow-auto">
    {#if data.chapter}
      <ChapterDetail chapter={data.chapter} />
    {:else}
      <h1>Could not find book</h1>
    {/if}
  </div>
</div>

<script lang="ts">
  import { Option } from "effect";
  import { goto } from "$app/navigation";
  import { error } from '@sveltejs/kit';
  import type { Bible, Book, Chapter } from '$lib/types';
  import bibleData from '$lib/translations/stv.json';
  import Sidebar from "$lib/components/Sidebar.svelte";
  import ChapterDetail from "$lib/components/ChapterDetail.svelte";
	import type { PageProps } from './$types';

	const bible: Bible = bibleData;

	let { data }: PageProps = $props();
</script>

<div class="">
  <Sidebar {bible} />
{#if data.chapter}
  <button onclick={() => goto('/genesis/1')}>Ga naar genesis</button>
  <ChapterDetail chapter={data.chapter} />
{:else}
  <h1>could not fin dbook</h1>
{/if}
</div>

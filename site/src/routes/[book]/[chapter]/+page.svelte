<script lang="ts">
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { Option } from "effect";
  import NavigationButtons from "$lib/components/NaviagationButtons.svelte"
  import Header from "$lib/components/Header.svelte";
  import type { Bible, Book, Chapter } from '$lib/types';
  import bibleData from '$lib/translations/stv.json';
  import Sidebar from "$lib/components/Sidebar.svelte";
  import ChapterDetail from "$lib/components/ChapterDetail.svelte";
	import type { PageProps } from './$types';
	import ChapterPicker from "$lib/components/ChapterPicker.svelte";

	const bible: Bible = bibleData;
	let sidebarVisible = $state(true);
	let announce = $state("");

  $effect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.shiftKey) {
        return;
      }

      if (e.key === "b" && (e.ctrlKey)) {
        announce = sidebarVisible ? "hiding sidebar" : "showing sidebar"
        sidebarVisible = !sidebarVisible
      }
  	}

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
	});

	let { data }: PageProps = $props();
</script>

<Header
  toggle={() => { sidebarVisible = !sidebarVisible}}
  visible={sidebarVisible}
/>
<div class="flex h-screen">
  <ChapterPicker {bible} />
  <Sidebar
    {bible}
    visible={sidebarVisible}
    selectedBookName={data.book.name}
    selectedChapterNumber={data.chapter.chapter}
    class="w-64 border-r border-gray-200 p-4"
  />

  <div class="flex-1 p-6 overflow-auto">
    {#if data.chapter}
      <ChapterDetail chapter={data.chapter} />
      <div
        class="text-center"
      >
      <NavigationButtons {bible} currentChapter={data.chapter} />
      </div>
    {:else}
      <h1>Could not find book</h1>
    {/if}
  </div>
</div>
<div
  id="sr-announcer"
  aria-live="polite"
  aria-atomic="true"
  class="sr-only"
>{announce}</div>

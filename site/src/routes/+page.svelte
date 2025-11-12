<script lang="ts">
import Window from "$lib/components/window/window.svelte";

import { AppType } from "$lib/ts/window";
</script>
<div class="grid h-screen w-screen grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
<Window appType={AppType.Bible} />
<Window appType={AppType.Stopwatch} />
<Window appType={AppType.Welcome} />
</div>
declare module '@sveltejs/svelte-virtual-list' {
  import { SvelteComponent } from 'svelte';

  export interface VirtualListProps<T = any> {
    items: T[];
    height?: string;
    itemHeight?: number;
    start?: number;
    end?: number;
  }

  export default class VirtualList<T = any> extends SvelteComponent<VirtualListProps<T>> {}
}

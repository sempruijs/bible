import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { readFileSync } from 'fs';

export function chapterToPath(c) {
  const name = c.name.replace(/\s*\d+$/, '');
  return `/${name.toLowerCase()}/${c.chapter}`;
}

const bibleData = JSON.parse(readFileSync('./src/lib/translations/stv.json', 'utf-8'));
const bibleRoutes = bibleData.books.flatMap((book) => book.chapters.map(chapterToPath));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
    prerender: {
      entries: [
        '/',
        ...bibleRoutes
      ]
    }
  },
};

export const prerender = true;
export default config;

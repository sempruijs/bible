import { Effect, Option } from "effect";
import { loadBibleData } from "$lib/translations/loadBibleData";

export const prerender = false;
export const ssr = false;

export async function load() {
    const bibleDataOption = await Effect.runPromise(loadBibleData())
        .then(bibleData => {
            return Option.some(bibleData);
        })
        .catch(error => {
            console.error('Failed to load bible data:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
            return Option.none();
        });

    return {
        bibleData: bibleDataOption
    };
}

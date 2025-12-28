import { Effect } from "effect";
import { loadBibleData } from "$lib/translations/loadBibleData";

export const prerender = true;

export async function load() {
    const bibleData = await Effect.runPromise(loadBibleData());
    
    return {
        bibleData
    };
}

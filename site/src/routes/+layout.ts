import { Effect } from "effect";
import { loadBibleData } from "$lib/translations/loadBibleData";

export const prerender = true;

export async function load() {
    try {
        console.log('Starting to load bible data...');
        const bibleData = await Effect.runPromise(loadBibleData());
        console.log('Bible data loaded successfully:', bibleData.books?.length, 'books');
        
        return {
            bibleData
        };
    } catch (error) {
        console.error('Failed to load bible data:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        
        // Return a minimal fallback instead of throwing
        return {
            bibleData: { books: [] }
        };
    }
}

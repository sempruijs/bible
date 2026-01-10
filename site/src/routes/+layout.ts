import { Effect } from "effect";
import { loadBibleData } from "$lib/translations/loadBibleData";

export const prerender = false;
export const ssr = false;

export async function load() {
    try {
        console.log('Starting to load bible data...');
        const bibleData = await Effect.runPromise(loadBibleData());

        // Check if content is loaded
        if (bibleData.content._tag === "Local") {
            console.log('Bible data loaded successfully:', bibleData.content.data.books?.length, 'books');
        } else {
            console.log('Bible data metadata loaded, content will be fetched from:', bibleData.content.url);
        }

        return {
            bibleData
        };
    } catch (error) {
        console.error('Failed to load bible data:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));

        // Return null to indicate failure
        return {
            bibleData: null
        };
    }
}

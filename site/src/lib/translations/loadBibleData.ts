import { Effect } from "effect";
import type { TranslationV0 } from "./v0";
import { toTranslation } from "./v0";
import type { Translation } from "./translation";

// https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json

export class FetchError {
    readonly _tag = "FetchError";
    constructor(readonly message: string) { }
}

export class ParseError {
    readonly _tag = "ParseError";
    constructor(readonly message: string) { }
}

export const loadBibleData = () => Effect.gen(function* () {
    console.log('Step 1: Checking cache...');
    const cachedData = yield* Effect.try({
        try: () => {
            if (typeof localStorage === 'undefined') {
                console.log('localStorage not available (SSR)');
                return null;
            }
            const stored = localStorage.getItem('bibleData');
            return stored ? JSON.parse(stored) : null;
        },
        catch: (error) => {
            console.log('Cache check failed:', error);
            return null;
        }
    });

    if (cachedData) {
        console.log('Using cached data');
        return cachedData as Translation;
    }

    console.log('Step 2: Fetching from remote...');
    const response = yield* Effect.tryPromise({
        try: () => {
            console.log('Making fetch request...');
            return fetch("https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json");
        },
        catch: (error) => {
            console.error('Fetch failed:', error);
            return new FetchError(`Failed to fetch: ${error}`);
        }
    });

    console.log('Step 3: Parsing JSON...');
    const jsonData = yield* Effect.tryPromise({
        try: () => {
            console.log('Parsing response as JSON...');
            return response.json();
        },
        catch: (error) => {
            console.error('JSON parsing failed:', error);
            return new ParseError(`Failed to parse JSON: ${error}`);
        }
    });

    console.log('Step 4: Converting to translation...');
    const translationV0 = jsonData as TranslationV0;
    const translation = yield* toTranslation(translationV0);

    console.log('Step 5: Caching result...');
    yield* Effect.try({
        try: () => {
            if (typeof localStorage !== 'undefined') {
                try {
                    localStorage.setItem('bibleData', JSON.stringify(translation));
                    console.log('Data cached successfully');
                } catch (quotaError) {
                    console.log('LocalStorage quota exceeded, skipping cache:', quotaError instanceof Error ? quotaError.message : quotaError);
                    // Clear some space and try with a smaller version
                    localStorage.clear();
                }
            }
        },
        catch: (error) => {
            console.log('Caching failed:', error);
            return void 0;
        }
    });

    console.log('Bible data loading completed successfully');
    return translation;
});

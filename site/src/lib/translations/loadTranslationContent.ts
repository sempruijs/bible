import { Effect } from "effect";
import type { Translation, TranslationContent } from "./translation";
import { FetchError, ParseError } from "./storage";
import type { TranslationV0 } from "./v0";
import { toTranslationContent } from "./v0";

// Load translation content, handling v0 format conversion
export const loadTranslationContent = (translation: Translation): Effect.Effect<TranslationContent, FetchError | ParseError> =>
    Effect.gen(function* () {
        if (translation.content._tag === "Local") {
            return translation.content.data;
        }

        // For Cloud storage, we need to fetch and convert from v0 format
        const url = translation.content.url;

        // Check cache first
        const cachedData = yield* Effect.succeed(
            (() => {
                if (typeof localStorage === 'undefined') {
                    return null;
                }
                try {
                    const cacheKey = `translation_content_${translation.metadata.shortName}`;
                    const stored = localStorage.getItem(cacheKey);
                    return stored ? JSON.parse(stored) : null;
                } catch {
                    return null;
                }
            })()
        );

        if (cachedData) {
            return cachedData as TranslationContent;
        }

        // Fetch from cloud
        const response = yield* Effect.tryPromise({
            try: () => fetch(url),
            catch: (error) => new FetchError(`Failed to fetch from ${url}: ${error}`)
        });

        const jsonData = yield* Effect.tryPromise({
            try: () => response.json(),
            catch: (error) => new ParseError(`Failed to parse JSON: ${error}`)
        });

        // Convert from v0 format
        const translationV0 = jsonData as TranslationV0;
        const content = yield* toTranslationContent(translationV0);

        // Cache the result
        yield* Effect.sync(() => {
            if (typeof localStorage !== 'undefined') {
                try {
                    const cacheKey = `translation_content_${translation.metadata.shortName}`;
                    localStorage.setItem(cacheKey, JSON.stringify(content));
                } catch (quotaError) {
                    console.log('LocalStorage quota exceeded, skipping cache');
                }
            }
        });

        return content;
    });

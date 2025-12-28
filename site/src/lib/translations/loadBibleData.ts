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
    const cachedData = yield* Effect.try({
        try: () => {
            if (typeof localStorage === 'undefined') return null;
            const stored = localStorage.getItem('bibleData');
            return stored ? JSON.parse(stored) : null;
        },
        catch: () => null
    });

    if (cachedData) {
        return cachedData as Translation;
    }

    const response = yield* Effect.tryPromise({
        try: () => fetch("https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json"),
        catch: (error) => new FetchError(`Failed to fetch: ${error}`)
    });

    const jsonData = yield* Effect.tryPromise({
        try: () => response.json(),
        catch: (error) => new ParseError(`Failed to parse JSON: ${error}`)
    });

    const translationV0 = jsonData as TranslationV0;
    const translation = yield* toTranslation(translationV0);

    yield* Effect.try({
        try: () => {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('bibleData', JSON.stringify(translation));
            }
        },
        catch: () => void 0
    });

    return translation;
});

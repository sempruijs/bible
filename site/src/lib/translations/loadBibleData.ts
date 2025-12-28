import { Effect } from "effect";
import type { TranslationV0 } from "./v0";

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
    const response = yield* Effect.tryPromise({
        try: () => fetch("https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json"),
        catch: (error) => new FetchError(`Failed to fetch: ${error}`)
    });

    const data = yield* Effect.tryPromise({
        try: () => response.json(),
        catch: (error) => new ParseError(`Failed to parse JSON: ${error}`)
    });

    return data as TranslationV0;
});

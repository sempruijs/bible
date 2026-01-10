import { Data, Effect, Schema } from "effect";

// Generic Storage Schema - discriminated union for local vs cloud storage
export const StorageSchema = <A, I, R>(itemSchema: Schema.Schema<A, I, R>) =>
    Schema.Union(
        Schema.Struct({
            _tag: Schema.Literal("Local"),
            data: itemSchema
        }),
        Schema.Struct({
            _tag: Schema.Literal("Cloud"),
            url: Schema.String
        })
    );

// Generic Storage type
export interface Storage<T> {
    readonly _tag: "Local" | "Cloud";
}

export interface LocalStorage<T> extends Storage<T> {
    readonly _tag: "Local";
    readonly data: T;
}

export interface CloudStorage<T> extends Storage<T> {
    readonly _tag: "Cloud";
    readonly url: string;
}

// Storage type union
export type StorageUnion<T> = LocalStorage<T> | CloudStorage<T>;

// Tagged enum constructors and matcher
export const { Local, Cloud, $match } = Data.taggedEnum<StorageUnion<any>>();

// Error types for loading
export class FetchError {
    readonly _tag = "FetchError";
    constructor(readonly message: string) { }
}

export class ParseError {
    readonly _tag = "ParseError";
    constructor(readonly message: string) { }
}

// Load function that fetches data from storage
export const load = <T>(storage: StorageUnion<T>): Effect.Effect<T, FetchError | ParseError> =>
    $match(storage, {
        Local: ({ data }) => Effect.succeed(data),
        Cloud: ({ url }) => Effect.gen(function* () {
            // Check localStorage cache first
            const cachedData = yield* Effect.succeed(
                (() => {
                    if (typeof localStorage === 'undefined') {
                        return null;
                    }
                    try {
                        const cacheKey = `storage_${url}`;
                        const stored = localStorage.getItem(cacheKey);
                        return stored ? JSON.parse(stored) : null;
                    } catch {
                        return null;
                    }
                })()
            );

            if (cachedData) {
                return cachedData as T;
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

            const data = jsonData as T;

            // Cache the result
            yield* Effect.sync(() => {
                if (typeof localStorage !== 'undefined') {
                    try {
                        const cacheKey = `storage_${url}`;
                        localStorage.setItem(cacheKey, JSON.stringify(data));
                    } catch (quotaError) {
                        console.log('LocalStorage quota exceeded, skipping cache');
                    }
                }
            });

            return data;
        })
    });

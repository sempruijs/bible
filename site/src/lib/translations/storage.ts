import { Data, Schema } from "effect";

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

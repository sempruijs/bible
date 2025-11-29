import { Effect, Schema, Option } from "effect";

export class SingleVerse extends Schema.TaggedClass<SingleVerse>()(
    "SingleVerse",
    {
        number: Schema.Number,
        text: Schema.String,
        footnote: Schema.optional(Schema.String)
    }
) { }

export class VerseRange extends Schema.TaggedClass<VerseRange>()(
    "VerseRange",
    {
        startNumber: Schema.Number,
        end: Schema.Number,
        text: Schema.String,
        footnote: Schema.optional(Schema.String),
    }
) { }

export const Verse = Schema.Union(SingleVerse, VerseRange);
export type Verse = typeof Verse.Type;

export class Chapter extends Schema.Class<Chapter>("Chapter")({
    number: Schema.Number,
    verses: Schema.Array(Verse),
}) { }

export class Book extends Schema.Class<Book>("Book")({
    name: Schema.String,
    chapters: Schema.Array(Chapter),
}) { }

export class TranslationMeta extends Schema.Class<TranslationMeta>("TranslationMeta")({
    name: Schema.String,
    release: Schema.Number,
}) { }

export class Translation extends Schema.Class<Translation>("Translation")({
    books: Schema.Array(Book),
    meta: TranslationMeta,
}) { }
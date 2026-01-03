import { BibleBook, BibleBookSchema } from "$lib/book";
import { Data, Effect, Option, Schema } from "effect";

// Effect Schema definitions
export const VerseSchema = Schema.Struct({
    verse: Schema.Number,
    chapter: Schema.Number,
    name: Schema.String,
    text: Schema.String
});

export const ChapterSchema = Schema.Struct({
    chapter: Schema.Number,
    name: Schema.String,
    verses: Schema.Array(VerseSchema)
});

export const BookSchema = Schema.Struct({
    name: BibleBookSchema,
    chapters: Schema.Array(ChapterSchema)
});

export const TranslationSchema = Schema.Struct({
    books: Schema.Array(BookSchema)
});

// Type exports
export type Verse = Schema.Schema.Type<typeof VerseSchema>;
export type Chapter = Schema.Schema.Type<typeof ChapterSchema>;
export type Book = Schema.Schema.Type<typeof BookSchema>;
export type Translation = Schema.Schema.Type<typeof TranslationSchema>;

// Maintain backward compatibility with Data constructors
export const Verse = Data.case<Verse>();
export const Chapter = Data.case<Chapter>();
export const Book = Data.case<Book>();
export const Translation = Data.case<Translation>();

export const getChapter = (translation: Translation, bookName: BibleBook, chapterNumber: number) => Effect.gen(function* () {
    const book = translation.books.find(b => {
        return b.name === bookName;
    });
    if (!book) {
        return Option.none<Chapter>();
    }

    const chapter = book.chapters.find(c => c.chapter === chapterNumber);
    return chapter ? Option.some(chapter) : Option.none<Chapter>();
});

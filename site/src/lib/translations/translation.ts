import { BibleBook, BibleBookSchema } from "$lib/book";
import { Data, Effect, Option, Schema } from "effect";
import type { BookOrder } from "$lib/translations/bookOrder";
import { LanguageSchema } from "$lib/translations/language";
import { StorageSchema } from "$lib/translations/storage";

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

export const TranslationMetadataSchema = Schema.Struct({
    name: Schema.String,
    shortName: Schema.String,
    language: LanguageSchema
});

export const TranslationContentSchema = Schema.Struct({
    books: Schema.Array(BookSchema)
});

// Storage schema for TranslationContent
export const TranslationContentStorageSchema = StorageSchema(TranslationContentSchema);

export const TranslationSchema = Schema.Struct({
    metadata: TranslationMetadataSchema,
    content: TranslationContentStorageSchema
});

// Type exports
export type Verse = Schema.Schema.Type<typeof VerseSchema>;
export type Chapter = Schema.Schema.Type<typeof ChapterSchema>;
export type Book = Schema.Schema.Type<typeof BookSchema>;
export type TranslationMetadata = Schema.Schema.Type<typeof TranslationMetadataSchema>;
export type TranslationContent = Schema.Schema.Type<typeof TranslationContentSchema>;
export type Translation = Schema.Schema.Type<typeof TranslationSchema>;

// Maintain backward compatibility with Data constructors
export const Verse = Data.case<Verse>();
export const Chapter = Data.case<Chapter>();
export const Book = Data.case<Book>();
export const TranslationMetadata = Data.case<TranslationMetadata>();
export const TranslationContent = Data.case<TranslationContent>();
export const Translation = Data.case<Translation>();

// Core functions that work with TranslationContent directly
export const getChapterFromContent = (content: TranslationContent, bookName: BibleBook, chapterNumber: number) => Effect.gen(function* () {
    const book = content.books.find(b => {
        return b.name === bookName;
    });
    if (!book) {
        return Option.none<Chapter>();
    }

    const chapter = book.chapters.find(c => c.chapter === chapterNumber);
    return chapter ? Option.some(chapter) : Option.none<Chapter>();
});

export const getNextChapterFromContent = (
    content: TranslationContent,
    currentBook: BibleBook,
    currentChapter: number,
    bookOrder: BookOrder
): Option.Option<{ book: BibleBook; chapter: number }> => {
    const book = content.books.find(b => b.name === currentBook);
    if (!book) return Option.none();

    // Check if there's a next chapter in current book
    if (book.chapters.find(c => c.chapter === currentChapter + 1)) {
        return Option.some({ book: currentBook, chapter: currentChapter + 1 });
    }

    // Find next book in order
    const currentBookIndex = bookOrder.books.findIndex(b => b === currentBook);
    if (currentBookIndex === -1 || currentBookIndex === bookOrder.books.length - 1) {
        return Option.none(); // Last book
    }

    const nextBook = bookOrder.books[currentBookIndex + 1];
    const nextBookData = content.books.find(b => b.name === nextBook);
    if (!nextBookData || nextBookData.chapters.length === 0) {
        return Option.none();
    }

    return Option.some({ book: nextBook, chapter: 1 });
};

export const getPreviousChapterFromContent = (
    content: TranslationContent,
    currentBook: BibleBook,
    currentChapter: number,
    bookOrder: BookOrder
): Option.Option<{ book: BibleBook; chapter: number }> => {
    const book = content.books.find(b => b.name === currentBook);
    if (!book) return Option.none();

    // Check if there's a previous chapter in current book
    if (currentChapter > 1 && book.chapters.find(c => c.chapter === currentChapter - 1)) {
        return Option.some({ book: currentBook, chapter: currentChapter - 1 });
    }

    // Find previous book in order
    const currentBookIndex = bookOrder.books.findIndex(b => b === currentBook);
    if (currentBookIndex === -1 || currentBookIndex === 0) {
        return Option.none(); // First book
    }

    const previousBook = bookOrder.books[currentBookIndex - 1];
    const previousBookData = content.books.find(b => b.name === previousBook);
    if (!previousBookData || previousBookData.chapters.length === 0) {
        return Option.none();
    }

    // Get last chapter of previous book
    const lastChapter = Math.max(...previousBookData.chapters.map(c => c.chapter));
    return Option.some({ book: previousBook, chapter: lastChapter });
};


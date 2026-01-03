import { BibleBook, BibleBookSchema } from "$lib/book";
import { Data, Effect, Option, Schema } from "effect";
import type { BookOrder } from "$lib/translations/bookOrder";

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

export const getNextChapter = (
    translation: Translation, 
    currentBook: BibleBook, 
    currentChapter: number, 
    bookOrder: BookOrder
): Option.Option<{ book: BibleBook; chapter: number }> => {
    const book = translation.books.find(b => b.name === currentBook);
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
    const nextBookData = translation.books.find(b => b.name === nextBook);
    if (!nextBookData || nextBookData.chapters.length === 0) {
        return Option.none();
    }
    
    return Option.some({ book: nextBook, chapter: 1 });
};

export const getPreviousChapter = (
    translation: Translation, 
    currentBook: BibleBook, 
    currentChapter: number, 
    bookOrder: BookOrder
): Option.Option<{ book: BibleBook; chapter: number }> => {
    const book = translation.books.find(b => b.name === currentBook);
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
    const previousBookData = translation.books.find(b => b.name === previousBook);
    if (!previousBookData || previousBookData.chapters.length === 0) {
        return Option.none();
    }
    
    // Get last chapter of previous book
    const lastChapter = Math.max(...previousBookData.chapters.map(c => c.chapter));
    return Option.some({ book: previousBook, chapter: lastChapter });
};

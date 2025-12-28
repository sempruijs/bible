import { BibleBook } from "$lib/book";
import { Effect, Option } from "effect";

export type Translation = {
    books: Book[];
};

export type Book = {
    name: BibleBook;
    chapters: Chapter[];
};

export type Chapter = {
    chapter: number;
    name: string;
    verses: Verse[];
};

export type Verse = {
    verse: number;
    chapter: number;
    name: string;
    text: string;
};

export const getChapter = (translation: Translation, bookName: BibleBook, chapterNumber: number) => Effect.gen(function* () {
    const book = translation.books.find(b => b.name === bookName);
    if (!book) {
        return Option.none<Chapter>();
    }

    const chapter = book.chapters.find(c => c.chapter === chapterNumber);
    return chapter ? Option.some(chapter) : Option.none<Chapter>();
});

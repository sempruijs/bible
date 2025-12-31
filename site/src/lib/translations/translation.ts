import { BibleBook } from "$lib/book";
import { Data, Effect, Option } from "effect";

export interface Translation {
    readonly books: Book[];
}

export const Translation = Data.case<Translation>();

export interface Book {
    readonly name: BibleBook;
    readonly chapters: Chapter[];
}

export const Book = Data.case<Book>();

export interface Chapter {
    readonly chapter: number;
    readonly name: string;
    readonly verses: Verse[];
}

export const Chapter = Data.case<Chapter>();

export interface Verse {
    readonly verse: number;
    readonly chapter: number;
    readonly name: string;
    readonly text: string;
}

export const Verse = Data.case<Verse>();

export const getChapter = (translation: Translation, bookName: BibleBook, chapterNumber: number) => Effect.gen(function* () {
    const book = translation.books.find(b => {
        return b.name._tag === bookName._tag;
    });
    if (!book) {
        return Option.none<Chapter>();
    }

    const chapter = book.chapters.find(c => c.chapter === chapterNumber);
    return chapter ? Option.some(chapter) : Option.none<Chapter>();
});

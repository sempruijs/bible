import { BibleBook } from "$lib/book";

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

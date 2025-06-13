import type { PageLoad } from './$types';
import bibleData from "$lib/translations/stv.json";
import { error } from '@sveltejs/kit';
import type { Bible, Book, Chapter,  } from '$lib/types';

export const load: PageLoad = ({ params }) => {
  const bookName = params.book.toLowerCase();
  const chapterNum = Number(params.chapter);
  const bible: Bible = bibleData;

  const selectedBook = bible.books.find(b => b.name.toLowerCase() === bookName);
  if (!selectedBook) throw error(404, 'Book not found');

  const selectedChapter = selectedBook.chapters.find(c => c.chapter === chapterNum);
  if (!selectedChapter) throw error(404, 'Chapter not found');

  return {
    book: selectedBook,
    chapter: selectedChapter,
  };
};

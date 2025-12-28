import { writable, derived } from 'svelte/store';
import { Option } from 'effect';
import type { Bible, Book, Chapter } from '$lib/translations/v0';

export const bibleData = writable<Option.Option<Bible>>(Option.none());
export const isLoading = writable<boolean>(false);
export const error = writable<Option.Option<string>>(Option.none());

export async function loadBibleData() {
  isLoading.set(true);
  error.set(Option.none());
  
  try {
    const response = await fetch('/api/bible');
    if (!response.ok) {
      throw new Error(`Failed to fetch bible data: ${response.statusText}`);
    }
    
    const data: Bible = await response.json();
    bibleData.set(Option.some(data));
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Failed to load bible data';
    error.set(Option.some(errorMessage));
    console.error('Error loading bible data:', err);
  } finally {
    isLoading.set(false);
  }
}

// Derived store to get books easily
export const books = derived(bibleData, ($bibleData) => 
  Option.match($bibleData, {
    onNone: () => [],
    onSome: (bible) => bible.books
  })
);

// Helper function to get a specific book
export function getBook(bookName: string) {
  return derived(bibleData, ($bibleData) => 
    Option.flatMap($bibleData, (bible) => 
      Option.fromNullable(
        bible.books.find(book => 
          book.name.toLowerCase() === bookName.toLowerCase()
        )
      )
    )
  );
}

// Helper function to get a specific chapter
export function getChapter(bookName: string, chapterNum: number) {
  return derived(bibleData, ($bibleData) => 
    Option.flatMap($bibleData, (bible) => {
      const book = bible.books.find(book => 
        book.name.toLowerCase() === bookName.toLowerCase()
      );
      return Option.fromNullable(
        book?.chapters.find(chapter => chapter.chapter === chapterNum)
      );
    })
  );
}
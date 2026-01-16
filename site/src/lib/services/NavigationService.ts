import { Effect, Context, Option } from "effect";
import { goto } from "$app/navigation";
import { BibleBook, getShortName, toBibleBook } from "$lib/book";

export interface NavigationService {
  readonly updateURL: (book: BibleBook, chapter: number) => Effect.Effect<void>;
  readonly navigateToUrl: (url: string) => Effect.Effect<void>;
  readonly parseURL: (pathname: string) => Effect.Effect<Option.Option<{ book: BibleBook; chapter: number }>>;
  readonly getInitialState: () => Effect.Effect<{ book: BibleBook; chapter: number; isAbout: boolean; isStopwatch: boolean }>;
}

export const NavigationService = Context.GenericTag<NavigationService>("NavigationService");

export const NavigationServiceLive = NavigationService.of({
  updateURL: (book: BibleBook, chapter: number) =>
    Effect.sync(() => {
      const bookShort = getShortName(book);
      goto(`/${bookShort}/${chapter}`, { replaceState: true });
    }),

  navigateToUrl: (url: string) =>
    Effect.sync(() => {
      goto(url, { replaceState: true });
    }),

  parseURL: (pathname: string) =>
    Effect.sync(() => {
      const urlParts = pathname.split('/');
      if (urlParts.length >= 3) {
        const bookOption = toBibleBook(urlParts[1]);
        const chapter = parseInt(urlParts[2]);
        if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
          return Option.some({ book: bookOption.value, chapter });
        }
      }
      return Option.none();
    }),

  getInitialState: () =>
    Effect.sync(() => {
      if (typeof window !== 'undefined') {
        const pathname = window.location.pathname;
        
        // Check if it's the about page
        if (pathname === '/about') {
          return { book: BibleBook.John, chapter: 1, isAbout: true, isStopwatch: false };
        }
        
        // Check if it's the stopwatch page
        if (pathname === '/stopwatch') {
          return { book: BibleBook.John, chapter: 1, isAbout: false, isStopwatch: true };
        }
        
        // Parse as Bible route
        const urlParts = pathname.split('/');
        if (urlParts.length >= 3) {
          const bookOption = toBibleBook(urlParts[1]);
          const chapter = parseInt(urlParts[2]);
          if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
            return { book: bookOption.value, chapter, isAbout: false, isStopwatch: false };
          }
        }
      }
      return { book: BibleBook.John, chapter: 1, isAbout: false, isStopwatch: false };
    })
});
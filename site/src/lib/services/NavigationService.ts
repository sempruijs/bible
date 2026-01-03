import { Effect, Context } from "effect";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { BibleBook, getShortName, toBibleBook } from "$lib/book";
import { Option } from "effect";

export interface NavigationService {
  readonly updateURL: (book: BibleBook, chapter: number) => Effect.Effect<void>;
  readonly navigateToUrl: (url: string) => Effect.Effect<void>;
  readonly parseURL: (pathname: string) => Effect.Effect<{ book: BibleBook; chapter: number } | null>;
  readonly getInitialState: () => Effect.Effect<{ book: BibleBook; chapter: number; isAbout: boolean }>;
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
          return { book: bookOption.value, chapter };
        }
      }
      return null;
    }),

  getInitialState: () =>
    Effect.sync(() => {
      if (typeof window !== 'undefined') {
        const pathname = window.location.pathname;
        
        // Check if it's the about page
        if (pathname === '/about') {
          return { book: BibleBook.John, chapter: 1, isAbout: true };
        }
        
        // Parse as Bible route
        const urlParts = pathname.split('/');
        if (urlParts.length >= 3) {
          const bookOption = toBibleBook(urlParts[1]);
          const chapter = parseInt(urlParts[2]);
          if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
            return { book: bookOption.value, chapter, isAbout: false };
          }
        }
      }
      return { book: BibleBook.John, chapter: 1, isAbout: false };
    })
});
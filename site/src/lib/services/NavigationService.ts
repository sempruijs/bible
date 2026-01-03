import { Effect, Context } from "effect";
import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { BibleBook, getShortName, toBibleBook } from "$lib/book";
import { Option } from "effect";

export interface NavigationService {
  readonly updateURL: (book: BibleBook, chapter: number) => Effect.Effect<void>;
  readonly parseURL: (pathname: string) => Effect.Effect<{ book: BibleBook; chapter: number } | null>;
  readonly getInitialState: () => Effect.Effect<{ book: BibleBook; chapter: number }>;
}

export const NavigationService = Context.GenericTag<NavigationService>("NavigationService");

export const NavigationServiceLive = NavigationService.of({
  updateURL: (book: BibleBook, chapter: number) =>
    Effect.sync(() => {
      const bookShort = getShortName(book);
      goto(`/${bookShort}/${chapter}`, { replaceState: true });
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
        const urlParts = window.location.pathname.split('/');
        if (urlParts.length >= 3) {
          const bookOption = toBibleBook(urlParts[1]);
          const chapter = parseInt(urlParts[2]);
          if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
            return { book: bookOption.value, chapter };
          }
        }
      }
      return { book: BibleBook.John, chapter: 1 };
    })
});
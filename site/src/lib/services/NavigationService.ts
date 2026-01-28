/**
 * Navigation utility service for handling URL routing and state management.
 * Simplified from Effect Context pattern to simple utility functions.
 */

import { goto } from "$app/navigation";
import { BibleBook, getShortName, toBibleBook } from "$lib/book";
import { Option } from "effect";

/**
 * Update the browser URL to reflect the current book and chapter.
 * Uses replaceState to avoid adding to browser history.
 *
 * @param book - The Bible book to navigate to
 * @param chapter - The chapter number
 */
export const updateURL = (book: BibleBook, chapter: number): void => {
	const bookShort = getShortName(book);
	goto(`/${bookShort}/${chapter}`, { replaceState: true });
};

/**
 * Navigate to a specific URL.
 * Uses replaceState to avoid adding to browser history.
 *
 * @param url - The URL to navigate to
 */
export const navigateToUrl = async (url: string): Promise<void> => {
	console.log('NavigationService: navigateToUrl called with:', url);
	console.log('NavigationService: current location:', typeof window !== 'undefined' ? window.location.pathname : 'SSR');
	await goto(url, { replaceState: true });
	console.log('NavigationService: goto completed, new location:', typeof window !== 'undefined' ? window.location.pathname : 'SSR');
};

/**
 * Parse a URL pathname to extract book and chapter information.
 *
 * @param pathname - The URL pathname to parse (e.g., "/john/3")
 * @returns Option containing book and chapter if valid, Option.none() otherwise
 *
 * @example
 * ```typescript
 * const result = parseURL("/john/3");
 * if (Option.isSome(result)) {
 *   console.log(result.value.book, result.value.chapter); // BibleBook.John, 3
 * }
 * ```
 */
export const parseURL = (pathname: string): Option.Option<{ book: BibleBook; chapter: number }> => {
	const urlParts = pathname.split('/');
	if (urlParts.length >= 3) {
		const bookOption = toBibleBook(urlParts[1]);
		const chapter = parseInt(urlParts[2]);
		if (Option.isSome(bookOption) && !isNaN(chapter) && chapter > 0) {
			return Option.some({ book: bookOption.value, chapter });
		}
	}
	return Option.none();
};

/**
 * Get the initial application state based on the current URL.
 * Determines which app type to show (Bible, About, Stopwatch) and the initial book/chapter.
 *
 * @returns Object containing the initial book, chapter, and app type flags
 */
export const getInitialState = (): {
	book: BibleBook;
	chapter: number;
	isAbout: boolean;
	isStopwatch: boolean;
} => {
	if (typeof window === 'undefined') {
		return { book: BibleBook.John, chapter: 1, isAbout: false, isStopwatch: false };
	}

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

	// Default to John 1
	return { book: BibleBook.John, chapter: 1, isAbout: false, isStopwatch: false };
};

export const NavigationService = {
	updateURL,
	navigateToUrl,
	parseURL,
	getInitialState
};

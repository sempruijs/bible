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
 * Parse a chapter/verse string like "3" or "3v16" into chapter and optional verse.
 */
const parseChapterVerse = (str: string): { chapter: number; verse: number | null } | null => {
	const match = str.match(/^(\d+)(?:v(\d+))?$/);
	if (!match) return null;

	const chapter = parseInt(match[1]);
	const verse = match[2] ? parseInt(match[2]) : null;

	if (isNaN(chapter) || chapter < 1) return null;
	if (verse !== null && (isNaN(verse) || verse < 1)) return null;

	return { chapter, verse };
};

/**
 * Parse a URL pathname to extract book, chapter, and optional verse information.
 *
 * @param pathname - The URL pathname to parse (e.g., "/john/3" or "/john/3v16")
 * @returns Option containing book, chapter, and verse if valid, Option.none() otherwise
 *
 * @example
 * ```typescript
 * const result = parseURL("/john/3v16");
 * if (Option.isSome(result)) {
 *   console.log(result.value.book, result.value.chapter, result.value.verse); // BibleBook.John, 3, 16
 * }
 * ```
 */
export const parseURL = (pathname: string): Option.Option<{ book: BibleBook; chapter: number; verse: number | null }> => {
	const urlParts = pathname.split('/');
	if (urlParts.length >= 3) {
		const bookOption = toBibleBook(urlParts[1]);
		const chapterVerse = parseChapterVerse(urlParts[2]);
		if (Option.isSome(bookOption) && chapterVerse) {
			return Option.some({ book: bookOption.value, chapter: chapterVerse.chapter, verse: chapterVerse.verse });
		}
	}
	return Option.none();
};

/**
 * Get the initial application state based on the current URL.
 * Determines which app type to show (Bible, About, Stopwatch) and the initial book/chapter/verse.
 *
 * @returns Object containing the initial book, chapter, verse, and app type flags
 */
export const getInitialState = (): {
	book: BibleBook;
	chapter: number;
	verse: number | null;
	isAbout: boolean;
	isStopwatch: boolean;
} => {
	if (typeof window === 'undefined') {
		return { book: BibleBook.John, chapter: 1, verse: null, isAbout: false, isStopwatch: false };
	}

	const pathname = window.location.pathname;

	// Check if it's the about page
	if (pathname === '/about') {
		return { book: BibleBook.John, chapter: 1, verse: null, isAbout: true, isStopwatch: false };
	}

	// Check if it's the stopwatch page
	if (pathname === '/stopwatch') {
		return { book: BibleBook.John, chapter: 1, verse: null, isAbout: false, isStopwatch: true };
	}

	// Parse as Bible route
	const urlParts = pathname.split('/');
	if (urlParts.length >= 3) {
		const bookOption = toBibleBook(urlParts[1]);
		const chapterVerse = parseChapterVerse(urlParts[2]);
		if (Option.isSome(bookOption) && chapterVerse) {
			return { book: bookOption.value, chapter: chapterVerse.chapter, verse: chapterVerse.verse, isAbout: false, isStopwatch: false };
		}
	}

	// Default to John 1
	return { book: BibleBook.John, chapter: 1, verse: null, isAbout: false, isStopwatch: false };
};

export const NavigationService = {
	updateURL,
	navigateToUrl,
	parseURL,
	getInitialState
};

/**
 * Navigation utility service for handling URL routing and state management.
 * Supports the new Bible reference URL schema:
 * - matt.5 (single chapter)
 * - matt.5v3 (single verse)
 * - matt.5v1-12 (verse range in same chapter)
 * - matt.5-7 (chapter range in same book)
 * - matt.5-7v30 (chapter range ending at verse)
 * - matt.28v10-mark.1v5 (cross-book range)
 * - matt.28-mark.2 (cross-book chapter range)
 */

import { goto } from "$app/navigation";
import { BibleBook, toBibleBook } from "$lib/book";
import type { BibleReference, BibleSelection } from "$lib/app";
import { Option } from "effect";

/**
 * Parse a single reference point like "matt.5" or "matt.5v3"
 * Returns { book, chapter, verse } or null if invalid
 */
const parseReferencePoint = (str: string): BibleReference | null => {
	// Pattern: book.chapterVverse or book.chapter
	const match = str.match(/^([a-z0-9]+)\.(\d+)(?:v(\d+))?$/i);
	if (!match) return null;

	const bookOption = toBibleBook(match[1].toLowerCase());
	if (Option.isNone(bookOption)) return null;

	const chapter = parseInt(match[2]);
	const verse = match[3] ? parseInt(match[3]) : null;

	if (isNaN(chapter) || chapter < 1) return null;
	if (verse !== null && (isNaN(verse) || verse < 1)) return null;

	return { book: bookOption.value, chapter, verse };
};

/**
 * Parse a Bible reference URL path (without leading slash)
 * Handles all URL formats including ranges
 */
export const parseReferenceUrl = (path: string): BibleSelection | null => {
	// Remove leading slash if present
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;

	// Check for cross-book range: contains book abbreviation after the dash
	// Pattern: book.chapterVverse-book.chapterVverse
	const crossBookMatch = cleanPath.match(/^([a-z0-9]+\.\d+(?:v\d+)?)-([a-z0-9]+\.\d+(?:v\d+)?)$/i);
	if (crossBookMatch) {
		const start = parseReferencePoint(crossBookMatch[1]);
		const end = parseReferencePoint(crossBookMatch[2]);
		if (start && end) {
			return { start, end };
		}
	}

	// Check for same-book range patterns
	// Pattern: book.start-end where end can be chapter, chapterVverse, or just verse
	const sameBookMatch = cleanPath.match(/^([a-z0-9]+)\.(\d+(?:v\d+)?)-(\d+(?:v\d+)?)$/i);
	if (sameBookMatch) {
		const bookOption = toBibleBook(sameBookMatch[1].toLowerCase());
		if (Option.isNone(bookOption)) return null;
		const book = bookOption.value;

		// Parse start part
		const startMatch = sameBookMatch[2].match(/^(\d+)(?:v(\d+))?$/);
		if (!startMatch) return null;
		const startChapter = parseInt(startMatch[1]);
		const startVerse = startMatch[2] ? parseInt(startMatch[2]) : null;

		// Parse end part
		const endMatch = sameBookMatch[3].match(/^(\d+)(?:v(\d+))?$/);
		if (!endMatch) return null;
		const endNum = parseInt(endMatch[1]);
		const endVerse = endMatch[2] ? parseInt(endMatch[2]) : null;

		// Determine if end is chapter or verse
		// If start has verse and end is small number without v prefix, treat as verse
		if (startVerse !== null && !endMatch[2] && endNum <= startVerse + 100) {
			// Same chapter verse range: matt.5v1-12 means verses 1-12 of chapter 5
			return {
				start: { book, chapter: startChapter, verse: startVerse },
				end: { book, chapter: startChapter, verse: endNum }
			};
		}

		// Chapter range (with optional verse): matt.5-7 or matt.5-7v30
		return {
			start: { book, chapter: startChapter, verse: startVerse },
			end: { book, chapter: endNum, verse: endVerse }
		};
	}

	// Single reference: book.chapter or book.chapterVverse
	const singleRef = parseReferencePoint(cleanPath);
	if (singleRef) {
		return { start: singleRef, end: null };
	}

	return null;
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
 * Parse a URL pathname to extract Bible selection.
 * Supports both old format (/book/chapter) and new format (/book.chapter)
 *
 * @param pathname - The URL pathname to parse
 * @returns Option containing BibleSelection if valid, Option.none() otherwise
 */
export const parseURL = (pathname: string): Option.Option<BibleSelection> => {
	// Try new format first
	const selection = parseReferenceUrl(pathname);
	if (selection) {
		return Option.some(selection);
	}

	// Try legacy format: /book/chapter or /book/chapterVverse
	const urlParts = pathname.split('/').filter(Boolean);
	if (urlParts.length >= 2) {
		const bookOption = toBibleBook(urlParts[0]);
		const chapterMatch = urlParts[1].match(/^(\d+)(?:v(\d+))?$/);
		if (Option.isSome(bookOption) && chapterMatch) {
			const chapter = parseInt(chapterMatch[1]);
			const verse = chapterMatch[2] ? parseInt(chapterMatch[2]) : null;
			return Option.some({
				start: { book: bookOption.value, chapter, verse },
				end: null
			});
		}
	}

	return Option.none();
};

/**
 * Get the initial application state based on the current URL.
 * Determines which app type to show (Bible, About, Stopwatch) and the initial selection.
 *
 * @returns Object containing the initial book, chapter, verse, selection, and app type flags
 */
export const getInitialState = (): {
	book: BibleBook;
	chapter: number;
	verse: number | null;
	selection: BibleSelection | null;
	isAbout: boolean;
	isStopwatch: boolean;
} => {
	if (typeof window === 'undefined') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: false
		};
	}

	const pathname = window.location.pathname;

	// Check if it's the about page
	if (pathname === '/about') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: true,
			isStopwatch: false
		};
	}

	// Check if it's the stopwatch page
	if (pathname === '/stopwatch') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: true
		};
	}

	// Parse as Bible route
	const selectionOption = parseURL(pathname);
	if (Option.isSome(selectionOption)) {
		const selection = selectionOption.value;
		return {
			book: selection.start.book,
			chapter: selection.start.chapter,
			verse: selection.start.verse,
			selection,
			isAbout: false,
			isStopwatch: false
		};
	}

	// Default to John 1
	return {
		book: BibleBook.John,
		chapter: 1,
		verse: null,
		selection: null,
		isAbout: false,
		isStopwatch: false
	};
};

export const NavigationService = {
	navigateToUrl,
	parseURL,
	parseReferenceUrl,
	getInitialState
};

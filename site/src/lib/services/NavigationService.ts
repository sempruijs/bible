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
 * Update the URL without triggering a page navigation/reload.
 * Uses history.replaceState for smooth updates.
 *
 * @param url - The URL to set
 */
export const navigateToUrl = (url: string): void => {
	if (typeof window === 'undefined') return;

	console.log('NavigationService: updating URL to:', url);
	// Use history.replaceState to update URL without navigation
	window.history.replaceState(window.history.state, '', url);
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
 * Parse the URL hash to extract scroll position (e.g., "#john.1v1")
 */
export const parseScrollHash = (hash: string): BibleReference | null => {
	if (!hash || hash === '#') return null;
	// Remove the # prefix
	const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
	return parseReferencePoint(cleanHash);
};

/**
 * Get the initial application state based on the current URL.
 * Path = selection, Hash = scroll position
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
	isWiki: boolean;
	wikiPage: string | null;
	isLibrary: boolean;
	libraryDocument: string | null;
} => {
	if (typeof window === 'undefined') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: false,
			isWiki: false,
			wikiPage: null,
			isLibrary: false,
			libraryDocument: null
		};
	}

	const pathname = window.location.pathname;
	const hash = window.location.hash;

	// Check if it's the about page
	if (pathname === '/about') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: true,
			isStopwatch: false,
			isWiki: false,
			wikiPage: null,
			isLibrary: false,
			libraryDocument: null
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
			isStopwatch: true,
			isWiki: false,
			wikiPage: null,
			isLibrary: false,
			libraryDocument: null
		};
	}

	// Check if it's a wiki page (with or without specific page)
	if (pathname === '/wiki' || pathname === '/wiki/') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: false,
			isWiki: true,
			wikiPage: '',
			isLibrary: false,
			libraryDocument: null
		};
	}

	const wikiMatch = pathname.match(/^\/wiki\/([^/]+)$/);
	if (wikiMatch) {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: false,
			isWiki: true,
			wikiPage: wikiMatch[1],
			isLibrary: false,
			libraryDocument: null
		};
	}

	// Check if it's a library page (with or without specific document)
	if (pathname === '/library' || pathname === '/library/') {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: false,
			isWiki: false,
			wikiPage: null,
			isLibrary: true,
			libraryDocument: ''
		};
	}

	const libraryMatch = pathname.match(/^\/library\/(.+)$/);
	if (libraryMatch) {
		return {
			book: BibleBook.John,
			chapter: 1,
			verse: null,
			selection: null,
			isAbout: false,
			isStopwatch: false,
			isWiki: false,
			wikiPage: null,
			isLibrary: true,
			libraryDocument: libraryMatch[1]
		};
	}

	// Parse selection from path
	const selectionOption = parseURL(pathname);
	const selection = Option.isSome(selectionOption) ? selectionOption.value : null;

	// Parse scroll position from hash
	const scrollPosition = parseScrollHash(hash);

	// If we have a scroll position in hash, use it
	if (scrollPosition) {
		return {
			book: scrollPosition.book,
			chapter: scrollPosition.chapter,
			verse: scrollPosition.verse,
			selection,
			isAbout: false,
			isStopwatch: false,
			isWiki: false,
			wikiPage: null,
			isLibrary: false,
			libraryDocument: null
		};
	}

	// If we have a selection but no scroll hash, scroll to selection start
	if (selection) {
		return {
			book: selection.start.book,
			chapter: selection.start.chapter,
			verse: selection.start.verse,
			selection,
			isAbout: false,
			isStopwatch: false,
			isWiki: false,
			wikiPage: null,
			isLibrary: false,
			libraryDocument: null
		};
	}

	// Default to John 1
	return {
		book: BibleBook.John,
		chapter: 1,
		verse: null,
		selection: null,
		isAbout: false,
		isStopwatch: false,
		isWiki: false,
		wikiPage: null,
		isLibrary: false,
		libraryDocument: null
	};
};

export const NavigationService = {
	navigateToUrl,
	parseURL,
	parseReferenceUrl,
	parseScrollHash,
	getInitialState
};

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
import { Option, pipe } from "effect";

/**
 * Parse a single reference point like "matt.5" or "matt.5v3"
 * Returns Option containing { book, chapter, verse } if valid
 */
const parseReferencePoint = (str: string): Option.Option<BibleReference> => {
	// Pattern: book.chapterVverse or book.chapter
	const match = str.match(/^([a-z0-9]+)\.(\d+)(?:v(\d+))?$/i);
	if (!match) return Option.none();

	return pipe(
		toBibleBook(match[1].toLowerCase()),
		Option.flatMap(book => {
			const chapter = parseInt(match[2]);
			const verseStr = match[3];
			const verse = verseStr ? parseInt(verseStr) : undefined;

			if (isNaN(chapter) || chapter < 1) return Option.none();
			if (verse !== undefined && (isNaN(verse) || verse < 1)) return Option.none();

			return Option.some({
				book,
				chapter,
				verse: Option.fromNullable(verse)
			});
		})
	);
};

/**
 * Parse a Bible reference URL path (without leading slash)
 * Handles all URL formats including ranges
 */
export const parseReferenceUrl = (path: string): Option.Option<BibleSelection> => {
	// Remove leading slash if present
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;

	// Check for cross-book range: contains book abbreviation after the dash
	// Pattern: book.chapterVverse-book.chapterVverse
	const crossBookMatch = cleanPath.match(/^([a-z0-9]+\.\d+(?:v\d+)?)-([a-z0-9]+\.\d+(?:v\d+)?)$/i);
	if (crossBookMatch) {
		return pipe(
			Option.all([
				parseReferencePoint(crossBookMatch[1]),
				parseReferencePoint(crossBookMatch[2])
			]),
			Option.map(([start, end]) => ({ start, end: Option.some(end) }))
		);
	}

	// Check for same-book range patterns
	// Pattern: book.start-end where end can be chapter, chapterVverse, or just verse
	const sameBookMatch = cleanPath.match(/^([a-z0-9]+)\.(\d+(?:v\d+)?)-(\d+(?:v\d+)?)$/i);
	if (sameBookMatch) {
		return pipe(
			toBibleBook(sameBookMatch[1].toLowerCase()),
			Option.flatMap(book => {
				// Parse start part
				const startMatch = sameBookMatch[2].match(/^(\d+)(?:v(\d+))?$/);
				if (!startMatch) return Option.none();
				const startChapter = parseInt(startMatch[1]);
				const startVerse = startMatch[2] ? parseInt(startMatch[2]) : undefined;

				// Parse end part
				const endMatch = sameBookMatch[3].match(/^(\d+)(?:v(\d+))?$/);
				if (!endMatch) return Option.none();
				const endNum = parseInt(endMatch[1]);
				const endVerse = endMatch[2] ? parseInt(endMatch[2]) : undefined;

				// Determine if end is chapter or verse
				// If start has verse and end is small number without v prefix, treat as verse
				if (startVerse !== undefined && !endMatch[2] && endNum <= startVerse + 100) {
					// Same chapter verse range: matt.5v1-12 means verses 1-12 of chapter 5
					return Option.some({
						start: { book, chapter: startChapter, verse: Option.some(startVerse) },
						end: Option.some({ book, chapter: startChapter, verse: Option.some(endNum) })
					});
				}

				// Chapter range (with optional verse): matt.5-7 or matt.5-7v30
				return Option.some({
					start: { book, chapter: startChapter, verse: Option.fromNullable(startVerse) },
					end: Option.some({ book, chapter: endNum, verse: Option.fromNullable(endVerse) })
				});
			})
		);
	}

	// Single reference: book.chapter or book.chapterVverse
	return pipe(
		parseReferencePoint(cleanPath),
		Option.map(start => ({ start, end: Option.none() }))
	);
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
	const newFormatResult = parseReferenceUrl(pathname);
	if (Option.isSome(newFormatResult)) {
		return newFormatResult;
	}

	// Try legacy format: /book/chapter or /book/chapterVverse
	const urlParts = pathname.split('/').filter(Boolean);
	if (urlParts.length >= 2) {
		const chapterMatch = urlParts[1].match(/^(\d+)(?:v(\d+))?$/);
		if (chapterMatch) {
			return pipe(
				toBibleBook(urlParts[0]),
				Option.map(book => {
					const chapter = parseInt(chapterMatch[1]);
					const verse = chapterMatch[2] ? parseInt(chapterMatch[2]) : undefined;
					return {
						start: { book, chapter, verse: Option.fromNullable(verse) },
						end: Option.none()
					};
				})
			);
		}
	}

	return Option.none();
};

/**
 * Parse the URL hash to extract scroll position (e.g., "#john.1v1")
 */
export const parseScrollHash = (hash: string): Option.Option<BibleReference> => {
	if (!hash || hash === '#') return Option.none();
	// Remove the # prefix
	const cleanHash = hash.startsWith('#') ? hash.slice(1) : hash;
	return parseReferencePoint(cleanHash);
};

// Initial state type using Option for optional values
export type InitialState = {
	book: BibleBook;
	chapter: number;
	verse: Option.Option<number>;
	selection: Option.Option<BibleSelection>;
	isAbout: boolean;
	isStopwatch: boolean;
	isWiki: boolean;
	wikiPage: Option.Option<string>;
	isLibrary: boolean;
	libraryDocument: Option.Option<string>;
};

// Default initial state
const defaultInitialState: InitialState = {
	book: BibleBook.John,
	chapter: 1,
	verse: Option.none(),
	selection: Option.none(),
	isAbout: false,
	isStopwatch: false,
	isWiki: false,
	wikiPage: Option.none(),
	isLibrary: false,
	libraryDocument: Option.none()
};

/**
 * Get the initial application state based on the current URL.
 * Path = selection, Hash = scroll position
 *
 * @returns Object containing the initial book, chapter, verse, selection, and app type flags
 */
export const getInitialState = (): InitialState => {
	if (typeof window === 'undefined') {
		return defaultInitialState;
	}

	const pathname = window.location.pathname;
	const hash = window.location.hash;

	// Check if it's the about page
	if (pathname === '/about') {
		return { ...defaultInitialState, isAbout: true };
	}

	// Check if it's the stopwatch page
	if (pathname === '/stopwatch') {
		return { ...defaultInitialState, isStopwatch: true };
	}

	// Check if it's a wiki page (with or without specific page)
	if (pathname === '/wiki' || pathname === '/wiki/') {
		return {
			...defaultInitialState,
			isWiki: true,
			wikiPage: Option.some('')
		};
	}

	const wikiMatch = pathname.match(/^\/wiki\/([^/]+)$/);
	if (wikiMatch) {
		return {
			...defaultInitialState,
			isWiki: true,
			wikiPage: Option.some(wikiMatch[1])
		};
	}

	// Check if it's a library page (with or without specific document)
	if (pathname === '/library' || pathname === '/library/') {
		return {
			...defaultInitialState,
			isLibrary: true,
			libraryDocument: Option.some('')
		};
	}

	const libraryMatch = pathname.match(/^\/library\/(.+)$/);
	if (libraryMatch) {
		return {
			...defaultInitialState,
			isLibrary: true,
			libraryDocument: Option.some(libraryMatch[1])
		};
	}

	// Parse selection from path
	const selection = parseURL(pathname);

	// Parse scroll position from hash
	const scrollPosition = parseScrollHash(hash);

	// If we have a scroll position in hash, use it
	return pipe(
		scrollPosition,
		Option.match({
			onSome: (pos) => ({
				...defaultInitialState,
				book: pos.book,
				chapter: pos.chapter,
				verse: pos.verse,
				selection
			}),
			onNone: () => pipe(
				selection,
				Option.match({
					onSome: (sel) => ({
						...defaultInitialState,
						book: sel.start.book,
						chapter: sel.start.chapter,
						verse: sel.start.verse,
						selection: Option.some(sel)
					}),
					onNone: () => defaultInitialState
				})
			)
		})
	);
};

export const NavigationService = {
	navigateToUrl,
	parseURL,
	parseReferenceUrl,
	parseScrollHash,
	getInitialState
};

import { Data, Effect } from "effect";
import type { BibleBook } from "$lib/book";
import { getDisplayName as getBibleBookDisplayName, getShortName } from "$lib/book";
import type { Translation } from "$lib/translations/translation";

// BibleState type definition with Translation included
export interface BibleState {
	readonly id: string;
	readonly currentBook: BibleBook;
	readonly currentChapter: number;
	readonly translation: Translation;
	readonly showCanonExplorer: boolean;
}

export const BibleState = Data.case<BibleState>();

// StopwatchState type definition
export interface StopwatchState {
	readonly id: string;
	readonly elapsedTime: number; // in milliseconds
	readonly isRunning: boolean;
}

export const StopwatchState = Data.case<StopwatchState>();

// App TaggedEnum using proper Effect pattern
export type App = Data.TaggedEnum<{
	Bible: { readonly bibleState: BibleState }
	About: { readonly id: string }
	ChooseApp: { readonly id: string }
	Stopwatch: { readonly stopwatchState: StopwatchState }
}>

export const { Bible, About, ChooseApp, Stopwatch, $match } = Data.taggedEnum<App>()

// Tab ID management using Effect
export const getTabId = (app: App): string => {
	return $match(app, {
		Bible: ({ bibleState }) => bibleState.id,
		About: ({ id }) => id,
		ChooseApp: ({ id }) => id,
		Stopwatch: ({ stopwatchState }) => stopwatchState.id
	});
};

// Format time as MM:SS for tab title
const formatTimeForTitle = (milliseconds: number): string => {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Get display name for App (tab title) using $match
export const getDisplayName = (app: App): string => {
	return $match(app, {
		Bible: ({ bibleState }) => `${getBibleBookDisplayName(bibleState.currentBook)} ${bibleState.currentChapter}`,
		About: () => "About",
		ChooseApp: () => "Choose App",
		Stopwatch: ({ stopwatchState }) => {
			if (stopwatchState.elapsedTime > 0 || stopwatchState.isRunning) {
				return formatTimeForTitle(stopwatchState.elapsedTime);
			}
			return "Stopwatch";
		}
	});
};

// App state transformations using Effect
export const transformApp = (app: App, transform: (app: App) => App): Effect.Effect<App> =>
	Effect.succeed(transform(app));

export const createBibleApp = (
	id: string,
	book: BibleBook,
	chapter: number,
	translation: Translation,
	showCanonExplorer: boolean
): Effect.Effect<App> =>
	Effect.succeed(Bible({
		bibleState: BibleState({
			id,
			currentBook: book,
			currentChapter: chapter,
			translation,
			showCanonExplorer
		})
	}));

export const createAboutApp = (id: string): Effect.Effect<App> =>
	Effect.succeed(About({ id }));

export const createChooseApp = (id: string): Effect.Effect<App> =>
	Effect.succeed(ChooseApp({ id }));

export const createStopwatchApp = (id: string): Effect.Effect<App> =>
	Effect.succeed(Stopwatch({
		stopwatchState: StopwatchState({
			id,
			elapsedTime: 0,
			isRunning: false
		})
	}));

// Map App instances to their corresponding URLs
export const getAppUrl = (app: App): string => {
	return $match(app, {
		Bible: ({ bibleState }) => {
			const bookShort = getShortName(bibleState.currentBook);
			return `/${bookShort}/${bibleState.currentChapter}`;
		},
		About: () => "/about",
		ChooseApp: () => "/", // Default to home for choose app
		Stopwatch: () => "/stopwatch"
	});
};
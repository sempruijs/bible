import { Data, Effect, Schema } from "effect";
import type { BibleBook } from "$lib/book";
import { BibleBookSchema, getDisplayName as getBibleBookDisplayName, getShortName } from "$lib/book";
import type { Translation } from "$lib/translations/translation";
import { TranslationSchema } from "$lib/translations/translation";

// Effect Schema definitions
export const BibleStateSchema = Schema.Struct({
	id: Schema.String,
	currentBook: BibleBookSchema,
	currentChapter: Schema.Number,
	translation: TranslationSchema,
	showCanonExplorer: Schema.Boolean
});

export const StopwatchStateSchema = Schema.Struct({
	id: Schema.String,
	elapsedTime: Schema.Number, // in milliseconds
	isRunning: Schema.Boolean
});

// Type exports
export type BibleState = Schema.Schema.Type<typeof BibleStateSchema>;
export type StopwatchState = Schema.Schema.Type<typeof StopwatchStateSchema>;

// Maintain backward compatibility with Data constructors
export const BibleState = Data.case<BibleState>();
export const StopwatchState = Data.case<StopwatchState>();

// Effect Schema for App TaggedEnum
export const AppSchema = Schema.Union(
	Schema.Struct({
		_tag: Schema.Literal("Bible"),
		bibleState: BibleStateSchema
	}),
	Schema.Struct({
		_tag: Schema.Literal("About"),
		id: Schema.String
	}),
	Schema.Struct({
		_tag: Schema.Literal("ChooseApp"),
		id: Schema.String
	}),
	Schema.Struct({
		_tag: Schema.Literal("Stopwatch"),
		stopwatchState: StopwatchStateSchema
	})
);

export type App = Schema.Schema.Type<typeof AppSchema>;

// Maintain backward compatibility with Data TaggedEnum
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
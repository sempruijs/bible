import { Data, Effect, Schema } from "effect";
import type { BibleBook } from "$lib/book";
import { BibleBookSchema, getDisplayName as getBibleBookDisplayName, getShortName } from "$lib/book";
import type { Translation } from "$lib/translations/translation";
import { TranslationSchema } from "$lib/translations/translation";

// Effect Schema definitions - App content without IDs
export const BibleStateSchema = Schema.Struct({
	currentBook: BibleBookSchema,
	currentChapter: Schema.Number,
	translation: TranslationSchema,
	showCanonExplorer: Schema.Boolean
});

export const StopwatchStateSchema = Schema.Struct({
	elapsedTime: Schema.Number, // in milliseconds
	isRunning: Schema.Boolean
});

// App content schema - just the app-specific data
export const AppContentSchema = Schema.Union(
	Schema.Struct({
		_tag: Schema.Literal("Bible"),
		bibleState: BibleStateSchema
	}),
	Schema.Struct({
		_tag: Schema.Literal("About")
	}),
	Schema.Struct({
		_tag: Schema.Literal("ChooseApp")
	}),
	Schema.Struct({
		_tag: Schema.Literal("Stopwatch"),
		stopwatchState: StopwatchStateSchema
	})
);

// Tab schema - combines ID with app content
export const TabSchema = Schema.Struct({
	id: Schema.String,
	app: AppContentSchema
});

// Type exports
export type BibleState = Schema.Schema.Type<typeof BibleStateSchema>;
export type StopwatchState = Schema.Schema.Type<typeof StopwatchStateSchema>;
export type AppContent = Schema.Schema.Type<typeof AppContentSchema>;
export type Tab = Schema.Schema.Type<typeof TabSchema>;


// Maintain backward compatibility with Data constructors
export const BibleState = Data.case<BibleState>();
export const StopwatchState = Data.case<StopwatchState>();

// AppContent constructors
export const { Bible, About, ChooseApp, Stopwatch, $match } = Data.taggedEnum<AppContent>()

// Tab ID management using Effect
export const getTabId = (tab: Tab): string => {
	return tab.id;
};

// Format time as MM:SS for tab title
const formatTimeForTitle = (milliseconds: number): string => {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Get display name for Tab (tab title) using $match
export const getDisplayName = (tab: Tab): string => {
	return $match(tab.app, {
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

// Tab state transformations using Effect
export const transformTab = (tab: Tab, transform: (tab: Tab) => Tab): Effect.Effect<Tab> =>
	Effect.succeed(transform(tab));

export const createBibleTab = (
	id: string,
	book: BibleBook,
	chapter: number,
	translation: Translation,
	showCanonExplorer: boolean
): Effect.Effect<Tab> =>
	Effect.succeed({
		id,
		app: Bible({
			bibleState: BibleState({
				currentBook: book,
				currentChapter: chapter,
				translation,
				showCanonExplorer
			})
		})
	});

export const createAboutTab = (id: string): Effect.Effect<Tab> =>
	Effect.succeed({
		id,
		app: About()
	});

export const createChooseTab = (id: string): Effect.Effect<Tab> =>
	Effect.succeed({
		id,
		app: ChooseApp()
	});

export const createStopwatchTab = (id: string): Effect.Effect<Tab> =>
	Effect.succeed({
		id,
		app: Stopwatch({
			stopwatchState: StopwatchState({
				elapsedTime: 0,
				isRunning: false
			})
		})
	});


// Map Tab instances to their corresponding URLs
export const getTabUrl = (tab: Tab): string => {
	return $match(tab.app, {
		Bible: ({ bibleState }) => {
			const bookShort = getShortName(bibleState.currentBook);
			return `/${bookShort}/${bibleState.currentChapter}`;
		},
		About: () => "/about",
		ChooseApp: () => "/", // Default to home for choose app
		Stopwatch: () => "/stopwatch"
	});
};
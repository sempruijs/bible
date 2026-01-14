import { Data, Effect, Schema } from "effect";
import type { BibleBook } from "$lib/book";
import { BibleBookSchema, getDisplayName as getBibleBookDisplayName, getShortName } from "$lib/book";
import type { Translation } from "$lib/translations/translation";
import { TranslationSchema } from "$lib/translations/translation";

// Effect Schema definitions - App-specific state
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

// App schema - represents the application running in a tab
export const AppSchema = Schema.Union(
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

// TabState schema - combines ID with app
export const TabStateSchema = Schema.Struct({
	id: Schema.String,
	app: AppSchema
});

// TabsState schema - the complete tabs system state
export const TabsStateSchema = Schema.Struct({
	tabs: Schema.Array(TabStateSchema),
	activeTabId: Schema.String,
	nextTabId: Schema.Number
});

// Helper type to make deeply readonly types writable (for Svelte $state compatibility)
type DeepWritable<T> = T extends object
	? { -readonly [P in keyof T]: DeepWritable<T[P]> }
	: T;

// Type exports - Schema.Type generates readonly types, make them writable for $state
type BibleStateReadonly = Schema.Schema.Type<typeof BibleStateSchema>;
type StopwatchStateReadonly = Schema.Schema.Type<typeof StopwatchStateSchema>;
type AppReadonly = Schema.Schema.Type<typeof AppSchema>;
type TabStateReadonly = Schema.Schema.Type<typeof TabStateSchema>;
type TabsStateReadonly = Schema.Schema.Type<typeof TabsStateSchema>;

export type BibleState = DeepWritable<BibleStateReadonly>;
export type StopwatchState = DeepWritable<StopwatchStateReadonly>;
export type App = DeepWritable<AppReadonly>;
export type TabState = DeepWritable<TabStateReadonly>;
export type TabsState = DeepWritable<TabsStateReadonly>;

// Maintain backward compatibility with Data constructors
export const BibleState = Data.case<BibleState>();
export const StopwatchState = Data.case<StopwatchState>();

// App constructors
export const { Bible, About, ChooseApp, Stopwatch, $match } = Data.taggedEnum<App>()

// Legacy type aliases for backward compatibility (will be removed later)
export type AppContent = App;
export type Tab = TabState;

// Selectors - extract information from TabState
export const getTabId = (tab: TabState): string => {
	return tab.id;
};

// Format time as MM:SS for tab title
const formatTimeForTitle = (milliseconds: number): string => {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Get display name for TabState (tab title) using $match
export const getDisplayName = (tab: TabState): string => {
	return $match(tab.app, {
		Bible: ({ bibleState }) => `${getBibleBookDisplayName(bibleState.currentBook)} ${bibleState.currentChapter} (${bibleState.translation.metadata.shortName})`,
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

// Map TabState instances to their corresponding URLs
export const getTabUrl = (tab: TabState): string => {
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

// Create tab configuration types
export type CreateTabConfig =
	| { app: "Bible", id: string, book: BibleBook, chapter: number, translation: Translation, showCanonExplorer: boolean }
	| { app: "Stopwatch", id: string }
	| { app: "About", id: string }
	| { app: "ChooseApp", id: string };

// Unified tab creation function
export const createTab = (config: CreateTabConfig): Effect.Effect<TabState> => {
	switch (config.app) {
		case "Bible":
			return Effect.succeed({
				id: config.id,
				app: Bible({
					bibleState: BibleState({
						currentBook: config.book,
						currentChapter: config.chapter,
						translation: config.translation as any, // Translation types are readonly but compatible
						showCanonExplorer: config.showCanonExplorer
					})
				})
			});
		case "Stopwatch":
			return Effect.succeed({
				id: config.id,
				app: Stopwatch({
					stopwatchState: StopwatchState({
						elapsedTime: 0,
						isRunning: false
					})
				})
			});
		case "About":
			return Effect.succeed({
				id: config.id,
				app: About()
			});
		case "ChooseApp":
			return Effect.succeed({
				id: config.id,
				app: ChooseApp()
			});
	}
};

// Legacy functions for backward compatibility (will be removed later)
export const createBibleTab = (
	id: string,
	book: BibleBook,
	chapter: number,
	translation: Translation,
	showCanonExplorer: boolean
): Effect.Effect<TabState> =>
	createTab({ app: "Bible", id, book, chapter, translation, showCanonExplorer });

export const createAboutTab = (id: string): Effect.Effect<TabState> =>
	createTab({ app: "About", id });

export const createChooseTab = (id: string): Effect.Effect<TabState> =>
	createTab({ app: "ChooseApp", id });

export const createStopwatchTab = (id: string): Effect.Effect<TabState> =>
	createTab({ app: "Stopwatch", id });
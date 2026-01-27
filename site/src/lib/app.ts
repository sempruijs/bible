import { Data, Schema, Option } from "effect";
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

// Format time as MM:SS for tab title
const formatTimeForTitle = (milliseconds: number): string => {
	const totalSeconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// App namespace - operations on App type
export namespace App {
	export const getUrl = (app: App): string => {
		return $match(app, {
			Bible: ({ bibleState }) => {
				const bookShort = getShortName(bibleState.currentBook);
				return `/${bookShort}/${bibleState.currentChapter}`;
			},
			About: () => "/about",
			ChooseApp: () => "/",
			Stopwatch: () => "/stopwatch"
		});
	};

	export const getTitle = (app: App): string => {
		return $match(app, {
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
}

// TabsState namespace - operations on TabsState type
// These are pure functions for state transformations
export namespace TabsState {
	export const addTab = (state: TabsState, app: App): TabsState => {
		const tabId = `tab${state.nextTabId}`;
		const newTab: TabState = { id: tabId, app };

		return {
			tabs: [...state.tabs, newTab],
			activeTabId: tabId,
			nextTabId: state.nextTabId + 1
		};
	};

	export const removeTab = (state: TabsState, tabId: string): TabsState => {
		// Don't allow removing last tab
		if (state.tabs.length === 1) {
			return state;
		}

		const newTabs = state.tabs.filter(tab => tab.id !== tabId);

		// If removing active tab, switch to first tab
		const newActiveTabId = state.activeTabId === tabId
			? newTabs[0]?.id ?? state.activeTabId
			: state.activeTabId;

		return {
			tabs: newTabs,
			activeTabId: newActiveTabId,
			nextTabId: state.nextTabId
		};
	};

	export const setActiveTab = (state: TabsState, tabId: string): TabsState => {
		// Verify tab exists
		const tabExists = state.tabs.some(tab => tab.id === tabId);
		if (!tabExists) {
			console.error(`Tab ${tabId} not found`);
			return state;
		}

		return {
			...state,
			activeTabId: tabId
		};
	};

	export const nextTab = (state: TabsState): TabsState => {
		const currentIndex = state.tabs.findIndex(tab => tab.id === state.activeTabId);
		if (currentIndex === -1) return state;

		const nextIndex = (currentIndex + 1) % state.tabs.length;
		return {
			...state,
			activeTabId: state.tabs[nextIndex].id
		};
	};

	export const previousTab = (state: TabsState): TabsState => {
		const currentIndex = state.tabs.findIndex(tab => tab.id === state.activeTabId);
		if (currentIndex === -1) return state;

		const prevIndex = currentIndex === 0 ? state.tabs.length - 1 : currentIndex - 1;
		return {
			...state,
			activeTabId: state.tabs[prevIndex].id
		};
	};

	export const updateTab = (state: TabsState, updatedTab: TabState): TabsState => {
		return {
			...state,
			tabs: state.tabs.map(tab => tab.id === updatedTab.id ? updatedTab : tab)
		};
	};

	export const getActiveTab = (state: TabsState): Option.Option<TabState> => {
		const tab = state.tabs.find(t => t.id === state.activeTabId);
		return tab ? Option.some(tab) : Option.none();
	};
}


// Create tab configuration types
export type CreateTabConfig =
	| { app: "Bible", id: string, book: BibleBook, chapter: number, translation: Translation, showCanonExplorer: boolean }
	| { app: "Stopwatch", id: string }
	| { app: "About", id: string }
	| { app: "ChooseApp", id: string };

// Unified tab creation function - pure data construction
export const createTab = (config: CreateTabConfig): TabState => {
	switch (config.app) {
		case "Bible":
			return {
				id: config.id,
				app: Bible({
					bibleState: BibleState({
						currentBook: config.book,
						currentChapter: config.chapter,
						translation: config.translation as any, // Translation types are readonly but compatible
						showCanonExplorer: config.showCanonExplorer
					})
				})
			};
		case "Stopwatch":
			return {
				id: config.id,
				app: Stopwatch({
					stopwatchState: StopwatchState({
						elapsedTime: 0,
						isRunning: false
					})
				})
			};
		case "About":
			return {
				id: config.id,
				app: About()
			};
		case "ChooseApp":
			return {
				id: config.id,
				app: ChooseApp()
			};
	}
};


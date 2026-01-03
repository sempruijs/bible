import { Data, Effect } from "effect";
import type { BibleBook } from "$lib/book";
import { getDisplayName as getBibleBookDisplayName } from "$lib/book";
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

// App TaggedEnum using proper Effect pattern
export type App = Data.TaggedEnum<{
	Bible: { readonly bibleState: BibleState }
	About: { readonly id: string }
	ChooseApp: { readonly id: string }
}>

export const { Bible, About, ChooseApp, $match } = Data.taggedEnum<App>()

// Tab ID management using Effect
export const getTabId = (app: App): string => {
	return $match(app, {
		Bible: ({ bibleState }) => bibleState.id,
		About: ({ id }) => id,
		ChooseApp: ({ id }) => id
	});
};

// Get display name for App (tab title) using $match
export const getDisplayName = (app: App): string => {
	return $match(app, {
		Bible: ({ bibleState }) => `${getBibleBookDisplayName(bibleState.currentBook)} ${bibleState.currentChapter}`,
		About: () => "About",
		ChooseApp: () => "Choose App"
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
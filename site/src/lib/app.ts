import { Data } from "effect";
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
	About: {}
}>

export const { Bible, About, $match } = Data.taggedEnum<App>()

// Get display name for App (tab title) using $match
export const getDisplayName = (app: App): string => {
	return $match(app, {
		Bible: ({ bibleState }) => `${getBibleBookDisplayName(bibleState.currentBook)} ${bibleState.currentChapter}`,
		About: () => "About"
	});
};
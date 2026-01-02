import { Data } from "effect";
import type { BibleBook } from "$lib/book";

// BibleTab type definition (since it's defined in TabbedBible component)
export interface BibleTab {
	readonly id: string;
	readonly currentBook: BibleBook;
	readonly currentChapter: number;
}

export const BibleTab = Data.case<BibleTab>();

// App enum with Bible and About variants
export type App = 
	| { readonly _tag: "Bible"; readonly bibleTab: BibleTab }
	| { readonly _tag: "About" };

export const App = {
	Bible: (bibleTab: BibleTab): App => ({ _tag: "Bible", bibleTab }),
	About: (): App => ({ _tag: "About" })
} as const;
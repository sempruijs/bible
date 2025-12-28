import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { toBibleBook, BibleBook } from '$lib/book';
import { Effect, Option } from 'effect';
import { getChapter } from '$lib/translations/translation';

export const load: PageLoad = async ({ params, parent }) => {
    const bibleBook: Option.Option<BibleBook> = toBibleBook(params.book);

    if (Option.isNone(bibleBook)) {
        error(404, 'Book not found');
    }

    const chapterNumber = parseInt(params.chapter);
    if (isNaN(chapterNumber) || chapterNumber < 1) {
        error(404, 'Invalid chapter number');
    }

    const { bibleData } = await parent();

    const chapterOption = await Effect.runPromise(getChapter(bibleData, bibleBook.value, chapterNumber));

    if (Option.isNone(chapterOption)) {
        error(404, 'Chapter not found');
    }

    return {
        book: bibleBook.value,
        chapter: chapterOption.value,
    };
};
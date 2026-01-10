import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { toBibleBook, BibleBook } from '$lib/book';
import { Effect, Option } from 'effect';
import { getChapterFromContent } from '$lib/translations/translation';
import { loadTranslationContent } from '$lib/translations/loadTranslationContent';

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

    // Load translation content
    const content = await Effect.runPromise(loadTranslationContent(bibleData));

    const chapterOption = await Effect.runPromise(getChapterFromContent(content, bibleBook.value, chapterNumber));

    if (Option.isNone(chapterOption)) {
        error(404, 'Chapter not found');
    }

    return {
        book: bibleBook.value,
        chapter: chapterOption.value,
    };
};
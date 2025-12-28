import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { toBibleBook, BibleBook } from '$lib/book';
import { Option } from 'effect';

export const load: PageLoad = ({ params }) => {
    const bibleBook: Option.Option<BibleBook> = toBibleBook(params.book)
    if (Option.isSome(bibleBook)) {
        return {
            book: bibleBook.value,
        };
    }

    error(404, 'Not found');
};
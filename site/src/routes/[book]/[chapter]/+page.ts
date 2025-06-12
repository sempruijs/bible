import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  return {
    book: params.book,
    chapter: params.chapter
  };
};

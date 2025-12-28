import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Bible } from '$lib/translations/v0';

// Sample bible data - replace with actual data source
const bibleData: Bible = {
  books: [
    {
      name: "Genesis",
      chapters: [
        {
          chapter: 1,
          name: "Genesis 1",
          verses: [
            {
              verse: 1,
              chapter: 1,
              name: "Genesis 1:1",
              text: "In the beginning God created the heaven and the earth."
            },
            {
              verse: 2,
              chapter: 1,
              name: "Genesis 1:2", 
              text: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."
            }
          ]
        }
      ]
    },
    {
      name: "Matthew",
      chapters: [
        {
          chapter: 1,
          name: "Matthew 1",
          verses: [
            {
              verse: 1,
              chapter: 1,
              name: "Matthew 1:1",
              text: "The book of the generation of Jesus Christ, the son of David, the son of Abraham."
            }
          ]
        }
      ]
    }
  ]
};

export const GET: RequestHandler = async () => {
  return json(bibleData);
};
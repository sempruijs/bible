import { Data } from "effect";
import { BibleBook } from "$lib/book";

export interface BookOrder {
    readonly name: string;
    readonly books: BibleBook[];
}

export const BookOrder = Data.case<BookOrder>();

const protestantBooks: BibleBook[] = [
    // Old Testament
    BibleBook.Genesis,
    BibleBook.Exodus,
    BibleBook.Leviticus,
    BibleBook.Numbers,
    BibleBook.Deuteronomy,
    BibleBook.Joshua,
    BibleBook.Judges,
    BibleBook.Ruth,
    BibleBook.FirstSamuel,
    BibleBook.SecondSamuel,
    BibleBook.FirstKings,
    BibleBook.SecondKings,
    BibleBook.FirstChronicles,
    BibleBook.SecondChronicles,
    BibleBook.Ezra,
    BibleBook.Nehemiah,
    BibleBook.Esther,
    BibleBook.Job,
    BibleBook.Psalms,
    BibleBook.Proverbs,
    BibleBook.Ecclesiastes,
    BibleBook.SongOfSongs,
    BibleBook.Isaiah,
    BibleBook.Jeremiah,
    BibleBook.Lamentations,
    BibleBook.Ezekiel,
    BibleBook.Daniel,
    BibleBook.Hosea,
    BibleBook.Joel,
    BibleBook.Amos,
    BibleBook.Obadiah,
    BibleBook.Jonah,
    BibleBook.Micah,
    BibleBook.Nahum,
    BibleBook.Habakkuk,
    BibleBook.Zephaniah,
    BibleBook.Haggai,
    BibleBook.Zechariah,
    BibleBook.Malachi,

    // New Testament
    BibleBook.Matthew,
    BibleBook.Mark,
    BibleBook.Luke,
    BibleBook.John,
    BibleBook.Acts,
    BibleBook.Romans,
    BibleBook.FirstCorinthians,
    BibleBook.SecondCorinthians,
    BibleBook.Galatians,
    BibleBook.Ephesians,
    BibleBook.Philippians,
    BibleBook.Colossians,
    BibleBook.FirstThessalonians,
    BibleBook.SecondThessalonians,
    BibleBook.FirstTimothy,
    BibleBook.SecondTimothy,
    BibleBook.Titus,
    BibleBook.Philemon,
    BibleBook.Hebrews,
    BibleBook.James,
    BibleBook.FirstPeter,
    BibleBook.SecondPeter,
    BibleBook.FirstJohn,
    BibleBook.SecondJohn,
    BibleBook.ThirdJohn,
    BibleBook.Jude,
    BibleBook.Revelation
];

const jewishBooks: BibleBook[] = [
    // Torah (Law)
    BibleBook.Genesis,
    BibleBook.Exodus,
    BibleBook.Leviticus,
    BibleBook.Numbers,
    BibleBook.Deuteronomy,

    // Nevi'im (Prophets)
    // Former Prophets
    BibleBook.Joshua,
    BibleBook.Judges,
    BibleBook.FirstSamuel,
    BibleBook.SecondSamuel,
    BibleBook.FirstKings,
    BibleBook.SecondKings,

    // Latter Prophets
    BibleBook.Isaiah,
    BibleBook.Jeremiah,
    BibleBook.Ezekiel,
    BibleBook.Hosea,
    BibleBook.Joel,
    BibleBook.Amos,
    BibleBook.Obadiah,
    BibleBook.Jonah,
    BibleBook.Micah,
    BibleBook.Nahum,
    BibleBook.Habakkuk,
    BibleBook.Zephaniah,
    BibleBook.Haggai,
    BibleBook.Zechariah,
    BibleBook.Malachi,

    // Ketuvim (Writings)
    BibleBook.Psalms,
    BibleBook.Proverbs,
    BibleBook.Job,
    BibleBook.SongOfSongs,
    BibleBook.Ruth,
    BibleBook.Lamentations,
    BibleBook.Ecclesiastes,
    BibleBook.Esther,
    BibleBook.Daniel,
    BibleBook.Ezra,
    BibleBook.Nehemiah,
    BibleBook.FirstChronicles,
    BibleBook.SecondChronicles
];

export const protestantBookOrder = BookOrder({
    name: "Greek Order",
    books: protestantBooks
});

export const jewishBookOrder = BookOrder({
    name: "Tenach Order",
    books: jewishBooks
});

// first of list is default, protestant in this case.
export const bookOrders: BookOrder[] = [protestantBookOrder, jewishBookOrder];

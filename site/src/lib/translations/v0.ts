import { Data, Effect } from "effect";
import { BibleBook } from "$lib/book";
import {
  Translation,
  TranslationMetadata,
  TranslationContent,
  Book as TranslationBook,
  Chapter as TranslationChapter,
  Verse as TranslationVerse
} from "./translation";
import { Local } from "./storage";

export interface TranslationV0 {
  readonly books: Book[];
}

export const TranslationV0 = Data.case<TranslationV0>();

export interface Book {
  readonly name: string;
  readonly chapters: Chapter[];
}

export const Book = Data.case<Book>();

export interface Chapter {
  readonly chapter: number;
  readonly name: string;
  readonly verses: Verse[];
}

export const Chapter = Data.case<Chapter>();

export interface Verse {
  readonly verse: number;
  readonly chapter: number;
  readonly name: string;
  readonly text: string;
}

export const Verse = Data.case<Verse>();

const BOOK_NAME_TO_BIBLE_BOOK: Record<string, BibleBook> = {
  "GENESIS": BibleBook.Genesis,
  "EXODUS": BibleBook.Exodus,
  "LEVITICUS": BibleBook.Leviticus,
  "NUMBERS": BibleBook.Numbers,
  "DEUTERONOMY": BibleBook.Deuteronomy,
  "JOSHUA": BibleBook.Joshua,
  "JUDGES": BibleBook.Judges,
  "RUTH": BibleBook.Ruth,
  "I SAMUEL": BibleBook.FirstSamuel,
  "II SAMUEL": BibleBook.SecondSamuel,
  "I KINGS": BibleBook.FirstKings,
  "II KINGS": BibleBook.SecondKings,
  "I CHRONICLES": BibleBook.FirstChronicles,
  "II CHRONICLES": BibleBook.SecondChronicles,
  "EZRA": BibleBook.Ezra,
  "NEHEMIAH": BibleBook.Nehemiah,
  "ESTHER": BibleBook.Esther,
  "JOB": BibleBook.Job,
  "PSALMS": BibleBook.Psalms,
  "PROVERBS": BibleBook.Proverbs,
  "ECCLESIASTES": BibleBook.Ecclesiastes,
  "SONG OF SOLOMON": BibleBook.SongOfSongs,
  "ISAIAH": BibleBook.Isaiah,
  "JEREMIAH": BibleBook.Jeremiah,
  "LAMENTATIONS": BibleBook.Lamentations,
  "EZEKIEL": BibleBook.Ezekiel,
  "DANIEL": BibleBook.Daniel,
  "HOSEA": BibleBook.Hosea,
  "JOEL": BibleBook.Joel,
  "AMOS": BibleBook.Amos,
  "OBADIAH": BibleBook.Obadiah,
  "JONAH": BibleBook.Jonah,
  "MICAH": BibleBook.Micah,
  "NAHUM": BibleBook.Nahum,
  "HABAKKUK": BibleBook.Habakkuk,
  "ZEPHANIAH": BibleBook.Zephaniah,
  "HAGGAI": BibleBook.Haggai,
  "ZECHARIAH": BibleBook.Zechariah,
  "MALACHI": BibleBook.Malachi,
  "MATTHEW": BibleBook.Matthew,
  "MARK": BibleBook.Mark,
  "LUKE": BibleBook.Luke,
  "JOHN": BibleBook.John,
  "ACTS": BibleBook.Acts,
  "ROMANS": BibleBook.Romans,
  "I CORINTHIANS": BibleBook.FirstCorinthians,
  "II CORINTHIANS": BibleBook.SecondCorinthians,
  "GALATIANS": BibleBook.Galatians,
  "EPHESIANS": BibleBook.Ephesians,
  "PHILIPPIANS": BibleBook.Philippians,
  "COLOSSIANS": BibleBook.Colossians,
  "I THESSALONIANS": BibleBook.FirstThessalonians,
  "II THESSALONIANS": BibleBook.SecondThessalonians,
  "I TIMOTHY": BibleBook.FirstTimothy,
  "II TIMOTHY": BibleBook.SecondTimothy,
  "TITUS": BibleBook.Titus,
  "PHILEMON": BibleBook.Philemon,
  "HEBREWS": BibleBook.Hebrews,
  "JAMES": BibleBook.James,
  "I PETER": BibleBook.FirstPeter,
  "II PETER": BibleBook.SecondPeter,
  "I JOHN": BibleBook.FirstJohn,
  "II JOHN": BibleBook.SecondJohn,
  "III JOHN": BibleBook.ThirdJohn,
  "JUDE": BibleBook.Jude,
  "REVELATION OF JOHN": BibleBook.Revelation
};

export interface BookNameParseError {
  readonly _tag: "BookNameParseError";
  readonly bookName: string;
}

export const BookNameParseError = Data.tagged<BookNameParseError>("BookNameParseError");

const parseBookName = (bookName: string): Effect.Effect<BibleBook, BookNameParseError> => {
  const normalizedName = bookName.toUpperCase();
  const bibleBook = BOOK_NAME_TO_BIBLE_BOOK[normalizedName];
  return bibleBook
    ? Effect.succeed(bibleBook)
    : Effect.fail(BookNameParseError({ bookName }));
};

export const toTranslation = (translationV0: TranslationV0) => Effect.gen(function* () {
  const books = yield* Effect.forEach(
    translationV0.books,
    (bookV0: Book) => Effect.gen(function* () {
      const bibleBook = yield* parseBookName(bookV0.name);

      return TranslationBook({
        name: bibleBook,
        chapters: bookV0.chapters.map((chapterV0: Chapter) => TranslationChapter({
          chapter: chapterV0.chapter,
          name: chapterV0.name,
          verses: chapterV0.verses.map((verseV0: Verse) => TranslationVerse({
            verse: verseV0.verse,
            chapter: verseV0.chapter,
            name: verseV0.name,
            text: verseV0.text
          }))
        }))
      });
    })
  );

  return Translation({
    metadata: TranslationMetadata({
      name: "King James Version",
      shortName: "KJV",
      language: "English"
    }),
    content: Local({
      data: TranslationContent({ books })
    })
  });
});



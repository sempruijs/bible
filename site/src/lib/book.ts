import { Data, Option } from "effect";

export type BibleBook = 
    // Old Testament
    | { readonly _tag: "Genesis" }
    | { readonly _tag: "Exodus" }
    | { readonly _tag: "Leviticus" }
    | { readonly _tag: "Numbers" }
    | { readonly _tag: "Deuteronomy" }
    | { readonly _tag: "Joshua" }
    | { readonly _tag: "Judges" }
    | { readonly _tag: "Ruth" }
    | { readonly _tag: "FirstSamuel" }
    | { readonly _tag: "SecondSamuel" }
    | { readonly _tag: "FirstKings" }
    | { readonly _tag: "SecondKings" }
    | { readonly _tag: "FirstChronicles" }
    | { readonly _tag: "SecondChronicles" }
    | { readonly _tag: "Ezra" }
    | { readonly _tag: "Nehemiah" }
    | { readonly _tag: "Esther" }
    | { readonly _tag: "Job" }
    | { readonly _tag: "Psalms" }
    | { readonly _tag: "Proverbs" }
    | { readonly _tag: "Ecclesiastes" }
    | { readonly _tag: "SongOfSongs" }
    | { readonly _tag: "Isaiah" }
    | { readonly _tag: "Jeremiah" }
    | { readonly _tag: "Lamentations" }
    | { readonly _tag: "Ezekiel" }
    | { readonly _tag: "Daniel" }
    | { readonly _tag: "Hosea" }
    | { readonly _tag: "Joel" }
    | { readonly _tag: "Amos" }
    | { readonly _tag: "Obadiah" }
    | { readonly _tag: "Jonah" }
    | { readonly _tag: "Micah" }
    | { readonly _tag: "Nahum" }
    | { readonly _tag: "Habakkuk" }
    | { readonly _tag: "Zephaniah" }
    | { readonly _tag: "Haggai" }
    | { readonly _tag: "Zechariah" }
    | { readonly _tag: "Malachi" }
    // New Testament
    | { readonly _tag: "Matthew" }
    | { readonly _tag: "Mark" }
    | { readonly _tag: "Luke" }
    | { readonly _tag: "John" }
    | { readonly _tag: "Acts" }
    | { readonly _tag: "Romans" }
    | { readonly _tag: "FirstCorinthians" }
    | { readonly _tag: "SecondCorinthians" }
    | { readonly _tag: "Galatians" }
    | { readonly _tag: "Ephesians" }
    | { readonly _tag: "Philippians" }
    | { readonly _tag: "Colossians" }
    | { readonly _tag: "FirstThessalonians" }
    | { readonly _tag: "SecondThessalonians" }
    | { readonly _tag: "FirstTimothy" }
    | { readonly _tag: "SecondTimothy" }
    | { readonly _tag: "Titus" }
    | { readonly _tag: "Philemon" }
    | { readonly _tag: "Hebrews" }
    | { readonly _tag: "James" }
    | { readonly _tag: "FirstPeter" }
    | { readonly _tag: "SecondPeter" }
    | { readonly _tag: "FirstJohn" }
    | { readonly _tag: "SecondJohn" }
    | { readonly _tag: "ThirdJohn" }
    | { readonly _tag: "Jude" }
    | { readonly _tag: "Revelation" };

export const BibleBook = {
    // Old Testament
    Genesis: Data.tagged<BibleBook>("Genesis")(),
    Exodus: Data.tagged<BibleBook>("Exodus")(),
    Leviticus: Data.tagged<BibleBook>("Leviticus")(),
    Numbers: Data.tagged<BibleBook>("Numbers")(),
    Deuteronomy: Data.tagged<BibleBook>("Deuteronomy")(),
    Joshua: Data.tagged<BibleBook>("Joshua")(),
    Judges: Data.tagged<BibleBook>("Judges")(),
    Ruth: Data.tagged<BibleBook>("Ruth")(),
    FirstSamuel: Data.tagged<BibleBook>("FirstSamuel")(),
    SecondSamuel: Data.tagged<BibleBook>("SecondSamuel")(),
    FirstKings: Data.tagged<BibleBook>("FirstKings")(),
    SecondKings: Data.tagged<BibleBook>("SecondKings")(),
    FirstChronicles: Data.tagged<BibleBook>("FirstChronicles")(),
    SecondChronicles: Data.tagged<BibleBook>("SecondChronicles")(),
    Ezra: Data.tagged<BibleBook>("Ezra")(),
    Nehemiah: Data.tagged<BibleBook>("Nehemiah")(),
    Esther: Data.tagged<BibleBook>("Esther")(),
    Job: Data.tagged<BibleBook>("Job")(),
    Psalms: Data.tagged<BibleBook>("Psalms")(),
    Proverbs: Data.tagged<BibleBook>("Proverbs")(),
    Ecclesiastes: Data.tagged<BibleBook>("Ecclesiastes")(),
    SongOfSongs: Data.tagged<BibleBook>("SongOfSongs")(),
    Isaiah: Data.tagged<BibleBook>("Isaiah")(),
    Jeremiah: Data.tagged<BibleBook>("Jeremiah")(),
    Lamentations: Data.tagged<BibleBook>("Lamentations")(),
    Ezekiel: Data.tagged<BibleBook>("Ezekiel")(),
    Daniel: Data.tagged<BibleBook>("Daniel")(),
    Hosea: Data.tagged<BibleBook>("Hosea")(),
    Joel: Data.tagged<BibleBook>("Joel")(),
    Amos: Data.tagged<BibleBook>("Amos")(),
    Obadiah: Data.tagged<BibleBook>("Obadiah")(),
    Jonah: Data.tagged<BibleBook>("Jonah")(),
    Micah: Data.tagged<BibleBook>("Micah")(),
    Nahum: Data.tagged<BibleBook>("Nahum")(),
    Habakkuk: Data.tagged<BibleBook>("Habakkuk")(),
    Zephaniah: Data.tagged<BibleBook>("Zephaniah")(),
    Haggai: Data.tagged<BibleBook>("Haggai")(),
    Zechariah: Data.tagged<BibleBook>("Zechariah")(),
    Malachi: Data.tagged<BibleBook>("Malachi")(),
    
    // New Testament
    Matthew: Data.tagged<BibleBook>("Matthew")(),
    Mark: Data.tagged<BibleBook>("Mark")(),
    Luke: Data.tagged<BibleBook>("Luke")(),
    John: Data.tagged<BibleBook>("John")(),
    Acts: Data.tagged<BibleBook>("Acts")(),
    Romans: Data.tagged<BibleBook>("Romans")(),
    FirstCorinthians: Data.tagged<BibleBook>("FirstCorinthians")(),
    SecondCorinthians: Data.tagged<BibleBook>("SecondCorinthians")(),
    Galatians: Data.tagged<BibleBook>("Galatians")(),
    Ephesians: Data.tagged<BibleBook>("Ephesians")(),
    Philippians: Data.tagged<BibleBook>("Philippians")(),
    Colossians: Data.tagged<BibleBook>("Colossians")(),
    FirstThessalonians: Data.tagged<BibleBook>("FirstThessalonians")(),
    SecondThessalonians: Data.tagged<BibleBook>("SecondThessalonians")(),
    FirstTimothy: Data.tagged<BibleBook>("FirstTimothy")(),
    SecondTimothy: Data.tagged<BibleBook>("SecondTimothy")(),
    Titus: Data.tagged<BibleBook>("Titus")(),
    Philemon: Data.tagged<BibleBook>("Philemon")(),
    Hebrews: Data.tagged<BibleBook>("Hebrews")(),
    James: Data.tagged<BibleBook>("James")(),
    FirstPeter: Data.tagged<BibleBook>("FirstPeter")(),
    SecondPeter: Data.tagged<BibleBook>("SecondPeter")(),
    FirstJohn: Data.tagged<BibleBook>("FirstJohn")(),
    SecondJohn: Data.tagged<BibleBook>("SecondJohn")(),
    ThirdJohn: Data.tagged<BibleBook>("ThirdJohn")(),
    Jude: Data.tagged<BibleBook>("Jude")(),
    Revelation: Data.tagged<BibleBook>("Revelation")()
} as const;

const BOOK_TAG_TO_SHORT_NAME: Record<BibleBook["_tag"], string> = {
    // Old Testament
    Genesis: "gen",
    Exodus: "exo",
    Leviticus: "lev",
    Numbers: "num",
    Deuteronomy: "deu",
    Joshua: "jos",
    Judges: "jdg",
    Ruth: "rut",
    FirstSamuel: "1sa",
    SecondSamuel: "2sa",
    FirstKings: "1ki",
    SecondKings: "2ki",
    FirstChronicles: "1ch",
    SecondChronicles: "2ch",
    Ezra: "ezr",
    Nehemiah: "neh",
    Esther: "est",
    Job: "job",
    Psalms: "psa",
    Proverbs: "pro",
    Ecclesiastes: "ecc",
    SongOfSongs: "sng",
    Isaiah: "isa",
    Jeremiah: "jer",
    Lamentations: "lam",
    Ezekiel: "ezk",
    Daniel: "dan",
    Hosea: "hos",
    Joel: "jol",
    Amos: "amo",
    Obadiah: "oba",
    Jonah: "jon",
    Micah: "mic",
    Nahum: "nah",
    Habakkuk: "hab",
    Zephaniah: "zep",
    Haggai: "hag",
    Zechariah: "zec",
    Malachi: "mal",

    // New Testament
    Matthew: "mat",
    Mark: "mrk",
    Luke: "luk",
    John: "jhn",
    Acts: "act",
    Romans: "rom",
    FirstCorinthians: "1co",
    SecondCorinthians: "2co",
    Galatians: "gal",
    Ephesians: "eph",
    Philippians: "php",
    Colossians: "col",
    FirstThessalonians: "1th",
    SecondThessalonians: "2th",
    FirstTimothy: "1ti",
    SecondTimothy: "2ti",
    Titus: "tit",
    Philemon: "phm",
    Hebrews: "heb",
    James: "jas",
    FirstPeter: "1pe",
    SecondPeter: "2pe",
    FirstJohn: "1jn",
    SecondJohn: "2jn",
    ThirdJohn: "3jn",
    Jude: "jud",
    Revelation: "rev"
};

const SHORT_NAME_TO_BOOK_TAG: Record<string, BibleBook["_tag"]> = Object.fromEntries(
    Object.entries(BOOK_TAG_TO_SHORT_NAME).map(([tag, shortName]) => [shortName, tag as BibleBook["_tag"]])
);

export const toBibleBook = (value: string): Option.Option<BibleBook> => {
    const bookTag = SHORT_NAME_TO_BOOK_TAG[value];
    if (!bookTag) {
        return Option.none();
    }
    return Option.some(Data.tagged<BibleBook>(bookTag)());
};

export const getShortName = (book: BibleBook): string => {
    return BOOK_TAG_TO_SHORT_NAME[book._tag];
};

const BOOK_TAG_TO_DISPLAY_NAME: Record<BibleBook["_tag"], string> = {
    // Old Testament
    Genesis: "Genesis",
    Exodus: "Exodus",
    Leviticus: "Leviticus",
    Numbers: "Numbers",
    Deuteronomy: "Deuteronomy",
    Joshua: "Joshua",
    Judges: "Judges",
    Ruth: "Ruth",
    FirstSamuel: "1 Samuel",
    SecondSamuel: "2 Samuel",
    FirstKings: "1 Kings",
    SecondKings: "2 Kings",
    FirstChronicles: "1 Chronicles",
    SecondChronicles: "2 Chronicles",
    Ezra: "Ezra",
    Nehemiah: "Nehemiah",
    Esther: "Esther",
    Job: "Job",
    Psalms: "Psalms",
    Proverbs: "Proverbs",
    Ecclesiastes: "Ecclesiastes",
    SongOfSongs: "Song of Songs",
    Isaiah: "Isaiah",
    Jeremiah: "Jeremiah",
    Lamentations: "Lamentations",
    Ezekiel: "Ezekiel",
    Daniel: "Daniel",
    Hosea: "Hosea",
    Joel: "Joel",
    Amos: "Amos",
    Obadiah: "Obadiah",
    Jonah: "Jonah",
    Micah: "Micah",
    Nahum: "Nahum",
    Habakkuk: "Habakkuk",
    Zephaniah: "Zephaniah",
    Haggai: "Haggai",
    Zechariah: "Zechariah",
    Malachi: "Malachi",
    
    // New Testament
    Matthew: "Matthew",
    Mark: "Mark",
    Luke: "Luke",
    John: "John",
    Acts: "Acts",
    Romans: "Romans",
    FirstCorinthians: "1 Corinthians",
    SecondCorinthians: "2 Corinthians",
    Galatians: "Galatians",
    Ephesians: "Ephesians",
    Philippians: "Philippians",
    Colossians: "Colossians",
    FirstThessalonians: "1 Thessalonians",
    SecondThessalonians: "2 Thessalonians",
    FirstTimothy: "1 Timothy",
    SecondTimothy: "2 Timothy",
    Titus: "Titus",
    Philemon: "Philemon",
    Hebrews: "Hebrews",
    James: "James",
    FirstPeter: "1 Peter",
    SecondPeter: "2 Peter",
    FirstJohn: "1 John",
    SecondJohn: "2 John",
    ThirdJohn: "3 John",
    Jude: "Jude",
    Revelation: "Revelation"
};

export const getDisplayName = (book: BibleBook): string => {
    return BOOK_TAG_TO_DISPLAY_NAME[book._tag];
};
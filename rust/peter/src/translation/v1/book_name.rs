use serde::{Deserialize, Serialize};
use std::fmt;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, PartialOrd, Ord, Serialize, Deserialize)]
pub enum BookName {
    // Old Testament - Torah
    Genesis,
    Exodus,
    Leviticus,
    Numbers,
    Deuteronomy,

    // Historical books
    Joshua,
    Judges,
    Ruth,
    FirstSamuel,
    SecondSamuel,
    FirstKings,
    SecondKings,
    FirstChronicles,
    SecondChronicles,
    Ezra,
    Nehemiah,

    // Catholic deuterocanonical historical additions
    Tobit,  // deuterocanonical
    Judith, // deuterocanonical

    Esther,
    AdditionsToEsther, // deuterocanonical (additions/chapters in some editions)

    FirstMaccabees,  // deuterocanonical
    SecondMaccabees, // deuterocanonical

    // Wisdom / Poetry
    Job,
    Psalms,
    Proverbs,
    Ecclesiastes,
    SongOfSongs,
    Wisdom, // Wisdom of Solomon (deuterocanonical)
    Sirach, // Ecclesiasticus (deuterocanonical)

    // Major Prophets
    Isaiah,
    Jeremiah,
    Lamentations,
    Baruch,           // deuterocanonical (often with Letter of Jeremiah)
    LetterOfJeremiah, // sometimes treated as part of Baruch

    Ezekiel,
    Daniel,
    // Daniel additions (deuterocanonical)
    PrayerOfAzariah, // "Song of the Three Holy Children" / Prayer of Azariah
    Susanna,
    BelAndTheDragon,

    // Minor Prophets
    Hosea,
    Joel,
    Amos,
    Obadiah,
    Jonah,
    Micah,
    Nahum,
    Habakkuk,
    Zephaniah,
    Haggai,
    Zechariah,
    Malachi,

    // New Testament - Gospels
    Matthew,
    Mark,
    Luke,
    John,

    // History
    Acts,

    // Pauline Epistles
    Romans,
    FirstCorinthians,
    SecondCorinthians,
    Galatians,
    Ephesians,
    Philippians,
    Colossians,
    FirstThessalonians,
    SecondThessalonians,
    FirstTimothy,
    SecondTimothy,
    Titus,
    Philemon,

    // General Epistles
    Hebrews,
    James,
    FirstPeter,
    SecondPeter,
    FirstJohn,
    SecondJohn,
    ThirdJohn,
    Jude,

    // Prophecy
    Revelation,
}

impl BookName {
    pub fn amount_of_chapters(&self) -> u32 {
        match self {
            BookName::Genesis => 50,
            BookName::Exodus => 40,
            BookName::Leviticus => 27,
            BookName::Numbers => 36,
            BookName::Deuteronomy => 34,
            BookName::Joshua => 24,
            BookName::Judges => 21,
            BookName::Ruth => 4,
            BookName::FirstSamuel => 31,
            BookName::SecondSamuel => 24,
            BookName::FirstKings => 22,
            BookName::SecondKings => 25,
            BookName::FirstChronicles => 29,
            BookName::SecondChronicles => 36,
            BookName::Ezra => 10,
            BookName::Nehemiah => 13,
            BookName::Tobit => 14,
            BookName::Judith => 16,
            BookName::Esther => 10,
            BookName::AdditionsToEsther => 6,
            BookName::FirstMaccabees => 16,
            BookName::SecondMaccabees => 15,
            BookName::Job => 42,
            BookName::Psalms => 150,
            BookName::Proverbs => 31,
            BookName::Ecclesiastes => 12,
            BookName::SongOfSongs => 8,
            BookName::Wisdom => 19,
            BookName::Sirach => 51,
            BookName::Isaiah => 66,
            BookName::Jeremiah => 52,
            BookName::Lamentations => 5,
            BookName::Baruch => 6,
            BookName::LetterOfJeremiah => 1,
            BookName::Ezekiel => 48,
            BookName::Daniel => 12,
            BookName::PrayerOfAzariah => 1,
            BookName::Susanna => 1,
            BookName::BelAndTheDragon => 1,
            BookName::Hosea => 14,
            BookName::Joel => 3,
            BookName::Amos => 9,
            BookName::Obadiah => 1,
            BookName::Jonah => 4,
            BookName::Micah => 7,
            BookName::Nahum => 3,
            BookName::Habakkuk => 3,
            BookName::Zephaniah => 3,
            BookName::Haggai => 2,
            BookName::Zechariah => 14,
            BookName::Malachi => 4,
            BookName::Matthew => 28,
            BookName::Mark => 16,
            BookName::Luke => 24,
            BookName::John => 21,
            BookName::Acts => 28,
            BookName::Romans => 16,
            BookName::FirstCorinthians => 16,
            BookName::SecondCorinthians => 13,
            BookName::Galatians => 6,
            BookName::Ephesians => 6,
            BookName::Philippians => 4,
            BookName::Colossians => 4,
            BookName::FirstThessalonians => 5,
            BookName::SecondThessalonians => 3,
            BookName::FirstTimothy => 6,
            BookName::SecondTimothy => 4,
            BookName::Titus => 3,
            BookName::Philemon => 1,
            BookName::Hebrews => 13,
            BookName::James => 5,
            BookName::FirstPeter => 5,
            BookName::SecondPeter => 3,
            BookName::FirstJohn => 5,
            BookName::SecondJohn => 1,
            BookName::ThirdJohn => 1,
            BookName::Jude => 1,
            BookName::Revelation => 22,
        }
    }

    pub fn short(&self) -> String {
        let s = match self {
            BookName::Genesis => "gen",
            BookName::Exodus => "exod",
            BookName::Leviticus => "lev",
            BookName::Numbers => "num",
            BookName::Deuteronomy => "deut",
            BookName::Joshua => "josh",
            BookName::Judges => "judg",
            BookName::Ruth => "ruth",
            BookName::FirstSamuel => "1-sam",
            BookName::SecondSamuel => "2-sam",
            BookName::FirstKings => "1-kgs",
            BookName::SecondKings => "2-kgs",
            BookName::FirstChronicles => "1-chr",
            BookName::SecondChronicles => "2-chr",
            BookName::Ezra => "ezra",
            BookName::Nehemiah => "neh",
            BookName::Tobit => "tob",
            BookName::Judith => "jdt",
            BookName::Esther => "esth",
            BookName::AdditionsToEsther => "add-esth",
            BookName::FirstMaccabees => "1-macc",
            BookName::SecondMaccabees => "2-macc",
            BookName::Job => "job",
            BookName::Psalms => "ps",
            BookName::Proverbs => "prov",
            BookName::Ecclesiastes => "eccl",
            BookName::SongOfSongs => "song",
            BookName::Wisdom => "wis",
            BookName::Sirach => "sir",
            BookName::Isaiah => "isa",
            BookName::Jeremiah => "jer",
            BookName::Lamentations => "lam",
            BookName::Baruch => "bar",
            BookName::LetterOfJeremiah => "let-jer",
            BookName::Ezekiel => "ezek",
            BookName::Daniel => "dan",
            BookName::PrayerOfAzariah => "pr-azar",
            BookName::Susanna => "sus",
            BookName::BelAndTheDragon => "bel",
            BookName::Hosea => "hos",
            BookName::Joel => "joel",
            BookName::Amos => "amos",
            BookName::Obadiah => "obad",
            BookName::Jonah => "jonah",
            BookName::Micah => "mic",
            BookName::Nahum => "nah",
            BookName::Habakkuk => "hab",
            BookName::Zephaniah => "zeph",
            BookName::Haggai => "hag",
            BookName::Zechariah => "zech",
            BookName::Malachi => "mal",
            BookName::Matthew => "matt",
            BookName::Mark => "mark",
            BookName::Luke => "luke",
            BookName::John => "john",
            BookName::Acts => "acts",
            BookName::Romans => "rom",
            BookName::FirstCorinthians => "1-cor",
            BookName::SecondCorinthians => "2-cor",
            BookName::Galatians => "gal",
            BookName::Ephesians => "eph",
            BookName::Philippians => "phil",
            BookName::Colossians => "col",
            BookName::FirstThessalonians => "1-thess",
            BookName::SecondThessalonians => "2-thess",
            BookName::FirstTimothy => "1-tim",
            BookName::SecondTimothy => "2-tim",
            BookName::Titus => "titus",
            BookName::Philemon => "phlm",
            BookName::Hebrews => "heb",
            BookName::James => "jas",
            BookName::FirstPeter => "1-pet",
            BookName::SecondPeter => "2-pet",
            BookName::FirstJohn => "1-john",
            BookName::SecondJohn => "2-john",
            BookName::ThirdJohn => "3-john",
            BookName::Jude => "jude",
            BookName::Revelation => "rev",
        };

        String::from(s)
    }
}

impl fmt::Display for BookName {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        use BookName::*;
        let name = match self {
            Genesis => "Genesis",
            Exodus => "Exodus",
            Leviticus => "Leviticus",
            Numbers => "Numbers",
            Deuteronomy => "Deuteronomy",
            Joshua => "Joshua",
            Judges => "Judges",
            Ruth => "Ruth",
            FirstSamuel => "FirstSamuel",
            SecondSamuel => "SecondSamuel",
            FirstKings => "FirstKings",
            SecondKings => "SecondKings",
            FirstChronicles => "FirstChronicles",
            SecondChronicles => "SecondChronicles",
            Ezra => "Ezra",
            Nehemiah => "Nehemiah",
            Tobit => "Tobit",
            Judith => "Judith",
            Esther => "Esther",
            AdditionsToEsther => "AdditionsToEsther",
            FirstMaccabees => "FirstMaccabees",
            SecondMaccabees => "SecondMaccabees",
            Job => "Job",
            Psalms => "Psalms",
            Proverbs => "Proverbs",
            Ecclesiastes => "Ecclesiastes",
            SongOfSongs => "SongOfSongs",
            Wisdom => "Wisdom",
            Sirach => "Sirach",
            Isaiah => "Isaiah",
            Jeremiah => "Jeremiah",
            Lamentations => "Lamentations",
            Baruch => "Baruch",
            LetterOfJeremiah => "LetterOfJeremiah",
            Ezekiel => "Ezekiel",
            Daniel => "Daniel",
            PrayerOfAzariah => "PrayerOfAzariah",
            Susanna => "Susanna",
            BelAndTheDragon => "BelAndTheDragon",
            Hosea => "Hosea",
            Joel => "Joel",
            Amos => "Amos",
            Obadiah => "Obadiah",
            Jonah => "Jonah",
            Micah => "Micah",
            Nahum => "Nahum",
            Habakkuk => "Habakkuk",
            Zephaniah => "Zephaniah",
            Haggai => "Haggai",
            Zechariah => "Zechariah",
            Malachi => "Malachi",
            Matthew => "Matthew",
            Mark => "Mark",
            Luke => "Luke",
            John => "John",
            Acts => "Acts",
            Romans => "Romans",
            FirstCorinthians => "FirstCorinthians",
            SecondCorinthians => "SecondCorinthians",
            Galatians => "Galatians",
            Ephesians => "Ephesians",
            Philippians => "Philippians",
            Colossians => "Colossians",
            FirstThessalonians => "FirstThessalonians",
            SecondThessalonians => "SecondThessalonians",
            FirstTimothy => "FirstTimothy",
            SecondTimothy => "SecondTimothy",
            Titus => "Titus",
            Philemon => "Philemon",
            Hebrews => "Hebrews",
            James => "James",
            FirstPeter => "FirstPeter",
            SecondPeter => "SecondPeter",
            FirstJohn => "FirstJohn",
            SecondJohn => "SecondJohn",
            ThirdJohn => "ThirdJohn",
            Jude => "Jude",
            Revelation => "Revelation",
        };
        write!(f, "{}", name)
    }
}

#[derive(Debug, thiserror::Error)]
pub enum BookNameParseError {
    #[error("Unknown book name: {0}")]
    UnknownName(String),
}

impl TryFrom<&str> for BookName {
    type Error = BookNameParseError;

    fn try_from(value: &str) -> Result<Self, Self::Error> {
        use BookName::*;

        match value.trim().to_lowercase().as_str() {
            // Old Testament - Torah
            "genesis" => Ok(Genesis),
            "exodus" => Ok(Exodus),
            "leviticus" => Ok(Leviticus),
            "numbers" => Ok(Numbers),
            "deuteronomy" => Ok(Deuteronomy),

            // Historical books
            "joshua" => Ok(Joshua),
            "judges" => Ok(Judges),
            "ruth" => Ok(Ruth),
            "1samuel" | "i samuel" | "firstsamuel" => Ok(FirstSamuel),
            "2samuel" | "ii samuel" | "secondsamuel" => Ok(SecondSamuel),
            "1kings" | "i kings" | "firstkings" => Ok(FirstKings),
            "2kings" | "ii kings" | "secondkings" => Ok(SecondKings),
            "1chronicles" | "i chronicles" | "firstchronicles" => Ok(FirstChronicles),
            "2chronicles" | "ii chronicles" | "secondchronicles" => Ok(SecondChronicles),
            "ezra" => Ok(Ezra),
            "nehemiah" => Ok(Nehemiah),

            // Catholic deuterocanonical historical additions
            "tobit" => Ok(Tobit),
            "judith" => Ok(Judith),
            "esther" => Ok(Esther),
            "additionstoesther" => Ok(AdditionsToEsther),
            "1maccabees" | "i maccabees" | "firstmaccabees" => Ok(FirstMaccabees),
            "2maccabees" | "ii maccabees" | "secondmaccabees" => Ok(SecondMaccabees),

            // Wisdom / Poetry
            "job" => Ok(Job),
            "psalms" => Ok(Psalms),
            "proverbs" => Ok(Proverbs),
            "ecclesiastes" => Ok(Ecclesiastes),
            "songofsongs" | "song of solomon" | "song of songs" => Ok(SongOfSongs),
            "wisdom" => Ok(Wisdom),
            "sirach" => Ok(Sirach),

            // Major Prophets
            "isaiah" => Ok(Isaiah),
            "jeremiah" => Ok(Jeremiah),
            "lamentations" => Ok(Lamentations),
            "baruch" => Ok(Baruch),
            "letterofjeremiah" => Ok(LetterOfJeremiah),
            "ezekiel" => Ok(Ezekiel),
            "daniel" => Ok(Daniel),
            "prayerofazariah" => Ok(PrayerOfAzariah),
            "susanna" => Ok(Susanna),
            "belandthedragon" => Ok(BelAndTheDragon),

            // Minor Prophets
            "hosea" => Ok(Hosea),
            "joel" => Ok(Joel),
            "amos" => Ok(Amos),
            "obadiah" => Ok(Obadiah),
            "jonah" => Ok(Jonah),
            "micah" => Ok(Micah),
            "nahum" => Ok(Nahum),
            "habakkuk" => Ok(Habakkuk),
            "zephaniah" => Ok(Zephaniah),
            "haggai" => Ok(Haggai),
            "zechariah" => Ok(Zechariah),
            "malachi" => Ok(Malachi),

            // New Testament - Gospels
            "matthew" => Ok(Matthew),
            "mark" => Ok(Mark),
            "luke" => Ok(Luke),
            "john" => Ok(John),

            // History
            "acts" => Ok(Acts),

            // Pauline Epistles
            "romans" => Ok(Romans),
            "1corinthians" | "i corinthians" | "firstcorinthians" => Ok(FirstCorinthians),
            "2corinthians" | "ii corinthians" | "secondcorinthians" => Ok(SecondCorinthians),
            "galatians" => Ok(Galatians),
            "ephesians" => Ok(Ephesians),
            "philippians" => Ok(Philippians),
            "colossians" => Ok(Colossians),
            "1thessalonians" | "i thessalonians" | "firstthessalonians" => Ok(FirstThessalonians),
            "2thessalonians" | "ii thessalonians" | "secondthessalonians" => {
                Ok(SecondThessalonians)
            }
            "1timothy" | "i timothy" | "firsttimothy" => Ok(FirstTimothy),
            "2timothy" | "ii timothy" | "secondtimothy" => Ok(SecondTimothy),
            "titus" => Ok(Titus),
            "philemon" => Ok(Philemon),

            // General Epistles
            "hebrews" => Ok(Hebrews),
            "james" => Ok(James),
            "1peter" | "i peter" | "firstpeter" => Ok(FirstPeter),
            "2peter" | "ii peter" | "secondpeter" => Ok(SecondPeter),
            "1john" | "i john" | "firstjohn" => Ok(FirstJohn),
            "2john" | "ii john" | "secondjohn" => Ok(SecondJohn),
            "3john" | "iii john" | "thirdjohn" => Ok(ThirdJohn),
            "jude" => Ok(Jude),

            // Prophecy
            "revelation" | "revelation of john" => Ok(Revelation),

            // fallback
            other => Err(BookNameParseError::UnknownName(other.to_string())),
        }
    }
}

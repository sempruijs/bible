use super::book_name::BookName;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum Testament {
    Old,
    New,
    Deuterocanonical,
}

impl From<BookName> for Testament {
    fn from(book: BookName) -> Self {
        match book {
            // Old Testament - Torah
            BookName::Genesis => Self::Old,
            BookName::Exodus => Self::Old,
            BookName::Leviticus => Self::Old,
            BookName::Numbers => Self::Old,
            BookName::Deuteronomy => Self::Old,
            
            // Old Testament - Historical books
            BookName::Joshua => Self::Old,
            BookName::Judges => Self::Old,
            BookName::Ruth => Self::Old,
            BookName::FirstSamuel => Self::Old,
            BookName::SecondSamuel => Self::Old,
            BookName::FirstKings => Self::Old,
            BookName::SecondKings => Self::Old,
            BookName::FirstChronicles => Self::Old,
            BookName::SecondChronicles => Self::Old,
            BookName::Ezra => Self::Old,
            BookName::Nehemiah => Self::Old,
            BookName::Esther => Self::Old,
            
            // Deuterocanonical historical books
            BookName::Tobit => Self::Deuterocanonical,
            BookName::Judith => Self::Deuterocanonical,
            BookName::AdditionsToEsther => Self::Deuterocanonical,
            BookName::FirstMaccabees => Self::Deuterocanonical,
            BookName::SecondMaccabees => Self::Deuterocanonical,
            
            // Old Testament - Wisdom/Poetry
            BookName::Job => Self::Old,
            BookName::Psalms => Self::Old,
            BookName::Proverbs => Self::Old,
            BookName::Ecclesiastes => Self::Old,
            BookName::SongOfSongs => Self::Old,
            
            // Deuterocanonical wisdom books
            BookName::Wisdom => Self::Deuterocanonical,
            BookName::Sirach => Self::Deuterocanonical,
            
            // Old Testament - Major Prophets
            BookName::Isaiah => Self::Old,
            BookName::Jeremiah => Self::Old,
            BookName::Lamentations => Self::Old,
            BookName::Ezekiel => Self::Old,
            BookName::Daniel => Self::Old,
            
            // Deuterocanonical additions to prophetic books
            BookName::Baruch => Self::Deuterocanonical,
            BookName::LetterOfJeremiah => Self::Deuterocanonical,
            BookName::PrayerOfAzariah => Self::Deuterocanonical,
            BookName::Susanna => Self::Deuterocanonical,
            BookName::BelAndTheDragon => Self::Deuterocanonical,
            
            // Old Testament - Minor Prophets
            BookName::Hosea => Self::Old,
            BookName::Joel => Self::Old,
            BookName::Amos => Self::Old,
            BookName::Obadiah => Self::Old,
            BookName::Jonah => Self::Old,
            BookName::Micah => Self::Old,
            BookName::Nahum => Self::Old,
            BookName::Habakkuk => Self::Old,
            BookName::Zephaniah => Self::Old,
            BookName::Haggai => Self::Old,
            BookName::Zechariah => Self::Old,
            BookName::Malachi => Self::Old,
            
            // New Testament - Gospels
            BookName::Matthew => Self::New,
            BookName::Mark => Self::New,
            BookName::Luke => Self::New,
            BookName::John => Self::New,
            
            // New Testament - History
            BookName::Acts => Self::New,
            
            // New Testament - Pauline Epistles
            BookName::Romans => Self::New,
            BookName::FirstCorinthians => Self::New,
            BookName::SecondCorinthians => Self::New,
            BookName::Galatians => Self::New,
            BookName::Ephesians => Self::New,
            BookName::Philippians => Self::New,
            BookName::Colossians => Self::New,
            BookName::FirstThessalonians => Self::New,
            BookName::SecondThessalonians => Self::New,
            BookName::FirstTimothy => Self::New,
            BookName::SecondTimothy => Self::New,
            BookName::Titus => Self::New,
            BookName::Philemon => Self::New,
            
            // New Testament - General Epistles
            BookName::Hebrews => Self::New,
            BookName::James => Self::New,
            BookName::FirstPeter => Self::New,
            BookName::SecondPeter => Self::New,
            BookName::FirstJohn => Self::New,
            BookName::SecondJohn => Self::New,
            BookName::ThirdJohn => Self::New,
            BookName::Jude => Self::New,
            
            // New Testament - Prophecy
            BookName::Revelation => Self::New,
        }
    }
}

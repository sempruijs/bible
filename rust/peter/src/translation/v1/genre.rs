use super::book_name::BookName;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
pub enum Genre {
    Torah,
    History,
    Wisdom,
    Prophets,
    Gospel,
    Epistle,
    Apocalypse,
}

impl From<BookName> for Genre {
    fn from(book: BookName) -> Self {
        match book {
            // Torah (Pentateuch)
            BookName::Genesis => Self::Torah,
            BookName::Exodus => Self::Torah,
            BookName::Leviticus => Self::Torah,
            BookName::Numbers => Self::Torah,
            BookName::Deuteronomy => Self::Torah,
            
            // Historical books
            BookName::Joshua => Self::History,
            BookName::Judges => Self::History,
            BookName::Ruth => Self::History,
            BookName::FirstSamuel => Self::History,
            BookName::SecondSamuel => Self::History,
            BookName::FirstKings => Self::History,
            BookName::SecondKings => Self::History,
            BookName::FirstChronicles => Self::History,
            BookName::SecondChronicles => Self::History,
            BookName::Ezra => Self::History,
            BookName::Nehemiah => Self::History,
            BookName::Esther => Self::History,
            BookName::Tobit => Self::History,
            BookName::Judith => Self::History,
            BookName::AdditionsToEsther => Self::History,
            BookName::FirstMaccabees => Self::History,
            BookName::SecondMaccabees => Self::History,
            BookName::Acts => Self::History,
            
            // Wisdom/Poetry books
            BookName::Job => Self::Wisdom,
            BookName::Psalms => Self::Wisdom,
            BookName::Proverbs => Self::Wisdom,
            BookName::Ecclesiastes => Self::Wisdom,
            BookName::SongOfSongs => Self::Wisdom,
            BookName::Wisdom => Self::Wisdom,
            BookName::Sirach => Self::Wisdom,
            
            // Prophetic books
            BookName::Isaiah => Self::Prophets,
            BookName::Jeremiah => Self::Prophets,
            BookName::Lamentations => Self::Prophets,
            BookName::Baruch => Self::Prophets,
            BookName::LetterOfJeremiah => Self::Prophets,
            BookName::Ezekiel => Self::Prophets,
            BookName::Daniel => Self::Prophets,
            BookName::PrayerOfAzariah => Self::Prophets,
            BookName::Susanna => Self::Prophets,
            BookName::BelAndTheDragon => Self::Prophets,
            BookName::Hosea => Self::Prophets,
            BookName::Joel => Self::Prophets,
            BookName::Amos => Self::Prophets,
            BookName::Obadiah => Self::Prophets,
            BookName::Jonah => Self::Prophets,
            BookName::Micah => Self::Prophets,
            BookName::Nahum => Self::Prophets,
            BookName::Habakkuk => Self::Prophets,
            BookName::Zephaniah => Self::Prophets,
            BookName::Haggai => Self::Prophets,
            BookName::Zechariah => Self::Prophets,
            BookName::Malachi => Self::Prophets,
            
            // Gospels
            BookName::Matthew => Self::Gospel,
            BookName::Mark => Self::Gospel,
            BookName::Luke => Self::Gospel,
            BookName::John => Self::Gospel,
            
            // Epistles (letters)
            BookName::Romans => Self::Epistle,
            BookName::FirstCorinthians => Self::Epistle,
            BookName::SecondCorinthians => Self::Epistle,
            BookName::Galatians => Self::Epistle,
            BookName::Ephesians => Self::Epistle,
            BookName::Philippians => Self::Epistle,
            BookName::Colossians => Self::Epistle,
            BookName::FirstThessalonians => Self::Epistle,
            BookName::SecondThessalonians => Self::Epistle,
            BookName::FirstTimothy => Self::Epistle,
            BookName::SecondTimothy => Self::Epistle,
            BookName::Titus => Self::Epistle,
            BookName::Philemon => Self::Epistle,
            BookName::Hebrews => Self::Epistle,
            BookName::James => Self::Epistle,
            BookName::FirstPeter => Self::Epistle,
            BookName::SecondPeter => Self::Epistle,
            BookName::FirstJohn => Self::Epistle,
            BookName::SecondJohn => Self::Epistle,
            BookName::ThirdJohn => Self::Epistle,
            BookName::Jude => Self::Epistle,
            
            // Apocalyptic literature
            BookName::Revelation => Self::Apocalypse,
        }
    }
}

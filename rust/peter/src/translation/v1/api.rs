use crate::translation::v1::{Chapter, ChapterID, TranslationV1, Verse, VerseID};
use crate::storage::Storage;
use crate::translation::v1::book_name::BookName;
use crate::translation::v1::chapter::ChapterNumber;

impl TranslationV1 {
    pub fn get_chapter(&self, id: &ChapterID) -> Option<Chapter> {
        match &self.books {
            Storage::Local(books) => {
                books.0.get(&id.book_name)
                    .and_then(|book| book.chapters.0.get(&id.number))
                    .cloned()
            }
            Storage::Iagon(_) => None,
        }
    }

    pub fn get_verse(&self, id: &VerseID) -> Option<Verse> {
        self.get_chapter(&id.chapter_id)
            .and_then(|chapter| {
                chapter.verses.iter()
                    .find(|v| v.number == id.verse)
                    .cloned()
            })
    }

    pub fn random_chapter(&self) -> Chapter {
        // For now, just return Genesis 1 as a default
        let chapter_id = ChapterID {
            book_name: BookName::Genesis,
            number: ChapterNumber(1),
        };
        
        self.get_chapter(&chapter_id)
            .unwrap_or_else(|| Chapter {
                verses: vec![],
                verse_sections: std::collections::HashMap::new(),
            })
    }
}

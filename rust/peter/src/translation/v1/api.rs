use crate::translation::v1::{Chapter, ChapterID, TranslationV1, Verse, VerseID};
use crate::storage::Storage;

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
        match &self.books {
            Storage::Local(books) => {
                // Collect all chapters from all books
                let all_chapters: Vec<(ChapterID, Chapter)> = books.0
                    .iter()
                    .flat_map(|(book_name, book)| {
                        book.chapters.0.iter().map(move |(chapter_num, chapter)| {
                            let chapter_id = ChapterID {
                                book_name: book_name.clone(),
                                number: chapter_num.clone(),
                            };
                            (chapter_id, chapter.clone())
                        })
                    })
                    .collect();
                
                if all_chapters.is_empty() {
                    return Chapter {
                        verses: vec![],
                        verse_sections: std::collections::HashMap::new(),
                    };
                }
                
                // Use a simple random based on current time for WASM compatibility
                #[cfg(target_arch = "wasm32")]
                {
                    // In WASM, use JavaScript's Math.random()
                    let random_index = (js_sys::Math::random() * all_chapters.len() as f64) as usize;
                    all_chapters.get(random_index)
                        .map(|(_, chapter)| chapter.clone())
                        .unwrap_or_else(|| Chapter {
                            verses: vec![],
                            verse_sections: std::collections::HashMap::new(),
                        })
                }
                
                #[cfg(not(target_arch = "wasm32"))]
                {
                    // For non-WASM, use system time
                    use std::time::{SystemTime, UNIX_EPOCH};
                    let nanos = SystemTime::now()
                        .duration_since(UNIX_EPOCH)
                        .unwrap_or_default()
                        .subsec_nanos() as usize;
                    let random_index = nanos % all_chapters.len();
                    all_chapters.get(random_index)
                        .map(|(_, chapter)| chapter.clone())
                        .unwrap_or_else(|| Chapter {
                            verses: vec![],
                            verse_sections: std::collections::HashMap::new(),
                        })
                }
            }
            Storage::Iagon(_) => Chapter {
                verses: vec![],
                verse_sections: std::collections::HashMap::new(),
            }
        }
    }
}

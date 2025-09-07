use peter::translation::Translation;
use peter::translation::v1::TranslationV1;
use serde_json;

#[derive(Clone)]
pub struct BibleState {
    pub translation: TranslationV1,
}

impl BibleState {
    pub fn new() -> Self {
        let kjv_json = include_str!("../kjv.btrl");
        let translation_wrapper: Translation = serde_json::from_str(kjv_json)
            .expect("Failed to load KJV translation");
        
        let translation = match translation_wrapper {
            Translation::V1(t) => t,
            Translation::V0(_) => panic!("Expected V1 translation format"),
        };
        
        Self {
            translation,
        }
    }
}

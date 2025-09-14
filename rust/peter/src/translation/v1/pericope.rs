use crate::translation::v1::VerseID;

struct Pericope {
    start: VerseID,
    end: VerseID,
}

impl Pericope {
    pub fn to_url_path(&self) -> String {
        format!("todo")
    }
}

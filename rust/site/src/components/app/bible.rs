use crate::app::bible::BibleState;
use leptos::prelude::*;

#[component]
pub fn Bible(s: BibleState) -> impl IntoView {
    let chapter = s.translation.random_chapter();
    let verse_text = chapter
        .verses
        .first()
        .map(|v| v.content.clone())
        .unwrap_or_else(|| "No verses found".to_string());

    view! {
        <div>
            {verse_text}
        </div>
    }
}

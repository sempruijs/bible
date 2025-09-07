use crate::app::bible::BibleState;
use leptos::prelude::*;

#[component]
pub fn Bible(s: BibleState) -> impl IntoView {
    // Use the chapter that was already selected when BibleState was created
    let first_verse = s.current_chapter.verses.first().cloned();

    view! {
        <div>
            {match first_verse {
                Some(verse) => {
                    view! {
                        <p>{verse.content}</p>
                    }.into_any()
                }
                None => {
                    view! {
                        <p>"No verses found in this chapter"</p>
                    }.into_any()
                }
            }}
        </div>
    }
}

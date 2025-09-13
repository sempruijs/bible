use crate::app::bible::BibleState;
use leptos::prelude::*;
use peter::translation::v1::verse::VerseNumber;

fn format_verse_number(verse_num: &VerseNumber) -> String {
    match verse_num {
        VerseNumber::Single(n) => format!("{}.", n),
        VerseNumber::Range(start, end) => format!("{}-{}.", start, end),
    }
}

#[component]
pub fn Bible(s: BibleState) -> impl IntoView {
    // Use the chapter that was already selected when BibleState was created
    let verses = s.current_chapter.verses.clone();

    view! {
        <div class="p-4 overflow-auto h-full">
            {if verses.is_empty() {
                view! {
                    <p>"No verses found in this chapter"</p>
                }.into_any()
            } else {
                view! {
                    <div class="space-y-1">
                        {verses.into_iter().map(|verse| {
                            let verse_num = format_verse_number(&verse.number);
                            view! {
                                <p class="text-black">
                                    <span class="font-semibold text-gray-600 mr-2">{verse_num}</span>
                                    <span>{verse.content}</span>
                                </p>
                            }
                        }).collect::<Vec<_>>()}
                    </div>
                }.into_any()
            }}
        </div>
    }
}

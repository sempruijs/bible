use crate::app::bible::BibleState;
use leptos::prelude::*;

#[component]
pub fn Bible(s: BibleState) -> impl IntoView {
    view! {
        <div>
        {s.translation.random_chapter().verses[0]}
        </div>
    }
}

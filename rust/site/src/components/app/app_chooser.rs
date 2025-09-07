use crate::app::App;
use crate::app::bible::BibleState;
use crate::window::window::Windows;
use leptos::prelude::*;

#[component]
pub fn AppChooser(windows_state: WriteSignal<Windows>) -> impl IntoView {
    let select_bible = move |_| {
        windows_state.update(|ws| {
            ws.set_current_window_app(App::Bible(BibleState::new()));
        });
    };

    let select_welcome = move |_| {
        windows_state.update(|ws| {
            ws.set_current_window_app(App::Welcome);
        });
    };

    view! {
        <div>
            "Choose app: "
            <span on:click=select_bible style="cursor: pointer">"[Bible]"</span>
            " or "
            <span on:click=select_welcome style="cursor: pointer">"[Welcome]"</span>
        </div>
    }
}

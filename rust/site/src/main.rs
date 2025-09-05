use leptos::prelude::*;

mod window;
use window::window::{Window, Windows};

#[component]
fn App() -> impl IntoView {
    let ws = Windows::default();
    view! {
        <h1>"Bible Computer"</h1>
        <WindowsComponent ws=ws />
    }
}

#[component]
fn WindowsComponent(ws: Windows) -> impl IntoView {
    view! {
        <div class="bg-blue-300">
        iterator over windows here
        </div>
    }
}

#[component]
fn WindowComponent(w: Window) -> impl IntoView {
    view! {
        <div class="bg-blue-500">
            {w.pos.x}
        </div>
    }
}

fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(App);
}

use leptos::prelude::*;

mod window;

#[component]
fn App() -> impl IntoView {
    let ws = Windows::default();
    view! {
        <h1>"Bible Computer"</h1>
        <Windows ws=move || ws />
    }
}

#[component]
fn Windows(ws: Windows) -> impl IntoView {
    view! {
        <div>
        iterator over windows here
        </div>
    }
}

#[component]
fn Window(w: Window) -> impl IntoView {
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

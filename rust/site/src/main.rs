use leptos::prelude::*;

mod window;

#[component]
fn App() -> impl IntoView {
    let windows = Windows::default();
    view! {
        <h1>"Bible Computer"</h1>
        <Window />
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

#[component]
fn Window() -> impl IntoView {
    view! {
        <div class="bg-blue-800">
            window
        </div>
    }
}

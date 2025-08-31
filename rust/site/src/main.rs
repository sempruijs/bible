use leptos::prelude::*;

#[component]
fn App() -> impl IntoView {
    view! {
        <h1>"Bible Computer"</h1>
        <Window />
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

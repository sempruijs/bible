// === External Dependencies ===
use leptos::prelude::*;

fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(App)
}

#[component]
fn App() -> impl IntoView {
    view! {
        <div class="bg-blue-500">
            <p>hello</p>
        </div>
    }
}

use leptos::ev::KeyboardEvent;
use leptos::prelude::*;

mod app;
mod components;
mod keyboard;
mod window;

use components::WindowsComponent;
use keyboard::KeyboardShortcuts;
use window::window::Windows;

#[component]
fn App() -> impl IntoView {
    // Create reactive state for Windows
    let (windows_state, set_windows_state) = signal(Windows::default());

    // Create keyboard shortcuts system
    let shortcuts = KeyboardShortcuts::new();

    // Create keyboard event handler
    let handle_keypress = move |ev: KeyboardEvent| {
        let key = ev.key();

        // Get operation from shortcuts system
        if let Some(operation) = shortcuts.get_operation(&key) {
            set_windows_state.update(|ws| {
                let _ = ws.exec(operation);
            });
        }
    };

    view! {
        <div tabindex="0" on:keydown=handle_keypress class="min-h-screen bg-blue-900 focus:outline-none">
            <WindowsComponent windows_state=windows_state set_windows_state=set_windows_state />
        </div>
    }
}

fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(App);
}

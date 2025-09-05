use crate::window::window::*;
use leptos::ev::KeyboardEvent;
use leptos::prelude::*;

mod keyboard;
mod window;
use keyboard::KeyboardShortcuts;
use window::window::{Window, Windows};

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
            set_windows_state.update(|ws| ws.exec(operation));
        }
    };

    // Get help text for shortcuts
    let shortcuts_help = KeyboardShortcuts::new().get_shortcuts_help();

    view! {
        <div tabindex="0" on:keydown=handle_keypress class="min-h-screen focus:outline-none">
            <h1 class="text-2xl font-bold p-4">"Bible Computer"</h1>
            <div class="px-4 pb-2">
                <div class="text-sm font-semibold text-gray-700 mb-1">"Keyboard Shortcuts:"</div>
                <div class="flex gap-4">
                    {shortcuts_help.into_iter()
                        .map(|(key, desc)| view! {
                            <div class="text-sm text-gray-500">
                                <kbd class="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">{key}</kbd>
                                " - " {desc}
                            </div>
                        })
                        .collect::<Vec<_>>()}
                </div>
            </div>
            <WindowsComponent windows_state=windows_state />
        </div>
    }
}

#[component]
fn WindowsComponent(windows_state: ReadSignal<Windows>) -> impl IntoView {
    view! {
        <div class="flex flex-col gap-4 p-4 bg-blue-100">
            <h2 class="text-xl font-bold">
                "Windows (" {move || windows_state.get().windows().len()} ")"
            </h2>
            <div class="grid grid-cols-3 gap-2">
                {move || {
                    windows_state.get().windows().into_iter()
                        .enumerate()
                        .map(|(index, window)| view! {
                            <WindowComponent w=window index=index />
                        })
                        .collect::<Vec<_>>()
                }}
            </div>
        </div>
    }
}

#[component]
fn WindowComponent(w: Window, index: usize) -> impl IntoView {
    view! {
        <div class="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="text-sm text-gray-600">"Window " {index + 1}</div>
            <div class="text-lg font-semibold">
                "Position: (" {w.pos.x} ", " {w.pos.y} ")"
            </div>
        </div>
    }
}

fn main() {
    console_error_panic_hook::set_once();
    mount_to_body(App);
}

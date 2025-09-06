use crate::app::App;
use crate::components::app::{AppChooser, Bible, Welcome};
use crate::window::window::{Window, Windows};
use leptos::prelude::*;

#[component]
pub fn WindowView(
    window: Window,
    windows_state: WriteSignal<Windows>,
) -> impl IntoView {
    view! {
        <div class="fixed inset-8 bg-white rounded-lg p-4">
            {match window.app {
                Some(App::Bible) => view! { <Bible /> }.into_any(),
                Some(App::Welcome) => view! { <Welcome /> }.into_any(),
                None => view! { <AppChooser windows_state=windows_state /> }.into_any(),
            }}
        </div>
    }
}

#[component]
pub fn WindowTitleBar(
    window: Window,
    x: usize,
    y: usize,
    total_windows: usize,
    windows_state: ReadSignal<Windows>,
) -> impl IntoView {
    let app_name = match window.app {
        Some(App::Bible) => "📖 Bible",
        Some(App::Welcome) => "👋 Welcome",
        None => "🚀 App Chooser",
    };

    view! {
        <div class="bg-gray-800 text-white px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div class="flex items-center gap-3">
                <div class="flex gap-1">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span class="text-lg font-medium">{app_name}</span>
            </div>

            // Window position indicator
            <div class="flex items-center gap-4 text-sm">
                <span class="text-gray-400">
                    "Window [" {y} "," {x} "] • " {total_windows} " total"
                </span>

                // Mini grid indicator
                <WindowGridIndicator windows_state=windows_state />
            </div>
        </div>
    }
}

#[component]
pub fn WindowGridIndicator(windows_state: ReadSignal<Windows>) -> impl IntoView {
    view! {
        <div class="flex flex-col gap-0.5">
            {move || {
                let ws = windows_state.get();
                let current_pos = ws.current_position();
                let positions = ws.windows_with_positions();

                // Build a mini grid representation
                let mut max_y = 0;
                let mut max_x = 0;
                for ((x, y), _, _) in &positions {
                    if *y > max_y { max_y = *y; }
                    if *x > max_x { max_x = *x; }
                }

                (0..=max_y).map(|row| {
                    view! {
                        <div class="flex gap-0.5">
                            {(0..=max_x).map(|col| {
                                let is_current = row == current_pos.1 && col == current_pos.0;
                                let has_window = positions.iter().any(|((x, y), _, _)| *x == col && *y == row);

                                let class = if is_current {
                                    "w-2 h-2 bg-blue-500"
                                } else if has_window {
                                    "w-2 h-2 bg-gray-600"
                                } else {
                                    "w-2 h-2 bg-gray-800"
                                };

                                view! { <div class=class></div> }
                            }).collect::<Vec<_>>()}
                        </div>
                    }
                }).collect::<Vec<_>>()
            }}
        </div>
    }
}

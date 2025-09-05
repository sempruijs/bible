use leptos::prelude::*;
use crate::window::window::{Window, Windows};

#[component]
pub fn WindowsComponent(windows_state: ReadSignal<Windows>) -> impl IntoView {
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
pub fn WindowComponent(w: Window, index: usize) -> impl IntoView {
    view! {
        <div class="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="text-sm text-gray-600">"Window " {index + 1}</div>
            <div class="text-lg font-semibold">
                "Position: (" {w.pos.x} ", " {w.pos.y} ")"
            </div>
        </div>
    }
}
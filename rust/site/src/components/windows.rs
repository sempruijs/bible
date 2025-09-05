use leptos::prelude::*;
use crate::window::window::{Window, Windows, App};

#[component]
pub fn WindowsComponent(windows_state: ReadSignal<Windows>) -> impl IntoView {
    view! {
        <div class="flex flex-col gap-4 p-4 bg-blue-100">
            <h2 class="text-xl font-bold">
                "Windows (" {move || windows_state.get().window_count()} ")"
                " - Current: (" {move || windows_state.get().current_position().0} ", " {move || windows_state.get().current_position().1} ")"
            </h2>
            <div class="grid grid-cols-4 gap-2">
                {move || {
                    windows_state.get().windows_with_positions().into_iter()
                        .map(|((x, y), window, is_selected)| view! {
                            <WindowComponent window=window x=x y=y is_selected=is_selected />
                        })
                        .collect::<Vec<_>>()
                }}
            </div>
        </div>
    }
}

#[component]
pub fn WindowComponent(window: Window, x: usize, y: usize, is_selected: bool) -> impl IntoView {
    let classes = if is_selected {
        "bg-blue-500 text-white rounded-lg shadow-lg p-4 border-2 border-blue-600 transition-all"
    } else {
        "bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all"
    };
    
    let text_color = if is_selected {
        "text-blue-100"
    } else {
        "text-gray-600"
    };
    
    let app_name = match window.app {
        App::Bible => "Bible",
    };
    
    view! {
        <div class=classes>
            <div class=format!("text-sm {}", text_color)>
                "Window [" {y} "][" {x} "]"
            </div>
            <div class="text-lg font-semibold">
                {app_name}
            </div>
        </div>
    }
}
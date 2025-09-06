use crate::components::window::WindowView;
use crate::window::window::Windows;
use leptos::prelude::*;

#[component]
pub fn WindowsComponent(windows_state: ReadSignal<Windows>) -> impl IntoView {
    view! {
        <div class="h-screen bg-gray-900">
            {move || {
                let windows_state_value = windows_state.get();
                let current_pos = windows_state_value.current_position();

                // Find and display only the current window
                windows_state_value.windows_with_positions()
                    .into_iter()
                    .find(|((x, y), _, is_selected)| *is_selected && *x == current_pos.0 && *y == current_pos.1)
                    .map(|(_, window, _)| view! {
                        <WindowView window=window />
                    })
            }}
        </div>
    }
}

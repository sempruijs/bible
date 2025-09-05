use leptos::prelude::*;
use crate::window::window::{Window, Windows, App};

#[component]
pub fn WindowsComponent(windows_state: ReadSignal<Windows>) -> impl IntoView {
    view! {
        <div class="flex flex-col h-screen bg-gray-900">
            {move || {
                let windows_state_value = windows_state.get();
                let current_pos = windows_state_value.current_position();
                
                // Find and display only the current window
                windows_state_value.windows_with_positions()
                    .into_iter()
                    .find(|((x, y), _, is_selected)| *is_selected && *x == current_pos.0 && *y == current_pos.1)
                    .map(|((x, y), window, _)| view! {
                        <CurrentWindowComponent 
                            window=window 
                            x=x 
                            y=y 
                            total_windows=windows_state_value.window_count()
                            windows_state=windows_state
                        />
                    })
            }}
        </div>
    }
}

#[component]
pub fn CurrentWindowComponent(
    window: Window, 
    x: usize, 
    y: usize, 
    total_windows: usize,
    windows_state: ReadSignal<Windows>
) -> impl IntoView {
    let app_name = match window.app {
        App::Bible => "📖 Bible",
    };
    
    view! {
        <div class="flex flex-col h-full">
            // Title bar
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
                </div>
            </div>
            
            // Window content (full screen)
            <div class="flex-1 bg-gray-900 p-6 overflow-auto">
                <div class="text-gray-300 text-lg">
                    {match window.app {
                        App::Bible => view! {
                            <div>
                                <h2 class="text-3xl font-bold mb-4 text-white">"Bible Reader"</h2>
                                <div class="prose prose-invert max-w-none">
                                    <p>"Welcome to the Bible application window."</p>
                                    <p>"Use h/l to navigate horizontally between windows"</p>
                                    <p>"Use j/k to navigate vertically between rows"</p>
                                    <p>"Press n to create a new window, o to create a new row"</p>
                                    <p>"Press d to delete the current window"</p>
                                </div>
                            </div>
                        }.into_view(),
                    }}
                </div>
            </div>
        </div>
    }
}
use leptos::prelude::*;

#[component]
pub fn Bible() -> impl IntoView {
    view! {
        <div class="h-full flex flex-col">
            <h2 class="text-3xl font-bold mb-4 text-white">"Bible Reader"</h2>
            <div class="prose prose-invert max-w-none flex-1">
                <p>"Welcome to the Bible application window."</p>
                <p class="mt-4 text-yellow-300 font-semibold">"Navigation:"</p>
                <ul class="text-gray-300">
                    <li>"• h/l - Navigate horizontally between windows"</li>
                    <li>"• j/k - Navigate vertically between rows"</li>
                    <li>"• n - Create a new window"</li>
                    <li>"• o - Create a new row"</li>
                    <li>"• d - Delete the current window"</li>
                </ul>
                <div class="mt-8 p-4 bg-gray-800 rounded-lg">
                    <h3 class="text-xl text-blue-400 mb-2">"Scripture Placeholder"</h3>
                    <p class="italic text-gray-300">
                        "In the beginning was the Word, and the Word was with God, and the Word was God."
                    </p>
                    <p class="text-sm text-gray-500 mt-2">"- John 1:1"</p>
                </div>
            </div>
        </div>
    }
}

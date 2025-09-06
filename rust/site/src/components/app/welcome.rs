use leptos::prelude::*;

#[component]
pub fn Welcome() -> impl IntoView {
    view! {
        <div class="h-full flex flex-col items-center justify-center text-center">
            <h2 class="text-4xl font-bold mb-6 text-white">"Welcome to Bible Computer"</h2>
            <div class="max-w-2xl space-y-4">
                <p class="text-xl text-gray-300">
                    "A modern window management system for Bible study and research."
                </p>
                <div class="mt-8 p-6 bg-gray-800 rounded-lg">
                    <h3 class="text-2xl text-blue-400 mb-4">"Getting Started"</h3>
                    <div class="text-left space-y-2 text-gray-300">
                        <p>"• Press 'n' to create new windows"</p>
                        <p>"• Use 'h/l' to navigate between windows"</p>
                        <p>"• Use 'j/k' to navigate between rows"</p>
                        <p>"• Press 'o' to create a new row of windows"</p>
                        <p>"• Press 'd' to delete the current window"</p>
                    </div>
                </div>
                <div class="mt-6 text-gray-400">
                    "Each window can contain different Bible study tools and resources."
                </div>
            </div>
        </div>
    }
}

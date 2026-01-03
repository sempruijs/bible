<script lang="ts">
    let { 
        onChooseApp 
    }: { 
        onChooseApp: (appType: "bible" | "about") => void;
    } = $props();

    function selectBible() {
        onChooseApp("bible");
    }

    function selectAbout() {
        onChooseApp("about");
    }
</script>

<div class="h-full flex items-center justify-center bg-gray-900">
    <div class="max-w-md w-full mx-4">
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-100 mb-2">Choose App Type</h2>
            <p class="text-gray-400">Select what you'd like to open in this tab</p>
        </div>

        <div class="space-y-4">
            <!-- Bible App Option -->
            <button
                onclick={selectBible}
                class="w-full p-6 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-blue-500 
                       rounded-lg transition-all duration-200 text-left group"
            >
                <div class="flex items-center gap-4">
                    <div class="text-3xl">=Ö</div>
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-gray-100 group-hover:text-blue-400">
                            Bible Reader
                        </h3>
                        <p class="text-gray-400 text-sm">
                            Read and explore the Bible with chapter navigation
                        </p>
                    </div>
                    <div class="text-gray-500 group-hover:text-blue-500">
                        ’
                    </div>
                </div>
            </button>

            <!-- About App Option -->
            <button
                onclick={selectAbout}
                class="w-full p-6 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-blue-500 
                       rounded-lg transition-all duration-200 text-left group"
            >
                <div class="flex items-center gap-4">
                    <div class="text-3xl">9</div>
                    <div class="flex-1">
                        <h3 class="text-lg font-semibold text-gray-100 group-hover:text-blue-400">
                            About
                        </h3>
                        <p class="text-gray-400 text-sm">
                            Learn more about Bible Computer
                        </p>
                    </div>
                    <div class="text-gray-500 group-hover:text-blue-500">
                        ’
                    </div>
                </div>
            </button>
        </div>
    </div>
</div>
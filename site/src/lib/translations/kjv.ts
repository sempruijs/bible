import { Cloud } from "$lib/translations/storage";
import { Translation, TranslationMetadata } from "$lib/translations/translation";

// King James Version translation - metadata with cloud storage
export const kjvTranslation = Translation({
    metadata: TranslationMetadata({
        name: "King James Version",
        shortName: "KJV",
        language: "English"
    }),
    content: Cloud({
        url: "https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/kjv.json"
    })
});

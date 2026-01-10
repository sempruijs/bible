import { Cloud } from "$lib/translations/storage";
import { Translation, TranslationMetadata } from "$lib/translations/translation";

// Statenvertaling translation - metadata with cloud storage
export const svTranslation = Translation({
    metadata: TranslationMetadata({
        name: "Statenvertaling",
        shortName: "SV",
        language: "Dutch"
    }),
    content: Cloud({
        url: "https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/dutch/sv.json"
    })
});

import { Cloud } from "$lib/translations/storage";
import { Translation, TranslationMetadata } from "$lib/translations/translation";

// Berean Bible translation - metadata with cloud storage
export const bsbTranslation = Translation({
    metadata: TranslationMetadata({
        name: "Berean Bible",
        shortName: "BSB",
        language: "English"
    }),
    content: Cloud({
        url: "https://raw.githubusercontent.com/biblecomputer/translations/refs/heads/main/v0/english/bsb.json"
    })
});

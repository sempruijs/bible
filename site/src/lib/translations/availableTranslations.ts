import type { Translation } from "$lib/translations/translation";
import { kjvTranslation } from "$lib/translations/kjv";
import { svTranslation } from "$lib/translations/sv";
import { bsbTranslation } from "$lib/translations/bsb";

export const availableTranslations: Translation[] = [
    bsbTranslation,
    kjvTranslation,
    svTranslation
];

export const getTranslationByShortName = (shortName: string): Translation | undefined => {
    return availableTranslations.find(t => t.metadata.shortName === shortName);
};

// Detect browser language and return appropriate default translation
export const getDefaultTranslation = (): Translation => {
    if (typeof navigator === 'undefined') {
        // Server-side rendering fallback
        return bsbTranslation;
    }

    // Get browser language (e.g., "nl", "nl-NL", "en-US", "en-GB")
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
    const languageCode = browserLanguage.split('-')[0].toLowerCase();

    // Check if Dutch
    if (languageCode === 'nl') {
        return svTranslation;
    }

    // Default to BSB for English and all other languages
    return bsbTranslation;
};

// Static default for backward compatibility
export const defaultTranslation = bsbTranslation;

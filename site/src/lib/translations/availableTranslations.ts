import type { Translation } from "$lib/translations/translation";
import { kjvTranslation } from "$lib/translations/kjv";
import { svTranslation } from "$lib/translations/sv";

export const availableTranslations: Translation[] = [
    kjvTranslation,
    svTranslation
];

export const getTranslationByShortName = (shortName: string): Translation | undefined => {
    return availableTranslations.find(t => t.metadata.shortName === shortName);
};

export const defaultTranslation = kjvTranslation;

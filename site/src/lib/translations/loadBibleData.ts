import { Effect } from "effect";
import type { Translation } from "./translation";
import { getDefaultTranslation } from "./availableTranslations";

export const loadBibleData = (): Effect.Effect<Translation> => {
    const translation = getDefaultTranslation();
    console.log('Loading default translation based on browser language:', translation.metadata.name);
    return Effect.succeed(translation);
};

import { Effect } from "effect";
import type { Translation } from "./translation";
import { defaultTranslation } from "./availableTranslations";

export const loadBibleData = (): Effect.Effect<Translation> => {
    console.log('Loading default translation:', defaultTranslation.metadata.name);
    return Effect.succeed(defaultTranslation);
};

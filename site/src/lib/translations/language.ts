import { Schema } from "effect";

export const LanguageSchema = Schema.Literal("English", "Dutch");
export type Language = Schema.Schema.Type<typeof LanguageSchema>;

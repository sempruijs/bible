import { Effect, Schema } from "effect";
import { BibleBookSchema } from "$lib/book";
import { TranslationSchema, VerseSchema, ChapterSchema, BookSchema } from "$lib/translations/translation";
import { BibleStateSchema, StopwatchStateSchema, AppSchema } from "$lib/app";
import { WalletInfoSchema, UtxoSchema, AmountSchema } from "$lib/types";

/**
 * Schema validation utilities for the Bible application
 * 
 * This module provides safe parsing, validation, and encoding functions
 * for all the data types used in the application using Effect Schema.
 */

// Parse functions - convert unknown data to typed data with validation
export const parseBibleBook = (input: unknown) => 
  Schema.decodeUnknown(BibleBookSchema)(input);

export const parseTranslation = (input: unknown) => 
  Schema.decodeUnknown(TranslationSchema)(input);

export const parseVerse = (input: unknown) => 
  Schema.decodeUnknown(VerseSchema)(input);

export const parseChapter = (input: unknown) => 
  Schema.decodeUnknown(ChapterSchema)(input);

export const parseBook = (input: unknown) => 
  Schema.decodeUnknown(BookSchema)(input);

export const parseBibleState = (input: unknown) => 
  Schema.decodeUnknown(BibleStateSchema)(input);

export const parseStopwatchState = (input: unknown) => 
  Schema.decodeUnknown(StopwatchStateSchema)(input);

export const parseApp = (input: unknown) => 
  Schema.decodeUnknown(AppSchema)(input);

export const parseWalletInfo = (input: unknown) => 
  Schema.decodeUnknown(WalletInfoSchema)(input);

export const parseUtxo = (input: unknown) => 
  Schema.decodeUnknown(UtxoSchema)(input);

export const parseAmount = (input: unknown) => 
  Schema.decodeUnknown(AmountSchema)(input);

// Encode functions - convert typed data to JSON-serializable format
export const encodeBibleBook = (input: Schema.Schema.Type<typeof BibleBookSchema>) => 
  Schema.encode(BibleBookSchema)(input);

export const encodeTranslation = (input: Schema.Schema.Type<typeof TranslationSchema>) => 
  Schema.encode(TranslationSchema)(input);

export const encodeBibleState = (input: Schema.Schema.Type<typeof BibleStateSchema>) => 
  Schema.encode(BibleStateSchema)(input);

export const encodeStopwatchState = (input: Schema.Schema.Type<typeof StopwatchStateSchema>) => 
  Schema.encode(StopwatchStateSchema)(input);

export const encodeApp = (input: Schema.Schema.Type<typeof AppSchema>) => 
  Schema.encode(AppSchema)(input);

// Validation functions - check if data conforms to schema without parsing
export const isBibleBook = (input: unknown): input is Schema.Schema.Type<typeof BibleBookSchema> => 
  Schema.is(BibleBookSchema)(input);

export const isTranslation = (input: unknown): input is Schema.Schema.Type<typeof TranslationSchema> => 
  Schema.is(TranslationSchema)(input);

export const isBibleState = (input: unknown): input is Schema.Schema.Type<typeof BibleStateSchema> => 
  Schema.is(BibleStateSchema)(input);

export const isStopwatchState = (input: unknown): input is Schema.Schema.Type<typeof StopwatchStateSchema> => 
  Schema.is(StopwatchStateSchema)(input);

export const isApp = (input: unknown): input is Schema.Schema.Type<typeof AppSchema> => 
  Schema.is(AppSchema)(input);

// Example utility functions showing practical usage

/**
 * Safely parse JSON data that might contain a Translation
 * Returns an Effect that either succeeds with a Translation or fails with a parse error
 */
export const parseTranslationFromJSON = (jsonString: string) => 
  Effect.gen(function* () {
    const parsed = yield* Effect.try({
      try: () => JSON.parse(jsonString),
      catch: (error) => new Error(`Invalid JSON: ${error}`)
    });
    return yield* parseTranslation(parsed);
  });

/**
 * Safely parse app state from localStorage
 * Returns an Effect that either succeeds with an App or fails with a parse error
 */
export const parseAppFromLocalStorage = (key: string) => 
  Effect.gen(function* () {
    const item = yield* Effect.sync(() => {
      if (typeof localStorage === 'undefined') {
        throw new Error('localStorage not available');
      }
      return localStorage.getItem(key);
    });
    
    if (!item) {
      yield* Effect.fail(new Error(`No data found for key: ${key}`));
    }
    
    const parsed = yield* Effect.try({
      try: () => JSON.parse(item!),
      catch: (error) => new Error(`Invalid JSON in localStorage: ${error}`)
    });
    
    return yield* parseApp(parsed);
  });

/**
 * Safely validate and save app state to localStorage
 */
export const saveAppToLocalStorage = (key: string, app: Schema.Schema.Type<typeof AppSchema>) => 
  Effect.gen(function* () {
    // Validate the app conforms to schema
    if (!isApp(app)) {
      yield* Effect.fail(new Error('Invalid app data'));
    }
    
    // Encode to JSON-serializable format
    const encoded = yield* encodeApp(app);
    
    // Save to localStorage
    yield* Effect.sync(() => {
      if (typeof localStorage === 'undefined') {
        throw new Error('localStorage not available');
      }
      localStorage.setItem(key, JSON.stringify(encoded));
    });
  });

/**
 * Batch validate multiple translations
 * Returns an Effect with an array of valid translations and an array of errors
 */
export const validateTranslations = (inputs: unknown[]) => 
  Effect.gen(function* () {
    const results = yield* Effect.forEach(inputs, (input) => 
      Effect.either(parseTranslation(input))
    );
    
    const valid: Schema.Schema.Type<typeof TranslationSchema>[] = [];
    const errors: unknown[] = [];
    
    results.forEach((result) => {
      if (result._tag === "Right") {
        valid.push(result.right);
      } else {
        errors.push(result.left);
      }
    });
    
    return { valid, errors };
  });

// Export all schemas for external use
export {
  BibleBookSchema,
  TranslationSchema,
  VerseSchema,
  ChapterSchema,
  BookSchema,
  BibleStateSchema,
  StopwatchStateSchema,
  AppSchema,
  WalletInfoSchema,
  UtxoSchema,
  AmountSchema
};
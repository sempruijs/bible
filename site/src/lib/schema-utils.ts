import { Effect, Schema } from "effect";
import { BibleBookSchema } from "$lib/book";
import { TranslationSchema, VerseSchema, ChapterSchema, BookSchema } from "$lib/translations/translation";
import { BibleStateSchema, StopwatchStateSchema, AppContentSchema, TabSchema } from "$lib/app";
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

export const parseAppContent = (input: unknown) => 
  Schema.decodeUnknown(AppContentSchema)(input);

export const parseTab = (input: unknown) => 
  Schema.decodeUnknown(TabSchema)(input);

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

export const encodeAppContent = (input: Schema.Schema.Type<typeof AppContentSchema>) => 
  Schema.encode(AppContentSchema)(input);

export const encodeTab = (input: Schema.Schema.Type<typeof TabSchema>) => 
  Schema.encode(TabSchema)(input);

// Validation functions - check if data conforms to schema without parsing
export const isBibleBook = (input: unknown): input is Schema.Schema.Type<typeof BibleBookSchema> => 
  Schema.is(BibleBookSchema)(input);

export const isTranslation = (input: unknown): input is Schema.Schema.Type<typeof TranslationSchema> => 
  Schema.is(TranslationSchema)(input);

export const isBibleState = (input: unknown): input is Schema.Schema.Type<typeof BibleStateSchema> => 
  Schema.is(BibleStateSchema)(input);

export const isStopwatchState = (input: unknown): input is Schema.Schema.Type<typeof StopwatchStateSchema> => 
  Schema.is(StopwatchStateSchema)(input);

export const isAppContent = (input: unknown): input is Schema.Schema.Type<typeof AppContentSchema> => 
  Schema.is(AppContentSchema)(input);

export const isTab = (input: unknown): input is Schema.Schema.Type<typeof TabSchema> => 
  Schema.is(TabSchema)(input);

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
export const parseTabFromLocalStorage = (key: string) => 
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
    
    return yield* parseTab(parsed);
  });

/**
 * Safely validate and save app state to localStorage
 */
export const saveTabToLocalStorage = (key: string, tab: Schema.Schema.Type<typeof TabSchema>) => 
  Effect.gen(function* () {
    // Validate the tab conforms to schema
    if (!isTab(tab)) {
      yield* Effect.fail(new Error('Invalid tab data'));
    }
    
    // Encode to JSON-serializable format
    const encoded = yield* encodeTab(tab);
    
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
  AppContentSchema,
  TabSchema,
  WalletInfoSchema,
  UtxoSchema,
  AmountSchema
};
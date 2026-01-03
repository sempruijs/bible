import { Effect, Context } from "effect";

export interface ResponsiveService {
  readonly isMobile: () => Effect.Effect<boolean>;
  readonly getInitialCanonState: () => Effect.Effect<boolean>;
}

export const ResponsiveService = Context.GenericTag<ResponsiveService>("ResponsiveService");

export const ResponsiveServiceLive = ResponsiveService.of({
  isMobile: () =>
    Effect.sync(() => {
      if (typeof window !== 'undefined') {
        return window.innerWidth < 768;
      }
      return false;
    }),

  getInitialCanonState: () =>
    Effect.sync(() => {
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 768;
        // On mobile, start with canon closed to show the chapter content
        // On desktop, start with canon open for better usability
        return !isMobile;
      }
      // Default to open for SSR
      return true;
    })
});
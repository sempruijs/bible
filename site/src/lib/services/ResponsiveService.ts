/**
 * Responsive utility service for handling mobile/desktop detection and responsive behavior.
 * Simplified from Effect Context pattern to simple utility functions.
 */

const MOBILE_BREAKPOINT = 768;

/**
 * Check if the current viewport is considered mobile (< 768px width).
 * @returns true if mobile, false otherwise. Returns false on server-side.
 */
export const isMobile = (): boolean => {
	if (typeof window === 'undefined') {
		return false;
	}
	return window.innerWidth < MOBILE_BREAKPOINT;
};

/**
 * Get the initial state for the canon explorer based on viewport size.
 * On mobile: canon starts closed to show chapter content.
 * On desktop: canon starts open for better usability.
 * @returns true if canon should be open, false if closed
 */
export const getInitialCanonState = (): boolean => {
	if (typeof window === 'undefined') {
		// Default to open for SSR
		return true;
	}
	// On mobile, start with canon closed; on desktop, start open
	return !isMobile();
};

/**
 * Get the initial state for the wiki sidebar based on viewport size.
 * On mobile: sidebar starts closed to show content immediately (homepage or entry).
 * On desktop: sidebar always starts open.
 * @returns true if sidebar should be open, false if closed
 */
export const getInitialWikiSidebarState = (): boolean => {
	if (typeof window === 'undefined') {
		// Default to open for SSR
		return true;
	}
	// On mobile, start with sidebar closed to show content
	// On desktop, show sidebar
	return !isMobile();
};

/**
 * Create a resize observer that calls the callback when the viewport size changes.
 * Useful for components that need to react to responsive breakpoint changes.
 *
 * @param callback - Function to call with the mobile state when viewport resizes
 * @returns Cleanup function to remove the event listener
 *
 * @example
 * ```typescript
 * const cleanup = createResizeObserver((mobile) => {
 *   console.log('Is mobile:', mobile);
 * });
 * // Later: cleanup();
 * ```
 */
export const createResizeObserver = (callback: (isMobile: boolean) => void): (() => void) => {
	if (typeof window === 'undefined') {
		return () => {};
	}

	const handler = () => callback(isMobile());
	window.addEventListener('resize', handler);
	return () => window.removeEventListener('resize', handler);
};

export const ResponsiveService = {
	isMobile,
	getInitialCanonState,
	getInitialWikiSidebarState,
	createResizeObserver
};

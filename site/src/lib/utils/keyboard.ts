/**
 * Centralized keyboard shortcut management utility.
 * Provides a consistent pattern for handling keyboard shortcuts across components.
 */

export interface KeyboardShortcutOptions {
	/** Skip shortcut execution when focus is in input/textarea/contenteditable elements */
	skipInInputs?: boolean;
}

/**
 * Creates a keyboard shortcut handler with automatic cleanup.
 *
 * @param shortcuts - Object mapping keys to handler functions
 * @param options - Configuration options for shortcut behavior
 * @returns Cleanup function to remove the event listener
 *
 * @example
 * ```typescript
 * // In a Svelte component's onMount
 * const cleanup = useKeyboardShortcuts({
 *   'b': () => toggleSidebar(),
 *   't': () => addNewTab(),
 *   'ArrowRight': () => nextChapter()
 * }, { skipInInputs: true });
 *
 * // Return cleanup function
 * return cleanup;
 * ```
 */
export const useKeyboardShortcuts = (
	shortcuts: Record<string, (event: KeyboardEvent) => void>,
	options: KeyboardShortcutOptions = {}
): (() => void) => {
	if (typeof window === 'undefined') {
		return () => {};
	}

	const handler = (event: KeyboardEvent) => {
		// Skip if focus is in an input element
		if (options.skipInInputs) {
			const target = event.target as HTMLElement;
			if (
				target?.tagName === 'INPUT' ||
				target?.tagName === 'TEXTAREA' ||
				target?.contentEditable === 'true'
			) {
				return;
			}
		}

		const shortcutHandler = shortcuts[event.key];
		if (shortcutHandler) {
			event.preventDefault();
			shortcutHandler(event);
		}
	};

	window.addEventListener('keydown', handler);
	return () => window.removeEventListener('keydown', handler);
};

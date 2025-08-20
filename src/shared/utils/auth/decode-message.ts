/**
 * Utility functions for decoding redirect messages from URL search parameters
 */

/**
 * Decodes a message from URL search parameters
 * @param searchParams - URL search parameters (from useSearchParams or similar)
 * @param type - The type of message to decode (e.g., 'error', 'success', 'info')
 * @returns The decoded message or null if not found
 */
export function decodeMessage(searchParams: URLSearchParams, type: string): string | null {
  const encodedMessage = searchParams.get(type);
  return encodedMessage ? decodeURIComponent(encodedMessage) : null;
}

/**
 * Convenience functions for common message types
 */
export const getErrorMessage = (searchParams: URLSearchParams): string | null =>
  decodeMessage(searchParams, 'error');

export const getSuccessMessage = (searchParams: URLSearchParams): string | null =>
  decodeMessage(searchParams, 'success');

export const getInfoMessage = (searchParams: URLSearchParams): string | null =>
  decodeMessage(searchParams, 'info');

export const getWarningMessage = (searchParams: URLSearchParams): string | null =>
  decodeMessage(searchParams, 'warning');

/**
 * Gets all message types from search parameters
 * @param searchParams - URL search parameters
 * @returns Object with all message types
 */
export function getAllMessages(searchParams: URLSearchParams) {
  return {
    error: getErrorMessage(searchParams),
    success: getSuccessMessage(searchParams),
    info: getInfoMessage(searchParams),
    warning: getWarningMessage(searchParams),
  };
}

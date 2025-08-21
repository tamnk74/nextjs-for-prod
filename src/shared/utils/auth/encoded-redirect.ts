import { redirect } from 'next/navigation';

/**
 * Redirects to a URL with an encoded message parameter
 * @param type - The type of message (e.g., 'error', 'success', 'info')
 * @param path - The path to redirect to
 * @param message - The message to encode and append as a query parameter
 * @returns Redirect response
 */
export function encodedRedirect(type: string, path: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  const separator = path.includes('?') ? '&' : '?';
  const redirectUrl = `${path}${separator}${type}=${encodedMessage}`;
  return redirect(redirectUrl);
}

/**
 * Convenience functions for common redirect types
 */
export const redirectWithError = (path: string, message: string) => 
  encodedRedirect('error', path, message);

export const redirectWithSuccess = (path: string, message: string) => 
  encodedRedirect('success', path, message);

export const redirectWithInfo = (path: string, message: string) => 
  encodedRedirect('info', path, message);

export const redirectWithWarning = (path: string, message: string) => 
  encodedRedirect('warning', path, message);

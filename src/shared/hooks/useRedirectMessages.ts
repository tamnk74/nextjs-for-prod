'use client';

import { useSearchParams } from 'next/navigation';
import { getAllMessages } from '@/shared/utils/auth';

/**
 * Hook to get redirect messages from URL search parameters
 * @returns Object containing all message types (error, success, info, warning)
 */
export function useRedirectMessages() {
  const searchParams = useSearchParams();
  return getAllMessages(searchParams);
}

/**
 * Hook to get a specific type of redirect message
 * @param type - The type of message to retrieve
 * @returns The message string or null if not found
 */
export function useRedirectMessage(type: 'error' | 'success' | 'info' | 'warning') {
  const messages = useRedirectMessages();
  return messages[type];
}

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement | string, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  'error-callback'?: (error: string) => void;
  'expired-callback'?: () => void;
  'timeout-callback'?: () => void;
  'after-interactive-callback'?: () => void;
  'before-interactive-callback'?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  language?: string;
  tabindex?: number;
  'response-field'?: boolean;
  'response-field-name'?: string;
  size?: 'normal' | 'compact';
  retry?: 'auto' | 'never';
  'retry-interval'?: number;
  'refresh-expired'?: 'auto' | 'manual' | 'never';
  appearance?: 'always' | 'execute' | 'interaction-only';
}

interface CloudflareTurnstileProps {
  siteKey: string;
  onVerify?: (token: string) => void;
  onError?: (error: string) => void;
  onExpire?: () => void;
  onTimeout?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  className?: string;
}

export default function CloudflareTurnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  onTimeout,
  theme = 'auto',
  size = 'normal',
  className = '',
}: CloudflareTurnstileProps) {
  const turnstileRef = useRef<HTMLDivElement & { reset?: () => void; getResponse?: () => string }>(null);
  const [widgetId, setWidgetId] = useState<string | null>(null);

  useEffect(() => {
    const checkTurnstileLoaded = () => {
      if (window.turnstile && turnstileRef.current && !widgetId) {
        const id = window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            onVerify?.(token);
          },
          'error-callback': (error: string) => {
            onError?.(error);
          },
          'expired-callback': () => {
            onExpire?.();
          },
          'timeout-callback': () => {
            onTimeout?.();
          },
          theme,
          size,
        });
        setWidgetId(id);
      }
    };

    // Check if Turnstile is already loaded
    if (window.turnstile) {
      checkTurnstileLoaded();
    } else {
      // Wait for Turnstile script to load
      const interval = setInterval(() => {
        if (window.turnstile) {
          checkTurnstileLoaded();
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [siteKey, onVerify, onError, onExpire, onTimeout, theme, size, widgetId]);

  const reset = useCallback(() => {
    if (window.turnstile && widgetId) {
      window.turnstile.reset(widgetId);
    }
  }, [widgetId]);

  const getResponse = useCallback(() => {
    if (window.turnstile && widgetId) {
      return window.turnstile.getResponse(widgetId);
    }
    return '';
  }, [widgetId]);

  // Expose methods through ref if needed
  useEffect(() => {
    if (turnstileRef.current) {
      turnstileRef.current.reset = reset;
      turnstileRef.current.getResponse = getResponse;
    }
  }, [widgetId, reset, getResponse]);

  return (
    <div 
      ref={turnstileRef} 
      className={`turnstile-widget ${className}`}
      style={{ minHeight: size === 'compact' ? '65px' : '65px' }}
    />
  );
}

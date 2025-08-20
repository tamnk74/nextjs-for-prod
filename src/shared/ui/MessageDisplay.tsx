'use client';

import { useRedirectMessages } from '@/shared/hooks/useRedirectMessages';
import { useEffect, useState } from 'react';

interface MessageDisplayProps {
  /** Duration in milliseconds before auto-dismissing (0 = no auto-dismiss) */
  autoDismiss?: number;
  /** Custom className for styling */
  className?: string;
  /** Show close button */
  showCloseButton?: boolean;
}

/**
 * Component to display redirect messages from URL parameters
 */
export function MessageDisplay({ 
  autoDismiss = 5000, 
  className = '',
  showCloseButton = true 
}: MessageDisplayProps) {
  const messages = useRedirectMessages();
  const [visibleMessages, setVisibleMessages] = useState(messages);

  useEffect(() => {
    setVisibleMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (autoDismiss > 0) {
      const timer = setTimeout(() => {
        setVisibleMessages({ error: null, success: null, info: null, warning: null });
      }, autoDismiss);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, messages]);

  const dismissMessage = (type: keyof typeof messages) => {
    setVisibleMessages(prev => ({ ...prev, [type]: null }));
  };

  const messageTypeStyles = {
    error: 'bg-red-50 border-red-200 text-red-700',
    success: 'bg-green-50 border-green-200 text-green-700',
    info: 'bg-blue-50 border-blue-200 text-blue-700',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  };

  const messageTypeIcons = {
    error: '❌',
    success: '✅',
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {Object.entries(visibleMessages).map(([type, message]) => {
        if (!message) return null;

        const messageType = type as keyof typeof messages;
        const baseStyles = 'p-4 border rounded-lg flex items-start justify-between';
        const typeStyles = messageTypeStyles[messageType];

        return (
          <div key={type} className={`${baseStyles} ${typeStyles}`}>
            <div className="flex items-start space-x-2">
              <span className="text-lg">{messageTypeIcons[messageType]}</span>
              <p className="text-sm font-medium">{message}</p>
            </div>
            
            {showCloseButton && (
              <button
                onClick={() => dismissMessage(messageType)}
                className="ml-4 text-current hover:opacity-70 transition-opacity"
                aria-label="Dismiss message"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

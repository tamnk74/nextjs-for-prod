'use client';

import { useState, useCallback } from 'react';

interface TurnstileValidationResult {
  success: boolean;
  error?: string;
  errorCodes?: string[];
}

interface UseTurnstileFormOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  resetOnError?: boolean;
}

export function useTurnstileForm(options: UseTurnstileFormOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileError, setTurnstileError] = useState<string>('');
  const [turnstileWidgetRef, setTurnstileWidgetRef] = useState<
    (HTMLDivElement & { reset?: () => void }) | null
  >(null);

  // Handle Turnstile verification
  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setTurnstileError('');
    console.log('Turnstile verified successfully');
  }, []);

  // Handle Turnstile errors
  const handleTurnstileError = useCallback(
    (error: string) => {
      setTurnstileToken('');
      setTurnstileError(`Verification failed: ${error}`);
      options.onError?.(error);
    },
    [options],
  );

  // Handle Turnstile expiration
  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken('');
    setTurnstileError('Verification expired. Please try again.');
  }, []);

  // Handle Turnstile timeout
  const handleTurnstileTimeout = useCallback(() => {
    setTurnstileToken('');
    setTurnstileError('Verification timed out. Please try again.');
  }, []);

  // Reset Turnstile widget
  const resetTurnstile = useCallback(() => {
    if (turnstileWidgetRef?.reset) {
      turnstileWidgetRef.reset();
    }
    setTurnstileToken('');
    setTurnstileError('');
  }, [turnstileWidgetRef]);

  // Validate and submit form with Turnstile
  const submitWithTurnstile = useCallback(
    async <T>(
      formData: T,
      submitFunction: (data: T, token: string) => Promise<void>,
    ): Promise<boolean> => {
      // Check if Turnstile verification is complete
      if (!turnstileToken) {
        setTurnstileError('Please complete the verification challenge');
        return false;
      }

      setIsSubmitting(true);
      setTurnstileError('');

      try {
        // First verify the token with our API
        const verificationResponse = await fetch('/api/verify-turnstile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: turnstileToken }),
        });

        const verificationResult: TurnstileValidationResult =
          await verificationResponse.json();

        if (!verificationResult.success) {
          throw new Error(verificationResult.error || 'Verification failed');
        }

        // If verification passes, proceed with form submission
        await submitFunction(formData, turnstileToken);

        // Success! Reset form state
        setTurnstileToken('');
        options.onSuccess?.();

        return true;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Submission failed';
        setTurnstileError(errorMessage);
        options.onError?.(errorMessage);

        // Reset Turnstile on error (user needs to verify again)
        if (options.resetOnError !== false) {
          resetTurnstile();
        }

        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [turnstileToken, options, resetTurnstile],
  );

  // Check if form is ready to submit
  const canSubmit = turnstileToken && !isSubmitting;

  return {
    // State
    isSubmitting,
    turnstileToken,
    turnstileError,
    canSubmit,

    // Handlers for Turnstile component
    handleTurnstileVerify,
    handleTurnstileError,
    handleTurnstileExpire,
    handleTurnstileTimeout,
    setTurnstileWidgetRef,

    // Actions
    submitWithTurnstile,
    resetTurnstile,
  };
}

// Example usage:
/*
export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const {
    isSubmitting,
    turnstileError,
    canSubmit,
    handleTurnstileVerify,
    handleTurnstileError,
    handleTurnstileExpire,
    handleTurnstileTimeout,
    setTurnstileWidgetRef,
    submitWithTurnstile,
  } = useTurnstileForm({
    onSuccess: () => {
      setEmail('');
      setMessage('');
      alert('Message sent successfully!');
    },
    onError: (error) => {
      console.error('Form error:', error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await submitWithTurnstile(
      { email, message },
      async (formData, token) => {
        // Your actual form submission logic here
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, turnstileToken: token }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      
      <CloudflareTurnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={handleTurnstileVerify}
        onError={handleTurnstileError}
        onExpire={handleTurnstileExpire}
        onTimeout={handleTurnstileTimeout}
        ref={setTurnstileWidgetRef}
      />
      
      {turnstileError && (
        <div className="error">{turnstileError}</div>
      )}
      
      <button type="submit" disabled={!canSubmit}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
*/

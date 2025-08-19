// Turnstile token verification API route
// IMPORTANT: Each token can only be used ONCE and expires in ~5 minutes

import { NextRequest, NextResponse } from 'next/server';

// Interface for Cloudflare's verification response
interface TurnstileVerificationResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    // Validate input
    if (!token || typeof token !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing token' },
        { status: 400 },
      );
    }

    // Check if secret key is configured
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      console.error('TURNSTILE_SECRET_KEY not configured');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 },
      );
    }

    // Get client IP for additional security (optional but recommended)
    const clientIP =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    // Verify token with Cloudflare (one-time use!)
    const verificationResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
          remoteip: clientIP, // Include IP for better security
        }),
      },
    );

    if (!verificationResponse.ok) {
      throw new Error(`Cloudflare API error: ${verificationResponse.status}`);
    }

    const result: TurnstileVerificationResponse =
      await verificationResponse.json();

    if (result.success) {
      // Token is valid - log success for monitoring
      console.log('Turnstile verification successful', {
        hostname: result.hostname,
        challenge_ts: result.challenge_ts,
        clientIP: clientIP.slice(0, 8) + '***', // Log partial IP for privacy
      });

      return NextResponse.json({
        success: true,
        message: 'Verification successful',
        // Don't return sensitive data to client
      });
    } else {
      // Token verification failed - log error codes
      console.warn('Turnstile verification failed', {
        errorCodes: result['error-codes'],
        clientIP: clientIP.slice(0, 8) + '***',
      });

      // Map common error codes to user-friendly messages
      const errorMessages = {
        'missing-input-secret': 'Server configuration error',
        'invalid-input-secret': 'Server configuration error',
        'missing-input-response': 'No verification token provided',
        'invalid-input-response': 'Invalid verification token',
        'bad-request': 'Invalid verification request',
        'timeout-or-duplicate': 'Token expired or already used',
      };

      const errorCodes = result['error-codes'] || [];
      const userMessage =
        errorCodes.length > 0 &&
        errorMessages[errorCodes[0] as keyof typeof errorMessages]
          ? errorMessages[errorCodes[0] as keyof typeof errorMessages]
          : 'Verification failed';

      return NextResponse.json(
        {
          success: false,
          error: userMessage,
          // Include error codes for debugging (remove in production)
          ...(process.env.NODE_ENV === 'development' && { errorCodes }),
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Verification service temporarily unavailable',
        // Include error details in development only
        ...(process.env.NODE_ENV === 'development' && {
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
      },
      { status: 500 },
    );
  }
}

// Example usage in your form submission handler:
/*
const handleSubmit = async (formData: any, turnstileToken: string) => {
  // First verify the Turnstile token
  const verificationResponse = await fetch('/api/verify-turnstile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: turnstileToken }),
  });

  const verificationResult = await verificationResponse.json();

  if (!verificationResult.success) {
    throw new Error('Captcha verification failed');
  }

  // If verification passes, proceed with your form logic
  // ... handle form submission
};
*/

// Example API route for verifying Turnstile token
// Create this file at: src/app/api/verify-turnstile/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'No token provided' },
        { status: 400 }
      );
    }

    // Verify the token with Cloudflare
    const verificationResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY || '',
          response: token,
          // Optional: Include the user's IP address
          // remoteip: request.ip || '',
        }),
      }
    );

    const verificationResult = await verificationResponse.json();

    if (verificationResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Verification successful',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Verification failed',
          errorCodes: verificationResult['error-codes'],
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
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

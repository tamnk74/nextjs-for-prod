// Protected search API that requires Turnstile verification for each call
import { NextRequest, NextResponse } from 'next/server';

interface SearchRequest {
  query: string;
  turnstileToken: string;
}

// Mock search function - replace with your actual search logic
async function performSearch(query: string): Promise<unknown[]> {
  // Simulate search delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Mock search results
  return [
    {
      id: 1,
      title: `Result 1 for "${query}"`,
      description: 'First search result',
    },
    {
      id: 2,
      title: `Result 2 for "${query}"`,
      description: 'Second search result',
    },
    {
      id: 3,
      title: `Result 3 for "${query}"`,
      description: 'Third search result',
    },
  ].filter(
    result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()),
  );
}

export async function POST(request: NextRequest) {
  try {
    const body: SearchRequest = await request.json();
    const { query, turnstileToken } = body;

    // Validate input
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Search query is required' },
        { status: 400 },
      );
    }

    if (!turnstileToken || typeof turnstileToken !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Verification token is required' },
        { status: 400 },
      );
    }

    // 1. FIRST: Verify Turnstile token
    const verificationResponse = await fetch('/api/verify-turnstile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Forward relevant headers
        'x-forwarded-for': request.headers.get('x-forwarded-for') || '',
        'x-real-ip': request.headers.get('x-real-ip') || '',
      },
      body: JSON.stringify({ token: turnstileToken }),
    });

    if (!verificationResponse.ok) {
      const verificationError = await verificationResponse.json();
      return NextResponse.json(
        {
          success: false,
          error: 'Verification failed',
          details: verificationError.error,
        },
        { status: 400 },
      );
    }

    const verificationResult = await verificationResponse.json();
    if (!verificationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Human verification required',
          details: verificationResult.error,
        },
        { status: 400 },
      );
    }

    // 2. AFTER verification passes: Perform actual search
    try {
      const searchResults = await performSearch(query.trim());

      // Log successful search (for monitoring)
      console.log('Search performed', {
        query: query.slice(0, 50), // Log partial query for privacy
        resultCount: searchResults.length,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        data: searchResults,
        query: query.trim(),
        count: searchResults.length,
      });
    } catch (searchError) {
      console.error('Search execution error:', searchError);
      return NextResponse.json(
        {
          success: false,
          error: 'Search service temporarily unavailable',
        },
        { status: 503 },
      );
    }
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && {
          details: error instanceof Error ? error.message : 'Unknown error',
        }),
      },
      { status: 500 },
    );
  }
}

// Example of different search endpoints with different Turnstile requirements:

// GET /api/search/public - No Turnstile required (for basic searches)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json(
      { success: false, error: 'Query parameter "q" is required' },
      { status: 400 },
    );
  }

  // Perform limited public search without Turnstile
  const results = await performSearch(query);

  return NextResponse.json({
    success: true,
    data: results.slice(0, 3), // Limit public results
    query,
    count: Math.min(results.length, 3),
    message: 'Limited results. Use protected search for full results.',
  });
}

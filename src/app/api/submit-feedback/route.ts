import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface FeedbackData {
  email: string;
  feedback: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: FeedbackData = await request.json();

    // Validate required fields
    if (!body.email || !body.feedback) {
      return NextResponse.json(
        { error: 'Email and feedback are required' },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 },
      );
    }

    // Validate feedback length
    if (body.feedback.length < 10) {
      return NextResponse.json(
        { error: 'Feedback must be at least 10 characters long' },
        { status: 400 },
      );
    }

    if (body.feedback.length > 5000) {
      return NextResponse.json(
        { error: 'Feedback must be less than 5000 characters long' },
        { status: 400 },
      );
    }

    // Get client IP for logging
    const clientIP =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Create feedback record
    const feedbackRecord = {
      email: body.email.toLowerCase().trim(),
      feedback: body.feedback.trim(),
      timestamp: body.timestamp || new Date().toISOString(),
      ip: clientIP,
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // For now, just log the feedback to console
    // In production, you would save this to a database
    console.log('📝 New Feedback Received:', {
      email: feedbackRecord.email,
      feedbackLength: feedbackRecord.feedback.length,
      timestamp: feedbackRecord.timestamp,
      ip: feedbackRecord.ip,
    });

    // You can integrate with your database here
    // Example integrations:
    // 1. Supabase: await supabase.from('feedback').insert(feedbackRecord)
    // 2. MongoDB: await db.collection('feedback').insertOne(feedbackRecord)
    // 3. PostgreSQL: await pool.query('INSERT INTO feedback...', [feedbackRecord])
    // 4. Send email notification to admin
    // 5. Store in a file system (for development)

    // For development, save to a simple JSON file
    if (process.env.NODE_ENV === 'development') {
      try {
        const feedbackDir = path.join(process.cwd(), 'feedback-submissions');
        if (!fs.existsSync(feedbackDir)) {
          fs.mkdirSync(feedbackDir, { recursive: true });
        }

        const fileName = `feedback-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.json`;
        const filePath = path.join(feedbackDir, fileName);

        fs.writeFileSync(filePath, JSON.stringify(feedbackRecord, null, 2));
        console.log(`💾 Feedback saved to: ${filePath}`);
      } catch (fileError) {
        console.error('Failed to save feedback to file:', fileError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your feedback! We appreciate your input.',
        id: `fb_${Date.now()}`,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing feedback:', error);

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 },
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit feedback.' },
    { status: 405 },
  );
}

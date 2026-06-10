import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Get the Google Apps Script webhook URL from environment
    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK;

    if (!webhookUrl) {
      console.error('[v0] Google Sheets webhook URL not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    // Send to Google Sheets via Apps Script
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status ${response.status}`);
    }

    return NextResponse.json(
      { success: true, message: 'Email saved successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Email API error:', error);
    return NextResponse.json(
      { error: 'Failed to save email. Please try again.' },
      { status: 500 }
    );
  }
}

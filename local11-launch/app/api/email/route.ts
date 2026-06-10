import { NextRequest, NextResponse } from 'next/server';
import { incrementWaitlistCount } from '@/lib/waitlist-count';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

    if (!formId) {
      return NextResponse.json(
        { error: 'Email signup is not configured yet.' },
        { status: 500 }
      );
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || 'Failed to join waitlist' },
        { status: response.status }
      );
    }

    const count = await incrementWaitlistCount();

    return NextResponse.json({ success: true, count });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

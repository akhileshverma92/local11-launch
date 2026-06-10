import { NextResponse } from 'next/server';
import { getWaitlistCount } from '@/lib/waitlist-count';

export async function GET() {
  const count = await getWaitlistCount();
  return NextResponse.json({ count });
}

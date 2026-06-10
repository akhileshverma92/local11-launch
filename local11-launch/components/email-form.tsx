'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const avatars = [
  { initials: 'AK', className: 'bg-orange-500' },
  { initials: 'RS', className: 'bg-emerald-600' },
  { initials: 'VM', className: 'bg-sky-500' },
];

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [count, setCount] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/waitlist-count')
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number') setCount(data.count);
      })
      .catch(() => setCount(136));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setStatus('success');
      setMessage("You're on the list. We'll notify you when LOCAL11 launches.");
      setEmail('');
      if (typeof data.count === 'number') setCount(data.count);
      else setCount((prev) => (prev ?? 136) + 1);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div id="early-access" className="mx-auto w-full max-w-xl text-center">
      <form onSubmit={handleSubmit} className="relative mb-5">
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading' || status === 'success'}
          className="h-14 w-full rounded-full border border-border bg-background pl-6 pr-[8.5rem] text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-foreground/10 disabled:cursor-not-allowed disabled:opacity-60 sm:h-[3.75rem] sm:pr-40"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="absolute bottom-1.5 right-1.5 top-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-all hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-7 sm:text-base"
        >
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join waitlist'}
        </button>
      </form>

      {message && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-4 text-center text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {message}
        </motion.p>
      )}

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center pl-2.5">
          {avatars.map((avatar, i) => (
            <div
              key={avatar.initials}
              className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-background text-[11px] font-semibold text-white ${avatar.className}`}
              style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 3 - i }}
            >
              {avatar.initials}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          Join{' '}
          <span className="font-medium tabular-nums text-foreground">+{count ?? '...'}</span>{' '}
          others on the waitlist
        </p>

        <a
          href="https://t.co/FOKsUJe57J"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
        >
          <Users className="h-4 w-4" strokeWidth={2.25} />
          Join community
        </a>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
        throw new Error(data.error || 'Failed to save email');
      }

      setStatus('success');
      setMessage('🎉 You&apos;re on the list. We&apos;ll let you know when LOCAL11 launches.');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="early-access"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get Early Access
          </h2>
          <p className="text-lg text-muted-foreground">
            Be among the first players to access LOCAL11 when we launch.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-6 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining...' : 'Join Now'}
          </button>
        </motion.form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center text-sm ${
              status === 'success'
                ? 'text-green-500'
                : status === 'error'
                  ? 'text-red-500'
                  : 'text-muted-foreground'
            }`}
          >
            {message}
          </motion.p>
        )}
      </div>
    </section>
  );
}

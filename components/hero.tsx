'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-2"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-6">
            🏏 Launching Soon
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find Local{' '}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Cricket
            </span>
            . Play More Often.
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover nearby matches, connect with local players, and never miss a game again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#early-access"
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Notified
          </a>
          <a
            href="https://t.co/FOKsUJe57J"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-foreground/10 text-foreground border border-border rounded-lg font-semibold hover:bg-foreground/20 transition-colors"
          >
            Join Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}

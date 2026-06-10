'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-8"
        >
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              LOCAL<span className="text-orange-500">11</span>
            </h3>
            <p className="text-muted-foreground mt-2">The future of gaming</p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-muted-foreground">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-orange-500/50 transition-all"
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-orange-500/50 transition-all"
              aria-label="Discord"
            >
              D
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm"
        >
          <p>&copy; 2026 LOCAL11. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

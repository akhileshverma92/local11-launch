'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let currentCount = 0;
    const target = 327;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-b border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold">
              Our Community
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
            <span className="text-orange-500">{count}+</span> Players Ready
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Join thousands of gamers who are excited about the future of LOCAL11
          </p>
        </motion.div>
      </div>
    </section>
  );
}

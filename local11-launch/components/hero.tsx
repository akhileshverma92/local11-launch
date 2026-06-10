'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { EmailForm } from '@/components/email-form';

export function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-14">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src="/image.png"
            alt="LOCAL11"
            width={160}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-5 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Get early access
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          We&apos;re getting close. Sign up to get early access to LOCAL11 and start finding
          cricket matches near you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full"
        >
          <EmailForm />
        </motion.div>
      </div>
    </section>
  );
}

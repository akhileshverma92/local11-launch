'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: 'Is LOCAL11 free to use?',
    answer:
      'Yes. Creating an account, finding matches, and connecting with players will be free during launch.',
  },
  {
    question: 'What is LOCAL11?',
    answer:
      'LOCAL11 helps cricket players discover nearby matches, find local players, and connect with their cricket community.',
  },
  {
    question: 'When will LOCAL11 launch?',
    answer:
      "We're currently preparing for launch. Join the waitlist or community to be the first to know when we go live.",
  },
  {
    question: 'Which cities will be supported?',
    answer:
      'LOCAL11 is being built for cricket players across India, starting with local communities and expanding rapidly.',
  },
  {
    question: 'How can I stay updated?',
    answer:
      'Join our WhatsApp community or leave your email to receive launch announcements, early access invitations, and product updates.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="border-t border-border/40 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Everything you need to know about LOCAL11 before launch.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-muted/60 border border-border/60 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground text-base sm:text-lg pr-2">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center">
                    {isOpen ? (
                      <X className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1"
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

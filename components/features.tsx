'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Play Together',
    description: 'Challenge your friends and connect with gamers worldwide in real-time tournaments and matches.',
    icon: '🎮',
  },
  {
    title: 'Win Rewards',
    description: 'Compete for prizes, climb the leaderboards, and unlock exclusive rewards as you play.',
    icon: '🏆',
  },
  {
    title: 'Celebrate Together',
    description: 'Share victories with your community and build lasting friendships through gaming.',
    icon: '🎉',
  },
];

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose LOCAL11?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience gaming like never before with features designed for everyone
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

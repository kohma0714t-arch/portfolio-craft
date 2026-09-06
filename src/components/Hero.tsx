import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const heroChars = ['理', '想', 'を', '形', 'に'];

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-20 pt-40">
        <div className="max-w-3xl">
          {/* Main Title */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-8 font-display flex gap-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroChars.map((char, idx) => (
              <motion.span key={idx} variants={charVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="mb-8 max-w-lg space-y-3"
            custom={1.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              AIを最高速度のエンジンに、
              <br />
              デザインとコードの美学で、
              <br />
              価値あるプロダクトを創り出す。
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            custom={1.5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#works"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-semibold text-sm hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>制作実績を見る</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>お問い合わせ</span>
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Handwritten overlay text */}
        <motion.p
          className="absolute right-8 bottom-24 text-4xl sm:text-5xl md:text-6xl font-handwritten text-white/20 -rotate-6 select-none pointer-events-none hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          shape your
          <br />
          ideal.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 right-6 z-10 text-xs font-mono text-white/40 tracking-widest uppercase flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/30"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
};

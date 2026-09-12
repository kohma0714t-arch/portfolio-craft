import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
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

export const Hero: React.FC = () => {
  const headline = '学生エンジニア、';
  const subline = 'つくるを楽しむ。';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* Background texture text */}
      <div className="text-texture text-[clamp(120px,20vw,280px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        STUDENT CRAFT
      </div>

      {/* Geometric decorations */}
      <motion.div
        className="absolute top-20 right-12 w-20 h-20 border-4 border-pop-blue opacity-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 45 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 bg-pop-orange opacity-15 rounded-full"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 left-1/4 w-6 h-6 bg-pop-mint opacity-25"
        animate={{ rotate: [0, 180] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Section label */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="text-xs font-mono tracking-[0.2em] text-pop-blue font-semibold">01</span>
            <span className="w-8 h-px bg-pop-blue" />
            <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Hello</span>
          </motion.div>

          {/* Main Title Line 1 */}
          <motion.h1
            className="text-[clamp(36px,7vw,72px)] font-display font-extrabold tracking-tight text-ink leading-[1.1] mb-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headline.split('').map((char, idx) => (
              <motion.span key={idx} variants={charVariants} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Main Title Line 2 */}
          <motion.h1
            className="text-[clamp(36px,7vw,72px)] font-display font-extrabold tracking-tight leading-[1.1] mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {subline.split('').map((char, idx) => (
              <motion.span
                key={idx}
                variants={charVariants}
                className="inline-block"
                style={{ color: idx < 4 ? '#F97316' : '#1A1A2E' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="mb-10 max-w-lg"
            custom={1.0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              情報工学を学ぶ大学生。
              <br />
              React Native / TypeScript を軸に、
              <br />
              AIを駆使したモダンな開発を実践中。
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            custom={1.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#works"
              className="btn-primary group"
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
              className="btn-secondary group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>お問い合わせ</span>
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 text-xs font-mono text-ink-muted tracking-widest uppercase flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        <span>Scroll</span>
        <motion.div
          className="w-px h-8 bg-ink/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
};

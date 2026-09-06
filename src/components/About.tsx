import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Paintbrush, Zap } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const features = [
  {
    icon: Monitor,
    title: 'モダン技術への探究心',
    desc: '最新技術をキャッチアップし、最善の選択肢で設計します。',
  },
  {
    icon: Paintbrush,
    title: '細部へのこだわり',
    desc: 'UI/UXの微細な部分まで妥協しない、心地よい体験を設計します。',
  },
  {
    icon: Zap,
    title: 'スピード × 品質',
    desc: 'AIをコパイロットに、爆速で高品質なプロダクトを生み出します。',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-ink-muted uppercase mb-4">
            <span>02</span>
            <span className="w-8 h-px bg-ink-faint" />
            <span>About</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left: Text */}
          <motion.div className="lg:col-span-6 space-y-6" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight font-display leading-tight">
              現役情報工学の大学生
              <br />
              <span className="text-ink-muted">×</span>
              <br />
              フロントエンドエンジニア / フリーランス
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-relaxed">
              <p>
                React Native / Expo / TypeScript を軸に、
                <br />
                モバイル・Webのアプリ開発を個人で行っています。
              </p>
              <p>
                AI-Native な開発ワークフローを駆使し、
                <br />
                圧倒的なスピードで高品質なプロダクトを提供します。
              </p>
            </div>

            <motion.a
              href="#works"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-ink-secondary transition-colors group"
              whileHover={{ x: 4 }}
            >
              <span>詳しく見る</span>
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.a>
          </motion.div>

          {/* Right: Image */}
          <motion.div className="lg:col-span-6" variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-canvas-muted">
              <img
                src="/images/MyImage.png"
                alt="koma"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="card-dark rounded-2xl p-6 flex flex-col items-start gap-3"
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
            >
              <f.icon size={20} className="text-white/60" />
              <h3 className="text-sm font-semibold text-white">{f.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

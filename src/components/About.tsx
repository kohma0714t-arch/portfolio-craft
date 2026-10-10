import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

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

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="text-texture text-[clamp(100px,14vw,200px)] top-8 right-[-5%] opacity-[0.03] -rotate-12">
        ABOUT
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-blue font-semibold">02</span>
            <span className="w-8 h-px bg-pop-blue" />
            <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight leading-tight">
            自分のことについて
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left: Image (neo-brutal frame) */}
          <motion.div className="lg:col-span-5" variants={itemVariants}>
            <div className="card-brutal p-3">
              <div className="overflow-hidden aspect-[4/3] bg-cream">
                <img
                  src={getAssetUrl('/images/MyImage.png')}
                  alt="koma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div className="lg:col-span-7 space-y-6" variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink tracking-tight leading-tight">
              現役情報工学の大学生
              <br />
              <span className="text-pop-orange">×</span>
              <br />
              フロントエンドエンジニア
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-[1.8]">
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

            {/* Stats row */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-pop-blue">3+</p>
                <p className="text-xs text-ink-muted mt-1">リリースアプリ</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-pop-blue">2026</p>
                <p className="text-xs text-ink-muted mt-1">活動開始</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-pop-orange">🏆</p>
                <p className="text-xs text-ink-muted mt-1">ハッカソン受賞</p>
              </div>
            </div>

            {/* Link to Detail Page */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 bg-white text-ink border-2 border-ink shadow-[3px_3px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <span>詳しいプロフィール・経歴を見る</span>
                <ArrowRight size={16} className="text-pop-blue group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

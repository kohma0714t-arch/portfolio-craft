import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const photos = [
  { src: '/images/hackathon_pic1.jpg', alt: 'ハッカソン優秀賞受賞の様子' },
  { src: '/images/hackathon_pic2.jpg', alt: '優秀賞 賞状' },
];

export const Achievements: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => setCurrentPhoto((p) => (p + 1) % photos.length);
  const prevPhoto = () => setCurrentPhoto((p) => (p - 1 + photos.length) % photos.length);

  return (
    <section id="achievements" className="py-24 sm:py-32 relative overflow-hidden bg-cream">
      {/* Background texture */}
      <div className="text-texture text-[clamp(80px,12vw,180px)] top-12 left-[-3%] opacity-[0.03]">
        ACHIEVEMENT
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
            <span className="text-xs font-mono tracking-[0.2em] text-pop-orange font-semibold">05</span>
            <span className="w-8 h-px bg-pop-orange" />
            <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight leading-tight">
            活動実績
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Photo gallery */}
          <motion.div
            className="lg:col-span-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="card-brutal p-3 relative">
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[4/3] bg-ink">
                <motion.img
                  key={currentPhoto}
                  src={getAssetUrl(photos[currentPhoto].src)}
                  alt={photos[currentPhoto].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Photo navigation */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button
                    onClick={prevPhoto}
                    className="w-8 h-8 bg-white/90 border-2 border-ink flex items-center justify-center hover:bg-pop-orange hover:text-white hover:border-pop-orange transition-colors"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="w-8 h-8 bg-white/90 border-2 border-ink flex items-center justify-center hover:bg-pop-orange hover:text-white hover:border-pop-orange transition-colors"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>

                {/* Photo dots */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPhoto(idx)}
                      className={`w-2 h-2 transition-all ${
                        currentPhoto === idx
                          ? 'bg-pop-orange w-6'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Achievement details */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {/* Award stamp badge */}
            <div className="flex items-start gap-4">
              <div className="stamp-badge bg-pop-orange text-white border-pop-orange">
                優秀賞
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink leading-tight">
                  生成AI Procthon 2026
                </h3>
                <p className="text-sm text-ink-muted mt-1">セリオ株式会社 主催</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-ink-secondary leading-[1.8]">
              岡山の社会課題を生成AIで解決するハッカソン「生成AI Procthon 2026」に参加し、
              チーム「岡山ゴミ箱探検隊」として優秀賞を受賞しました。
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border-2 border-ink p-4">
                <Calendar size={16} className="text-pop-blue mb-2" />
                <p className="text-[10px] font-mono text-ink-muted uppercase mb-1">期間</p>
                <p className="text-xs font-bold text-ink">2026/06/13 〜<br />2026/07/18</p>
              </div>
              <div className="border-2 border-ink p-4">
                <Users size={16} className="text-pop-orange mb-2" />
                <p className="text-[10px] font-mono text-ink-muted uppercase mb-1">チーム名</p>
                <p className="text-xs font-bold text-ink">岡山ゴミ箱<br />探検隊</p>
              </div>
              <div className="border-2 border-ink p-4">
                <Trophy size={16} className="text-pop-mint mb-2" />
                <p className="text-[10px] font-mono text-ink-muted uppercase mb-1">結果</p>
                <p className="text-xs font-bold text-pop-orange">優秀賞 🏆</p>
              </div>
            </div>

            {/* Theme description */}
            <div className="bg-ink p-5 text-white">
              <h4 className="text-xs font-mono tracking-wider uppercase text-pop-mint mb-2 font-semibold">テーマ</h4>
              <p className="text-sm leading-relaxed text-white/80">
                岡山の社会課題 × 生成AI — 地域の課題を、AIの力で解決するプロダクトを約1ヶ月で開発。
                生成AIを効果的に活用し、創意工夫をもって課題解決に取り組みました。
              </p>
            </div>

            {/* Links & Detail CTA */}
            <div className="space-y-4 pt-2">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 bg-pop-orange text-white border-2 border-ink shadow-[3px_3px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              >
                <span>ハッカソン詳細レポートを見る</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.serio.inc/topics/2026/04/22/20260422/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3 gap-1.5"
                >
                  <span>開催概要</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href="https://www.serio.inc/topics/2026/07/28/20260728/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3 gap-1.5"
                >
                  <span>主催公式レポート</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

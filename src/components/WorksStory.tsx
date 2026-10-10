import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { worksData } from '../data/worksData';

export const WorksStory: React.FC = () => {
  const getAccentBorder = (color: string) => {
    switch (color) {
      case 'pop-blue': return 'border-pop-blue';
      case 'pop-orange': return 'border-pop-orange';
      case 'pop-mint': return 'border-pop-mint';
      default: return 'border-ink';
    }
  };

  const getAccentShadow = (color: string) => {
    switch (color) {
      case 'pop-blue': return 'shadow-[6px_6px_0_0_#3B82F6]';
      case 'pop-orange': return 'shadow-[6px_6px_0_0_#F97316]';
      case 'pop-mint': return 'shadow-[6px_6px_0_0_#34D399]';
      default: return 'shadow-brutal';
    }
  };

  const getAccentShadowHover = (color: string) => {
    switch (color) {
      case 'pop-blue': return 'hover:shadow-[3px_3px_0_0_#3B82F6]';
      case 'pop-orange': return 'hover:shadow-[3px_3px_0_0_#F97316]';
      case 'pop-mint': return 'hover:shadow-[3px_3px_0_0_#34D399]';
      default: return 'hover:shadow-brutal-hover';
    }
  };

  const getAccentBg = (color: string) => {
    switch (color) {
      case 'pop-blue': return 'bg-pop-blue';
      case 'pop-orange': return 'bg-pop-orange';
      case 'pop-mint': return 'bg-pop-mint';
      default: return 'bg-ink';
    }
  };

  return (
    <section id="works" className="py-24 sm:py-32 relative overflow-hidden bg-cream">
      {/* Background texture */}
      <div className="text-texture text-[clamp(100px,14vw,200px)] bottom-8 right-[-5%] opacity-[0.03]">
        WORKS
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono tracking-[0.2em] text-pop-blue font-semibold">04</span>
              <span className="w-8 h-px bg-pop-blue" />
              <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight leading-tight">
              制作実績
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-pop-blue transition-colors group font-mono"
            >
              <span>VIEW ALL WORKS</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={`/works/${work.id}`}
                className={`block bg-card-bg border-2 ${getAccentBorder(work.accentColor)} ${getAccentShadow(work.accentColor)} transition-all duration-200 ${getAccentShadowHover(work.accentColor)} hover:translate-x-[3px] hover:translate-y-[3px] group`}
              >
                {/* Card Thumbnail */}
                <div className="relative bg-ink aspect-[4/3] overflow-hidden flex items-center justify-center">
                  {work.iconImage ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1b1e2e] to-[#0d0f18] p-6">
                      <img
                        src={work.iconImage}
                        alt={work.title}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
                      <div className="text-5xl font-display font-extrabold text-white/15">
                        {work.projectNumber}
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {work.title}
                      </h3>
                      <p className="text-xs text-white/50">
                        {work.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Number badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 ${getAccentBg(work.accentColor)} text-white text-[10px] font-mono font-bold`}>
                    {work.projectNumber}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/10 backdrop-blur-sm text-[10px] font-mono text-white/70 uppercase">
                    {work.category}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink mb-1 font-display group-hover:text-pop-blue transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-ink-muted mb-3">{work.subtitle}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {work.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 border border-ink/15 text-ink-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center justify-between pt-3 border-t border-ink/10 text-xs font-bold text-ink group-hover:text-pop-blue transition-colors">
                    <span>詳細・解説を見る</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 bg-white text-ink border-2 border-ink shadow-[4px_4px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
          >
            <span>すべての制作実績と詳細を見る</span>
            <ArrowRight size={16} className="text-pop-blue group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

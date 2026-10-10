import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { worksData } from '../data/worksData';
import { Breadcrumb } from '../components/Breadcrumb';

export const WorksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'Mobile App', label: 'Mobile App' },
    { id: 'Web', label: 'Web' },
  ];

  const filteredWorks =
    selectedCategory === 'all'
      ? worksData
      : worksData.filter((w) => w.category === selectedCategory);

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

  const getAccentBg = (color: string) => {
    switch (color) {
      case 'pop-blue': return 'bg-pop-blue';
      case 'pop-orange': return 'bg-pop-orange';
      case 'pop-mint': return 'bg-pop-mint';
      default: return 'bg-ink';
    }
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Breadcrumb items={[{ label: 'WORKS' }]} />

      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-blue font-semibold">04</span>
            <span className="w-8 h-px bg-pop-blue" />
            <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Works Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mb-4">
            制作実績一覧
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
            身の回りの課題解決や知的好奇心を起点に、React Native / React / TypeScript で開発したモバイル・Webプロダクトです。カードをクリックして詳細・開発ストーリーをご覧いただけます。
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted mr-2">
              <Filter size={13} />
              <span>FILTER:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold transition-all border-2 border-ink ${
                  selectedCategory === cat.id
                    ? 'bg-ink text-white shadow-[2px_2px_0_0_#3B82F6]'
                    : 'bg-white text-ink hover:bg-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredWorks.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                to={`/works/${work.id}`}
                className={`block bg-card-bg border-2 ${getAccentBorder(work.accentColor)} ${getAccentShadow(work.accentColor)} transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] group`}
              >
                {/* Thumbnail Header */}
                <div className="relative bg-ink aspect-[4/3] overflow-hidden flex items-center justify-center">
                  {work.iconImage ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1b1e2e] to-[#0d0f18] p-6">
                      <img
                        src={work.iconImage}
                        alt={work.title}
                        className="w-24 h-24 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="text-5xl font-display font-extrabold text-white/15 mb-2">
                        {work.projectNumber}
                      </div>
                      <h3 className="text-lg font-bold text-white">{work.title}</h3>
                      <p className="text-xs text-white/50">{work.subtitle}</p>
                    </div>
                  )}

                  {/* Project Number badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 ${getAccentBg(work.accentColor)} text-white text-[10px] font-mono font-bold`}>
                    {work.projectNumber}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/10 backdrop-blur-sm text-[10px] font-mono text-white/70 uppercase">
                    {work.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink mb-1 font-display group-hover:text-pop-blue transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-ink-muted mb-3 font-medium">{work.subtitle}</p>
                  <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2 mb-4">
                    {work.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {work.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 border border-ink/15 text-ink-secondary bg-ink/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div className="flex items-center justify-between pt-3 border-t border-ink/10 text-xs font-bold text-ink group-hover:text-pop-blue transition-colors">
                    <span>詳細・開発ストーリーを見る</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA banner */}
        <div className="card-brutal bg-white p-8 sm:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-pop-orange uppercase tracking-wider block mb-1">
              HAVE AN IDEA?
            </span>
            <h3 className="text-2xl font-display font-bold text-ink">
              モバイル・Webアプリの制作相談やご質問
            </h3>
            <p className="text-sm text-ink-secondary mt-1">
              アイデアの具現化やUI/UX改善、共同開発などお気軽にご連絡ください。
            </p>
          </div>
          <Link to="/#contact" className="btn-primary flex-shrink-0">
            <span>お問い合わせはこちら</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
};

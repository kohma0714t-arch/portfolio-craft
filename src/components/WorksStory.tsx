import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface WorkItem {
  id: string;
  projectNumber: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  highlights: string[];
  challenges: string[];
  status: 'published' | 'coming-soon';
  iconImage?: string;
}

const works: WorkItem[] = [
  {
    id: 'studystack',
    projectNumber: '01',
    category: 'Mobile App',
    title: 'Study Stack',
    subtitle: '暗記学習・反復復習効率化アプリ',
    iconImage: getAssetUrl('/images/StudyStack_icon.png'),
    description:
      '試験対策や資格学習で生じる「すでに覚えた問題に時間を取られ、苦手な問題が後回しになる」という課題を解決するために制作したカード型学習アプリです。',
    techStack: ['React Native', 'Expo', 'TypeScript'],
    highlights: [
      '直感的に使えるUI/UXデザイン',
      'オフラインの対応でどこでも学習可能',
      '苦手カードを自動で優先表示する出題ロジック',
    ],
    challenges: [
      '正答率のリアルタイム集計ロジックの最適化',
      'AsyncStorageでの効率的なデータ永続化設計',
    ],
    status: 'published',
  },
  {
    id: 'unitime',
    projectNumber: '02',
    category: 'Mobile App',
    title: 'UniTime',
    subtitle: '大学生向け時間割・タスク統合管理',
    iconImage: getAssetUrl('/images/UniTime_icon.png'),
    description:
      '大学の講義棟や教室番号、課題の締切日時は分散しがちです。「アプリを開いた瞬間に、今日これから行くべき教室がひと目でわかる」ことを最優先に設計しました。',
    techStack: ['React Native', 'Expo', 'TypeScript'],
    highlights: [
      '文字のコントラストと余白を徹底的に調整',
      '受講スケジュールとレポート締切の連動表示',
    ],
    challenges: [
      'Human Interface Guidelines 準拠のデザイン設計',
      '講義データの効率的なローカルストレージ管理',
    ],
    status: 'published',
  },
  {
    id: 'portfolio',
    projectNumber: '03',
    category: 'Web',
    title: 'Portfolio Site',
    subtitle: 'このポートフォリオサイト',
    description:
      'React + TypeScript + Framer Motion で制作したポートフォリオサイト。AI感を排除し、人間が磨き上げたような手触り感のあるデザインを追求しました。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'AI-Nativeな開発プロセスの可視化',
      '手書き風タイポグラフィによるクリエイティブ表現',
    ],
    challenges: [
      'ライトテーマとダークビジュアルの融合',
      'Framer Motionを活用した自然なアニメーション設計',
    ],
    status: 'published',
  },
];

export const WorksStory: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [currentDot, setCurrentDot] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.children[0]?.clientWidth || 360;
    const gap = 24;
    const scrollAmount = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setCurrentDot(0);
      return;
    }
    const progress = scrollLeft / maxScroll;
    setCurrentDot(Math.round(progress * (works.length - 1)));
  };

  return (
    <>
      <section id="works" className="py-28 bg-canvas-subtle relative">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="flex items-end justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-ink-muted uppercase mb-4">
                <span>03</span>
                <span className="w-8 h-px bg-ink-faint" />
                <span>Works</span>
              </div>
            </div>
            <button
              className="hidden sm:inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors group"
            >
              <span>View all</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
              onScroll={handleScroll}
            >
              {works.map((work) => (
                <motion.div
                  key={work.id}
                  className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  onClick={() => work.status === 'published' && setSelectedWork(work)}
                >
                  {/* Card Thumbnail */}
                  <div className="relative rounded-2xl overflow-hidden bg-ink aspect-[4/3] mb-4">
                    {work.iconImage ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1b1e2e] to-[#0d0f18] p-6">
                        <img
                          src={work.iconImage}
                          alt={work.title}
                          className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      /* Placeholder visual — project icon/text */
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                        <div className="text-5xl font-display font-bold text-white/20">
                          {work.projectNumber}
                        </div>
                        <h3 className="text-lg font-bold text-white text-center">
                          {work.title}
                        </h3>
                        <p className="text-xs text-white/50 text-center">
                          {work.subtitle}
                        </p>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[10px] font-mono text-white/70 uppercase">
                      {work.category}
                    </div>

                    {/* Project number badge */}
                    <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[10px] font-mono text-white/60">
                      {work.projectNumber}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="px-1">
                    <h3 className="text-base font-semibold text-ink mb-1 group-hover:text-ink-secondary transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-xs text-ink-muted mb-3">{work.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {work.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-canvas-muted text-ink-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {works.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentDot === idx ? 'bg-ink w-6' : 'bg-ink-faint'
                    }`}
                    onClick={() => {
                      if (!carouselRef.current) return;
                      const cardWidth = carouselRef.current.children[0]?.clientWidth || 360;
                      carouselRef.current.scrollTo({
                        left: idx * (cardWidth + 24),
                        behavior: 'smooth',
                      });
                    }}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center hover:bg-canvas-muted transition-colors"
                >
                  <ChevronLeft size={18} className="text-ink-secondary" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center hover:bg-canvas-muted transition-colors"
                >
                  <ChevronRight size={18} className="text-ink-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Detail Modal ─── */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-modal max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 border-b border-black/[0.06]">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-canvas-muted flex items-center justify-center hover:bg-canvas-subtle transition-colors"
                >
                  <X size={16} className="text-ink-secondary" />
                </button>

                {/* Thumbnail */}
                <div className="rounded-xl overflow-hidden bg-ink aspect-video mb-6">
                  {selectedWork.iconImage ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1b1e2e] to-[#0d0f18] p-6">
                      <img
                        src={selectedWork.iconImage}
                        alt={selectedWork.title}
                        className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-2xl shadow-2xl"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-6xl font-display font-bold text-white/15 mb-2">
                          {selectedWork.projectNumber}
                        </p>
                        <p className="text-lg font-bold text-white">
                          {selectedWork.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-ink font-display">
                      {selectedWork.title}
                    </h2>
                    <p className="text-sm text-ink-muted mt-1">
                      {selectedWork.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-1.5 mt-1">
                    {selectedWork.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-1 rounded-full bg-canvas-muted text-ink-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {selectedWork.description}
                </p>

                {selectedWork.highlights.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-3">
                      こだわったポイント
                    </h3>
                    <ul className="space-y-2">
                      {selectedWork.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-ink-secondary"
                        >
                          <span className="text-ink-faint mt-0.5">●</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedWork.challenges.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-3">
                      技術的な挑戦
                    </h3>
                    <ul className="space-y-2">
                      {selectedWork.challenges.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-ink-secondary"
                        >
                          <span className="text-ink-faint mt-0.5">●</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

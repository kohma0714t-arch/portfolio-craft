import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
  accentColor: string;
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
    accentColor: 'pop-blue',
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
    accentColor: 'pop-orange',
  },
  {
    id: 'portfolio',
    projectNumber: '03',
    category: 'Web',
    title: 'Portfolio Site',
    subtitle: 'このポートフォリオサイト',
    description:
      'React + TypeScript + Framer Motion で制作したポートフォリオサイト。ネオブルータリズムとポップなカラーを取り入れ、親しみやすく洗練されたデザインを追求しました。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'ネオブルータリズム × ポップカラーの融合',
      'レスポンシブかつインタラクティブなUI設計',
    ],
    challenges: [
      'セクション番号付き構造的レイアウトの設計',
      'Framer Motionを活用した自然なアニメーション設計',
    ],
    status: 'published',
    accentColor: 'pop-mint',
  },
];

export const WorksStory: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

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
    <>
      <section id="works" className="py-24 sm:py-32 relative overflow-hidden">
        {/* Background texture */}
        <div className="text-texture text-[clamp(100px,14vw,200px)] bottom-8 right-[-5%] opacity-[0.03]">
          WORKS
        </div>

        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono tracking-[0.2em] text-pop-blue font-semibold">04</span>
              <span className="w-8 h-px bg-pop-blue" />
              <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight leading-tight">
              制作実績
            </h2>
          </motion.div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, idx) => (
              <motion.div
                key={work.id}
                className={`bg-card-bg border-2 ${getAccentBorder(work.accentColor)} ${getAccentShadow(work.accentColor)} cursor-pointer transition-all duration-200 ${getAccentShadowHover(work.accentColor)} hover:translate-x-[3px] hover:translate-y-[3px] group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => work.status === 'published' && setSelectedWork(work)}
              >
                {/* Card Thumbnail */}
                <div className="relative bg-ink aspect-[4/3] overflow-hidden">
                  {work.iconImage ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1b1e2e] to-[#0d0f18] p-6">
                      <img
                        src={work.iconImage}
                        alt={work.title}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                      <div className="text-5xl font-display font-extrabold text-white/15">
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
                  <div className="flex flex-wrap gap-1.5">
                    {work.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 border border-ink/15 text-ink-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              className="bg-card-bg border-2 border-ink shadow-brutal max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 sm:p-8 border-b-2 border-ink">
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
                >
                  <X size={16} />
                </button>

                {/* Thumbnail */}
                <div className="overflow-hidden bg-ink aspect-video mb-6">
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
                        <p className="text-6xl font-display font-extrabold text-white/15 mb-2">
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
                        className="text-[10px] font-mono px-2 py-1 border border-ink/15 text-ink-secondary"
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
                    <h3 className="text-xs font-mono text-pop-blue uppercase tracking-wider mb-3 font-semibold">
                      こだわったポイント
                    </h3>
                    <ul className="space-y-2">
                      {selectedWork.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-ink-secondary"
                        >
                          <span className="text-pop-blue mt-0.5 font-bold">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedWork.challenges.length > 0 && (
                  <div>
                    <h3 className="text-xs font-mono text-pop-orange uppercase tracking-wider mb-3 font-semibold">
                      技術的な挑戦
                    </h3>
                    <ul className="space-y-2">
                      {selectedWork.challenges.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-ink-secondary"
                        >
                          <span className="text-pop-orange mt-0.5 font-bold">→</span>
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Calendar,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Zap,
} from 'lucide-react';
import { achievementsData } from '../data/achievementsData';
import { Breadcrumb } from '../components/Breadcrumb';

export const AchievementsPage: React.FC = () => {
  const item = achievementsData[0];
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const nextPhoto = () => setCurrentPhoto((p) => (p + 1) % item.photos.length);
  const prevPhoto = () =>
    setCurrentPhoto((p) => (p - 1 + item.photos.length) % item.photos.length);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Breadcrumb items={[{ label: 'ACHIEVEMENTS' }]} />

      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8">
        {/* Header Hero Area */}
        <div className="card-brutal bg-white p-6 sm:p-10 mb-12 relative overflow-hidden">
          {/* Watermark text */}
          <div className="text-texture text-[clamp(100px,16vw,200px)] top-2 right-4 opacity-[0.03]">
            AWARD
          </div>

          <div className="relative z-10">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-pop-orange text-white text-xs font-mono font-bold tracking-wider flex items-center gap-1.5">
                <Trophy size={14} />
                <span>{item.award}</span>
              </span>
              <span className="px-3 py-1 bg-ink text-white text-xs font-mono">
                {item.date}
              </span>
              <span className="text-xs font-mono text-ink-muted border border-ink/20 px-2.5 py-1">
                チーム開発
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-ink mb-3">
              {item.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-ink-secondary mb-6">
              {item.subtitle}
            </p>

            {/* Key Stats / Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t-2 border-ink/10 text-xs sm:text-sm">
              <div className="p-3 bg-cream border border-ink/20">
                <span className="text-ink-muted font-mono uppercase block mb-1 flex items-center gap-1">
                  <Calendar size={13} /> 開催時期
                </span>
                <span className="font-bold text-ink">{item.date}</span>
              </div>
              <div className="p-3 bg-cream border border-ink/20">
                <span className="text-ink-muted font-mono uppercase block mb-1 flex items-center gap-1">
                  <Users size={13} /> チーム構成
                </span>
                <span className="font-bold text-ink">{item.team}</span>
              </div>
              <div className="p-3 bg-cream border border-ink/20">
                <span className="text-ink-muted font-mono uppercase block mb-1 flex items-center gap-1">
                  <Award size={13} /> 担当役割
                </span>
                <span className="font-bold text-ink">{item.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Story & Deep Dive */}
          <div className="lg:col-span-7 space-y-10">
            {/* 1. Context & Overview */}
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <span className="w-2 h-2 bg-pop-orange" />
                <span>01. 概要と挑戦の背景</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-4">
                制限時間の中で「動く価値」を創り切る
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-relaxed">
                {item.longDescription.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </section>

            {/* 2. Problem & Solution */}
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <span className="w-2 h-2 bg-pop-orange" />
                <span>02. 課題意識と解決アプローチ</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-6">
                着目したペインとプロダクトの解
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-cream border-2 border-ink">
                  <span className="text-xs font-mono font-bold text-pop-orange uppercase block mb-1">
                    [ 課題 (Pain Point) ]
                  </span>
                  <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
                    {item.problemAndSolution.problem}
                  </p>
                </div>

                <div className="p-4 bg-white border-2 border-ink shadow-[3px_3px_0_0_#F97316]">
                  <span className="text-xs font-mono font-bold text-pop-blue uppercase block mb-1">
                    [ 解決策 (Our Solution) ]
                  </span>
                  <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
                    {item.problemAndSolution.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Technical Highlights */}
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <span className="w-2 h-2 bg-pop-orange" />
                <span>03. 技術・開発プロセスのこだわり</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-6">
                高速開発を支えたフロントエンド設計
              </h2>

              <div className="space-y-4">
                {item.technicalHighlights.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-cream/70 border border-ink/15"
                  >
                    <Zap size={18} className="text-pop-orange flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-ink">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Learnings */}
            <section className="card-brutal bg-cream p-6 sm:p-8 border-2 border-ink">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <Sparkles size={14} className="text-pop-orange" />
                <span>04. ハッカソンを通じた学びと成長</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-4">
                チーム開発と実践から得た確信
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
                <p>
                  アイデアを机上で議論する時間を最小化し、<strong>「まず動くUIモックを30分で作ってチームに見せる」</strong>ことで、仕様の合意形成スピードが劇的に向上することを実感しました。
                </p>
                <p>
                  審査員からも「デモのスムーズさとUIの完成度が他のチームと一線を画していた」と評価され、技術力とデザインの両輪がいかにプロダクトの説得力を左右するかを学ぶ貴重な経験となりました。
                </p>
              </div>
            </section>
          </div>

          {/* Right Column: Photo Gallery & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Photo Gallery Card */}
            <div className="card-brutal bg-white p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase text-ink-muted">
                  写真ギャラリー ({currentPhoto + 1} / {item.photos.length})
                </span>
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="p-1 hover:bg-ink/5 border border-ink/20 text-ink"
                  title="拡大表示"
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Main Photo */}
              <div
                className="relative overflow-hidden aspect-[4/3] bg-ink border-2 border-ink cursor-pointer group"
                onClick={() => setIsPhotoModalOpen(true)}
              >
                <img
                  src={item.photos[currentPhoto].src}
                  alt={item.photos[currentPhoto].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                  <Maximize2 size={16} /> クリックで拡大
                </div>

                {/* Photo navigation buttons */}
                <div
                  className="absolute bottom-3 right-3 flex gap-2 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={prevPhoto}
                    className="w-8 h-8 bg-white/95 border-2 border-ink flex items-center justify-center hover:bg-pop-orange hover:text-white transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextPhoto}
                    className="w-8 h-8 bg-white/95 border-2 border-ink flex items-center justify-center hover:bg-pop-orange hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Caption */}
              {item.photos[currentPhoto].caption && (
                <p className="text-xs text-ink-secondary mt-3 p-2 bg-cream border border-ink/10 leading-relaxed">
                  {item.photos[currentPhoto].caption}
                </p>
              )}

              {/* Thumbnails */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                {item.photos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhoto(idx)}
                    className={`aspect-[4/3] overflow-hidden border-2 transition-all ${
                      currentPhoto === idx
                        ? 'border-pop-orange shadow-[2px_2px_0_0_#F97316]'
                        : 'border-ink/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Stamp Badge Card */}
            <div className="card-brutal bg-white p-6 text-center border-2 border-ink">
              <div className="inline-block p-4 border-2 border-dashed border-pop-orange bg-pop-orange/5 rotate-[-2deg] mb-4">
                <Trophy size={36} className="text-pop-orange mx-auto mb-1" />
                <span className="font-display font-black text-xl text-ink tracking-tight block">
                  EXCELLENCE AWARD
                </span>
                <span className="text-[10px] font-mono font-bold text-pop-orange uppercase tracking-widest">
                  Hackathon 2025
                </span>
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed">
                審査員全員一致での高評価を獲得。短期間で動くUIを創出する高い開発スピードが認められました。
              </p>
            </div>

            {/* Quick Links */}
            <div className="card-brutal bg-cream p-5 space-y-3">
              <h4 className="text-sm font-bold font-display uppercase tracking-wider text-ink mb-2">
                関連リンク
              </h4>
              <Link
                to="/works"
                className="w-full btn-secondary text-center block text-xs sm:text-sm py-2.5"
              >
                制作したアプリ一覧を見る
              </Link>
              <Link
                to="/#contact"
                className="w-full btn-primary text-center block text-xs sm:text-sm py-2.5"
              >
                ハッカソンや共同開発のご相談
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Photo Zoom Modal */}
      <AnimatePresence>
        {isPhotoModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPhotoModalOpen(false)}
          >
            <motion.div
              className="bg-card-bg border-2 border-ink shadow-brutal max-w-3xl w-full p-4 max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-ink/20">
                <h3 className="font-bold text-ink font-display text-sm">
                  {item.photos[currentPhoto].alt}
                </h3>
                <button
                  onClick={() => setIsPhotoModalOpen(false)}
                  className="w-7 h-7 border border-ink flex items-center justify-center hover:bg-ink hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="overflow-auto flex-1 flex items-center justify-center p-2 bg-ink/5">
                <img
                  src={item.photos[currentPhoto].src}
                  alt={item.photos[currentPhoto].alt}
                  className="max-h-[75vh] w-auto object-contain border border-ink"
                />
              </div>
              {item.photos[currentPhoto].caption && (
                <p className="text-xs text-ink-secondary mt-2 text-center">
                  {item.photos[currentPhoto].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

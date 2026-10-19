import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  QrCode,
  Layers,
  Sparkles,
  Maximize2,
  ExternalLink,
  Globe,
  X,
} from 'lucide-react';
import { worksData } from '../data/worksData';
import { Breadcrumb } from '../components/Breadcrumb';

export const WorkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);

  const currentIndex = worksData.findIndex((w) => w.id === id);
  const work = worksData[currentIndex];

  if (!work) {
    return <Navigate to="/works" replace />;
  }

  const prevWork = currentIndex > 0 ? worksData[currentIndex - 1] : null;
  const nextWork = currentIndex < worksData.length - 1 ? worksData[currentIndex + 1] : null;

  const accentBgClass =
    work.accentColor === 'pop-blue'
      ? 'bg-pop-blue'
      : work.accentColor === 'pop-orange'
      ? 'bg-pop-orange'
      : 'bg-pop-mint';


  const accentTextClass =
    work.accentColor === 'pop-blue'
      ? 'text-pop-blue'
      : work.accentColor === 'pop-orange'
      ? 'text-pop-orange'
      : 'text-pop-mint';

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Breadcrumb
        items={[
          { label: 'WORKS', to: '/works' },
          { label: work.title },
        ]}
        backTo={{ label: '実績一覧に戻る', to: '/works' }}
      />

      <article className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8">
        {/* Header Hero Area */}
        <div className="card-brutal bg-white p-6 sm:p-10 mb-12 relative overflow-hidden">
          {/* Background Number Watermark */}
          <div className="text-texture text-[clamp(100px,16vw,200px)] top-2 right-4 opacity-[0.04]">
            {work.projectNumber}
          </div>

          <div className="relative z-10">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 ${accentBgClass} text-white text-xs font-mono font-bold tracking-wider`}>
                PROJECT {work.projectNumber}
              </span>
              <span className="px-3 py-1 bg-ink text-white text-xs font-mono uppercase tracking-wider">
                {work.category}
              </span>
              {work.period && (
                <span className="text-xs font-mono text-ink-muted border border-ink/20 px-2.5 py-1">
                  {work.period}
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-ink mb-2">
                  {work.title}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-ink-secondary">
                  {work.subtitle}
                </p>
              </div>

              {work.iconImage && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-cream border-2 border-ink shadow-[4px_4px_0_0_#1A1A2E] rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <img
                    src={work.iconImage}
                    alt={`${work.title} icon`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              )}
            </div>

            {/* Tagline callout */}
            <div className="p-4 bg-cream border-l-4 border-ink mb-6">
              <p className="text-sm sm:text-base font-semibold text-ink flex items-center gap-2">
                <Sparkles size={18} className={accentTextClass} />
                <span>{work.tagline}</span>
              </p>
            </div>

            {/* Role & Tech stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-ink/10 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-ink-muted block font-mono uppercase mb-1">担当範囲</span>
                <span className="font-medium text-ink">{work.role || '個人開発（企画・デザイン・実装）'}</span>
              </div>
              <div>
                <span className="font-bold text-ink-muted block font-mono uppercase mb-1">技術スタック</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {work.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-ink/5 border border-ink/20 text-xs font-mono text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Demo Link in Header if available */}
            {work.demoUrl && (
              <div className="mt-6 pt-4 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-ink-muted">公開デモサイト提供中</span>
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pop-orange text-white text-xs sm:text-sm font-bold border-2 border-ink shadow-[3px_3px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-mono"
                >
                  <Globe size={16} />
                  <span>デモサイトを開く</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer Notice if provided */}
        {work.disclaimer && (
          <div className="card-brutal bg-[#FFFBEB] border-2 border-amber-600 shadow-[4px_4px_0_0_#D97706] p-5 sm:p-6 mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold tracking-wider text-amber-800 uppercase">
                  ATTENTION / 免責事項
                </h4>
                <p className="text-xs sm:text-sm text-amber-950 font-medium leading-relaxed whitespace-pre-line">
                  {work.disclaimer}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Narrative Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Context & Motivation */}
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <span className="w-2 h-2 bg-ink" />
                <span>01. 開発背景・課題意識</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-4">
                なぜこのプロダクトを作ったのか？
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-relaxed">
                {work.longDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* 2. Highlights & Solutions */}
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <span className="w-2 h-2 bg-ink" />
                <span>02. コア機能と解決策</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-6">
                工夫したポイント・主要機能
              </h2>
              <div className="space-y-4">
                {work.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-cream/70 border border-ink/15"
                  >
                    <CheckCircle2
                      size={20}
                      className={`${accentTextClass} flex-shrink-0 mt-0.5`}
                    />
                    <span className="text-sm sm:text-base font-medium text-ink">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Challenges & Technical Learning */}
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <span className="w-2 h-2 bg-ink" />
                <span>03. 技術的挑戦と工夫</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-ink mb-6">
                直面した技術的課題と乗り越え方
              </h2>
              <div className="space-y-4">
                {work.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 border-2 border-ink bg-white shadow-[3px_3px_0_0_#1A1A2E]"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-muted mb-2">
                      <AlertCircle size={15} className={accentTextClass} />
                      <span>CHALLENGE #{idx + 1}</span>
                    </div>
                    <p className="text-sm sm:text-base text-ink font-medium leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>

              {/* Architecture Points */}
              {work.architecture && work.architecture.length > 0 && (
                <div className="mt-8 pt-6 border-t border-ink/10">
                  <h3 className="text-lg font-bold font-display text-ink mb-4 flex items-center gap-2">
                    <Layers size={18} className={accentTextClass} />
                    <span>アーキテクチャ・設計方針</span>
                  </h3>
                  <ul className="space-y-2">
                    {work.architecture.map((arch, i) => (
                      <li key={i} className="text-xs sm:text-sm text-ink-secondary flex items-start gap-2">
                        <span className="font-mono text-ink font-bold">•</span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* 4. Future Roadmap */}
            {work.futurePlans && work.futurePlans.length > 0 && (
              <section className="card-brutal bg-white p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                  <span className="w-2 h-2 bg-ink" />
                  <span>04. 今後の展望・ロードマップ</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-ink mb-4">
                  これからのアップデート構想
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {work.futurePlans.map((plan, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-cream border border-ink/20 text-xs sm:text-sm font-medium text-ink flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-pop-blue rounded-full flex-shrink-0" />
                      <span>{plan}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Visuals & Interactive Elements */}
          <div className="lg:col-span-4 space-y-6">
            {/* Screenshot Card */}
            {work.screenshotImage && (
              <div className="card-brutal bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold uppercase text-ink-muted">
                    {work.category === 'Web' ? 'Webプレビュー' : 'アプリ画面プレビュー'}
                  </span>
                  <button
                    onClick={() => setIsScreenshotModalOpen(true)}
                    className="p-1 hover:bg-ink/5 border border-ink/20 text-ink"
                    title="画像を拡大"
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>
                <div
                  className={`cursor-pointer overflow-hidden border-2 border-ink group relative ${
                    work.category === 'Web' ? 'aspect-[16/10]' : 'aspect-[9/16]'
                  } bg-ink/5 flex items-center justify-center`}
                  onClick={() => setIsScreenshotModalOpen(true)}
                >
                  <img
                    src={work.screenshotImage}
                    alt={`${work.title} スクリーンショット`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                    <Maximize2 size={16} /> クリックで拡大
                  </div>
                </div>
              </div>
            )}

            {/* Web Demo Card if demoUrl exists and no qrCode */}
            {work.demoUrl && !work.qrCodeImage && (
              <div className="card-brutal bg-white p-5 text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-pop-orange text-white text-[11px] font-mono mb-3">
                  <Globe size={13} />
                  <span>Webブラウザで体験</span>
                </div>
                <h4 className="text-base font-bold text-ink mb-1 font-display">
                  デモサイトを体験する
                </h4>
                <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                  Vercel上で実際に動作している最新のWebアプリケーションをご覧いただけます。
                </p>
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ink text-white text-xs sm:text-sm font-bold border-2 border-ink shadow-[3px_3px_0_0_#F97316] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-mono"
                >
                  <Globe size={15} />
                  <span>デモサイトへ移動</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}

            {/* QR Code Card (Expo Demo) */}
            {work.qrCodeImage && (
              <div className="card-brutal bg-white p-5 text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-ink text-white text-[11px] font-mono mb-3">
                  <Smartphone size={13} />
                  <span>Expo Go で実機体験</span>
                </div>
                <h4 className="text-base font-bold text-ink mb-1 font-display">
                  実機で動かしてみる
                </h4>
                <p className="text-xs text-ink-muted mb-4 leading-relaxed">
                  Expo Go アプリ（iOS / Android）のカメラでQRコードを読み取ると、お使いの端末で直接動作を確認できます。
                </p>

                <div
                  className="w-40 h-40 mx-auto p-2 bg-white border-2 border-ink shadow-[3px_3px_0_0_#1A1A2E] cursor-pointer hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  onClick={() => setIsQrModalOpen(true)}
                >
                  <img
                    src={work.qrCodeImage}
                    alt="Expo Go QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsQrModalOpen(true)}
                  className="mt-3 text-xs font-mono text-pop-blue font-bold hover:underline inline-flex items-center gap-1"
                >
                  <QrCode size={13} /> QRコードを拡大表示
                </button>
              </div>
            )}

            {/* Quick Actions Card */}
            <div className="card-brutal bg-cream p-5 space-y-3">
              <h4 className="text-sm font-bold font-display uppercase tracking-wider text-ink mb-2">
                作品へのアクション
              </h4>
              {work.demoUrl && (
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-pop-orange text-white text-xs sm:text-sm font-bold border-2 border-ink shadow-[3px_3px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  <Globe size={14} />
                  <span>デモサイトを訪問する</span>
                  <ExternalLink size={13} />
                </a>
              )}
              <Link
                to="/#contact"
                className="w-full btn-primary text-center block text-xs sm:text-sm py-2.5"
              >
                この作品について質問・相談する
              </Link>
              <Link
                to="/works"
                className="w-full btn-secondary text-center block text-xs sm:text-sm py-2.5"
              >
                他の制作実績一覧を見る
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Pagination (Prev / Next Work) */}
        <div className="mt-16 pt-8 border-t-2 border-ink grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevWork ? (
            <Link
              to={`/works/${prevWork.id}`}
              className="card-brutal bg-white p-4 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group flex items-center gap-4 text-left"
            >
              <div className="w-10 h-10 border-2 border-ink flex items-center justify-center flex-shrink-0 group-hover:bg-ink group-hover:text-cream transition-colors">
                <ArrowLeft size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-ink-muted uppercase block">PREVIOUS WORK</span>
                <span className="text-sm font-bold text-ink group-hover:text-pop-blue transition-colors">
                  {prevWork.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextWork && (
            <Link
              to={`/works/${nextWork.id}`}
              className="card-brutal bg-white p-4 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group flex items-center justify-end gap-4 text-right"
            >
              <div>
                <span className="text-[10px] font-mono text-ink-muted uppercase block">NEXT WORK</span>
                <span className="text-sm font-bold text-ink group-hover:text-pop-blue transition-colors">
                  {nextWork.title}
                </span>
              </div>
              <div className="w-10 h-10 border-2 border-ink flex items-center justify-center flex-shrink-0 group-hover:bg-ink group-hover:text-cream transition-colors">
                <ArrowRight size={16} />
              </div>
            </Link>
          )}
        </div>
      </article>

      {/* QR Code Modal */}
      <AnimatePresence>
        {isQrModalOpen && work.qrCodeImage && (
          <motion.div
            className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQrModalOpen(false)}
          >
            <motion.div
              className="bg-card-bg border-2 border-ink shadow-brutal max-w-sm w-full p-6 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-ink font-display">{work.title} QRコード</h3>
                <button
                  onClick={() => setIsQrModalOpen(false)}
                  className="w-7 h-7 border border-ink flex items-center justify-center hover:bg-ink hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
              <img
                src={work.qrCodeImage}
                alt="QR Code"
                className="w-56 h-56 mx-auto object-contain border border-ink mb-4 p-2 bg-white"
              />
              <p className="text-xs text-ink-secondary leading-relaxed">
                スマートフォンで <strong>Expo Go</strong> アプリを開き、このQRコードをスキャンしてください。
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screenshot Preview Modal */}
      <AnimatePresence>
        {isScreenshotModalOpen && work.screenshotImage && (
          <motion.div
            className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsScreenshotModalOpen(false)}
          >
            <motion.div
              className="bg-card-bg border-2 border-ink shadow-brutal max-w-xl w-full p-4 max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-ink/20">
                <h3 className="font-bold text-ink font-display text-sm">{work.title} スクリーンショット</h3>
                <button
                  onClick={() => setIsScreenshotModalOpen(false)}
                  className="w-7 h-7 border border-ink flex items-center justify-center hover:bg-ink hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="overflow-auto flex-1 flex items-center justify-center p-2 bg-ink/5">
                <img
                  src={work.screenshotImage}
                  alt="Screenshot preview"
                  className="max-h-[75vh] w-auto object-contain border border-ink"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

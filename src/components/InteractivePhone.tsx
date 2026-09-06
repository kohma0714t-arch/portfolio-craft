import React, { useState, useRef } from 'react';
import { RotateCcw, QrCode, ChevronRight, Clock } from 'lucide-react';

export interface PhoneScreenData {
  id: string;
  title: string;
  badge: string;
  screens: {
    key: string;
    label: string;
    icon: React.ReactNode;
  }[];
  qrImage: string;
}

interface InteractivePhoneProps {
  appKey: 'studystack' | 'timesc';
}

export const InteractivePhone: React.FC<InteractivePhoneProps> = ({ appKey }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'detail' | 'qr'>('demo');
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D Tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -(y * 12), y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Study Stack mock cards
  const flashcards = [
    { q: 'React Native のブリッジとは？', a: 'JSスレッドとネイティブスレッド間でJSONを介して通信する従来の仕組み（新アーキテクチャではJSIへ刷新）。' },
    { q: 'Expo EAS Build の利点', a: 'クラウド上でiOS/Androidバイナリを自動生成でき、ローカルマシン環境の依存を排除可能。' },
    { q: 'TypeScript の Generics とは？', a: '型をパラメータとして受け取り、柔軟性と厳格な型安全性を両立させる仕組み。' },
  ];

  const handleNextCard = () => {
    setFlipped(false);
    setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Screen Mode Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/[0.1] bg-neutral-900/80 backdrop-blur-md mb-6 text-xs font-mono">
        <button
          onClick={() => setActiveTab('demo')}
          className={`px-3 py-1.5 rounded-full transition-all ${
            activeTab === 'demo'
              ? 'bg-white text-black font-semibold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          インタラクティブ操作
        </button>
        <button
          onClick={() => setActiveTab('detail')}
          className={`px-3 py-1.5 rounded-full transition-all ${
            activeTab === 'detail'
              ? 'bg-white text-black font-semibold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          スクリーンショット
        </button>
        <button
          onClick={() => setActiveTab('qr')}
          className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
            activeTab === 'qr'
              ? 'bg-white text-black font-semibold shadow-sm'
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <QrCode size={13} />
          実機QR
        </button>
      </div>

      {/* Realistic Smartphone Chassis with 3D Tilt */}
      <div
        ref={phoneRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[290px] sm:w-[310px] h-[580px] rounded-[44px] p-3 bg-[#181a20] border-2 border-neutral-700/80 shadow-[0_30px_70px_rgba(0,0,0,0.8),inset_0_0_0_2px_rgba(255,255,255,0.08)] transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-black z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 mr-2" />
          <div className="w-2 h-2 rounded-full bg-neutral-800" />
        </div>

        {/* Screen Bezel Container */}
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-[#0a0c10] border border-white/[0.08] flex flex-col justify-between select-none">
          
          {/* Status Bar */}
          <div className="pt-3 px-6 flex items-center justify-between text-[11px] font-mono text-neutral-400 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-neutral-400 p-[1px] flex items-center">
                <div className="w-full h-full bg-neutral-300 rounded-[0.5px]" />
              </div>
            </div>
          </div>

          {/* Interactive Screen Contents */}
          <div className="flex-1 flex flex-col pt-6 pb-4 px-4 overflow-y-auto">
            {appKey === 'studystack' ? (
              /* Study Stack Demo */
              activeTab === 'demo' ? (
                <div className="flex-1 flex flex-col justify-between">
                  <div className="text-left pt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase text-neutral-400">Card {currentCardIndex + 1} of {flashcards.length}</span>
                      <span className="text-[10px] font-mono text-emerald-400">正答率 85%</span>
                    </div>
                    <p className="text-sm font-semibold text-white">情報工学・アーキテクチャ</p>
                  </div>

                  {/* Flippable Flashcard */}
                  <div
                    onClick={() => setFlipped(!flipped)}
                    className="relative w-full h-56 rounded-2xl p-5 border border-white/[0.12] bg-[#12151e] cursor-pointer shadow-lg flex flex-col justify-between hover:border-white/[0.25] transition-all group"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>{flipped ? '【解答・解説】' : '【問題】'}</span>
                      <span className="text-xs text-neutral-500 group-hover:text-white transition-colors flex items-center gap-1">
                        <RotateCcw size={12} /> タップで反転
                      </span>
                    </div>

                    <div className="my-auto text-center px-2">
                      <p className="text-sm font-medium text-white leading-relaxed">
                        {flipped ? flashcards[currentCardIndex].a : flashcards[currentCardIndex].q}
                      </p>
                    </div>

                    <div className="text-center">
                      <span className="text-[10px] font-mono text-neutral-500">
                        {flipped ? '理解できたら次へ' : 'タップして答えを確認'}
                      </span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex gap-2">
                    <button
                      onClick={handleNextCard}
                      className="flex-1 py-2.5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>次のカード</span>
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => setFlipped(!flipped)}
                      className="px-4 py-2.5 rounded-xl border border-white/[0.12] bg-white text-black font-semibold text-xs transition-colors"
                    >
                      {flipped ? '問題に戻す' : '答えを見る'}
                    </button>
                  </div>
                </div>
              ) : activeTab === 'detail' ? (
                /* Screenshot */
                <div className="flex-1 rounded-2xl overflow-hidden border border-white/[0.08] flex items-center justify-center bg-black">
                  <img
                    src="/images/StudyStack1.png"
                    alt="Study Stack Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                /* QR Code */
                <div className="flex-1 flex flex-col items-center justify-center text-center p-2">
                  <p className="text-xs font-mono text-neutral-400 mb-3">Expo Go でスキャン</p>
                  <div className="w-40 h-40 bg-white p-2.5 rounded-xl shadow-lg mb-3">
                    <img src="/images/StudyStackQR.png" alt="QR" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[11px] text-neutral-400">実機ですぐに動かせます</p>
                </div>
              )
            ) : (
              /* TimeSc Demo */
              activeTab === 'demo' ? (
                <div className="flex-1 flex flex-col justify-between pt-2">
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-neutral-400">Today: 木曜日</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">開講中</span>
                    </div>
                    <p className="text-sm font-semibold text-white">本日の講義スケジュール</p>
                  </div>

                  {/* Timetable List */}
                  <div className="space-y-2.5 my-auto">
                    <div className="p-3 rounded-xl border border-white/[0.14] bg-[#141722]">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                        <span className="text-white font-medium">1限 (09:00 - 10:30)</span>
                        <span>講義棟 302教室</span>
                      </div>
                      <p className="text-xs font-semibold text-white">アルゴリズムとデータ構造</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">課題締切: 本日23:59まで</p>
                    </div>

                    <div className="p-3 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                        <span>2限 (10:45 - 12:15)</span>
                        <span>情報実験室 A</span>
                      </div>
                      <p className="text-xs font-medium text-neutral-200">計算機アーキテクチャ実験</p>
                    </div>

                    <div className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.01]">
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                        <span>3限 (13:15 - 14:45)</span>
                        <span>大講義室 1</span>
                      </div>
                      <p className="text-xs font-medium text-neutral-400">オペレーティングシステム論</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-[11px] text-neutral-400 flex items-center justify-between">
                    <span>次の予定まで あと45分</span>
                    <Clock size={14} className="text-neutral-400" />
                  </div>
                </div>
              ) : activeTab === 'detail' ? (
                /* Screenshot */
                <div className="flex-1 rounded-2xl overflow-hidden border border-white/[0.08] flex items-center justify-center bg-black">
                  <img
                    src="/images/TimeSc1.png"
                    alt="わかりやすい時間割 Screenshot"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                /* QR Code */
                <div className="flex-1 flex flex-col items-center justify-center text-center p-2">
                  <p className="text-xs font-mono text-neutral-400 mb-3">Expo Go でスキャン</p>
                  <div className="w-40 h-40 bg-white p-2.5 rounded-xl shadow-lg mb-3">
                    <img src="/images/TimeScQR.png" alt="QR" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[11px] text-neutral-400">実機ですぐに動かせます</p>
                </div>
              )
            )}
          </div>

          {/* Home Indicator Bar */}
          <div className="pb-2 flex justify-center">
            <div className="w-28 h-1 rounded-full bg-neutral-600" />
          </div>

        </div>
      </div>
    </div>
  );
};

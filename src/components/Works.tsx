import React from 'react';
import { QrCode, ArrowUpRight } from 'lucide-react';
import { AppItem } from './QrModal';

interface WorksProps {
  onOpenModal: (app: AppItem) => void;
}

export const Works: React.FC<WorksProps> = ({ onOpenModal }) => {
  const projects: AppItem[] = [
    {
      id: 'studystack',
      title: 'Study Stack',
      subtitle: '暗記学習・復習効率化モバイルアプリ',
      description:
        '効率的な暗記・復習をサポートするカード型学習アプリ。学習履歴と正答率を集計し、理解度が低いカードを集中的に出題するロジックを実装。反復学習の負担を減らすことを目指しました。',
      category: 'Mobile Application',
      tags: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
      image: '/images/StudyStack1.png',
      qrImage: '/images/StudyStackQR.png',
    },
    {
      id: 'timesc',
      title: 'わかりやすい時間割',
      subtitle: '大学生向け時間割・スケジュール管理アプリ',
      description:
        '大学生活に特化した時間割管理ツール。講義の教室番号や担当教員、当日の時間割をトップ画面からワンタップで確認できる導線を重視してUIを構築しました。',
      category: 'Mobile Application',
      tags: ['React Native', 'Expo', 'TypeScript', 'UI/UX Design'],
      image: '/images/TimeSc1.png',
      qrImage: '/images/TimeScQR.png',
    },
  ];

  return (
    <section id="works" className="py-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-2">
            Works
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            制作実績
          </p>
        </div>

        {/* Works List - Editorial Layout */}
        <div className="space-y-16">
          {projects.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl border border-white/[0.08] bg-white/[0.01] hover:border-white/[0.18] transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left: Info */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-neutral-400 uppercase">
                        {item.category}
                      </span>
                      <span className="text-neutral-600 font-mono text-xs">/</span>
                      <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-300 mb-4">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div>
                    <button
                      onClick={() => onOpenModal(item)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/[0.14] hover:border-white/[0.3] text-xs font-mono text-white hover:bg-white/[0.04] transition-colors"
                    >
                      <QrCode size={14} />
                      <span>実機でプレビュー (Expo Go)</span>
                      <ArrowUpRight size={14} className="text-neutral-400" />
                    </button>
                  </div>
                </div>

                {/* Right: Screenshot Mockup */}
                <div className="md:col-span-5 flex justify-center">
                  <div
                    onClick={() => onOpenModal(item)}
                    className="cursor-pointer max-w-[240px] sm:max-w-[260px] rounded-xl overflow-hidden border border-white/[0.12] shadow-xl hover:border-white/[0.28] transition-colors bg-neutral-900"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

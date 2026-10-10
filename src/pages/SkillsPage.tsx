import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { techSkillsData, workflowDetailedSteps } from '../data/skillsData';
import { Breadcrumb } from '../components/Breadcrumb';

export const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Breadcrumb items={[{ label: 'SKILLS' }]} />

      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8">
        {/* Header Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-mint font-semibold">03</span>
            <span className="w-8 h-px bg-pop-mint" />
            <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Skills & Workflow</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mb-4">
            スキルセット・開発プロセス
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
            型安全性を重視したフロントエンド・モバイル開発技術と、AIをコパイロットとして駆使したアジャイルな高速開発ワークフローの詳細です。
          </p>
        </div>

        {/* Section 1: Detailed Tech Stack Cards */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b-2 border-ink">
            <div>
              <span className="text-xs font-mono text-pop-blue font-bold uppercase block mb-1">
                TECH CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                技術スタック詳細
              </h2>
            </div>
            <span className="text-xs font-mono text-ink-muted">全 {techSkillsData.length} 項目</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techSkillsData.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="card-brutal bg-white p-6 border-2 border-ink hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-cream border-2 border-ink flex items-center justify-center flex-shrink-0">
                          <Icon size={22} className="text-ink" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-display text-ink">{tech.name}</h3>
                          <span className="text-xs font-mono text-pop-blue font-bold">
                            {tech.experience} 経験
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-ink text-white">
                        {tech.level}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                      {tech.description}
                    </p>
                  </div>

                  {/* Use cases */}
                  <div className="pt-3 border-t border-ink/10">
                    <span className="text-[10px] font-mono uppercase font-bold text-ink-muted block mb-1.5">
                      主な活用実績
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.useCases.map((uc, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium px-2 py-0.5 bg-cream border border-ink/20 text-ink"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Detailed 4-Step Workflow */}
        <section className="mb-20">
          <div className="mb-10 pb-3 border-b-2 border-ink">
            <span className="text-xs font-mono text-pop-orange font-bold uppercase block mb-1">
              AI-NATIVE PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink mb-2">
              開発ワークフローの4ステップ
            </h2>
            <p className="text-sm text-ink-secondary">
              アイデアを最短速度で「高品質な動くプロダクト」へ昇華させる、独自の制作プロセスです。
            </p>
          </div>

          <div className="space-y-8">
            {workflowDetailedSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="card-brutal bg-white p-6 sm:p-8 border-2 border-ink grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Step Badge & Title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 bg-ink text-white font-mono font-extrabold text-sm flex items-center justify-center border-2 border-ink">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 bg-cream border-2 border-ink flex items-center justify-center">
                        <StepIcon size={20} className="text-pop-orange" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-ink mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-pop-blue uppercase">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Step Description & Details */}
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                      {step.description}
                    </p>

                    <div className="p-4 bg-cream border border-ink/15">
                      <span className="text-xs font-mono font-bold text-ink uppercase block mb-2">
                        具体的なアクション & プラクティス:
                      </span>
                      <ul className="space-y-1.5">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-ink-secondary flex items-start gap-2"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-pop-mint flex-shrink-0 mt-0.5"
                            />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="card-brutal bg-white p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-display font-bold text-ink mb-1">
              これらのスキルを活用した制作物を見る
            </h3>
            <p className="text-sm text-ink-secondary">
              Study Stack や UniTime の詳細画面で、技術スタックの適用例をご確認いただけます。
            </p>
          </div>
          <Link to="/works" className="btn-primary">
            <span>制作実績を見る</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  );
};

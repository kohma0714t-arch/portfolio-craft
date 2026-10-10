import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { coreValues, timelineData } from '../data/aboutData';
import { Breadcrumb } from '../components/Breadcrumb';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Breadcrumb items={[{ label: 'ABOUT' }]} />

      <main className="max-w-[1200px] mx-auto px-5 sm:px-8 py-8">
        {/* Header Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-blue font-semibold">02</span>
            <span className="w-8 h-px bg-pop-blue" />
            <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">About Profile</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight mb-4">
            プロフィール・開発理念
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
            情報工学を学ぶ現役大学生エンジニア。React Native / TypeScript を軸に、AIを相棒とした高速かつ手触りの良いプロダクト作りを追求しています。
          </p>
        </div>

        {/* Profile Card & Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* Left: Image & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-brutal bg-white p-4">
              <div className="aspect-[4/3] overflow-hidden bg-cream border-2 border-ink mb-4">
                <img
                  src={getAssetUrl('/images/MyImage.png')}
                  alt="koma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h2 className="text-2xl font-display font-bold text-ink">koma</h2>
                <p className="text-xs font-mono text-pop-blue font-bold uppercase mb-4">
                  Student Engineer & Frontend Developer
                </p>

                <div className="space-y-2 text-xs border-t border-ink/10 pt-3 text-ink-secondary">
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-ink-muted">所属</span>
                    <span className="font-medium text-ink">情報工学部 大学生</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-ink-muted">主な技術</span>
                    <span className="font-medium text-ink">React Native / TS / Expo</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ink/5">
                    <span className="text-ink-muted">開発スタイル</span>
                    <span className="font-medium text-ink">AI-Native Fast Crafting</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-ink-muted">関心領域</span>
                    <span className="font-medium text-ink">UI/UX, モバイル, 個人開発</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote */}
            <div className="card-brutal bg-pop-blue text-white p-6 shadow-[6px_6px_0_0_#1A1A2E]">
              <span className="text-[10px] font-mono tracking-widest uppercase block mb-2 opacity-80">
                MY MOTTO
              </span>
              <p className="text-base sm:text-lg font-display font-bold leading-snug">
                「小さく素早く作り、動かしながら磨き上げる。」
              </p>
            </div>
          </div>

          {/* Right: Detailed Story */}
          <div className="lg:col-span-7 space-y-8">
            <section className="card-brutal bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-ink-muted uppercase">
                <Compass size={14} className="text-pop-blue" />
                <span>MY STORY & MISSION</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-ink mb-4">
                「日常の不便」をコードで解きほぐす
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-relaxed">
                <p>
                  大学で情報工学の基礎（アルゴリズムやコンピュータサイエンス）を学ぶ中で、「学んだ知識をすぐに自分の手で形にして、誰かに届ける面白さ」に目覚めました。
                </p>
                <p>
                  スマートフォンの画面は、現代の私たちが1日に何百回も触れる最も身近なインターフェースです。だからこそ、React Native / Expo を用いたモバイルアプリ開発に没頭し、起動速度、指先のタッチ反応、画面遷移の心地よさにこだわって個人開発を行っています。
                </p>
                <p>
                  さらに最新の生成AIツール群を単なるコード生成としてではなく「高速な思考のパートナー」としてワークフローに組み込むことで、個人開発でありながらチーム開発に匹敵するスピード感でプロダクトを世に送り出しています。
                </p>
              </div>
            </section>

            {/* Core Values */}
            <div>
              <h3 className="text-xl font-display font-bold text-ink mb-4">
                大切にしている3つの価値観
              </h3>
              <div className="space-y-4">
                {coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="card-brutal bg-white p-5 border-2 border-ink hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-pop-blue">
                        0{idx + 1}. {val.title}
                      </span>
                      <span className="text-xs font-bold text-ink-muted">{val.subtitle}</span>
                    </div>
                    <p className="text-sm text-ink-secondary leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono tracking-[0.2em] text-pop-orange font-semibold">HISTORY</span>
              <span className="w-8 h-px bg-pop-orange" />
              <span className="text-xs font-mono tracking-[0.2em] text-ink-muted uppercase">Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              これまでの歩み
            </h2>
          </div>

          <div className="card-brutal bg-white p-6 sm:p-10">
            <div className="relative border-l-2 border-ink/20 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cream border-2 border-ink group-hover:bg-pop-blue transition-colors" />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-pop-blue px-2 py-0.5 bg-pop-blue/10 border border-pop-blue/30">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono font-bold text-ink px-2 py-0.5 bg-ink/10">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-display text-ink mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-ink-muted mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-ink-secondary leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="card-brutal bg-white p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-display font-bold text-ink mb-1">
              制作したアプリやスキルもご覧ください
            </h3>
            <p className="text-sm text-ink-secondary">
              Study Stack や UniTime の詳細情報、使用スキル一覧を公開しています。
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/works" className="btn-secondary">
              <span>実績一覧</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/skills" className="btn-primary">
              <span>スキル詳細</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

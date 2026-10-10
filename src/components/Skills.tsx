import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Globe,
  Code2,
  Cpu,
  Gamepad2,
  Wrench,
  Figma,
  ArrowRight,
  Lightbulb,
  Bot,
  Eye,
  Rocket,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const techItems = [
  { name: 'TypeScript', icon: Code2 },
  { name: 'React', icon: Globe },
  { name: 'Next.js', icon: Globe },
  { name: 'React Native', icon: Smartphone },
  { name: 'Expo', icon: Smartphone },
  { name: 'Tailwind CSS', icon: Code2 },
  { name: 'C', icon: Cpu },
  { name: 'Unity', icon: Gamepad2 },
  { name: 'Git / GitHub', icon: Wrench },
  { name: 'Figma', icon: Figma },
];

const workflowSteps = [
  { icon: Lightbulb, label: 'アイデア・\n課題発見', description: '日常のペインを起点に構想' },
  { icon: Bot, label: 'AIによる\n高速変換', description: 'AIを活用しコード・デザインを高速生成' },
  { icon: Eye, label: '人間による\n磨き込み', description: 'UI/UX・コードの品質を徹底チューニング' },
  { icon: Rocket, label: 'リリース・\n改善', description: '実機テスト、フィードバック反映' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-section-alt">
      {/* Background texture */}
      <div className="text-texture text-[clamp(100px,14vw,200px)] top-8 left-[-3%] opacity-[0.06] text-white">
        SKILLS
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-mint font-semibold">03</span>
            <span className="w-8 h-px bg-pop-mint" />
            <span className="text-xs font-mono tracking-[0.2em] text-white/50 uppercase">Skills & Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
            スキルセット
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Tech Stack Grid */}
          <div>
            <motion.h3
              className="text-xl font-bold text-white font-display mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tech Stack
            </motion.h3>

            <motion.div
              className="grid grid-cols-5 gap-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {techItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-2 group"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-14 h-14 bg-white/10 border-2 border-white/20 flex items-center justify-center group-hover:border-pop-mint group-hover:bg-pop-mint/10 transition-all"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <item.icon size={22} className="text-white/70 group-hover:text-pop-mint transition-colors" />
                  </motion.div>
                  <span className="text-[10px] text-white/50 text-center leading-tight group-hover:text-white/80 transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Workflow */}
          <div>
            <motion.h3
              className="text-xl font-bold text-white font-display mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Workflow
            </motion.h3>
            <motion.p
              className="text-sm text-white/50 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              AIをコパイロットに、
              <br />
              爆速かつ高品質な開発を実現するプロセス
            </motion.p>

            {/* Process Flow */}
            <motion.div
              className="flex items-start gap-3"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div
                    className="flex flex-col items-center text-center flex-1"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 border-2 border-white/20 bg-white/5 flex items-center justify-center mb-3">
                      <step.icon size={20} className="text-pop-mint" />
                    </div>
                    <p className="text-[11px] font-medium text-white whitespace-pre-line leading-tight mb-1">
                      {step.label}
                    </p>
                    <p className="text-[9px] text-white/40 leading-tight hidden sm:block">
                      {step.description}
                    </p>
                  </motion.div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="flex items-center pt-5">
                      <ArrowRight size={14} className="text-white/25" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Link to Detail Page */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 bg-pop-mint text-ink border-2 border-pop-mint shadow-[4px_4px_0_0_#FFFFFF] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
          >
            <span>全スキル詳細 & ワークフロー解説を見る</span>
            <ArrowRight size={16} className="text-ink group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
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
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-ink-muted uppercase mb-4">
            <span>04</span>
            <span className="w-8 h-px bg-ink-faint" />
            <span>Skills & Workflow</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Tech Stack Grid */}
          <div>
            <motion.h3
              className="text-xl font-bold text-ink font-display mb-8"
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
                    className="w-14 h-14 rounded-2xl bg-canvas-muted border border-black/[0.04] flex items-center justify-center group-hover:border-black/[0.1] group-hover:shadow-card transition-all"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <item.icon size={22} className="text-ink-secondary" />
                  </motion.div>
                  <span className="text-[10px] text-ink-muted text-center leading-tight">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Workflow */}
          <div>
            <motion.h3
              className="text-xl font-bold text-ink font-display mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Workflow
            </motion.h3>
            <motion.p
              className="text-sm text-ink-secondary mb-8"
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
              className="flex items-start gap-3 mb-10"
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
                    <div className="w-12 h-12 rounded-xl bg-canvas-muted border border-black/[0.06] flex items-center justify-center mb-3">
                      <step.icon size={20} className="text-ink-secondary" />
                    </div>
                    <p className="text-[11px] font-medium text-ink whitespace-pre-line leading-tight mb-1">
                      {step.label}
                    </p>
                    <p className="text-[9px] text-ink-muted leading-tight hidden sm:block">
                      {step.description}
                    </p>
                  </motion.div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="flex items-center pt-5">
                      <ArrowRight size={14} className="text-ink-faint" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

            {/* AI-Native Strength */}
            <motion.div
              className="p-6 rounded-2xl bg-ink text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-sm font-semibold mb-3">AI-Native 開発の強み</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                AIで「作った」のではなく、「理想を形にする」としてAIを活用。
                エンジニア自身の美学でUI/UX・コードの品質を磨き上げることで、
                スピードとクオリティを両立する開発を実現しています。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

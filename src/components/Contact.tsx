import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ExternalLink, Briefcase } from 'lucide-react';

const CROWDWORKS_URL = 'https://crowdworks.jp/public/employees/4281520?ref=share_url_wkprofile';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Briefcase,
      label: 'CrowdWorks',
      value: 'クラウドワークス プロフィール',
      href: CROWDWORKS_URL,
      highlight: true,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kohma0714.t@gmail.com',
      href: 'mailto:kohma0714.t@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kohma0714t-arch',
      href: 'https://github.com/kohma0714t-arch',
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden bg-section-alt">
      {/* Background texture */}
      <div className="text-texture text-[clamp(80px,12vw,180px)] bottom-8 right-[-3%] opacity-[0.06] text-white">
        CONTACT
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono tracking-[0.2em] text-pop-mint font-semibold">06</span>
            <span className="w-8 h-px bg-pop-mint" />
            <span className="text-xs font-mono tracking-[0.2em] text-white/50 uppercase">Contact</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Text & Links */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-4">
              一緒に、つくりませんか？
            </h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              Webアプリ・スマホアプリの開発依頼、
              <br />
              案件のご相談、受託開発など
              <br />
              お気軽にご連絡ください。
            </p>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-3 text-sm transition-colors group p-2.5 -mx-2.5 rounded ${
                    link.highlight
                      ? 'bg-pop-orange/10 border border-pop-orange/30 text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <div
                    className={`w-10 h-10 border-2 flex items-center justify-center transition-all ${
                      link.highlight
                        ? 'border-pop-orange bg-pop-orange/20 text-pop-orange'
                        : 'border-white/20 text-white/60 group-hover:border-pop-mint group-hover:bg-pop-mint/10 group-hover:text-pop-mint'
                    }`}
                  >
                    <link.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-white/40 uppercase">{link.label}</p>
                    <p className="text-xs font-mono truncate text-white/80 group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                  {link.href.startsWith('http') && (
                    <ExternalLink size={14} className="text-white/30 group-hover:text-white/70 transition-colors ml-auto mr-1" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: CrowdWorks CTA Card */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="border-2 border-white/20 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 relative shadow-[6px_6px_0_0_#FF6B35]">
              {/* Badge */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pop-orange/20 border border-pop-orange/40 text-pop-orange text-[11px] font-mono font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-pop-orange animate-pulse" />
                  CrowdWorks
                </span>
                <span className="text-xs font-mono text-white/40">お仕事受付中</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                クラウドワークス経由で相談する
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-8">
                Webサイト制作、React / Next.js、React Native（Expo）を用いたモバイルアプリ開発など、案件のご相談やお見積りはクラウドワークスよりスムーズにお取引いただけます。
              </p>

              {/* Action Button */}
              <motion.a
                href={CROWDWORKS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-pop-orange text-white font-bold text-base border-2 border-ink shadow-[4px_4px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>クラウドワークスで相談・依頼する</span>
                <ExternalLink size={18} />
              </motion.a>

              {/* Footer Note */}
              <p className="mt-4 text-[11px] text-white/40 text-center">
                ※ クラウドワークスのプロフィール・メッセージ画面へ移動します（新規タブ）
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

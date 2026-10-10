import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = [
    { label: 'Home', to: '/' },
    { label: 'About 詳細', to: '/about' },
    { label: 'Skills 詳細', to: '/skills' },
    { label: 'Works 一覧', to: '/works' },
    { label: 'Achievements 詳細', to: '/achievements' },
  ];

  return (
    <footer className="border-t-2 border-ink py-12 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="text-2xl font-display font-extrabold text-ink inline-block">
              koma<span className="text-pop-orange">.</span>
            </Link>
            <p className="text-xs text-ink-muted mt-2 leading-relaxed">
              Student Engineer — つくるを楽しむ。<br />
              React Native / Expo / TypeScript によるモバイル・Webアプリ開発。
            </p>
          </div>

          {/* Sitemap / Detailed Pages Links */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-ink-muted block mb-3">
              PAGES & DETAILS
            </span>
            <div className="grid grid-cols-2 gap-2">
              {pages.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs text-ink-secondary hover:text-pop-blue transition-colors font-medium hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social + Scroll Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-3">
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-ink-muted block mb-1">
              CONNECT
            </span>
            <div className="flex items-center gap-2">
              <a
                href="mailto:kohma0714.t@gmail.com"
                aria-label="Email"
                className="w-9 h-9 border-2 border-ink bg-white flex items-center justify-center hover:bg-ink hover:text-cream transition-colors shadow-[2px_2px_0_0_#1A1A2E] hover:shadow-none"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/kohma0714t-arch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 border-2 border-ink bg-white flex items-center justify-center hover:bg-ink hover:text-cream transition-colors shadow-[2px_2px_0_0_#1A1A2E] hover:shadow-none"
              >
                <Github size={16} />
              </a>
              <motion.button
                onClick={scrollToTop}
                className="w-9 h-9 border-2 border-ink bg-pop-blue text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-[2px_2px_0_0_#1A1A2E] hover:shadow-none"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="ページ上部へスクロール"
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p>© 2026 koma. All Rights Reserved.</p>
          <p className="font-mono text-[11px]">Built with React, TS & Neo-Brutalism</p>
        </div>
      </div>
    </footer>
  );
};

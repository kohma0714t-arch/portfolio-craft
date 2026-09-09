import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-black/[0.06] py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-display font-bold text-ink">koma.</p>
            <p className="text-xs text-ink-muted mt-1">
              理想を形に — Engineering & Interface Craft
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + Scroll Top */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:kohma0714.t@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center hover:bg-canvas-muted transition-colors"
            >
              <Mail size={16} className="text-ink-secondary" />
            </a>
            <a
              href="https://github.com/kohma0714t-arch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center hover:bg-canvas-muted transition-colors"
            >
              <Github size={16} className="text-ink-secondary" />
            </a>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center hover:bg-canvas-muted transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} className="text-ink-secondary" />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-black/[0.04] text-xs text-ink-muted">
          <p>© 2026 koma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

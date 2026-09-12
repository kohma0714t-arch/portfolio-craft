import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Works', href: '#works' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t-2 border-ink py-12 bg-cream">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-display font-extrabold text-ink">koma.</p>
            <p className="text-xs text-ink-muted mt-1">
              Student Engineer — つくるを楽しむ
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-ink-muted hover:text-ink transition-colors font-medium"
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
              className="w-9 h-9 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/kohma0714t-arch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-cream transition-colors"
            >
              <Github size={16} />
            </a>
            <motion.button
              onClick={scrollToTop}
              className="w-9 h-9 border-2 border-pop-blue bg-pop-blue text-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-ink/10 text-xs text-ink-muted">
          <p>© 2026 koma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

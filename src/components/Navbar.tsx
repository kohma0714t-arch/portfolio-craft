import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#hero"
          className={`text-lg font-display font-bold tracking-tight transition-colors ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
          whileHover={{ scale: 1.02 }}
        >
          koma.
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? 'text-ink-secondary hover:text-ink'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <motion.a
            href="#contact"
            className={`text-sm font-medium px-5 py-2 rounded-full transition-all shadow-sm ${
              scrolled
                ? 'bg-neutral-900 text-white hover:bg-black'
                : 'bg-white text-neutral-900 hover:bg-neutral-100'
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            お問い合わせ
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? 'text-ink hover:bg-black/[0.04]'
              : 'text-white hover:bg-white/[0.1]'
          }`}
          aria-label="メニュー開閉"
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden px-6 py-4 bg-white/95 backdrop-blur-xl border-b border-black/[0.06]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-sm text-ink-secondary hover:text-ink hover:bg-black/[0.03] rounded-lg transition-all"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-2.5 px-4 text-sm text-center font-medium bg-neutral-900 text-white rounded-xl shadow-sm hover:bg-black transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                お問い合わせ
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

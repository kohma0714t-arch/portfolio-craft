import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navItems = [
    { label: 'About', hash: 'about', page: '/about' },
    { label: 'Skills', hash: 'skills', page: '/skills' },
    { label: 'Works', hash: 'works', page: '/works' },
    { label: 'Achievements', hash: 'achievements', page: '/achievements' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof navItems)[0]) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(item.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not home, navigate to home with hash
      e.preventDefault();
      navigate(`/#${item.hash}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.getElementById(item.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-cream/95 backdrop-blur-md border-b-2 border-ink py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-xl font-display font-extrabold tracking-tight text-ink flex items-center gap-1 group"
        >
          <span className="group-hover:text-pop-blue transition-colors">koma</span>
          <span className="text-pop-orange">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActivePage = location.pathname.startsWith(item.page);
            return (
              <div key={item.label} className="relative group">
                <a
                  href={`#${item.hash}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`text-sm font-medium transition-colors py-1 ${
                    isActivePage
                      ? 'text-pop-blue font-bold border-b-2 border-pop-blue'
                      : 'text-ink-secondary hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </div>
            );
          })}

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/#contact"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-bold px-5 py-2 bg-pop-blue text-white border-2 border-ink shadow-[2px_2px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              お問い合わせ
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink border-2 border-ink bg-white shadow-[2px_2px_0_0_#1A1A2E] hover:shadow-none transition-all"
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
            className="md:hidden px-5 py-4 bg-cream border-b-2 border-ink shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-1.5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-bold text-ink hover:bg-ink/5 border border-transparent hover:border-ink/20"
              >
                Top / Home
              </Link>
              {navItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <a
                    href={`#${item.hash}`}
                    onClick={(e) => handleNavClick(e, item)}
                    className="flex-1 py-2.5 px-3 text-sm font-medium text-ink-secondary hover:text-ink hover:bg-ink/5"
                  >
                    {item.label}（セクション）
                  </a>
                  <Link
                    to={item.page}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-2 py-1 text-xs font-mono font-bold text-pop-blue border border-pop-blue/30 hover:bg-pop-blue/10 flex items-center gap-0.5"
                  >
                    <span>詳細</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              ))}
              <Link
                to="/#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (isHome) {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-2 py-2.5 px-4 text-sm text-center font-bold bg-pop-blue text-white border-2 border-ink shadow-[2px_2px_0_0_#1A1A2E]"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

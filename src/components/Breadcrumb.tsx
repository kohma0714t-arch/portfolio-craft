import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  backTo?: {
    label: string;
    to: string;
  };
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, backTo = { label: 'トップに戻る', to: '/' } }) => {
  return (
    <div className="pt-24 pb-6 max-w-[1200px] mx-auto px-5 sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink pb-4">
        {/* Breadcrumb List */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-mono">
          <Link
            to="/"
            className="text-ink-secondary hover:text-pop-blue font-semibold transition-colors flex items-center gap-1"
          >
            HOME
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <ChevronRight size={14} className="text-ink-muted flex-shrink-0" />
                {isLast || !item.to ? (
                  <span className="font-bold text-ink px-2 py-0.5 bg-ink/5 border border-ink/20">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className="text-ink-secondary hover:text-pop-blue font-semibold transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Back Button */}
        {backTo && (
          <motion.div whileHover={{ x: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to={backTo.to}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-3 py-1.5 bg-white border-2 border-ink shadow-[2px_2px_0_0_#1A1A2E] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-ink"
            >
              <ArrowLeft size={14} />
              <span>{backTo.label}</span>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

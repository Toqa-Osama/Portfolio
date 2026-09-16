import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-[#28243D] py-12 bg-[#F8FAFC] dark:bg-[#0B0B10] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#7C3AED] flex items-center justify-center text-white shadow-sm">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-base text-[#0F172A] dark:text-white">
                Toqa Osama
              </p>
              <p className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8]">
                Computer Science • Data Engineering
              </p>
            </div>
          </div>

          {/* Center Info / Built with */}
          <p className="text-xs font-medium text-[#334155] dark:text-[#CBD5E1] text-center flex items-center justify-center gap-1.5 flex-wrap">
            <span>© {currentYear} Toqa Osama. {t.footer.rightsReserved}</span>
            <span className="hidden sm:inline">•</span>
            <span>{t.footer.builtWith}</span>
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] text-[#0F172A] dark:text-[#CBD5E1] hover:border-purple-500 shadow-sm transition-all duration-200"
            aria-label="Back to Top"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
          </button>

        </div>
      </div>
    </footer>
  );
};

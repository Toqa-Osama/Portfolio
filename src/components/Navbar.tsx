import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  Code2, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t, direction } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.about },
    { id: 'education', label: t.nav.education },
    { id: 'experience', label: t.nav.experience },
    { id: 'technical-practice', label: t.nav.technicalPractice },
    { id: 'skills', label: t.nav.skills },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 dark:bg-[#0B0B10]/90 bg-[#F8FAFC]/95 backdrop-blur-md border-b dark:border-[#28243D] border-[#E2E8F0] shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Toqa Osama - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6D28D9] to-[#7C3AED] flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight dark:text-white text-[#0F172A] group-hover:text-purple-600 transition-colors">
                {t.nav.brand}
              </span>
              <span className="text-[11px] font-semibold tracking-wide uppercase dark:text-purple-400 text-purple-700 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Software & Data
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full dark:bg-[#171523]/95 bg-white border dark:border-[#28243D] border-[#E2E8F0] shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="px-3 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-all duration-200 dark:text-[#CBD5E1] text-[#334155] hover:text-white dark:hover:text-white hover:bg-gradient-to-r hover:from-[#6D28D9] hover:to-[#7C3AED]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language Toggle & Theme Switcher */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 dark:bg-[#171523] bg-white border dark:border-[#28243D] border-[#E2E8F0] dark:text-white text-[#0F172A] hover:border-purple-500 shadow-sm"
              title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
              aria-label="Language switch"
            >
              <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="tracking-wider">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl transition-all duration-200 dark:bg-[#171523] bg-white border dark:border-[#28243D] border-[#E2E8F0] text-[#0F172A] dark:text-yellow-400 hover:border-purple-500 shadow-sm"
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-[#5B21B6] hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="hidden xl:flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>{t.hero.getInTouch}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${direction === 'rtl' ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Mobile Menu Toggle & Fast Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold dark:bg-[#171523] bg-white border dark:border-[#28243D] border-[#E2E8F0] dark:text-white text-[#0F172A]"
              aria-label="Toggle Language"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-lg dark:bg-[#171523] bg-white border dark:border-[#28243D] border-[#E2E8F0]"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-[#5B21B6]" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg dark:bg-[#171523] bg-white border dark:border-[#28243D] border-[#E2E8F0] dark:text-white text-[#0F172A]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl dark:bg-[#171523] bg-white border dark:border-[#28243D] border-[#E2E8F0] shadow-xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold dark:text-[#CBD5E1] text-[#334155] hover:bg-[#6D28D9] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t dark:border-[#28243D] border-[#E2E8F0]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.hero.getInTouch}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

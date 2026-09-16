import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { TechnicalPractice } from './components/TechnicalPractice';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0B10] text-[#0F172A] dark:text-slate-100 transition-colors duration-300 font-sans relative selection:bg-purple-600 selection:text-white">
      {/* Background ambient lighting effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[128px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[128px]" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        
        {/* Subtle section dividers */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#6D28D9]/20 to-transparent" />
        </div>

        <Education />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#6D28D9]/20 to-transparent" />
        </div>

        <Experience />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#6D28D9]/20 to-transparent" />
        </div>

        <TechnicalPractice />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#6D28D9]/20 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#6D28D9]/20 to-transparent" />
        </div>

        <Certifications />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#6D28D9]/20 to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

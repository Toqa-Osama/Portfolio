import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar, BookOpen, CheckCircle2, Building2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const edu = t.education.data;

  return (
    <section id="education" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            {t.education.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1]">
            {t.education.sectionSubtitle}
          </p>
        </div>

        {/* Education Primary Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          
          {/* Subtle background gradient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
            
            {/* Degree & Institution Info */}
            <div className="space-y-5 max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6D28D9] to-[#7C3AED] flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#5B21B6] dark:text-[#A78BFA] mt-0.5">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#CBD5E1]">
                  <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>{edu.courseworkTitle}</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {edu.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#CBD5E1] dark:border-[#3B3258] transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span>{course}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeframe & Status Badge */}
            <div className="flex md:flex-col items-start md:items-end justify-between md:justify-start gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-[#E2E8F0] dark:border-[#28243D]">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{edu.status}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#334155] dark:text-[#CBD5E1]">
                <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{edu.period}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

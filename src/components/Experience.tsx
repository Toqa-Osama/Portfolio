import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar, CheckCircle, Database, Sparkles, Workflow } from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const exp = t.experience.data;

  return (
    <section id="experience" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            {t.experience.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1]">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative">
          
          <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            
            {/* Ambient inner glow */}
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#E2E8F0] dark:border-[#28243D]">
              
              {/* Role & Org */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6D28D9] to-[#7C3AED] flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258]">
                      {exp.badgeText}
                    </span>
                  </div>
                  <p className="text-base font-bold text-[#5B21B6] dark:text-[#A78BFA]">
                    {exp.organization}
                  </p>
                  <p className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8] mt-1">
                    {exp.type}
                  </p>
                </div>
              </div>

              {/* Date Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl self-start bg-[#F8FAFC] dark:bg-[#12101D] border border-[#E2E8F0] dark:border-[#28243D] text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-[#CBD5E1]">
                <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{exp.period}</span>
              </div>

            </div>

            {/* Description & Key Highlights */}
            <div className="pt-6 space-y-4">
              <p className="text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed font-normal">
                {exp.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#CBD5E1]">
                  <Workflow className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Key Focus Areas & Practical Training</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {exp.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#12101D] border border-[#E2E8F0] dark:border-[#28243D] hover:border-purple-300 dark:hover:border-purple-800 transition-colors flex items-start gap-3"
                    >
                      <div className="mt-0.5 p-1.5 rounded-lg bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA] flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] leading-relaxed font-medium">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

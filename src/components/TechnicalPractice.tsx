import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  Braces, 
  Bug, 
  Boxes, 
  Workflow, 
  FileCode2 
} from 'lucide-react';

export const TechnicalPractice: React.FC = () => {
  const { t, direction } = useLanguage();
  const tp = t.technicalPractice;

  const highlightIcons = [
    <Boxes className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    <FileCode2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    <Workflow className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
    <Bug className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
  ];

  return (
    <section id="technical-practice" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>{tp.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            {tp.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1]">
            {tp.sectionSubtitle}
          </p>
        </div>

        {/* Practice Showcase Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            {/* Top Bar: Title & Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] dark:border-[#28243D]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6D28D9] to-[#7C3AED] flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                  <Braces className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white">
                    {tp.cardTitle}
                  </h3>
                  <p className="text-xs font-semibold text-[#5B21B6] dark:text-[#A78BFA] mt-0.5">
                    Python 3.12+ • Modern C++ (OOP & STL) • Algorithmic Paradigms
                  </p>
                </div>
              </div>

              <div className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258]">
                <Cpu className="w-3.5 h-3.5" />
                <span>{tp.badge}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed font-normal">
              {tp.description}
            </p>

            {/* Key Technical Highlights Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#CBD5E1]">
                <Workflow className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{tp.highlightsTitle}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {tp.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#12101D] border border-[#E2E8F0] dark:border-[#28243D] flex items-start gap-3 hover:border-purple-300 dark:hover:border-purple-800 transition-colors"
                  >
                    <div className="mt-0.5 p-1.5 rounded-lg bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA] flex-shrink-0">
                      {highlightIcons[idx % highlightIcons.length]}
                    </div>
                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#CBD5E1] leading-relaxed font-medium">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tech Stack Chips */}
            <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#28243D] flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#0F172A] dark:text-[#CBD5E1] me-2">
                {direction === 'rtl' ? 'الوسوم التقنية:' : 'Stack Tags:'}
              </span>
              {tp.techPills.map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                  <span>{pill}</span>
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

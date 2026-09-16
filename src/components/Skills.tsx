import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code2, 
  Terminal, 
  Database, 
  Sparkles, 
  Layers, 
  Cpu, 
  Check 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.skills.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            {t.skills.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1]">
            {t.skills.sectionSubtitle}
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.skills.groups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle gradient corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 group-hover:bg-purple-600/10 rounded-full blur-2xl transition-all pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Category Header */}
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-2xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA] border border-[#DDD6FE] dark:border-[#3B3258] group-hover:scale-105 transition-transform">
                    {getCategoryIcon(group.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white">
                      {group.category}
                    </h3>
                    <p className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8]">
                      {group.skills.length} core proficiencies
                    </p>
                  </div>
                </div>

                {/* Skill Badges / Chips */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#CBD5E1] dark:border-[#3B3258] hover:border-purple-400 dark:hover:border-purple-600 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, ShieldCheck, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.certifications.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            {t.certifications.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1]">
            {t.certifications.sectionSubtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.certifications.items.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle accent badge on top right */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#6D28D9] to-[#7C3AED] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6D28D9] dark:text-[#A78BFA]" />
                  <span>{cert.badge}</span>
                </div>
              </div>

              {/* Title & Track Details */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#0F172A] dark:text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm font-bold text-[#5B21B6] dark:text-[#A78BFA]">
                  {cert.track}
                </p>
                <p className="text-xs font-semibold text-[#475569] dark:text-[#94A3B8]">
                  {cert.issuer}
                </p>
              </div>

              {/* Date Footer */}
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] dark:border-[#28243D] flex items-center justify-between text-xs font-semibold text-[#334155] dark:text-[#CBD5E1]">
                <div className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>{cert.period}</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#5B21B6] dark:text-[#A78BFA] font-bold">
                  DECI Certified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

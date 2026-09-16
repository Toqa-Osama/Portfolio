import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Linkedin, 
  Mail, 
  Check, 
  Copy, 
  Sparkles, 
  Terminal, 
  Database, 
  Cpu, 
  GraduationCap,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, direction } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = 'toqa.osama.dev@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/toqa-osama-software-engineer/';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Floating Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 start-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A] shadow-2xl border border-purple-500/30 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-bold">{t.hero.copied}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typographic Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            
            {/* Top Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Role Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#6D28D9] dark:text-[#A78BFA]" />
                <span>{t.hero.roleBadge}</span>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] text-[#0F172A] dark:text-[#CBD5E1] shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#6D28D9] dark:text-[#A78BFA]" />
                <span>{t.hero.location}</span>
              </div>
            </div>

            {/* Name & High-Impact Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#5B21B6] dark:text-[#A78BFA]">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] dark:text-white leading-[1.12]">
                {t.hero.name}
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent leading-snug">
                {t.hero.headline}
              </div>
            </div>

            {/* Polished Bio Paragraph */}
            <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
              {t.hero.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary: Get in Touch */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>{t.hero.getInTouch}</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/80" />
              </a>

              {/* Secondary: Connect on LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] text-[#0F172A] dark:text-white hover:border-[#6D28D9] dark:hover:border-[#8B5CF6] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2] fill-[#0A66C2]" />
                <span>{t.hero.connectLinkedIn}</span>
              </a>

              {/* Auxiliary: Copy Email */}
              <button
                onClick={handleCopyEmail}
                type="button"
                className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 border ${
                  copied
                    ? 'bg-emerald-500/15 border-emerald-500/60 text-emerald-700 dark:text-emerald-400'
                    : 'bg-[#EDE9FE]/70 hover:bg-[#EDE9FE] dark:bg-[#171523] border-[#DDD6FE] dark:border-[#28243D] text-[#5B21B6] dark:text-[#CBD5E1] hover:border-[#7C3AED]'
                }`}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-bold">{t.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#6D28D9] dark:text-[#A78BFA]" />
                    <span>{t.hero.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* Micro Highlights Pill Bar */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] font-bold">University</p>
                  <p className="text-xs font-bold text-[#0F172A] dark:text-white truncate">FCAI - Cairo Univ</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA]">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] font-bold">Track</p>
                  <p className="text-xs font-bold text-[#0F172A] dark:text-white truncate">Data Engineering (DEPI)</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] font-bold">Foundation</p>
                  <p className="text-xs font-bold text-[#0F172A] dark:text-white truncate">Python • C++ • OOP</p>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Code Terminal & Modern Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Terminal Window */}
            <div className="relative rounded-2xl overflow-hidden bg-[#171523] border border-[#28243D] shadow-2xl transition-all duration-300 hover:border-purple-500/50 group text-white">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#0F0E17] border-b border-[#28243D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#CBD5E1]">
                  <Terminal className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>{t.hero.codeSnippet.filename}</span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E1A33] text-[#A78BFA] border border-[#3B3258]">
                  {t.hero.codeSnippet.version}
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-start dir-ltr" style={{ direction: 'ltr' }}>
                <p className="text-slate-400 italic">
                  {t.hero.codeSnippet.comment}
                </p>
                <div className="mt-2 space-y-1">
                  <p>
                    <span className="text-purple-400 font-semibold">class</span>{' '}
                    <span className="text-amber-300 font-bold">DataSoftwareEngineer</span>:
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-sky-300">__init__</span>(self):
                  </p>
                  <p className="pl-8">
                    self.name = <span className="text-emerald-400">"Toqa Osama"</span>
                  </p>
                  <p className="pl-8">
                    self.university = <span className="text-emerald-400">"Cairo University (FCAI)"</span>
                  </p>
                  <p className="pl-8">
                    self.languages = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"C++"</span>]
                  </p>
                  <p className="pl-8">
                    self.current_track = <span className="text-emerald-400">"Data Engineering (DEPI)"</span>
                  </p>
                  <p className="pl-8">
                    self.focus = [<span className="text-emerald-400">"Pipelines"</span>, <span className="text-emerald-400">"Algorithms"</span>, <span className="text-emerald-400">"OOP"</span>]
                  </p>
                  
                  <p className="pl-4 pt-2">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-sky-300">build_pipeline</span>(self, data_source):
                  </p>
                  <p className="pl-8 text-slate-400 italic">
                    {t.hero.codeSnippet.statusComment}
                  </p>
                  <p className="pl-8">
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-indigo-300">orchestrator</span>.process(data_source)
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Terminal Bar */}
              <div className="px-5 py-3 bg-[#0F0E17] border-t border-[#28243D] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1]">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span>status --active</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to Collaborate
                </span>
              </div>
            </div>

            {/* Decorative Floating Tech Pills */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#171523] border border-[#DDD6FE] dark:border-[#3B3258] shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#6D28D9] dark:text-[#A78BFA] animate-pulse" />
              <span className="text-xs font-bold text-[#0F172A] dark:text-white">Problem Solver</span>
            </div>

            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#171523] border border-[#DDD6FE] dark:border-[#3B3258] shadow-md">
              <Database className="w-3.5 h-3.5 text-[#6D28D9] dark:text-[#A78BFA]" />
              <span className="text-xs font-bold text-[#0F172A] dark:text-white">Data Pipelines</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

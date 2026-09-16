import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, direction } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const email = 'toqa.osama.dev@gmail.com';
  const phone = '+20 1043112858';
  const linkedinUrl = 'https://linkedin.com/in/toqa-osama-software-engineer/';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        showToast(direction === 'rtl' ? 'تم نسخ البريد الإلكتروني!' : 'Email copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        showToast(direction === 'rtl' ? 'تم نسخ رقم الهاتف!' : 'Phone copied to clipboard!');
        setTimeout(() => setCopiedPhone(false), 2500);
      }
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      if (type === 'email') {
        setCopiedEmail(true);
        showToast(direction === 'rtl' ? 'تم نسخ البريد الإلكتروني!' : 'Email copied to clipboard!');
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        showToast(direction === 'rtl' ? 'تم نسخ رقم الهاتف!' : 'Phone copied to clipboard!');
        setTimeout(() => setCopiedPhone(false), 2500);
      }
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative">
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 start-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A] shadow-2xl border border-purple-500/30 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-start max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#A78BFA] dark:border-[#3B3258] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-white mb-3">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] dark:text-[#CBD5E1]">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA] flex items-center justify-center group-hover:scale-105 transition-transform border border-[#DDD6FE] dark:border-[#3B3258]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] font-bold">
                  {t.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white hover:text-purple-600 dark:hover:text-[#A78BFA] transition-colors break-all"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E8F0] dark:border-[#28243D] flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(email, 'email')}
                type="button"
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 border ${
                  copiedEmail
                    ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-700 dark:text-emerald-400'
                    : 'bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#CBD5E1] dark:border-[#3B3258] hover:border-purple-400'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.contact.copiedButton}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>{t.contact.copyButton}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="py-2.5 px-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white flex items-center justify-center gap-1 shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>{t.contact.emailButton}</span>
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE9FE] text-[#5B21B6] dark:bg-[#1E1A33] dark:text-[#A78BFA] flex items-center justify-center group-hover:scale-105 transition-transform border border-[#DDD6FE] dark:border-[#3B3258]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] font-bold">
                  {t.contact.phoneLabel}
                </p>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white hover:text-purple-600 dark:hover:text-[#A78BFA] transition-colors font-mono"
                  style={{ direction: 'ltr' }}
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E8F0] dark:border-[#28243D] flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(phone, 'phone')}
                type="button"
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 border ${
                  copiedPhone
                    ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-700 dark:text-emerald-400'
                    : 'bg-[#EDE9FE] text-[#5B21B6] border-[#DDD6FE] dark:bg-[#1E1A33] dark:text-[#CBD5E1] dark:border-[#3B3258] hover:border-purple-400'
                }`}
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.contact.copiedButton}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>{t.contact.copyButton}</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-3.5 rounded-xl text-xs font-bold bg-[#F8FAFC] dark:bg-[#12101D] border border-[#E2E8F0] dark:border-[#28243D] text-[#0F172A] dark:text-white hover:border-purple-500 flex items-center justify-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>{t.contact.callButton}</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#171523] border border-[#E2E8F0] dark:border-[#28243D] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform border border-blue-200 dark:border-blue-900/40">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] font-bold">
                  {t.contact.linkedinLabel}
                </p>
                <p className="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white truncate">
                  toqa-osama-software-engineer
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E8F0] dark:border-[#28243D]">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 flex items-center justify-center gap-2 shadow-sm transition-all duration-200"
              >
                <span>{t.contact.viewProfile}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${direction === 'rtl' ? 'rotate-[-90deg]' : ''}`} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

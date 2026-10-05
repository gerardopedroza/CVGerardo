'use client';

import React from 'react';
import { cvData, Language } from '@/data/cvData';
import { FileDown, ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon } from '../UI/Icons';
import { triggerExecutiveCelebration } from '../UI/ConfettiTrigger';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center text-sm">
              GP
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {content.name}
              </span>
              <span className="text-[11px] text-slate-400">
                {content.headline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={content.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${content.email}`}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>{content.email}</span>
            </a>

            <a
              href="/cv/CV.pdf"
              download="Gerardo_Pedroza_CV.pdf"
              onClick={() => triggerExecutiveCelebration()}
              className="text-sky-400 hover:text-sky-300 font-semibold transition-colors flex items-center gap-1.5"
            >
              <FileDown className="w-4 h-4" />
              <span>{content.ui.nav.downloadCv}</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            title="Volver arriba"
          >
            <span>{t.top}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {content.name}. {t.rights}</p>
          <p>Next.js 15 • TypeScript • Tailwind CSS • Executive UX</p>
        </div>
      </div>
    </footer>
  );
};

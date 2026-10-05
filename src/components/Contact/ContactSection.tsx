'use client';

import React, { useState } from 'react';
import { cvData, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Send,
} from 'lucide-react';
import { LinkedInIcon } from '../UI/Icons';
import { triggerExecutiveCelebration } from '../UI/ConfettiTrigger';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.contact;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(content.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleDownload = () => {
    triggerExecutiveCelebration();
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 dark:bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Contact"
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Contact Direct Cards (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {/* Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-400 dark:hover:border-sky-600 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.emailLabel}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-all">
                      {content.email}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copiar email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${content.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.sendEmail}</span>
                </a>
                {copiedEmail && (
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    ¡Copiado al portapapeles!
                  </span>
                )}
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-sky-400 dark:hover:border-sky-600 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {t.phoneLabel}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {content.displayPhone}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copiar teléfono"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={`tel:${content.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.callDirect}</span>
                </a>
                {copiedPhone && (
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    ¡Copiado al portapapeles!
                  </span>
                )}
              </div>
            </div>

            {/* LinkedIn & Location Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={content.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all flex items-center gap-3 group"
              >
                <div className="p-2.5 rounded-lg bg-[#0077b5]/10 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {t.linkedinLabel}
                  </span>
                  <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span>/in/gerardo-pedroza</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {t.locationLabel}
                  </span>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {content.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Official Feature Box (Right 5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center mb-6">
                <FileDown className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-bold tracking-tight text-white">
                {t.downloadCvPrompt}
              </h4>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Descarga el archivo PDF oficial y completo de Gerardo Pedroza con toda la trayectoria detallada, certificaciones, roles y referencias laborales comprobadas.
              </p>

              <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Formato:</span>
                  <span className="font-semibold text-white">PDF Oficial (246 KB)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Última actualización:</span>
                  <span className="font-semibold text-emerald-400">2026 / Actual</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Disponibilidad:</span>
                  <span className="font-semibold text-sky-400">Inmediata / Liderazgo</span>
                </div>
              </div>
            </div>

            <a
              href="/cv/CV.pdf"
              download="Gerardo_Pedroza_CV.pdf"
              onClick={handleDownload}
              className="mt-8 inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.downloadCvBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

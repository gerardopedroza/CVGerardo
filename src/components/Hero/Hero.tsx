'use client';

import React, { useState } from 'react';
import { cvData, Language } from '@/data/cvData';
import {
  FileDown,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Building2,
  Copy,
  Check,
} from 'lucide-react';
import { LinkedInIcon } from '../UI/Icons';
import { triggerExecutiveCelebration } from '../UI/ConfettiTrigger';

interface HeroProps {
  lang: Language;
  onOpenRecruiterMode: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenRecruiterMode }) => {
  const content = cvData[lang];
  const t = content.ui.hero;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Subtle executive background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white dark:bg-sky-950 dark:text-sky-300 dark:border dark:border-sky-800/80 text-xs font-medium shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.badge}</span>
              <span className="text-slate-400 dark:text-sky-500">|</span>
              <span className="text-slate-300 dark:text-sky-200">{content.yearsOfExperience} {t.experienceBadge}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {content.name}
            </h1>

            {/* Headline */}
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-400 dark:via-blue-300 dark:to-indigo-300 leading-snug">
              {content.headline}
            </p>

            {/* Executive Value Proposition Subheading */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {content.subheadline}
            </p>

            {/* Location & Quick Meta */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                {content.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-sky-500" />
                Citi • Visa • Azteca • Compartamos • Bansefi
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Santander • Mercado Pago • Banorte (Consulting)
              </span>
            </div>

            {/* Primary Action Buttons (CTAs) */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Download CV (Official PDF) */}
              <a
                href="/cv/CV.pdf"
                download="Gerardo_Pedroza_CV.pdf"
                onClick={() => triggerExecutiveCelebration()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-md shadow-sky-600/25 hover:shadow-sky-600/40 hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.ctaDownload}</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-xs hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>{t.ctaContact}</span>
              </a>

              {/* Recruiter Quick Screen Button */}
              <button
                onClick={onOpenRecruiterMode}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-all cursor-pointer w-full sm:w-auto"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Modo Recruiter (30s)</span>
              </button>
            </div>

            {/* Social & Contact Mini Links */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={content.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors font-medium"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn /gerardo-pedroza</span>
              </a>

              <span className="text-slate-300 dark:text-slate-700">•</span>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors font-medium cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>{content.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Card Column (Executive Summary Highlight Card - Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-6 sm:p-7 transition-all">
              {/* Top Accent Ribbon */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Executive Highlights
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-sky-800">
                  Verified Track Record
                </span>
              </div>

              {/* 3 Core Highlights from CV */}
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Impacto Cuantitativo
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      <strong className="text-slate-900 dark:text-white font-semibold">60% de reducción en fuga semanal de capital</strong> (~MXN $30M salvados/sem) en Banco Azteca mediante estrategia de upgrade a débito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Product Ownership Bancario
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      <strong className="text-slate-900 dark:text-white font-semibold">4 productos bancarios lanzados</strong> end-to-end (ahorro, inversión y transaccionales) en Compartamos Banco con comités ejecutivos y gobernanza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Enfoque en Inteligencia Artificial
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      Especialización activa en IA para conectar estrategia de negocio, arquitectura de datos y soluciones tecnológicas en FinTech.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Language Quick Footer */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Nottingham Trent Univ. (UK)</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Español (Nat) • English (B2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

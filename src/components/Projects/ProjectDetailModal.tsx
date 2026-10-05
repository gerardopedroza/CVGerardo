'use client';

import React, { useEffect } from 'react';
import { FeaturedProject, Language, cvData } from '@/data/cvData';
import {
  X,
  Building2,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  UserCheck,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: FeaturedProject | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  lang,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const content = cvData[lang];
  const t = content.ui.projects;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-950/60 shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {project.sector}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-sky-500" />
                {project.company}
              </span>
            </div>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Key Metric Banner (if available) */}
          {project.metrics && (
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
                  {project.metrics.label}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {project.metrics.value}
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-emerald-200" />
            </div>
          )}

          {/* Problem / Challenge */}
          <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 flex items-center gap-1.5 mb-1.5">
              <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <span>{t.problemTitle}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-4 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-900 dark:text-sky-300 flex items-center gap-1.5 mb-1.5">
              <Lightbulb className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>{t.solutionTitle}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* My Role / Contribution */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-1.5">
              <UserCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.roleTitle}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.roleContribution}
            </p>
          </div>

          {/* Results */}
          <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 mb-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.resultsTitle}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-emerald-200 font-medium leading-relaxed">
              {project.results}
            </p>
          </div>

          {/* Technologies & Methodologies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <span className="font-bold text-xs text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-slate-400" />
                Tecnologías & Sistemas
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-xs text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                Metodologías de Ejecución
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.methodologies.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex justify-end bg-slate-50 dark:bg-slate-950/60 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};

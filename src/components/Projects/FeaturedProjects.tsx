'use client';

import React, { useState } from 'react';
import { cvData, FeaturedProject, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import { ProjectDetailModal } from './ProjectDetailModal';
import {
  Building2,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

interface FeaturedProjectsProps {
  lang: Language;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.projects;
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Case Studies"
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {content.projects.map((proj) => (
            <div
              key={proj.id}
              className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-600 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Sector & Company */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {proj.sector}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-sky-500" />
                    {proj.company}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {proj.title}
                </h3>

                {/* Tagline */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {proj.tagline}
                </p>

                {/* Metric Badge Highlight if available */}
                {proj.metrics && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-300">
                      {proj.metrics.label}
                    </span>
                    <span className="text-base font-extrabold text-emerald-700 dark:text-emerald-400">
                      {proj.metrics.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Technologies tags & CTA Button */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800 transition-colors cursor-pointer"
                >
                  <span>{t.viewProject}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          lang={lang}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

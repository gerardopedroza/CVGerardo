'use client';

import React, { useState } from 'react';
import { cvData, ExperienceItem, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Building2,
  CheckCircle,
  Sparkles,
  Layers,
  Wrench,
  Users,
  Phone,
  UserCheck,
  TrendingUp,
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.experience;

  // Filter state
  const [selectedSector, setSelectedSector] = useState<string>('all');
  // Expanded cards state (first card open by default for immediate engagement)
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    wwb: true,
    compartamos: true,
    azteca: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allExpanded = content.experiences.reduce((acc, curr) => {
      acc[curr.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const filteredExperiences = selectedSector === 'all'
    ? content.experiences
    : content.experiences.filter((exp) => exp.sector === selectedSector);

  const sectors = [
    { id: 'all', label: lang === 'es' ? 'Todas las Experiencias' : 'All Experiences' },
    { id: 'Banking', label: lang === 'es' ? 'Banca Múltiple' : 'Commercial Banking' },
    { id: 'Payments', label: lang === 'es' ? 'Medios de Pago' : 'Payments' },
    { id: 'Financial Inclusion & Consulting', label: lang === 'es' ? 'Consultoría & Inclusión' : 'Consulting & Inclusion' },
    { id: 'Public Sector', label: lang === 'es' ? 'Sector Público' : 'Public Sector' },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Timeline"
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Sector Filter & Global Expand/Collapse controls */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSector(s.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedSector === s.id
                    ? 'bg-sky-600 text-white shadow-xs shadow-sky-600/30'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <button
              onClick={expandAll}
              className="text-sky-600 dark:text-sky-400 hover:underline px-2 py-1"
            >
              {lang === 'es' ? 'Expandir todo' : 'Expand all'}
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              onClick={collapseAll}
              className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline px-2 py-1"
            >
              {lang === 'es' ? 'Colapsar todo' : 'Collapse all'}
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-sky-200 dark:border-sky-900/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {filteredExperiences.map((exp, idx) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-sky-500 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all overflow-hidden">
                  {/* Card Header (Always Visible) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-700/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                            {exp.sector}
                          </span>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {exp.role}
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                          <span className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="text-slate-300 dark:text-slate-600">•</span>
                          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-normal">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Expand / Collapse Toggle Button */}
                      <div className="flex items-center gap-2 self-start sm:self-center mt-3 sm:mt-0">
                        <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 hidden sm:inline">
                          {isExpanded ? t.collapseDetails : t.expandDetails}
                        </span>
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>

                    {/* Executive Summary */}
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {exp.summary}
                    </p>

                    {/* Quick Highlight Preview if consulting / specific achievement */}
                    {exp.consultingClients && (
                      <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1">
                          {t.clientsTitle}:
                        </span>
                        {exp.consultingClients.map((client, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                          >
                            {client}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expanded Content (Progressive Disclosure) */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-900/40 space-y-5 animate-in fade-in duration-200">
                      {/* Achievements Section */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-2.5">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{t.achievementsTitle}</span>
                          </h4>
                          <div className="space-y-2">
                            {exp.achievements.map((ach, aIdx) => (
                              <div
                                key={aIdx}
                                className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 font-medium"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                <span>{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Responsibilities Section */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 mb-2.5">
                          <Layers className="w-3.5 h-3.5 text-sky-500" />
                          <span>{t.responsibilitiesTitle}</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Scope & Teams Managed (if applicable) */}
                      {exp.scopeAndTeam && (
                        <div className="p-3 rounded-xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900 text-xs text-sky-900 dark:text-sky-200 flex items-center gap-2">
                          <Users className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                          <span><strong>Alcance & Liderazgo de Equipo:</strong> {exp.scopeAndTeam}</span>
                        </div>
                      )}

                      {/* Technologies & Methodologies Tags */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                        {/* Technologies */}
                        <div>
                          <span className="font-bold text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5 text-slate-400" />
                            {t.technologiesTitle}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Methodologies */}
                        <div>
                          <span className="font-bold text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                            {t.methodologiesTitle}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.methodologies.map((meth, mIdx) => (
                              <span
                                key={mIdx}
                                className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-medium"
                              >
                                {meth}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Reference listed in CV */}
                      {exp.reference && (
                        <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <UserCheck className="w-3.5 h-3.5 text-sky-500" />
                            <span><strong>{t.referenceTitle}:</strong> {exp.reference.name} ({exp.reference.role})</span>
                          </div>
                          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-mono">
                            <Phone className="w-3 h-3" />
                            <span>{exp.reference.phone}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { cvData, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import {
  Layers,
  Users2,
  Landmark,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface SkillsMatrixProps {
  lang: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.skills;

  const categoryIcons: Record<number, React.ReactNode> = {
    0: <Layers className="w-5 h-5 text-sky-500" />,
    1: <Users2 className="w-5 h-5 text-blue-500" />,
    2: <Landmark className="w-5 h-5 text-indigo-500" />,
    3: <BrainCircuit className="w-5 h-5 text-cyan-500" />,
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Competency Matrix"
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {content.skillGroups.map((group, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 border transition-all ${
                group.highlight
                  ? 'bg-white dark:bg-slate-800/90 border-sky-300 dark:border-sky-700/80 shadow-md ring-1 ring-sky-400/20'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-100 dark:border-slate-700 shadow-xs">
                    {categoryIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {group.skills.length} {lang === 'es' ? 'habilidades clave' : 'key capabilities'}
                    </span>
                  </div>
                </div>

                {group.highlight && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    <Sparkles className="w-3 h-3 text-sky-500" />
                    Core Focus
                  </span>
                )}
              </div>

              {/* Skills Tags Grid */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-600 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-all cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3 text-sky-500 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

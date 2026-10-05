import React from 'react';
import { cvData, Language } from '@/data/cvData';
import { Award, Briefcase, Landmark, ShieldCheck, Users, Zap, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../UI/SectionHeading';

interface ProfessionalSnapshotProps {
  lang: Language;
}

export const ProfessionalSnapshot: React.FC<ProfessionalSnapshotProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.snapshot;

  const icons = [
    <Briefcase key="0" className="w-5 h-5 text-sky-500" />,
    <Zap key="1" className="w-5 h-5 text-emerald-500" />,
    <Award key="2" className="w-5 h-5 text-blue-500" />,
    <Users key="3" className="w-5 h-5 text-indigo-500" />,
    <Landmark key="4" className="w-5 h-5 text-amber-500" />,
  ];

  return (
    <section
      id="snapshot"
      className="py-16 bg-slate-100/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Impact Metrics"
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/60 border border-slate-100 dark:border-slate-700">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    #{idx + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  {stat.number}
                </div>

                <h3 className="mt-1 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                  {stat.label}
                </h3>
              </div>

              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-3 border-t border-slate-100 dark:border-slate-700/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Executive Statement */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-blue-950 text-white p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold mb-3">
                <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>Perfil Estratégico & Operativo</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {content.executiveSummary}
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs text-slate-200">
                <span className="block font-bold text-white text-xs uppercase tracking-wider mb-1">
                  Enfoque en Inteligencia Artificial
                </span>
                {content.aiFocusStatement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

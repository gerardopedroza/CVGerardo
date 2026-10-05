import React from 'react';
import { cvData, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import {
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  Users2,
  ShieldCheck,
  BrainCircuit,
  Award,
} from 'lucide-react';

interface WhyMeProps {
  lang: Language;
}

export const WhyMe: React.FC<WhyMeProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.whyMe;

  const pillarIcons = [
    <Layers key="0" className="w-5 h-5 text-sky-500" />,
    <TrendingUp key="1" className="w-5 h-5 text-emerald-500" />,
    <ShieldCheck key="2" className="w-5 h-5 text-blue-500" />,
    <Users2 key="3" className="w-5 h-5 text-purple-500" />,
    <Award key="4" className="w-5 h-5 text-amber-500" />,
    <BrainCircuit key="5" className="w-5 h-5 text-cyan-500" />,
  ];

  return (
    <section id="why-me" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Value"
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.whyMe.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-sky-300 dark:hover:border-sky-700/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs group-hover:scale-110 transition-transform">
                    {pillarIcons[idx % pillarIcons.length]}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Verifiable Evidence from CV */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-start gap-2 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  <strong className="text-slate-900 dark:text-white font-semibold">Evidencia real: </strong>
                  {item.evidence}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

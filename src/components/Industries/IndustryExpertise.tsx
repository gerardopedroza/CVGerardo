import React from 'react';
import { cvData, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import {
  Landmark,
  CreditCard,
  HeartHandshake,
  Building,
  CheckCircle,
} from 'lucide-react';

interface IndustryExpertiseProps {
  lang: Language;
}

export const IndustryExpertise: React.FC<IndustryExpertiseProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.industries;

  const industryIcons: Record<number, React.ReactNode> = {
    0: <Landmark className="w-5 h-5 text-sky-500" />,
    1: <CreditCard className="w-5 h-5 text-blue-500" />,
    2: <HeartHandshake className="w-5 h-5 text-emerald-500" />,
    3: <Building className="w-5 h-5 text-indigo-500" />,
  };

  return (
    <section id="industries" className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Sector Footprint"
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.industries.map((ind, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all"
            >
              <div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 w-fit mb-4 shadow-xs">
                  {industryIcons[idx]}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {ind.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {ind.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  {lang === 'es' ? 'Instituciones Clave' : 'Key Institutions'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ind.institutions.map((inst, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800"
                    >
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

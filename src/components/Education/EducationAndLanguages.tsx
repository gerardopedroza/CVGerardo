import React from 'react';
import { cvData, Language } from '@/data/cvData';
import { SectionHeading } from '../UI/SectionHeading';
import { GraduationCap, Languages, Globe, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface EducationAndLanguagesProps {
  lang: Language;
}

export const EducationAndLanguages: React.FC<EducationAndLanguagesProps> = ({ lang }) => {
  const content = cvData[lang];
  const t = content.ui.education;

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic & Languages"
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t.educationSection}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'es' ? 'Grado universitario internacional' : 'International University Degree'}
                </span>
              </div>
            </div>

            {content.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700 space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    Bachelor of Arts (Honours)
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h4>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span className="text-sky-600 dark:text-sky-400 font-bold">
                    {edu.institution}
                  </span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-normal">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {edu.location}
                  </span>
                </div>

                {edu.honors && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{edu.honors}</span>
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Languages Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t.languagesSection}
                </h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {lang === 'es' ? 'Competencias lingüísticas' : 'Language Proficiencies'}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {content.languages.map((langItem, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {langItem.language}
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {langItem.level}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {langItem.proficiencyScore}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

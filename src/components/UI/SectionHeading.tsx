import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse-subtle"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
};

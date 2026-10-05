'use client';

import React, { useState, useEffect } from 'react';
import { Language, cvData } from '@/data/cvData';
import { Navbar } from '@/components/Navigation/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { ProfessionalSnapshot } from '@/components/Snapshot/ProfessionalSnapshot';
import { WhyMe } from '@/components/WhyMe/WhyMe';
import { ExperienceTimeline } from '@/components/Experience/ExperienceTimeline';
import { FeaturedProjects } from '@/components/Projects/FeaturedProjects';
import { SkillsMatrix } from '@/components/Skills/SkillsMatrix';
import { IndustryExpertise } from '@/components/Industries/IndustryExpertise';
import { EducationAndLanguages } from '@/components/Education/EducationAndLanguages';
import { ContactSection } from '@/components/Contact/ContactSection';
import { RecruiterModeModal } from '@/components/RecruiterMode/RecruiterModeModal';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  const [lang, setLang] = useState<Language>('es');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [recruiterModeOpen, setRecruiterModeOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Initialize theme and language from system preferences and localStorage
  useEffect(() => {
    setIsMounted(true);
    // Language
    const savedLang = localStorage.getItem('cv_language') as Language;
    if (savedLang === 'es' || savedLang === 'en') {
      setLang(savedLang);
    }

    // Theme
    const savedTheme = localStorage.getItem('cv_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('cv_language', newLang);
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('cv_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('cv_theme', 'light');
      }
      return next;
    });
  };

  const content = cvData[lang];

  // Structured Data (JSON-LD) for ATS and Search Engines
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.name,
    jobTitle: content.headline,
    description: content.executiveSummary,
    email: content.email,
    telephone: content.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mexico City',
      addressCountry: 'MX',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Nottingham Trent University',
    },
    knowsAbout: [
      'Financial Services',
      'Product Management',
      'Banking',
      'Payments',
      'Financial Inclusion',
      'Digital Transformation',
      'Artificial Intelligence',
      'Agile Methodology',
      'Design Sprints',
    ],
    sameAs: [content.linkedinUrl],
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* ATS & Machine Readability Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenRecruiterMode={() => setRecruiterModeOpen(true)}
      />

      {/* Main Single Page Portfolio Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenRecruiterMode={() => setRecruiterModeOpen(true)}
        />

        {/* 2. Professional Snapshot (Quick scan metrics) */}
        <ProfessionalSnapshot lang={lang} />

        {/* 3. Why Me? (Executive value proposition) */}
        <WhyMe lang={lang} />

        {/* 4. Experience (Interactive Timeline with Progressive Disclosure) */}
        <ExperienceTimeline lang={lang} />

        {/* 5. Featured Projects & Case Studies (Detail Modals) */}
        <FeaturedProjects lang={lang} />

        {/* 6. Skills & Competency Matrix */}
        <SkillsMatrix lang={lang} />

        {/* 7. Multi-Sector Industry Footprint */}
        <IndustryExpertise lang={lang} />

        {/* 8. Education & Languages */}
        <EducationAndLanguages lang={lang} />

        {/* 9. Contact & Connect (Direct mailto, phone, LinkedIn, Download) */}
        <ContactSection lang={lang} />
      </main>

      {/* 10. Footer */}
      <Footer lang={lang} />

      {/* Recruiter Mode Modal (30s Screening View) */}
      <RecruiterModeModal
        isOpen={recruiterModeOpen}
        onClose={() => setRecruiterModeOpen(false)}
        lang={lang}
      />
    </div>
  );
}

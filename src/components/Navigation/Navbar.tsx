'use client';

import React, { useState, useEffect } from 'react';
import { cvData, Language } from '@/data/cvData';
import {
  FileDown,
  Moon,
  Sun,
  Menu,
  X,
  Briefcase,
  Zap,
  Globe,
  Sparkles,
} from 'lucide-react';
import { triggerExecutiveCelebration } from '../UI/ConfettiTrigger';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenRecruiterMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  darkMode,
  onToggleDarkMode,
  onOpenRecruiterMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const content = cvData[lang];
  const t = content.ui.nav;

  const navItems = [
    { id: 'snapshot', label: t.snapshot },
    { id: 'why-me', label: t.whyMe },
    { id: 'experience', label: t.experience },
    { id: 'projects', label: t.projects },
    { id: 'skills', label: t.skills },
    { id: 'industries', label: t.industries },
    { id: 'education', label: t.education },
    { id: 'contact', label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple scrollspy
      const sections = ['hero', ...navItems.map((item) => item.id)];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleDownloadClick = () => {
    triggerExecutiveCelebration();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 text-slate-900 dark:text-white transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-600 to-blue-700 text-white flex items-center justify-center font-bold text-base shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
              GP
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {content.name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                Financial Products & FinTech
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Recruiter Mode Trigger */}
            <button
              onClick={onOpenRecruiterMode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 transition-all cursor-pointer shadow-xs"
              title="30-Second Candidate Screening"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>{t.recruiterModeShort}</span>
            </button>

            {/* Language Selector */}
            <button
              onClick={() => onLanguageChange(lang === 'es' ? 'en' : 'es')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              <span className="font-semibold uppercase">{lang === 'es' ? 'ES' : 'EN'}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Download CV CTA */}
            <a
              href="/cv/CV.pdf"
              download="Gerardo_Pedroza_CV.pdf"
              onClick={handleDownloadClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 shadow-sm shadow-sky-600/20 hover:shadow-sky-600/30 transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onOpenRecruiterMode}
              className="p-1.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs"
              aria-label="Recruiter mode"
            >
              <Zap className="w-4 h-4" />
            </button>
            <button
              onClick={() => onLanguageChange(lang === 'es' ? 'en' : 'es')}
              className="px-2 py-1 rounded-md text-xs font-bold border border-slate-200 dark:border-slate-800"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.id
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 font-semibold'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a
              href="/cv/CV.pdf"
              download="Gerardo_Pedroza_CV.pdf"
              onClick={() => {
                handleDownloadClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg font-semibold text-xs text-white bg-sky-600 hover:bg-sky-700 shadow-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

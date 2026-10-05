# Gerardo Pedroza — Executive Digital CV & Web Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

> **Executive Digital CV & Portfolio** designed for **Gerardo Pedroza** — Leader in Financial Products Development, Payments, Financial Inclusion, and Digital Transformation with 17+ years of experience.

---

## 🌟 Key Features

* ⚡ **Recruiter Mode (30-Second Screening):** High-density modal designed specifically for hiring managers and recruiters to evaluate the candidate's core value proposition, key metrics, timeline, and contact information in under 30 seconds.
* 📄 **Official PDF Download:** Download button persistently available in the Navbar, Hero, Recruiter Mode, Contact Section, and Footer with celebratory microinteractions.
* 🌐 **Full Bilingual Support (ES / EN):** Complete real-time translation across all sections with `localStorage` persistence.
* 🌓 **Dark / Light Mode:** Adaptive color palettes with system preference detection (`prefers-color-scheme`) and state persistence.
* 📈 **Interactive Timeline with Progressive Disclosure:** Explore roles and responsibilities across Citibank, Visa, Compartamos Banco, Banco Azteca, Bansefi, Women's World Banking, and SCT, filtered by sector.
* 💼 **Featured Business Cases (Modals):** Deep-dives into real challenges, strategic solutions, leadership contributions, and quantifiable results (e.g., -60% weekly capital outflow reduction at Banco Azteca).
* 🎯 **Domain-Based Competencies:** Clear, non-arbitrary categorization of skills across Product & Strategy, Commercial Leadership, Banking & Financial Domain, and AI & Emerging Tech.
* 🤖 **ATS & SEO Friendly:** Semantic HTML5, OpenGraph tags, and Schema.org JSON-LD (`Person`) structured data for machine readability.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Interactions:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
* **Metadata & SEO:** JSON-LD Schema.org + Next.js Metadata API

---

## 📂 Project Structure

```text
cv-app/
├── public/
│   ├── cv/
│   │   └── CV.pdf                  # Official downloadable CV
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css             # Theme variables and print styles
│   │   ├── layout.tsx              # SEO & OpenGraph metadata
│   │   └── page.tsx                # Single-page portfolio application
│   ├── components/
│   │   ├── Navigation/             # Sticky Navbar with controls
│   │   ├── Hero/                   # Executive value proposition & CTAs
│   │   ├── Snapshot/               # Metric highlight cards
│   │   ├── WhyMe/                  # 6 value pillars with verifiable evidence
│   │   ├── Experience/             # Interactive timeline with filters
│   │   ├── Projects/               # Business cases & detail modal
│   │   ├── Skills/                 # Competency matrix
│   │   ├── Industries/             # Multi-institutional footprint
│   │   ├── Education/              # Degree & language certifications
│   │   ├── RecruiterMode/          # 30-second screening modal
│   │   ├── Contact/                # Direct email, phone, LinkedIn & download
│   │   ├── Footer/                 # Executive credits & navigation
│   │   └── UI/                     # Icons, headings & animations
│   └── data/
│       └── cvData.ts               # Structured bilingual source of truth
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js:** `v18.x` or higher
* **npm:** `v9.x` or higher

### Installation & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static bundle
npm run build

# Start production server
npm run start
```

---

## 📬 Contact

* **Name:** Gerardo Pedroza
* **Email:** [gerardo.p.corral@gmail.com](mailto:gerardo.p.corral@gmail.com)
* **LinkedIn:** [linkedin.com/in/gerardo-pedroza-06a1a07](https://www.linkedin.com/in/gerardo-pedroza-06a1a07/)
* **Location:** Mexico City, Mexico

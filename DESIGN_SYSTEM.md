# Gerardo Pedroza — Executive Design System Specification

## 🏛️ 1. Filosofía de Diseño

El sistema de diseño para el CV Digital y Portafolio de **Gerardo Pedroza** responde al principio rector:

> **"Executive + Technology + Premium"**
> *Permitir que el recruiter o hiring manager comprenda el valor del perfil en 5 a 10 segundos antes de pedirle profundizar en los detalles.*

Se descartan deliberadamente elementos distractores (luces neón, estética gaming, efectos 3D innecesarios o sobrecarga de gradientes) en favor de una **jerarquía visual nítida, tipografía impecable, espacios en blanco estratégicos y microinteracciones de alto valor**.

---

## 🎨 2. Paleta de Color y Tokens Semánticos

### A. Primarios Ejecutivos (Sky & Deep Slate)
* **Sky 600 (`#0284c7`):** Color de acento principal, botones primarios y enlaces activos.
* **Sky 400 (`#38bdf8`):** Acento en modo oscuro para garantizar contraste AAA.
* **Slate 900 / 950 (`#0f172a` / `#080d16`):** Fondos en Dark Mode y textos de alto contraste en Light Mode.

### B. Funcionales y Métricas (Emerald Green & Amber Gold)
* **Emerald (`#10b981` / `#059669`):** Destaca métricas cuantificables de negocio (ej. *-60% reducción de fuga semanal*).
* **Amber (`#f59e0b` / `#d97706`):** Exclusivo para el **Modo Recruiter (30s)** y avisos de disponibilidad.

### C. Tokens de Superficie y Modo Oscuro
| Token | Modo Claro | Modo Oscuro | Propósito |
| :--- | :--- | :--- | :--- |
| `--bg-app` | `#ffffff` | `#090d16` | Fondo principal de la página |
| `--bg-surface` | `#f8fafc` | `#0f172a` | Fondos de secciones alternas |
| `--bg-card` | `#ffffff` | `#111a2e` | Tarjetas de contenido y modales |
| `--border-subtle` | `#e2e8f0` | `#1e293b` | Divisores y bordes de tarjetas |
| `--text-main` | `#0f172a` | `#f8fafc` | Títulos y cuerpo principal |
| `--text-muted` | `#475569` | `#cbd5e1` | Descripciones secundarias |

---

## ✍️ 3. Tipografía & Jerarquía

El sistema utiliza una combinación tipográfica moderna y de alta legibilidad:

* **Titulares y Títulos:** `Plus Jakarta Sans` (pesos: 700 Bold, 800 ExtraBold). Confiere una presencia ejecutiva contemporánea con caracteres geométricos limpios.
* **Cuerpo de Texto y Metadatos:** `Inter` / `Plus Jakarta Sans` (pesos: 400 Regular, 500 Medium, 600 SemiBold). Optimizada para lectura rápida en pantallas de alta densidad.

### Escala Tipográfica
* **Hero Title (H1):** `3.75rem` (60px) desktop / `2.25rem` (36px) mobile.
* **Section Headings (H2):** `2.25rem` (36px) desktop / `1.875rem` (30px) mobile.
* **Card Titles (H3):** `1.25rem` (20px) desktop / `1.125rem` (18px) mobile.
* **Body Text:** `1rem` (16px) / `0.875rem` (14px).
* **Badges / Metadatos:** `0.75rem` (12px) uppercase / font-bold.

---

## 📐 4. Arquitectura de Espaciado y Grid

* **Grid Base:** Sistema de 8 puntos (8px / 16px / 24px / 32px / 48px / 64px / 96px).
* **Contenedor Máximo:** `1280px` (`max-w-7xl`).
* **Columnas Responsivas:**
  * **Desktop (≥ 1024px):** 12 columnas.
  * **Tablet (768px – 1023px):** 2 columnas.
  * **Mobile (< 768px):** 1 columna vertical con márgenes táctiles de mínimo 44x44px en botones.

---

## 🧩 5. Componentes Principales

### 1. Barra de Navegación (Sticky Glassmorphic Nav)
* `backdrop-filter: blur(12px)` con transparencia del 85%.
* Indicador de sección activa (*ScrollSpy*).
* Botón de acceso inmediato al **Modo Recruiter**.
* Selector de idioma (Español / Inglés) y switch de Dark/Light mode.
* Botón persistente de descarga de CV en PDF.

### 2. Timeline Profesional con *Progressive Disclosure*
* Permite escanear la cronología de cargos sin saturación de texto.
* Filtros interactivos por industria: *Banca Múltiple*, *Medios de Pago*, *Consultoría & Inclusión*, *Sector Público*.
* Al hacer clic en una tarjeta, se despliegan responsabilidades, logros, tecnologías, metodologías, liderazgo de equipo y referencias de contacto.

### 3. Modales de Casos de Negocio (*Featured Projects*)
* Estructura consistente en cada proyecto:
  1. **El Desafío / Problema de Negocio**
  2. **La Solución Estratégica Diseñada**
  3. **Participación y Liderazgo de Gerardo Pedroza**
  4. **Resultados Cuantitativos y Métricas Clave**

### 4. Modo Recruiter (Screening en 30 Segundos)
* Interfaz compacta de alta densidad informativa.
* Destaca los 5 principales logros, el timeline resumido de empresas (*Citi, Visa, Compartamos, Azteca, Bansefi, WWB*), top skills y botones de contacto directo con un solo clic.

---

## ♿ 6. Accesibilidad (WCAG 2.1 AA)

* **Contraste de Color:** Ratios de contraste superiores a 4.5:1 en todos los textos e interactivos.
* **Navegación por Teclado:** Soporte completo de tecla `Tab` con indicador de foco visible (`focus:ring-2 focus:ring-sky-500`) y tecla `Escape` para cerrar modales.
* **Semántica HTML5:** Uso estricto de `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<h1>`-`<h4>` y atributos `aria-label` en controles iconográficos.
* **Preferencia de Movimiento Reducido:** `@media (prefers-reduced-motion: reduce)` para desactivar transiciones complejas.

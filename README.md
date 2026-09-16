# Toqa Osama — Bilingual Modern Portfolio

A clean, modern, fully responsive bilingual (Arabic & English) portfolio website for **Toqa Osama**, built with **React**, **Tailwind CSS**, and **Lucide React** icons.

---

## 🚀 Core Features & Highlights

1. **No Profile Picture**:
   - Relies strictly on high-impact typography, modern status badges, and an interactive developer code terminal snippet.

2. **Bilingual Support (Arabic & English)**:
   - Instant language switch toggle (`AR` | `EN`).
   - Dynamic document direction (`dir="ltr"` for English, `dir="rtl"` for Arabic).
   - Optimized typography: **Inter** for English, **Cairo** & **IBM Plex Sans Arabic** for Arabic.
   - Comprehensive structured translation dictionary in `src/i18n/translations.ts`.

3. **High-Contrast Accessibility & Dual Palette**:
   - Persistent theme switcher with Sun/Moon icons.
   - **Light Mode (High Contrast)**:
     * Canvas / Background: `#F8FAFC` (ultra-clean cool slate) or pure crisp white `#FFFFFF`.
     * Cards / Containers: Pure white `#FFFFFF` with solid border (`#E2E8F0`) and soft shadow (`shadow-sm hover:shadow-md`).
     * Headings / Title Text: Deep, sharp ink black-slate (`#0F172A`) — zero washed-out gray headings.
     * Body & Descriptive Text: High-contrast charcoal gray (`#334155` / `#475569`) for effortless readability.
     * Badges & Chips: Subtle violet background (`#EDE9FE`) with deep purple text (`#5B21B6`) and clear borders (`#DDD6FE`).
     * Accent & Primary Buttons: Vibrant electric violet (`#6D28D9` to `#7C3AED`) with crisp white text.
   - **Dark Mode (Obsidian & Elevated)**:
     * Canvas: Deep obsidian background (`#0B0B10` to `#0F0E17`).
     * Elevated cards: `#171523` with solid border (`#28243D`).
     * Typography: Pure white headers (`#FFFFFF`), balanced light-gray text (`#CBD5E1`), and glowing violet/indigo accents (`#8B5CF6`).

4. **Technical Practice Feature**:
   - Dedicated showcase card for **Core Programming & Algorithmics (Python & C++)**.
   - Highlights OOP paradigms (encapsulation, abstraction, inheritance, polymorphism), modular functions, control structures, and code debugging.

5. **Interactive Actions**:
   - Direct copy-to-clipboard for Email (`toqa.osama.dev@gmail.com`) and Phone (`+20 1043112858`) with real-time confirmation toast feedback.
   - Direct LinkedIn profile link (`https://linkedin.com/in/toqa-osama-software-engineer/`).
   - Smooth scrolling navigation.

---

## 📁 Project Architecture

```
toqa-portfolio/
├── preview.html                      # Standalone zero-setup browser preview
├── index.html                        # Vite root HTML template with Google Fonts
├── package.json                      # Dependencies and scripts
├── tailwind.config.js                # Custom color palettes & fonts
├── tsconfig.json                     # TypeScript compiler configuration
├── vite.config.ts                    # Vite configuration
└── src/
    ├── main.tsx                      # React root entry point
    ├── App.tsx                       # Top-level composition
    ├── index.css                     # Tailwind setup, font bindings & glows
    ├── types/
    │   └── index.ts                  # TypeScript types for i18n & data
    ├── i18n/
    │   └── translations.ts           # Full English & Arabic dictionaries
    ├── context/
    │   ├── LanguageContext.tsx       # Dynamic bilingual & dir provider
    │   └── ThemeContext.tsx          # Dark/Light theme provider
    └── components/
        ├── Navbar.tsx                # Responsive navigation & controls
        ├── Hero.tsx                  # Typographic hero & code snippet
        ├── Education.tsx             # FCAI-CU degree & coursework
        ├── Experience.tsx            # DEPI Data Engineering Trainee
        ├── TechnicalPractice.tsx     # Core Programming & Algorithmics
        ├── Skills.tsx                # 4 grouped skill categories
        ├── Certifications.tsx        # DECI Level 2 & Level 3
        ├── Contact.tsx               # Direct channels & copy buttons
        └── Footer.tsx                # Copyright & back-to-top
```

---

## ⚡ Quick Start

### Option A: Instant Zero-Setup Preview (No Node.js Required)
Simply open [`preview.html`](./preview.html) in Google Chrome, Microsoft Edge, Firefox, or any modern web browser.

### Option B: Running with Vite & Node.js
If Node.js is installed on your machine:
```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build
```

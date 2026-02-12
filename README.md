# 🌊 Solarwave Portfolio (Vue)

[![Vue](https://img.shields.io/badge/Vue-3-42B883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

Modern single-page Vue portfolio with dynamic interactions, Tailwind-driven UI structure, and full quality gates.

> NOTE: all names, companies, projects, and achievements in this repo are demo-only content for a pet project template.

---

## 📚 Table of Contents

- Highlights
- Tech Stack
- Architecture
- Quick Start
- Scripts
- Quality and Testing
- Tailwind and Styling
- Animation QA Checklist
- Deployment
- Project Structure
- Data and Content Policy
- License

---

## ✨ Highlights

### 🎨 UI and Interaction Features

- Sticky header with active-section tracking and animated scroll progress line.
- Hero with rotating role pill and animated reveal entrance.
- Continuous skill marquee rows.
- Interactive project cards with pointer tilt behavior.
- Responsive experience timeline and contact section.
- Ambient gradient background with pointer-reactive glow.
- Mobile-first behavior with dedicated nav panel.

### ⚙️ Engineering Features

- Vue 3 + TypeScript strict mode.
- Vite 7 pipeline for fast development and builds.
- Tailwind CSS 4 integrated and used across component layout/styling.
- ESLint 9 flat config (`typescript-eslint` + `eslint-plugin-vue`).
- Vitest + Testing Library + jsdom test foundation.
- Single command quality gate: `npm run check`.
- Optional single-file output mode via `vite-plugin-singlefile`.

---

## 🛠 Tech Stack

| Layer | Technology |
| --- | --- |
| UI framework | Vue 3 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + focused custom CSS |
| Build tool | Vite 7 |
| Single-file build | `vite-plugin-singlefile` |
| Linting | ESLint 9 + `typescript-eslint` + `eslint-plugin-vue` |
| Testing | Vitest 4 + `@testing-library/vue` + jsdom |
| Deployment target | Netlify (static hosting) |

---

## 🧱 Architecture

The app is a one-page layout split into focused Vue components:

- `AppHeader` - sticky nav, mobile menu, active section.
- `HeroSection` - main intro and rotating role.
- `SkillsTape` - marquee tech/skills strip.
- `ProjectShowcase` - project cards and tags.
- `JourneySection` - timeline with career highlights.
- `ContactSection` - contact links and form interaction.
- `SiteFooter` - closing info and back-to-top action.

Content data lives in `src/data/portfolio.ts`.

---

## 🚀 Quick Start

### ✅ Prerequisites

- Node.js 20+
- npm 10+

### 💻 Install and Run

```bash
npm install
npm run dev
```

Open local URL shown by Vite (usually `http://localhost:5173`).

---

## 📜 Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run build:single` | Single-file build mode |
| `npm run preview` | Preview production build locally |
| `npm run typecheck` | Type checks with `vue-tsc` |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run test` | Vitest watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Generate coverage report |
| `npm run check` | Typecheck + lint + tests + build |

---

## ✅ Quality and Testing

### 🧹 Lint Rules

- Flat config in `eslint.config.js`
- TypeScript rules from `typescript-eslint`
- Vue SFC rules from `eslint-plugin-vue`

### 🧪 Test Scope

Current tests validate:

- main navigation and sections render
- core hero/projects/contact headings render
- footer navigation action is available

Run all checks:

```bash
npm run check
```

---

## 🎛 Tailwind and Styling

Tailwind is enabled through:

- `@tailwindcss/vite` plugin in `vite.config.ts`
- `@import 'tailwindcss';` in `src/style.css`

Most component-level layout/styling is implemented via Tailwind utility classes.  
Custom CSS is kept for global background/reveal effects and custom keyframe animations.

---

## ✅ Animation QA Checklist

Use this quick manual pass after visual/style changes:

1. Header (`AppHeader.vue`): scroll page and confirm top progress line scales smoothly and active nav item updates by section.
2. Hero role switch (`HeroSection.vue`): role chip changes every ~2.3s with fade/slide transition.
3. Section reveal (`App.vue` + `src/style.css`): each section appears with fade + upward motion when entering viewport.
4. Skills tape (`SkillsTape.vue`): both rows move continuously and loop without visible jump.
5. Project cards (`ProjectShowcase.vue`): hover/move pointer over cards and confirm tilt reacts to cursor and resets on leave.
6. Contact feedback (`ContactSection.vue`): submit form and confirm button text switches to success state, then resets.
7. Ambient motion (`src/style.css`): background orbs float subtly over time and pointer glow follows cursor.
8. Reduced motion check (optional): enable OS/browser reduced motion and verify heavy animations are toned down or stopped.

---

## 🌐 Deployment

### Netlify (Recommended)

1. Push repository to GitHub
2. Connect repo in Netlify
3. Build settings are preconfigured in `netlify.toml`
4. Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Manual Deploy

```bash
npm run build
```

Upload the `dist` folder to any static hosting provider.

---

## 📁 Project Structure

```text
vue-css3-solarwave-portfolio/
|-- public/
|   `-- _redirects
|-- src/
|   |-- components/
|   |   |-- AppHeader.vue
|   |   |-- ContactSection.vue
|   |   |-- HeroSection.vue
|   |   |-- JourneySection.vue
|   |   |-- ProjectShowcase.vue
|   |   |-- SiteFooter.vue
|   |   `-- SkillsTape.vue
|   |-- data/
|   |   `-- portfolio.ts
|   |-- test/
|   |   `-- setup.ts
|   |-- App.test.ts
|   |-- App.vue
|   |-- main.ts
|   `-- style.css
|-- eslint.config.js
|-- index.html
|-- LICENSE
|-- netlify.toml
|-- package.json
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
`-- vitest.config.ts
```

---

## ⚠️ Data and Content Policy

- This project is a design/engineering template.
- Profile and project data are fictional demo data.
- Replace all sample content with real portfolio data before publishing.

---

## 📄 License

MIT License. See `LICENSE`.

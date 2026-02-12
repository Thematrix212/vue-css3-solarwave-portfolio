export interface BrandProfile {
  name: string;
  handle: string;
  tagline: string;
  location: string;
  availability: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface PortfolioProject {
  title: string;
  summary: string;
  stack: string[];
  period: string;
  type: string;
  link: string;
  accentStart: string;
  accentEnd: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export const brand: BrandProfile = {
  name: 'CodeSculptor',
  handle: '@codesculptor',
  tagline: 'Frontend engineer focused on dynamic interfaces, strong visual systems, and fast products.',
  location: 'Remote, UTC+3',
  availability: 'Open for freelance and product teams',
};

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const rotatingRoles: string[] = [
  'Vue Product Engineer',
  'Interaction Designer',
  'Design System Builder',
  'Performance-Driven Frontend Dev',
];

export const heroStats: HeroStat[] = [
  { value: '6+', label: 'years in web product development' },
  { value: '52', label: 'projects delivered with design handoff' },
  { value: '94%', label: 'repeat clients and long-term support' },
];

export const skillTape: string[] = [
  'Vue 3',
  'TypeScript',
  'Vite',
  'Pinia',
  'Nuxt',
  'GSAP',
  'Web Animations API',
  'Figma to code',
  'A11y',
  'Playwright',
  'Storybook',
  'CSS architecture',
  'Motion design',
  'Design tokens',
  'Performance budgets',
];

export const projects: PortfolioProject[] = [
  {
    title: 'Pulse Commerce',
    summary:
      'Composable e-commerce storefront with fast product discovery, dynamic filters, and cart micro-interactions.',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Stripe'],
    period: '2025',
    type: 'Retail Platform',
    link: '#',
    accentStart: '#00a896',
    accentEnd: '#2364aa',
  },
  {
    title: 'Atlas Ops Board',
    summary:
      'Operations dashboard with real-time alerts, map overlays, and workflow automations for regional teams.',
    stack: ['Vue 3', 'WebSocket', 'ECharts', 'Node API'],
    period: '2024',
    type: 'SaaS Dashboard',
    link: '#',
    accentStart: '#ff7f51',
    accentEnd: '#f4a259',
  },
  {
    title: 'Studio Chronicle',
    summary:
      'Editorial portfolio engine with fluid typography, scroll choreography, and a reusable block-based CMS.',
    stack: ['Nuxt', 'Content APIs', 'Animation API', 'SSR'],
    period: '2024',
    type: 'Content Platform',
    link: '#',
    accentStart: '#2364aa',
    accentEnd: '#00a896',
  },
  {
    title: 'Kite Finance',
    summary:
      'Consumer finance app redesign with modular calculators, progressive disclosure, and accessible onboarding.',
    stack: ['Vue 3', 'Vitest', 'Design Tokens', 'i18n'],
    period: '2023',
    type: 'Fintech Product',
    link: '#',
    accentStart: '#f4a259',
    accentEnd: '#ff7f51',
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Northline Studio',
    period: '2023 - Present',
    highlights: [
      'Led migration from legacy SPA to modular Vue architecture used by four product squads.',
      'Introduced design token pipeline that cut UI regressions and accelerated release cycles.',
      'Built motion guidelines and reusable components for marketing and app surfaces.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Gridcraft Digital',
    period: '2020 - 2023',
    highlights: [
      'Shipped interactive customer portals with account dashboards and analytics flows.',
      'Improved Core Web Vitals performance on key pages and reduced JS payload.',
      'Collaborated with product designers on responsive systems for desktop and mobile.',
    ],
  },
  {
    role: 'UI Developer',
    company: 'Freelance',
    period: '2018 - 2020',
    highlights: [
      'Delivered custom portfolio and landing sites for agencies and independent founders.',
      'Created reusable page templates and animation kits for rapid client launches.',
      'Provided mentoring and code reviews for junior frontend developers.',
    ],
  },
];

export const contacts: ContactLink[] = [
  { label: 'Email', value: 'hello@codesculptor.dev', href: 'mailto:hello@codesculptor.dev' },
  { label: 'Telegram', value: 't.me', href: 'https://t.me/' },
  { label: 'GitHub', value: 'github.com/smart-developer1791', href: 'https://github.com/smart-developer1791' },
  { label: 'LinkedIn', value: 'linkedin.com', href: 'https://www.linkedin.com/' },
];

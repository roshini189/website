import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GitBranch,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MousePointerClick,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  TerminalSquare,
  X,
  Zap,
} from 'lucide-react';
import * as THREE from 'three';

type ProjectCategory = 'AI/Data' | 'Full Stack' | 'Platform';

interface Project {
  id: number;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  impact: string;
  role: string;
  technologies: string[];
  github: string;
  category: ProjectCategory;
  image: string;
  accent: string;
}

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface AudienceMode {
  id: string;
  label: string;
  title: string;
  proof: string;
  stats: string[];
}

const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'awards', 'contact'];

const sectionEyebrows: Record<string, string> = {
  about: 'Interactive proof',
  experience: 'Expandable timeline',
  projects: 'Project lab',
  skills: 'Capability map',
  education: 'Academic foundation',
  awards: 'Signals',
  contact: 'Hire-ready',
};

const rotatingRoles = [
  'AI platform engineer',
  'full-stack systems builder',
  'cloud-native product engineer',
  'data-driven problem solver',
];

const audienceModes: AudienceMode[] = [
  {
    id: 'recruiter',
    label: 'Recruiter scan',
    title: 'Fast path to fit',
    proof: 'Clear outcomes, enterprise scope, resume access, and focused project evidence in the first few scrolls.',
    stats: ['5+ years', '30+ clients', '60% faster PRs'],
  },
  {
    id: 'engineering',
    label: 'Engineering depth',
    title: 'Systems that survive scale',
    proof: 'Spring Boot, GraphQL, Kafka, Kubernetes, observability, secure auth, and reusable platform patterns.',
    stats: ['Kafka APIs', 'GraphQL', 'K8s/Helm'],
  },
  {
    id: 'ai',
    label: 'AI/data signal',
    title: 'Applied AI, not buzzwords',
    proof: 'RAG apps, ML pipelines, NLP flows, developer agents, model evaluation, and practical data products.',
    stats: ['RAG/LLM', 'NLP', 'ML models'],
  },
];

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectCategory, setActiveProjectCategory] = useState<'All' | ProjectCategory>('All');
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [activeAudienceId, setActiveAudienceId] = useState('recruiter');
  const [activeProjectId, setActiveProjectId] = useState(1);
  const [expandedExperience, setExpandedExperience] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 95, damping: 24, restDelta: 0.001 });

  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      title: 'AIResearchEase',
      eyebrow: 'RAG research assistant',
      description: 'A secure RAG app for paper uploads, semantic retrieval, and context-aware local LLM answers.',
      longDescription:
        'AIResearchEase simplifies academic research workflows with Retrieval-Augmented Generation, FAISS semantic search, local LLM inference, and a Streamlit interface designed for fast document exploration.',
      impact: '35% performance improvement after model and retrieval tuning',
      role: 'AI app engineering, retrieval design, model tuning',
      technologies: ['Streamlit', 'Ollama API', 'Python', 'NLP', 'RAG', 'LLM', 'FAISS', 'Docker'],
      github: 'https://github.com/roshini189/AI_Research_Ease',
      category: 'AI/Data',
      image: `${baseUrl}images/Ai.jpeg`,
      accent: '#f4c542',
    },
    {
      id: 2,
      title: 'SafeClick',
      eyebrow: 'Phishing detection',
      description: 'A Django and JavaScript threat-detection app that evaluates suspicious URLs in real time.',
      longDescription:
        'SafeClick classifies URLs as safe or phishing by extracting structure, sensitive terms, dot count, and content patterns, then returning real-time risk insights.',
      impact: '99.95% model accuracy reported across detection tests',
      role: 'Model integration, Django backend, interaction design',
      technologies: ['Python', 'Django', 'JavaScript', 'RFECV', 'Deep Learning', 'Gradient Boosting'],
      github: 'https://github.com/roshini189/Safeclick',
      category: 'AI/Data',
      image: `${baseUrl}images/images.jpeg`,
      accent: '#24b8ad',
    },
    {
      id: 3,
      title: 'Agricitease',
      eyebrow: 'Secure marketplace',
      description: 'A direct-to-customer farm commerce platform with encrypted Java services and Angular workflows.',
      longDescription:
        'Agricitease reduces supply-chain friction by connecting farmers and customers directly with Angular, Spring Boot, MySQL, AES-encrypted transactions, REST APIs, and IBM Watson support flows.',
      impact: 'Built for transparent pricing, secure transactions, and direct market access',
      role: 'Full-stack architecture, secure payments, support automation',
      technologies: ['Java', 'Angular', 'JavaScript', 'MySQL', 'Spring Boot', 'REST API'],
      github: 'https://github.com/roshini189/Agricitease',
      category: 'Full Stack',
      image: `${baseUrl}images/Agricitease.jpeg`,
      accent: '#ff6b4a',
    },
    {
      id: 4,
      title: 'ViceDetect',
      eyebrow: 'Behavior prediction',
      description: 'A machine-learning pipeline predicting smoking and drinking habits through ensemble modeling.',
      longDescription:
        'ViceDetect analyzes behavioral patterns with feature engineering, K-means clustering, XGBoost, statistical analysis, visualizations, and confidence-oriented evaluation.',
      impact: '73.2% prediction accuracy with interpretable model outputs',
      role: 'Feature engineering, modeling, evaluation, visualization',
      technologies: ['R', 'XGBoost', 'K-means', 'Machine Learning', 'Data Visualization', 'Statistics'],
      github: 'https://github.com/roshini189/ViceDetect',
      category: 'AI/Data',
      image: `${baseUrl}images/vice.jpeg`,
      accent: '#a78bfa',
    },
    {
      id: 5,
      title: 'Customer Revenue Predictor',
      eyebrow: 'Regression forecasting',
      description: 'A customer revenue forecasting workflow with regression models and robust data preprocessing.',
      longDescription:
        'This project forecasts customer revenue for online retail by cleaning transactional data, imputing missing values, transforming skewed features, and comparing OLS, PLS, LASSO, and MARS models.',
      impact: 'MARS selected as top performer by RMSE after cross-validation',
      role: 'Data cleaning, regression modeling, feature transformation',
      technologies: ['R', 'Mice', 'RStudio', 'Caret', 'Regression', 'MARS'],
      github: 'https://github.com/roshini189/Customer-Revenue-Predictor',
      category: 'AI/Data',
      image: `${baseUrl}images/crp.jpeg`,
      accent: '#38bdf8',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      eyebrow: 'Personal product surface',
      description: 'A responsive React portfolio presenting engineering experience, outcomes, and contact paths.',
      longDescription:
        'The portfolio brings together professional experience, selected projects, technical skills, awards, education, and resume access with responsive layouts, accessible controls, and GitHub Pages deployment.',
      impact: 'Rebuilt as an interactive recruiter journey with polished scanning paths',
      role: 'React development, UI strategy, responsive implementation',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Framer Motion', 'GitHub Pages'],
      github: 'https://github.com/roshini189/website',
      category: 'Platform',
      image: `${baseUrl}images/port.jpeg`,
      accent: '#f97316',
    },
  ], [baseUrl]);

  const skills = useMemo<Skill[]>(() => [
    { name: 'Python', level: 95, icon: Code2, category: 'Languages' },
    { name: 'JavaScript / TypeScript', level: 90, icon: Code2, category: 'Languages' },
    { name: 'Java', level: 88, icon: Code2, category: 'Languages' },
    { name: 'R', level: 88, icon: Code2, category: 'Languages' },
    { name: 'React / Next.js', level: 92, icon: Globe2, category: 'Frontend' },
    { name: 'Angular', level: 90, icon: Globe2, category: 'Frontend' },
    { name: 'HTML / CSS / SCSS', level: 92, icon: Globe2, category: 'Frontend' },
    { name: 'Spring Boot', level: 90, icon: Server, category: 'Backend' },
    { name: 'Node.js / Express', level: 88, icon: Server, category: 'Backend' },
    { name: 'GraphQL', level: 85, icon: Server, category: 'Backend' },
    { name: 'Kafka', level: 85, icon: Server, category: 'Backend' },
    { name: 'PostgreSQL / MongoDB', level: 87, icon: Database, category: 'Data' },
    { name: 'Azure SQL / MySQL', level: 84, icon: Database, category: 'Data' },
    { name: 'Machine Learning', level: 90, icon: Brain, category: 'AI/ML' },
    { name: 'RAG / LLM Apps', level: 90, icon: Brain, category: 'AI/ML' },
    { name: 'NLP / Deep Learning', level: 85, icon: Brain, category: 'AI/ML' },
    { name: 'AWS / Azure', level: 83, icon: Zap, category: 'Cloud' },
    { name: 'Docker / Kubernetes', level: 80, icon: TerminalSquare, category: 'Cloud' },
    { name: 'Prometheus / Grafana', level: 80, icon: BarChart3, category: 'Cloud' },
    { name: 'Git / CI/CD', level: 90, icon: GitBranch, category: 'Tools' },
    { name: 'Jira / Bitbucket', level: 85, icon: GitBranch, category: 'Tools' },
    { name: 'JUnit / Postman', level: 84, icon: ShieldCheck, category: 'Tools' },
  ], []);

  const experience: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Cotiviti (Endeavour Technologies Inc)',
      period: 'Nov 2025 - Present',
      description: 'Cloud-native healthcare microservices, event-driven pipelines, and AI-powered engineering tools.',
      achievements: [
        'Architected Java and Spring Boot microservices with GraphQL APIs and Kafka event layers for high-volume claim adjudication workflows.',
        'Engineered a custom MCP server connecting Jira, production logs, context agents, and skills for spec-based development.',
        'Built AI review and defect-analysis agents for Spring Boot, GraphQL, and Angular code, accelerating pull-request cycles by 60%.',
        'Created a reusable report-configuration framework for 30+ healthcare clients, eliminating 90% of manual onboarding work.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Community Dreams Foundation',
      period: 'Jul 2025 - Oct 2025',
      description: 'Angular micro-frontends, Go services, MongoDB indexing, and AWS ECS scaling for fund workflows.',
      achievements: [
        'Reduced high-traffic disruption by 80% with reusable UI components and dynamic resource allocation.',
        'Optimized MongoDB document data for 1B+ real-time records across 100+ client accounts.',
        'Reduced bundle size with lazy-loaded Angular modules, NgRx state management, and reusable components.',
      ],
    },
    {
      title: 'Application Developer',
      company: 'University of Oklahoma',
      period: 'Aug 2023 - May 2025',
      description: 'Legacy system rebuilds and AI/ML-integrated platforms serving thousands of students and faculty.',
      achievements: [
        'Increased engagement by 40% with personalized React learning features and expert verification support.',
        'Improved Angular ISS app performance by 30% with reusable components, lazy loading, chat support, and dashboards.',
        'Built OAuth 2.0 and JWT access flows for 5,000+ users with zero security incidents.',
        'Created a kidney-stone detection ML app using Fuzzy C-means, GLCM, and DWT techniques.',
      ],
    },
    {
      title: 'Software Engineer / Analyst',
      company: 'Deloitte',
      period: '2022 - 2023',
      description: 'Enterprise web and cloud delivery across Java, Angular, AWS, Kubernetes, Helm, and CI/CD.',
      achievements: [
        'Launched Career Compass to turn Credly data into skill tracking, milestone dashboards, and networking workflows.',
        'Designed Angular and TypeScript resource-tracking flows for 40 business units with secure authentication.',
        'Delivered Java, Java EE, and Spring Boot REST APIs with JSON and XML integrations.',
        'Earned the Game Changer Award for operational delivery across 12 states.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Talentsprint',
      period: 'Aug 2021 - May 2022',
      description: 'Secure commerce and rental platforms with Angular, Java, Django, Elasticsearch, and NLP support.',
      achievements: [
        'Delivered an Angular and Java commerce platform with AES-256 transactions and IBM Watson chat support.',
        'Implemented REST APIs with JPA, Hibernate, and MySQL composite indexes for sub-second response times.',
        'Built a Django rental platform with Elasticsearch search and named-entity-recognition chatbot flows.',
      ],
    },
  ];

  const activeAudience = audienceModes.find((mode) => mode.id === activeAudienceId) ?? audienceModes[0];
  const filteredProjects = activeProjectCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeProjectCategory);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const filteredSkills = activeSkillCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeSkillCategory);
  const projectCategories: Array<'All' | ProjectCategory> = ['All', 'AI/Data', 'Full Stack', 'Platform'];
  const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Data', 'AI/ML', 'Cloud', 'Tools'];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % rotatingRoles.length);
    }, 2300);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const current = navItems.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    setSpotlight({ x: event.clientX, y: event.clientY });
  };

  const runRecruiterTour = () => {
    setActiveAudienceId('recruiter');
    setActiveProjectCategory('All');
    setActiveProjectId(1);
    scrollToSection('projects');
  };

  return (
    <div
      className="site-shell min-h-screen text-[#f8f5ef]"
      onPointerMove={handlePointerMove}
      style={{
        '--spotlight-x': `${spotlight.x}px`,
        '--spotlight-y': `${spotlight.y}px`,
      } as CSSProperties}
    >
      <motion.div
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-[#ff6b4a] via-[#f4c542] to-[#24b8ad]"
        style={{ scaleX: scrollProgress }}
      />
      <nav
        className={`fixed top-0 z-[70] w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-[#09100f]/88 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4c542] text-sm font-black text-[#08110f] shadow-[0_0_28px_rgba(244,197,66,0.28)]">
              RT
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.24em] text-white">Roshini</span>
              <span className="block text-xs font-bold text-[#b9c8c0]">Interactive Portfolio</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className={`rounded-xl px-3 py-2 text-sm font-bold capitalize transition ${
                  activeSection === item
                    ? 'bg-white text-[#08110f]'
                    : 'text-[#dbe7df] hover:bg-white/10 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`${baseUrl}images/Roshini_Talluru_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-button hidden items-center gap-2 rounded-xl bg-[#ff6b4a] px-4 py-2 text-sm font-black text-white shadow-[0_14px_30px_rgba(255,107,74,0.25)] sm:flex"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="rounded-xl border border-white/15 p-2 text-white lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#09100f] lg:hidden"
            >
              <div className="grid gap-1 px-4 py-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => scrollToSection(item)}
                    className="rounded-xl px-3 py-3 text-left text-sm font-black capitalize text-[#f8f5ef] hover:bg-white/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
          <NeuralHero />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(244,197,66,0.14),transparent_22rem)]" />
          <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-8 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-[#fff3c7] backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Available for software engineering roles
              </div>
              <h1 className="max-w-4xl text-6xl font-black leading-[0.86] tracking-normal sm:text-7xl lg:text-8xl">
                Roshini Talluru
              </h1>
              <div className="mt-5 h-10 overflow-hidden text-2xl font-black text-[#f4c542] sm:text-3xl">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingRoles[roleIndex]}
                    initial={{ y: 26, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -26, opacity: 0 }}
                    transition={{ duration: 0.38 }}
                    className="block"
                  >
                    {rotatingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#dfe8e1] sm:text-xl">
                I build full-stack products, AI tools, healthcare-scale microservices, and data systems that recruiters can evaluate quickly and engineering teams can trust in production.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={runRecruiterTour}
                  className="interactive-button inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4c542] px-5 py-3 text-sm font-black text-[#08110f] shadow-[0_18px_36px_rgba(244,197,66,0.22)]"
                >
                  <Rocket className="h-4 w-4" />
                  Run Recruiter Tour
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="interactive-button inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur hover:bg-white/15"
                >
                  <MousePointerClick className="h-4 w-4" />
                  Open Project Lab
                </button>
                <a
                  href="mailto:roshini_t@outlook.com"
                  className="interactive-button inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-black text-white hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#f4c542] transition hover:text-white"
              >
                <ChevronDown className="h-5 w-5" />
                Explore proof deck
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="grid gap-4"
            >
              <div className="glass-panel overflow-hidden rounded-3xl">
                <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="relative min-h-[380px] overflow-hidden bg-[#f8f5ef]">
                    <img
                      src={`${baseUrl}images/bio.jpeg`}
                      alt="Roshini Talluru"
                      className="h-full min-h-[380px] w-full object-cover object-center"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08110f] to-transparent p-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#f4c542] px-3 py-2 text-xs font-black text-[#08110f]">
                        <MapPin className="h-3.5 w-3.5" />
                        Frisco, Texas
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0d1714] p-5">
                    <p className="text-xs font-black uppercase text-[#f4c542]">Choose the hiring lens</p>
                    <div className="mt-4 grid gap-2">
                      {audienceModes.map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setActiveAudienceId(mode.id)}
                          className={`rounded-2xl border p-4 text-left transition ${
                            activeAudienceId === mode.id
                              ? 'border-[#f4c542] bg-[#f4c542] text-[#08110f]'
                              : 'border-white/10 bg-white/[0.06] text-white hover:border-white/25 hover:bg-white/[0.1]'
                          }`}
                        >
                          <span className="text-sm font-black">{mode.label}</span>
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeAudience.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.24 }}
                        className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4"
                      >
                        <h2 className="text-2xl font-black text-white">{activeAudience.title}</h2>
                        <p className="mt-3 text-sm font-semibold leading-6 text-[#cfddd5]">{activeAudience.proof}</p>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {activeAudience.stats.map((stat) => (
                            <span key={stat} className="rounded-xl bg-white/[0.08] px-2 py-2 text-center text-xs font-black text-[#f8f5ef]">
                              {stat}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell bg-[#f8f5ef] text-[#08110f]">
          <SectionHeader title="A portfolio that reacts to what recruiters need to see" id="about" />
          <div className="grid gap-5 lg:grid-cols-3">
            <InteractiveProofCard
              icon={Server}
              title="Production Architecture"
              body="Spring Boot microservices, GraphQL APIs, Kafka event layers, Kubernetes delivery, and observability."
              stat="30+ enterprise workflows"
            />
            <InteractiveProofCard
              icon={Brain}
              title="AI That Ships"
              body="Custom MCP server, AI review agents, RAG apps, NLP flows, and model-backed decision systems."
              stat="60% faster PR cycles"
            />
            <InteractiveProofCard
              icon={ShieldCheck}
              title="Secure Product Delivery"
              body="Healthcare-scale platforms, OAuth/JWT flows, encrypted transactions, and zero-incident access paths."
              stat="5,000+ users secured"
            />
          </div>
        </section>

        <section id="experience" className="section-shell bg-[#09100f] text-white">
          <SectionHeader title="Role timeline with proof on demand" id="experience" inverted />
          <div className="grid gap-4">
            {experience.map((exp, index) => {
              const isExpanded = expandedExperience === index;
              return (
                <motion.article
                  key={`${exp.company}-${exp.period}`}
                  layout
                  className={`timeline-item rounded-3xl border p-5 transition ${
                    isExpanded ? 'border-[#f4c542] bg-white/[0.09]' : 'border-white/10 bg-white/[0.045]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedExperience(isExpanded ? -1 : index)}
                    className="grid w-full gap-4 text-left lg:grid-cols-[0.25fr_0.45fr_0.3fr] lg:items-center"
                    aria-expanded={isExpanded}
                  >
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f4c542] px-3 py-2 text-xs font-black uppercase text-[#08110f]">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span>
                      <span className="block text-2xl font-black text-white">{exp.title}</span>
                      <span className="mt-1 block text-sm font-black text-[#72d8cf]">{exp.company}</span>
                    </span>
                    <span className="text-sm font-semibold leading-6 text-[#cfddd5]">{exp.description}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 grid gap-3 md:grid-cols-2">
                          {exp.achievements.map((achievement) => (
                            <div key={achievement} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                              <CheckCircle2 className="h-5 w-5 text-[#f4c542]" />
                              <p className="mt-3 text-sm font-semibold leading-6 text-[#f4f1e8]">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="section-shell bg-[#f8f5ef] text-[#08110f]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader title="Project lab with live spotlight" id="projects" align="left" />
            <SegmentedControl
              items={projectCategories}
              activeItem={activeProjectCategory}
              onChange={(item) => {
                setActiveProjectCategory(item);
                const nextProject = item === 'All' ? projects[0] : projects.find((project) => project.category === item);
                if (nextProject) setActiveProjectId(nextProject.id);
              }}
              label="Project category"
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
            <div className="grid gap-3">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  className={`project-switch rounded-3xl border p-4 text-left transition ${
                    activeProject.id === project.id
                      ? 'border-[#08110f] bg-[#08110f] text-white shadow-[0_18px_45px_rgba(8,17,15,0.18)]'
                      : 'border-black/10 bg-white text-[#08110f] hover:-translate-y-1 hover:border-[#f4c542]'
                  }`}
                >
                  <span className="text-xs font-black uppercase" style={{ color: activeProject.id === project.id ? project.accent : '#c2412d' }}>
                    {project.eyebrow}
                  </span>
                  <span className="mt-2 block text-xl font-black">{project.title}</span>
                  <span className={`mt-2 block text-sm font-semibold leading-6 ${activeProject.id === project.id ? 'text-[#dbe7df]' : 'text-[#514a42]'}`}>
                    {project.impact}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeProject.id}
                initial={{ opacity: 0, x: 22 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -22 }}
                transition={{ duration: 0.32 }}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_80px_rgba(8,17,15,0.16)]"
              >
                <div className="relative min-h-[340px] overflow-hidden bg-[#08110f]">
                  <img
                    src={activeProject.image}
                    alt={`${activeProject.title} project preview`}
                    className="h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08110f] via-[#08110f]/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="rounded-full px-3 py-2 text-xs font-black uppercase text-[#08110f]" style={{ background: activeProject.accent }}>
                      {activeProject.category}
                    </span>
                    <h3 className="mt-4 text-4xl font-black text-white">{activeProject.title}</h3>
                  </div>
                </div>
                <div className="grid gap-5 p-6 lg:grid-cols-[1fr_0.72fr]">
                  <div>
                    <p className="text-base font-semibold leading-8 text-[#3d463f]">{activeProject.longDescription}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span key={tech} className="rounded-full bg-[#edf3ef] px-3 py-2 text-xs font-black text-[#22312b]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-3xl bg-[#e0f7f4] p-5">
                      <p className="text-xs font-black uppercase text-[#0f766e]">Outcome</p>
                      <p className="mt-2 text-sm font-black leading-6 text-[#083a36]">{activeProject.impact}</p>
                    </div>
                    <div className="rounded-3xl bg-[#fff1c7] p-5">
                      <p className="text-xs font-black uppercase text-[#8a5f00]">Role</p>
                      <p className="mt-2 text-sm font-black leading-6 text-[#3b2c00]">{activeProject.role}</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(activeProject)}
                        className="interactive-button inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#08110f] px-4 py-3 text-sm font-black text-white"
                      >
                        <FileText className="h-4 w-4" />
                        Details
                      </button>
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-button inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-black/10 px-4 py-3 text-sm font-black text-[#08110f]"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        <section id="skills" className="section-shell bg-[#08110f] text-white">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader title="Capability map for modern product engineering" id="skills" align="left" inverted />
            <SegmentedControl
              items={skillCategories}
              activeItem={activeSkillCategory}
              onChange={setActiveSkillCategory}
              label="Skill category"
              inverted
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
            <div className="skill-orbit relative min-h-[360px] rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
              <div className="absolute inset-8 rounded-full border border-[#f4c542]/20" />
              <div className="absolute inset-16 rounded-full border border-[#24b8ad]/20" />
              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-center">
                <p className="text-sm font-black uppercase text-[#f4c542]">Active Stack</p>
                <h3 className="mt-3 text-5xl font-black">{activeSkillCategory}</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-[#cfe0d8]">
                  {filteredSkills.length} highlighted skills across production engineering, AI, data, and delivery tooling.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {filteredSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.025 }}
                    className="rounded-3xl border border-white/10 bg-white/[0.07] p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4c542] text-[#08110f]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-black text-white">{skill.name}</h3>
                          <p className="text-sm font-bold text-[#cfe0d8]">{skill.category}</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-[#f4c542]">{skill.level}%</span>
                    </div>
                    <div className="mt-5 h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="h-2 rounded-full bg-gradient-to-r from-[#ff6b4a] via-[#f4c542] to-[#24b8ad]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="section-shell bg-[#f8f5ef] text-[#08110f]">
          <SectionHeader title="Computer science foundation with applied research" id="education" />
          <div className="grid gap-5 lg:grid-cols-2">
            <EducationCard
              degree="M.S. in Computer Science"
              school="University of Oklahoma, Norman, OK"
              period="Aug 2023 - May 2025"
              details={[
                'Dorothy Grace Barkow Scholarship recipient for academic excellence.',
                'Coursework in Machine Learning, Advanced Data Mining, Database Systems, Deep Learning, Healthcare Analytics, and Big Data.',
              ]}
            />
            <EducationCard
              degree="B.Tech in Computer Science and Engineering"
              school="BVRIT Hyderabad"
              period="2017 - 2021"
              details={[
                'Graduated with First Class Distinction.',
                'Participated in research and the Women in Software Engineering Program.',
              ]}
            />
          </div>
        </section>

        <section id="awards" className="section-shell bg-[#ede7dc] text-[#08110f]">
          <SectionHeader title="Recognition that supports the story" id="awards" />
          <div className="grid gap-5 lg:grid-cols-2">
            <RecognitionCard
              icon={Award}
              title="Awards and Certifications"
              items={[
                'Game Changer Award, Deloitte, for outstanding delivery performance and zero-escalation rollouts.',
                'Dorothy Grace Barkow Scholarship ($3,000) for academic excellence.',
                'Oracle Certified: Advanced Artificial Intelligence with Machine Learning in Java.',
                'Microsoft Certified: Azure AI Engineer Associate.',
                'Codinza Certified: Web Development using ReactJS and Java.',
              ]}
            />
            <RecognitionCard
              icon={FileText}
              title="Research Publication"
              items={[
                '"Examination Room Guidance System," Third International Conference on Engineering and Advancement in Technology (ICEAT), IEEE, 2022.',
              ]}
            />
          </div>
        </section>

        <section id="contact" className="section-shell bg-[#08110f] text-white">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#f4c542]">{sectionEyebrows.contact}</p>
              <h2 className="mt-3 max-w-2xl text-5xl font-black leading-tight">
                Ready to talk through systems, AI tooling, and product engineering.
              </h2>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-[#cfe0d8]">
                Open to software engineering, AI platform, data product, and full-stack opportunities.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactCard icon={Mail} title="Email" text="roshini_t@outlook.com" href="mailto:roshini_t@outlook.com" />
              <ContactCard icon={Linkedin} title="LinkedIn" text="linkedin.com/in/roshinitalluru" href="https://linkedin.com/in/roshinitalluru/" />
              <ContactCard icon={Github} title="GitHub" text="github.com/roshini189" href="https://github.com/roshini189" />
              <ContactCard icon={FileText} title="Resume" text="Download PDF" href={`${baseUrl}images/Roshini_Talluru_Resume.pdf`} />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#08110f] px-4 py-8 text-center text-sm font-bold text-[#9fb0a8]">
        &copy; 2026 Roshini Talluru. Interactive portfolio built with React, Three.js, Framer Motion, and Tailwind CSS.
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#f8f5ef] text-[#08110f] shadow-2xl"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="relative h-72 overflow-hidden bg-[#08110f]">
                <img src={selectedProject.image} alt={`${selectedProject.title} preview`} className="h-full w-full object-cover" />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-xl bg-black/60 p-2 text-white transition hover:bg-black"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-black uppercase text-[#c2412d]">{selectedProject.eyebrow}</p>
                <h3 id="project-modal-title" className="mt-2 text-4xl font-black">{selectedProject.title}</h3>
                <p className="mt-5 text-base font-medium leading-8 text-[#3d463f]">{selectedProject.longDescription}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#e0f7f4] p-5">
                    <p className="text-xs font-black uppercase text-[#0f766e]">Outcome</p>
                    <p className="mt-2 text-sm font-black leading-6 text-[#083a36]">{selectedProject.impact}</p>
                  </div>
                  <div className="rounded-3xl bg-[#fff1c7] p-5">
                    <p className="text-xs font-black uppercase text-[#8a5f00]">Role</p>
                    <p className="mt-2 text-sm font-black leading-6 text-[#3b2c00]">{selectedProject.role}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white px-3 py-2 text-xs font-black text-[#22312b] shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-button inline-flex items-center justify-center gap-2 rounded-2xl bg-[#08110f] px-5 py-3 text-sm font-black text-white"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="interactive-button rounded-2xl border border-black/10 px-5 py-3 text-sm font-black text-[#08110f]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NeuralHero() {
  return (
    <div className="absolute inset-x-0 top-0 h-screen min-h-[760px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 54 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.6} />
        <NeuralScene />
      </Canvas>
    </div>
  );
}

function NeuralScene() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const positions = useMemo(() => {
    const values = new Float32Array(260 * 3);
    for (let index = 0; index < 260; index += 1) {
      const radius = 1.3 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      values[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      values[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      values[index * 3 + 2] = radius * Math.cos(phi);
    }
    return values;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.055;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.08;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.22;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#f4c542" size={0.055} transparent opacity={0.84} sizeAttenuation />
      </points>
      <mesh ref={meshRef} position={[2.15, 0.3, -0.8]}>
        <torusKnotGeometry args={[0.95, 0.18, 130, 12]} />
        <meshStandardMaterial color="#24b8ad" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh position={[-2.25, -0.95, -1.25]} rotation={[0.6, 0.2, 0.4]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial color="#ff6b4a" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function SectionHeader({
  title,
  id,
  align = 'center',
  inverted = false,
}: {
  title: string;
  id: string;
  align?: 'left' | 'center';
  inverted?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'mx-auto mb-10 max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`text-sm font-black uppercase ${inverted ? 'text-[#f4c542]' : 'text-[#c2412d]'}`}>
        {sectionEyebrows[id]}
      </p>
      <h2 className={`mt-3 text-4xl font-black leading-tight sm:text-5xl ${inverted ? 'text-white' : 'text-[#08110f]'}`}>
        {title}
      </h2>
    </div>
  );
}

function SegmentedControl<T extends string>({
  items,
  activeItem,
  onChange,
  label,
  inverted = false,
}: {
  items: T[];
  activeItem: T;
  onChange: (item: T) => void;
  label: string;
  inverted?: boolean;
}) {
  return (
    <div
      className={`flex max-w-full flex-wrap gap-2 rounded-2xl border p-2 ${
        inverted ? 'border-white/10 bg-white/[0.06]' : 'border-black/10 bg-white'
      }`}
      role="group"
      aria-label={label}
    >
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange(item)}
          className={`rounded-xl px-3 py-2 text-sm font-black transition ${
            activeItem === item
              ? inverted
                ? 'bg-[#f4c542] text-[#08110f]'
                : 'bg-[#08110f] text-white'
              : inverted
                ? 'text-[#dce8e1] hover:bg-white/10 hover:text-white'
                : 'text-[#3d463f] hover:bg-black/5 hover:text-[#08110f]'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function InteractiveProofCard({
  icon: Icon,
  title,
  body,
  stat,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  stat: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="proof-card rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_55px_rgba(8,17,15,0.08)]"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#08110f] text-[#f4c542]">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-[#e0f7f4] px-3 py-2 text-xs font-black text-[#0f766e]">{stat}</span>
      </div>
      <h3 className="mt-8 text-2xl font-black text-[#08110f]">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-[#3d463f]">{body}</p>
    </motion.article>
  );
}

function EducationCard({
  degree,
  school,
  period,
  details,
}: {
  degree: string;
  school: string;
  period: string;
  details: string[];
}) {
  return (
    <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-sm font-black uppercase text-[#c2412d]">
        <CalendarDays className="h-4 w-4" />
        {period}
      </div>
      <h3 className="mt-5 text-2xl font-black text-[#08110f]">{degree}</h3>
      <p className="mt-1 font-black text-[#0f766e]">{school}</p>
      <ul className="mt-5 space-y-3">
        {details.map((detail) => (
          <li key={detail} className="flex gap-3 text-sm font-semibold leading-6 text-[#3d463f]">
            <Star className="mt-1 h-4 w-4 shrink-0 text-[#c2412d]" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RecognitionCard({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-[2rem] border border-black/10 bg-[#f8f5ef] p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08110f] text-[#f4c542]">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black text-[#08110f]">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-[#3d463f]">
            <Star className="mt-1 h-4 w-4 shrink-0 text-[#c2412d]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className="interactive-button rounded-3xl border border-white/10 bg-white/[0.07] p-5 hover:border-[#f4c542]/60 hover:bg-white/[0.12]"
    >
      <Icon className="h-6 w-6 text-[#f4c542]" />
      <h3 className="mt-4 font-black text-white">{title}</h3>
      <p className="mt-1 text-sm font-semibold text-[#cfe0d8]">{text}</p>
    </a>
  );
}

export default App;

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  ChevronDown,
  Code2,
  Database,
  Eye,
  ExternalLink,
  FileText,
  Github,
  GitBranch,
  Globe2,
  Layers3,
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
  category: 'AI/Data' | 'Full Stack' | 'Platform';
  image: string;
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

const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'awards', 'contact'];

const sectionEyebrows: Record<string, string> = {
  about: 'Profile',
  experience: 'Career arc',
  projects: 'Selected work',
  skills: 'Technical range',
  education: 'Academic foundation',
  awards: 'Recognition',
  contact: 'Next step',
};

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });

  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      title: 'AIResearchEase',
      eyebrow: 'RAG research assistant',
      description:
        'A secure RAG application for uploading research papers and receiving context-aware answers from local LLMs.',
      longDescription:
        'AIResearchEase simplifies academic research workflows with Retrieval-Augmented Generation, FAISS semantic search, local LLM inference, and a Streamlit interface designed for fast document exploration.',
      impact: '35% performance improvement after model and retrieval tuning',
      role: 'AI application engineering, retrieval design, performance tuning',
      technologies: ['Streamlit', 'Ollama API', 'Python', 'NLP', 'RAG', 'LLM', 'FAISS', 'Docker'],
      github: 'https://github.com/roshini189/AI_Research_Ease',
      category: 'AI/Data',
      image: `${baseUrl}images/Ai.jpeg`,
    },
    {
      id: 2,
      title: 'SafeClick',
      eyebrow: 'Phishing detection',
      description:
        'A Django and JavaScript threat-detection app that evaluates suspicious URLs with structural and behavioral signals.',
      longDescription:
        'SafeClick classifies URLs as safe or phishing by extracting signals such as URL structure, sensitive terms, dot count, and content patterns, then returning real-time risk insights to the user.',
      impact: '99.95% model accuracy reported across detection tests',
      role: 'Model integration, Django backend, interaction design',
      technologies: ['Python', 'Django', 'JavaScript', 'RFECV', 'Deep Learning', 'Gradient Boosting'],
      github: 'https://github.com/roshini189/Safeclick',
      category: 'AI/Data',
      image: `${baseUrl}images/images.jpeg`,
    },
    {
      id: 3,
      title: 'Agricitease',
      eyebrow: 'Secure agriculture marketplace',
      description:
        'A direct-to-customer commerce platform with encrypted Java services and Angular workflows for farm transactions.',
      longDescription:
        'Agricitease reduces supply-chain friction by connecting farmers and customers directly. The system combines Angular, Spring Boot, MySQL, AES-encrypted transactions, REST APIs, and IBM Watson support flows.',
      impact: 'Built for transparent pricing, secure transactions, and direct market access',
      role: 'Full-stack architecture, secure payments, conversational support',
      technologies: ['Java', 'Angular', 'JavaScript', 'MySQL', 'Spring Boot', 'REST API'],
      github: 'https://github.com/roshini189/Agricitease',
      category: 'Full Stack',
      image: `${baseUrl}images/Agricitease.jpeg`,
    },
    {
      id: 4,
      title: 'ViceDetect',
      eyebrow: 'Behavior prediction system',
      description:
        'A machine-learning pipeline predicting smoking and drinking habits through clustering and ensemble modeling.',
      longDescription:
        'ViceDetect analyzes behavioral patterns with feature engineering, K-means clustering, XGBoost, statistical analysis, visualizations, and confidence-oriented evaluation.',
      impact: '73.2% prediction accuracy with interpretable model outputs',
      role: 'Feature engineering, modeling, evaluation, visualization',
      technologies: ['R', 'XGBoost', 'K-means', 'Machine Learning', 'Data Visualization', 'Statistics'],
      github: 'https://github.com/roshini189/ViceDetect',
      category: 'AI/Data',
      image: `${baseUrl}images/vice.jpeg`,
    },
    {
      id: 5,
      title: 'Customer Revenue Predictor',
      eyebrow: 'Regression forecasting',
      description:
        'A customer revenue forecasting workflow using regression models, imputation, outlier handling, and validation.',
      longDescription:
        'This project forecasts customer revenue for online retail by cleaning messy transactional data, imputing missing values, transforming skewed features, and comparing OLS, PLS, LASSO, and MARS models.',
      impact: 'MARS selected as the top performer by RMSE after cross-validation',
      role: 'Data cleaning, regression modeling, feature transformation',
      technologies: ['R', 'Mice', 'RStudio', 'Caret', 'Regression', 'MARS'],
      github: 'https://github.com/roshini189/Customer-Revenue-Predictor',
      category: 'AI/Data',
      image: `${baseUrl}images/crp.jpeg`,
    },
    {
      id: 6,
      title: 'Portfolio Website',
      eyebrow: 'Personal product surface',
      description:
        'A responsive React portfolio designed to present engineering experience, project outcomes, and contact paths.',
      longDescription:
        'The portfolio brings together professional experience, selected projects, technical skills, awards, education, and resume access with responsive layouts, accessible controls, and GitHub Pages deployment.',
      impact: 'Rebuilt as a case-study-led site with polished recruiter scanning paths',
      role: 'React development, UI strategy, responsive implementation',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Lucide Icons', 'GitHub Pages'],
      github: 'https://github.com/roshini189/website',
      category: 'Platform',
      image: `${baseUrl}images/port.jpeg`,
    },
  ], [baseUrl]);

  const skills = useMemo<Skill[]>(() => [
    { name: 'Python', level: 95, icon: Code2, category: 'Languages' },
    { name: 'JavaScript / TypeScript', level: 90, icon: Code2, category: 'Languages' },
    { name: 'Java', level: 88, icon: Code2, category: 'Languages' },
    { name: 'R', level: 88, icon: Code2, category: 'Languages' },
    { name: 'Go', level: 80, icon: Code2, category: 'Languages' },
    { name: 'React / Next.js', level: 92, icon: Globe2, category: 'Frontend' },
    { name: 'Angular', level: 90, icon: Globe2, category: 'Frontend' },
    { name: 'HTML / CSS / SCSS', level: 92, icon: Globe2, category: 'Frontend' },
    { name: 'Node.js / Express', level: 88, icon: Server, category: 'Backend' },
    { name: 'Spring Boot', level: 90, icon: Server, category: 'Backend' },
    { name: 'GraphQL', level: 85, icon: Server, category: 'Backend' },
    { name: 'Kafka', level: 85, icon: Server, category: 'Backend' },
    { name: 'PostgreSQL / MongoDB', level: 87, icon: Database, category: 'Data' },
    { name: 'Azure SQL / MySQL', level: 84, icon: Database, category: 'Data' },
    { name: 'Redis / DynamoDB', level: 78, icon: Database, category: 'Data' },
    { name: 'Machine Learning', level: 90, icon: Brain, category: 'AI/ML' },
    { name: 'RAG / LLM Apps', level: 90, icon: Brain, category: 'AI/ML' },
    { name: 'NLP / Deep Learning', level: 85, icon: Brain, category: 'AI/ML' },
    { name: 'AWS / Azure', level: 83, icon: Zap, category: 'Cloud' },
    { name: 'Docker / Kubernetes', level: 80, icon: TerminalSquare, category: 'Cloud' },
    { name: 'Helm / Terraform', level: 78, icon: TerminalSquare, category: 'Cloud' },
    { name: 'Prometheus / Grafana', level: 80, icon: BarChart3, category: 'Cloud' },
    { name: 'Git / CI/CD', level: 90, icon: GitBranch, category: 'Tools' },
    { name: 'Jira / Bitbucket', level: 85, icon: GitBranch, category: 'Tools' },
    { name: 'JUnit / Postman', level: 84, icon: ShieldCheck, category: 'Tools' },
    { name: 'SonarQube', level: 80, icon: ShieldCheck, category: 'Tools' },
  ], []);

  const experience: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Cotiviti (Endeavour Technologies Inc)',
      period: 'Nov 2025 - Present',
      description:
        'Designing cloud-native healthcare microservices, event-driven pipelines, and AI-powered engineering tools for enterprise claims platforms.',
      achievements: [
        'Architected Java and Spring Boot microservices with GraphQL APIs and Kafka event layers for high-volume claim adjudication workflows.',
        'Engineered a custom MCP server connecting Jira, production logs, context agents, and skills for spec-based development at enterprise scale.',
        'Built AI review and defect-analysis agents for Spring Boot, GraphQL, and Angular code, accelerating pull-request cycles by 60%.',
        'Created a reusable report-configuration framework for 30+ healthcare clients, eliminating 90% of manual onboarding work.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Community Dreams Foundation',
      period: 'Jul 2025 - Oct 2025',
      description:
        'Delivered a fund-tracking platform with Angular micro-frontends, Go services, MongoDB indexing, and AWS ECS scaling.',
      achievements: [
        'Reduced high-traffic disruption by 80% with reusable UI components and dynamic resource allocation.',
        'Optimized MongoDB document data for 1B+ real-time records across 100+ client accounts.',
        'Reduced bundle size with lazy-loaded Angular modules, NgRx state management, and reusable feature components.',
      ],
    },
    {
      title: 'Application Developer',
      company: 'University of Oklahoma',
      period: 'Aug 2023 - May 2025',
      description:
        'Rebuilt legacy university systems and shipped AI/ML-integrated platforms serving thousands of students and faculty.',
      achievements: [
        'Increased engagement by 40% with personalized React learning features, tag navigation, and expert verification support.',
        'Improved Angular ISS app performance by 30% through reusable components, lazy loading, chat support, and dashboard upgrades.',
        'Built OAuth 2.0 and JWT access flows for 5,000+ users with zero security incidents.',
        'Created a kidney-stone detection ML app using Fuzzy C-means, GLCM, and DWT techniques.',
      ],
    },
    {
      title: 'Software Engineer / Analyst',
      company: 'Deloitte',
      period: '2022 - 2023',
      description:
        'Led enterprise web and cloud delivery across Java, Angular, AWS, Kubernetes, Helm, and CI/CD environments.',
      achievements: [
        'Launched Career Compass to turn Credly data into skill tracking, milestone dashboards, and networking workflows.',
        'Designed Angular and TypeScript resource-tracking flows for 40 business units with OAuth 2.0 and two-factor authentication.',
        'Delivered Java, Java EE, and Spring Boot REST APIs with JSON and XML integrations.',
        'Earned the Game Changer Award for operational delivery across 12 states.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Talentsprint',
      period: 'Aug 2021 - May 2022',
      description:
        'Built secure e-commerce and rental platforms with Angular, Java, Django, Elasticsearch, and NLP-powered support.',
      achievements: [
        'Delivered an Angular and Java commerce platform with AES-256 transactions and IBM Watson chat support.',
        'Implemented REST APIs with JPA, Hibernate, and MySQL composite indexes for sub-second response times.',
        'Built a Django rental platform with Elasticsearch search and named-entity-recognition chatbot flows.',
      ],
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeProjectCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeProjectCategory);
  }, [activeProjectCategory, projects]);

  const filteredSkills = useMemo(() => {
    if (activeSkillCategory === 'All') return skills;
    return skills.filter((skill) => skill.category === activeSkillCategory);
  }, [activeSkillCategory, skills]);

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

  const projectCategories = ['All', 'AI/Data', 'Full Stack', 'Platform'];
  const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Data', 'AI/ML', 'Cloud', 'Tools'];
  const featuredMetrics = [
    { value: '5+', label: 'years across enterprise software' },
    { value: '30+', label: 'client workflows supported' },
    { value: '60%', label: 'faster PR cycles with AI tooling' },
    { value: '90%', label: 'manual onboarding eliminated' },
  ];
  const focusAreas = [
    { icon: Server, label: 'Cloud-native microservices', detail: 'Spring Boot, GraphQL, Kafka, Kubernetes' },
    { icon: Brain, label: 'AI-augmented engineering', detail: 'MCP servers, agents, RAG, LLM workflows' },
    { icon: BarChart3, label: 'Data and ML systems', detail: 'Regression, NLP, dashboards, model evaluation' },
    { icon: ShieldCheck, label: 'Secure product delivery', detail: 'OAuth, JWT, encrypted transactions, healthcare scale' },
  ];
  const recruiterShortcuts = [
    { icon: Eye, label: 'Scan projects', detail: 'Outcome-first case studies', target: 'projects' },
    { icon: ClipboardCheck, label: 'Review experience', detail: 'Enterprise delivery signals', target: 'experience' },
    { icon: MousePointerClick, label: 'Start contact', detail: 'Email, LinkedIn, resume', target: 'contact' },
  ];
  const proofPoints = [
    { icon: CheckCircle2, label: 'Production systems', detail: 'Healthcare, university, commerce, and data platforms.' },
    { icon: Layers3, label: 'End-to-end range', detail: 'Frontend, backend, cloud, observability, AI, and analytics.' },
    { icon: Rocket, label: 'Hiring signal', detail: 'Clear outcomes, business impact, and modern engineering judgment.' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#161616]">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-[#c2412d] via-[#f4c542] to-[#0f766e]"
        style={{ scaleX: scrollProgress }}
      />
      <nav
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'border-black/10 bg-[#f8f5ef]/90 shadow-[0_12px_40px_rgba(22,22,22,0.08)] backdrop-blur-xl'
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
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-black transition ${
                isScrolled ? 'bg-[#161616] text-[#f8f5ef]' : 'bg-white text-[#161616]'
              }`}
            >
              RT
            </span>
            <span>
              <span
                className={`block text-sm font-black uppercase tracking-[0.24em] transition ${
                  isScrolled ? 'text-[#161616]' : 'text-white'
                }`}
              >
                Roshini
              </span>
              <span className={`block text-xs font-semibold transition ${isScrolled ? 'text-[#5b554c]' : 'text-[#efe4d3]'}`}>
                Software Engineer
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => scrollToSection(item)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold capitalize transition ${
                  activeSection === item
                    ? isScrolled
                      ? 'bg-[#161616] text-white'
                      : 'bg-white text-[#161616]'
                    : isScrolled
                      ? 'text-[#3f3932] hover:bg-black/5 hover:text-[#161616]'
                      : 'text-[#f0e7d8] hover:bg-white/10 hover:text-white'
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
              className="hidden items-center gap-2 rounded-lg bg-[#c2412d] px-4 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(194,65,45,0.28)] transition hover:-translate-y-0.5 hover:bg-[#a93625] sm:flex"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className={`rounded-lg border p-2 transition lg:hidden ${
                isScrolled ? 'border-black/10 text-[#161616]' : 'border-white/20 text-white'
              }`}
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
              className="overflow-hidden border-t border-black/10 bg-[#f8f5ef] lg:hidden"
            >
              <div className="grid gap-1 px-4 py-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => scrollToSection(item)}
                    className="rounded-lg px-3 py-3 text-left text-sm font-bold capitalize text-[#2f2a24] hover:bg-black/5"
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
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#141414] pt-28">
          <div className="absolute inset-0 bg-[#141414]" />
          <div className="absolute inset-0 pattern-grid opacity-35" />
          <div className="ambient-sweep absolute inset-0 opacity-70" />
          <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="text-white"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold text-[#fff1c7] shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Full-stack, AI, and cloud-native systems
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
                Roshini Talluru builds reliable software with an AI systems edge.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f2e8d8] sm:text-xl">
                Software Engineer in Frisco, Texas, designing healthcare-scale microservices,
                event pipelines, AI developer tooling, and data products that turn complex
                workflows into usable systems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="interactive-button inline-flex items-center justify-center gap-2 rounded-lg bg-[#f4c542] px-5 py-3 text-sm font-black text-[#161616] shadow-[0_16px_34px_rgba(244,197,66,0.24)] transition hover:bg-[#ffd84d]"
                >
                  <Briefcase className="h-4 w-4" />
                  View Work
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="mailto:roshini_t@outlook.com"
                  className="interactive-button inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/[0.03] px-5 py-3 text-sm font-black text-white transition hover:bg-white/[0.12]"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
                <a
                  href={`${baseUrl}images/Roshini_Talluru_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-button inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white px-5 py-3 text-sm font-black text-[#161616] transition hover:bg-[#fff1c7]"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {recruiterShortcuts.map((shortcut) => {
                  const Icon = shortcut.icon;
                  return (
                    <button
                      key={shortcut.label}
                      type="button"
                      onClick={() => scrollToSection(shortcut.target)}
                      className="interactive-panel group rounded-lg border border-white/20 bg-white/[0.1] p-4 text-left backdrop-blur transition hover:border-[#f4c542]/70 hover:bg-white/[0.15]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <Icon className="h-5 w-5 text-[#f4c542]" />
                        <ArrowRight className="h-4 w-4 text-[#f2e8d8] transition group-hover:translate-x-1 group-hover:text-white" />
                      </div>
                      <p className="mt-3 text-sm font-black text-white">{shortcut.label}</p>
                      <p className="mt-1 text-xs font-semibold leading-5 text-[#f2e8d8]">{shortcut.detail}</p>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="mt-10 inline-flex items-center gap-2 text-sm font-black text-[#f4c542] transition hover:text-white"
              >
                <ChevronDown className="h-5 w-5" />
                Explore profile
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              className="relative"
            >
              <div className="hero-portrait interactive-panel relative overflow-hidden rounded-lg border border-white/20 bg-[#24211d] shadow-[0_30px_80px_rgba(0,0,0,0.34)]">
                <img
                  src={`${baseUrl}images/bio.jpeg`}
                  alt="Roshini Talluru"
                  className="h-[520px] w-full object-cover object-center saturate-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-lg border border-white/20 bg-black/45 px-3 py-2 text-xs font-black uppercase text-white backdrop-blur">
                  Ready for recruiter scan
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {featuredMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-lg border border-white/20 bg-black/45 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:bg-black/55">
                        <div className="text-3xl font-black text-white">{metric.value}</div>
                        <div className="mt-1 text-xs font-bold leading-5 text-[#fff1c7]">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <SectionHeader title="Engineer, builder, and practical AI systems thinker" id="about" />
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
              <img
                src={`${baseUrl}images/port.jpeg`}
                alt="Portfolio project preview"
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-black text-[#0f766e]">
                  <MapPin className="h-4 w-4" />
                  Frisco, Texas
                </div>
                <p className="mt-4 text-lg font-semibold leading-8 text-[#2d2924]">
                  I work where distributed systems, product clarity, data, and AI tooling meet.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-5 text-lg leading-8 text-[#4c4740]">
                <p>
                  I am a software engineer with experience across full-stack development,
                  cloud-native services, healthcare workflows, data science, and AI-augmented
                  engineering. At Cotiviti, I build microservices, GraphQL APIs, Kafka event
                  flows, and AI developer tools for enterprise claims platforms.
                </p>
                <p>
                  My work spans secure web apps, machine-learning systems, custom MCP servers,
                  Angular and React interfaces, Kubernetes delivery, observability, and reusable
                  platform patterns that help teams ship with less friction.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.label}
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="interactive-panel rounded-lg border border-black/10 bg-white p-5 shadow-sm"
                    >
                      <Icon className="h-6 w-6 text-[#c2412d]" />
                      <h3 className="mt-4 text-lg font-black text-[#161616]">{area.label}</h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-[#514a42]">{area.detail}</p>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {proofPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <motion.div
                      key={point.label}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                      className="rounded-lg border border-black/10 bg-[#161616] p-4 text-white shadow-sm"
                    >
                      <Icon className="h-5 w-5 text-[#f4c542]" />
                      <h3 className="mt-3 text-sm font-black">{point.label}</h3>
                      <p className="mt-2 text-xs font-semibold leading-5 text-[#eee3d3]">{point.detail}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell bg-[#ebe4d8]">
          <SectionHeader title="Enterprise delivery with measurable outcomes" id="experience" />
          <div className="space-y-5">
            {experience.map((exp) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                className="interactive-panel rounded-lg border border-black/10 bg-[#fdfbf7] p-6 shadow-sm"
              >
                <div className="grid gap-5 lg:grid-cols-[0.32fr_0.68fr]">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#161616] px-3 py-2 text-xs font-black uppercase text-white">
                      <CalendarDays className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-[#161616]">{exp.title}</h3>
                    <p className="mt-1 text-base font-black text-[#0f766e]">{exp.company}</p>
                    <p className="mt-4 text-sm font-medium leading-6 text-[#514a42]">{exp.description}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex gap-3 rounded-lg border border-black/10 bg-white p-4 transition hover:border-[#f4c542]/70 hover:shadow-sm">
                        <Star className="mt-1 h-4 w-4 shrink-0 text-[#c2412d]" />
                        <p className="text-sm leading-6 text-[#3c3731]">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader title="Case studies recruiters can scan fast" id="projects" align="left" />
            <SegmentedControl
              items={projectCategories}
              activeItem={activeProjectCategory}
              onChange={setActiveProjectCategory}
              label="Project category"
            />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                whileHover={{ y: -7 }}
                transition={{ type: 'spring', stiffness: 250, damping: 24 }}
                className="interactive-panel group flex min-h-[520px] flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm"
              >
                <div className="relative h-56 overflow-hidden bg-[#161616]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-lg bg-[#f4c542] px-3 py-2 text-xs font-black uppercase text-[#161616]">
                    {project.category}
                  </span>
                  <div className="absolute bottom-4 right-4 flex translate-y-3 items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-black text-[#161616] opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
                    Open case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm font-black uppercase text-[#c2412d]">{project.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-black leading-tight text-[#161616]">{project.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-[#514a42]">{project.description}</p>
                  <div className="mt-5 rounded-lg border border-[#0f766e]/25 bg-[#e0f2f1] p-4">
                    <p className="text-xs font-black uppercase text-[#075f5a]">Outcome</p>
                    <p className="mt-1 text-sm font-bold leading-6 text-[#184743]">{project.impact}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="rounded-lg bg-[#f0eadf] px-2.5 py-1.5 text-xs font-black text-[#3f3932]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="interactive-button inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-black text-[#161616] transition hover:bg-[#161616] hover:text-white"
                    >
                      <FileText className="h-4 w-4" />
                      Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-button inline-flex items-center gap-2 rounded-lg bg-[#161616] px-4 py-2 text-sm font-black text-white transition hover:bg-[#33302a]"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
            </AnimatePresence>
          </div>
        </section>

        <section id="skills" className="section-shell bg-[#161616] text-white">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeader title="A stack built for product and platform work" id="skills" align="left" inverted />
            <SegmentedControl
              items={skillCategories}
              activeItem={activeSkillCategory}
              onChange={setActiveSkillCategory}
              label="Skill category"
              inverted
            />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="interactive-panel rounded-lg border border-white/10 bg-white/[0.07] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f4c542] text-[#161616]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-black text-white">{skill.name}</h3>
                        <p className="text-sm font-bold text-[#d9cebc]">{skill.category}</p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[#f4c542]">{skill.level}%</span>
                  </div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <motion.div
                      initial={false}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className="h-2 rounded-full bg-gradient-to-r from-[#c2412d] via-[#f4c542] to-[#0f766e]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="education" className="section-shell">
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

        <section id="awards" className="section-shell bg-[#ebe4d8]">
          <SectionHeader title="Signals of delivery, research, and craft" id="awards" />
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

        <section id="contact" className="section-shell">
          <div className="rounded-lg bg-[#161616] p-6 text-white sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[#f4c542]">{sectionEyebrows.contact}</p>
                <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                  Let us build something precise, useful, and durable.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#f2e8d8]">
                  Open to software engineering, AI platform, data product, and full-stack opportunities.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:roshini_t@outlook.com"
                  className="interactive-panel rounded-lg border border-white/10 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-[#f4c542]/60 hover:bg-white/[0.12]"
                >
                  <Mail className="h-6 w-6 text-[#f4c542]" />
                  <h3 className="mt-4 font-black">Email</h3>
                  <p className="mt-1 text-sm font-semibold text-[#f2e8d8]">roshini_t@outlook.com</p>
                </a>
                <a
                  href="https://linkedin.com/in/roshinitalluru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-panel rounded-lg border border-white/10 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-[#f4c542]/60 hover:bg-white/[0.12]"
                >
                  <Linkedin className="h-6 w-6 text-[#f4c542]" />
                  <h3 className="mt-4 font-black">LinkedIn</h3>
                  <p className="mt-1 text-sm font-semibold text-[#f2e8d8]">linkedin.com/in/roshinitalluru</p>
                </a>
                <a
                  href="https://github.com/roshini189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-panel rounded-lg border border-white/10 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-[#f4c542]/60 hover:bg-white/[0.12]"
                >
                  <Github className="h-6 w-6 text-[#f4c542]" />
                  <h3 className="mt-4 font-black">GitHub</h3>
                  <p className="mt-1 text-sm font-semibold text-[#f2e8d8]">github.com/roshini189</p>
                </a>
                <a
                  href={`${baseUrl}images/Roshini_Talluru_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-panel rounded-lg border border-white/10 bg-white/[0.07] p-5 transition hover:-translate-y-1 hover:border-[#f4c542]/60 hover:bg-white/[0.12]"
                >
                  <FileText className="h-6 w-6 text-[#f4c542]" />
                  <h3 className="mt-4 font-black">Resume</h3>
                  <p className="mt-1 text-sm font-semibold text-[#f2e8d8]">Download PDF</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#f8f5ef] px-4 py-8 text-center text-sm font-bold text-[#514a42]">
        &copy; 2026 Roshini Talluru. Built with React, TypeScript, and Tailwind CSS.
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-[#fdfbf7] shadow-2xl"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="relative h-72 overflow-hidden bg-[#161616]">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project preview`}
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-lg bg-black/60 p-2 text-white transition hover:bg-black"
                  aria-label="Close project details"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-black uppercase text-[#c2412d]">{selectedProject.eyebrow}</p>
                    <h3 id="project-modal-title" className="mt-2 text-3xl font-black text-[#161616]">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <span className="w-fit rounded-lg bg-[#161616] px-3 py-2 text-xs font-black uppercase text-white">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-[#4c4740]">{selectedProject.longDescription}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-[#0f766e]/25 bg-[#e0f2f1] p-4">
                    <p className="text-xs font-black uppercase text-[#075f5a]">Outcome</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#184743]">{selectedProject.impact}</p>
                  </div>
                  <div className="rounded-lg border border-black/10 bg-white p-4">
                    <p className="text-xs font-black uppercase text-[#6b442d]">Role</p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[#3c3731]">{selectedProject.role}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="rounded-lg bg-[#f2ede4] px-3 py-2 text-xs font-bold text-[#4c4740]">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#161616] px-5 py-3 text-sm font-black text-white transition hover:bg-[#33302a]"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="rounded-lg border border-black/10 px-5 py-3 text-sm font-black text-[#161616] transition hover:bg-black/5"
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
      <h2 className={`mt-3 text-4xl font-black leading-tight sm:text-5xl ${inverted ? 'text-white' : 'text-[#161616]'}`}>
        {title}
      </h2>
    </div>
  );
}

function SegmentedControl({
  items,
  activeItem,
  onChange,
  label,
  inverted = false,
}: {
  items: string[];
  activeItem: string;
  onChange: (item: string) => void;
  label: string;
  inverted?: boolean;
}) {
  return (
    <div
      className={`flex max-w-full flex-wrap gap-2 rounded-lg border p-2 ${
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
          className={`rounded-lg px-3 py-2 text-sm font-black transition ${
            activeItem === item
              ? inverted
                ? 'bg-[#f4c542] text-[#161616]'
                : 'bg-[#161616] text-white'
              : inverted
                ? 'text-[#f2e8d8] hover:bg-white/10 hover:text-white'
                : 'text-[#4c4740] hover:bg-black/5 hover:text-[#161616]'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
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
    <article className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3 text-sm font-black uppercase text-[#c2412d]">
        <CalendarDays className="h-4 w-4" />
        {period}
      </div>
      <h3 className="mt-5 text-2xl font-black text-[#161616]">{degree}</h3>
      <p className="mt-1 font-black text-[#0f766e]">{school}</p>
      <ul className="mt-5 space-y-3">
        {details.map((detail) => (
          <li key={detail} className="flex gap-3 text-sm leading-6 text-[#4c4740]">
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
    <article className="rounded-lg border border-black/10 bg-[#fdfbf7] p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#161616] text-[#f4c542]">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black text-[#161616]">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[#4c4740]">
            <Star className="mt-1 h-4 w-4 shrink-0 text-[#c2412d]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default App;

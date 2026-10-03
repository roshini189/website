import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowDown,
  Award,
  MapPin,
  FileText,
  Globe,
  Brain,
  BarChart3,
  Calendar,
  GraduationCap,
  BookOpen,
  Menu,
  X,
  Plus,
  Minus,
} from 'lucide-react';
import {
  projects,
  skills,
  skillCategories,
  experience,
  education,
  awards,
  publications,
  resumeUrl,
  photoUrl,
  email,
  linkedin,
  github,
  type Project,
} from './data';

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'awards', 'contact'];
const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} {...reveal} transition={{ duration: 0.7, ease, delay }}>
      {children}
    </motion.div>
  );
}

function SectionHeading({ index, eyebrow, title, accent }: { index: string; eyebrow: string; title: string; accent: string }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="eyebrow mb-4">
        <span className="text-zinc-500">{index} /</span> {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title} <span className="font-serif font-normal italic text-gradient">{accent}</span>
      </h2>
    </Reveal>
  );
}

function FilterTabs({ id, options, value, onChange }: { id: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          aria-pressed={value === opt}
          className={`relative rounded-full border border-white/10 px-4 py-2 text-sm font-medium transition-colors ${
            value === opt ? 'text-ink' : 'text-zinc-400 hover:text-white'
          }`}
        >
          {value === opt && (
            <motion.span
              layoutId={`${id}-pill`}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-iris to-peach"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative">{opt}</span>
        </button>
      ))}
    </div>
  );
}

function Nav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6 ${
          scrolled || open ? 'border-white/10 bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href="#home" className="font-serif text-2xl italic text-white">
          Roshini<span className="text-iris">.</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {sections.slice(1).map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={`relative block rounded-full px-3.5 py-1.5 text-sm capitalize transition-colors ${
                  active === s ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {active === s && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{s}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-ink transition hover:bg-peach lg:flex"
        >
          Résumé <ArrowUpRight className="h-4 w-4" />
        </a>
        <button className="text-white lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10 bg-ink/95 p-4 backdrop-blur-xl lg:hidden"
          >
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 capitalize ${active === s ? 'bg-white/10 text-white' : 'text-zinc-400'}`}
              >
                {s}
              </a>
            ))}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-xl bg-white px-4 py-3 font-semibold text-ink">
              Résumé ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const stats = [
    { value: '5+', label: 'Years building software' },
    { value: '30+', label: 'Enterprise clients served' },
    { value: `${projects.length}`, label: 'Featured projects' },
    { value: `${awards.length}`, label: 'Awards & certifications' },
  ];
  const socials = [
    { href: `mailto:${email}`, icon: Mail, label: 'Email' },
    { href: linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: github, icon: Github, label: 'GitHub' },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[34rem] w-[34rem] animate-drift rounded-full bg-iris/25 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] animate-drift rounded-full bg-peach/15 blur-[120px] [animation-delay:-9s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Software Engineer @ Cotiviti
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl"
          >
            Roshini
            <br />
            <span className="font-serif font-normal italic text-gradient">Talluru</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Software Engineer — <span className="text-white">Full-Stack, Cloud-Native & AI-Augmented Systems.</span> Building
            healthcare-scale microservices and AI-powered developer tooling at the intersection of software engineering and
            data science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-iris to-peach px-6 py-3 font-semibold text-ink transition hover:shadow-[0_0_40px_-6px] hover:shadow-iris"
            >
              View my work <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              <FileText className="h-4 w-4" /> Résumé
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative mx-auto w-64 sm:w-80"
        >
          <div className="absolute -inset-3 animate-spin-slow rounded-[2.5rem] bg-[conic-gradient(from_0deg,#a78bfa,#f0abfc,#fbbf9a,#a78bfa)] opacity-60 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-ink-2">
            <img src={photoUrl} alt="Roshini Talluru" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
              <p className="flex items-center gap-2 text-sm text-zinc-200">
                <MapPin className="h-4 w-4 text-peach" /> Frisco, Texas
              </p>
            </div>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.55 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4 lg:col-span-2"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-ink/80 p-6 backdrop-blur">
              <dt className="mt-1 text-sm text-zinc-500">{s.label}</dt>
              <dd className="font-serif text-5xl italic text-white">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    'Java / Spring Boot', 'Angular', 'React', 'GraphQL', 'Kafka', 'Kubernetes',
    'Python', 'MCP Servers & AI Agents', 'RAG / LLMs', 'AWS / Azure', 'Prometheus / Grafana', 'Machine Learning',
  ];
  return (
    <div aria-hidden className="relative overflow-hidden border-y border-white/[0.07] py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap pr-12 font-serif text-3xl italic text-zinc-500">
            {item} <span className="text-base not-italic text-iris">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const areas = [
    { icon: Globe, label: 'Full-Stack Development' },
    { icon: Brain, label: 'Machine Learning & AI' },
    { icon: BarChart3, label: 'Data Science & Analytics' },
    { icon: Calendar, label: '5+ Years Experience' },
  ];
  return (
    <section id="about" className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="About" title="Engineer by craft," accent="curious by nature." />
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal className="card p-8 md:col-span-2 md:p-10">
            <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                I'm a versatile technologist with expertise spanning{' '}
                <span className="text-white">full-stack development, cloud-native systems, and data science</span>. As a Software
                Engineer at Cotiviti, I design healthcare-scale microservices and event-driven pipelines, and build AI-powered
                developer tooling that accelerates engineering teams across 30+ enterprise clients.
              </p>
              <p>
                From developing scalable web applications with modern frameworks to implementing machine learning models and AI
                agents that drive business decisions, I thrive at the intersection of technology and data. My experience includes
                building end-to-end systems, engineering custom MCP servers and AI agents, optimizing performance, and creating
                intuitive user experiences.
              </p>
              <p>
                I'm passionate about leveraging technology to solve complex problems and am always eager to learn new technologies
                and methodologies that can enhance my ability to deliver impactful solutions.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.1} className="card p-8">
              <h3 className="eyebrow mb-6">Expertise areas</h3>
              <ul className="space-y-4">
                {areas.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-zinc-200">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-iris/10 text-iris">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex h-full flex-col justify-between gap-6 bg-gradient-to-br from-iris/15 to-peach/10 p-8 transition hover:border-white/20"
              >
                <FileText className="h-6 w-6 text-peach" />
                <p className="text-lg text-white">
                  Curious about the journey behind these skills?{' '}
                  <span className="inline-flex items-center gap-1 font-serif italic text-gradient">
                    Peek into my résumé
                    <ArrowUpRight className="h-4 w-4 text-peach transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </p>
              </a>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.1} className="mt-5">
          <p className="card px-8 py-5 text-zinc-400">
            <Award className="mr-2 inline h-4 w-4 text-peach" />
            Recipient of multiple academic awards and scholarships for excellence in software engineering and data analytics.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(0);
  return (
    <section id="experience" className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" eyebrow="Experience" title="Where I've" accent="made an impact." />
        <ol className="relative border-l border-white/10 md:ml-[11rem]">
          {experience.map((exp, i) => {
            const isOpen = expanded === i;
            return (
              <motion.li key={exp.company} {...reveal} transition={{ duration: 0.7, ease }} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
                <span
                  className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                    i === 0 ? 'bg-gradient-to-r from-iris to-peach shadow-[0_0_20px] shadow-iris' : 'bg-zinc-600'
                  }`}
                />
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-zinc-500 md:absolute md:-left-[11rem] md:top-1.5 md:mb-0 md:w-36 md:text-right">
                  {exp.period}
                </p>
                <div className="card p-6 transition hover:border-white/15 md:p-8">
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <p className="mt-1 font-serif text-xl italic text-iris">{exp.company}</p>
                  <p className="mt-4 leading-relaxed text-zinc-400">{exp.description}</p>
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-peach"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-white/20">
                      {isOpen ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                    </span>
                    {isOpen ? 'Hide' : 'Show'} key achievements ({exp.achievements.length})
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden"
                      >
                        {exp.achievements.map((a) => (
                          <li key={a} className="mt-4 flex gap-3 text-zinc-300 first:mt-6">
                            <span className="mt-2.5 h-1 w-3 flex-shrink-0 rounded-full bg-gradient-to-r from-iris to-peach" />
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Projects({ onSelect }: { onSelect: (p: Project) => void }) {
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? projects : projects.filter((p) => p.group === filter);
  return (
    <section id="projects" className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" eyebrow="Projects" title="Selected" accent="work." />
        <FilterTabs id="projects" options={['All', 'Data Science', 'Full Stack']} value={filter} onChange={setFilter} />
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease }}
                className="group card flex flex-col overflow-hidden transition-[border-color,box-shadow] hover:border-white/20 hover:shadow-2xl hover:shadow-iris/10"
              >
                <button onClick={() => onSelect(p)} className="relative block aspect-[16/10] overflow-hidden text-left" aria-label={`Open ${p.title}`}>
                  <img src={p.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="chip absolute left-4 top-4 bg-ink/60 backdrop-blur">{p.category}</span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                    {p.technologies.length > 3 && <span className="chip text-zinc-500">+{p.technologies.length - 3}</span>}
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <button onClick={() => onSelect(p)} className="inline-flex items-center gap-1 text-sm font-semibold text-white transition hover:text-peach">
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub`}
                      className="rounded-full p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const [filter, setFilter] = useState('All');
  const groups = useMemo(() => {
    const cats = filter === 'All' ? skillCategories.slice(1) : [filter];
    return cats.map((c) => ({ category: c, items: skills.filter((s) => s.category === c) }));
  }, [filter]);

  return (
    <section id="skills" className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" eyebrow="Skills" title="Tools of" accent="the trade." />
        <FilterTabs id="skills" options={skillCategories} value={filter} onChange={setFilter} />
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ category, items }, i) => (
            <motion.div
              key={`${filter}-${category}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: i * 0.04 }}
              className="card p-6"
            >
              <h3 className="eyebrow mb-5 flex items-center justify-between">
                {category} <span className="text-zinc-600">{String(items.length).padStart(2, '0')}</span>
              </h3>
              <ul className="space-y-4">
                {items.map(({ name, level, icon: Icon }) => (
                  <li key={name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-zinc-200">
                        <Icon className="h-3.5 w-3.5 text-zinc-500" /> {name}
                      </span>
                      <span className="font-mono text-xs text-zinc-500">{level}%</span>
                    </div>
                    <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-iris to-peach"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" eyebrow="Education" title="Foundations &" accent="study." />
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1} className="card relative overflow-hidden p-8">
              <GraduationCap className="absolute -right-6 -top-6 h-36 w-36 text-white/[0.03]" />
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">{e.period}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{e.degree}</h3>
              <p className="mt-1 font-serif text-xl italic text-iris">{e.school}</p>
              <div className="mt-5 space-y-3 text-zinc-400">
                {e.notes.map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section id="awards" className="px-4 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="06" eyebrow="Recognition" title="Awards &" accent="publications." />
        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="card p-8">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
              <Award className="h-5 w-5 text-peach" /> Awards & Recognition
            </h3>
            <ul className="divide-y divide-white/[0.06]">
              {awards.map((a, i) => (
                <li key={a} className="flex gap-5 py-4">
                  <span className="font-mono text-sm text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-zinc-300">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="card flex flex-col bg-gradient-to-br from-iris/10 to-transparent p-8">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
              <BookOpen className="h-5 w-5 text-peach" /> Research Publications
            </h3>
            {publications.map((p) => (
              <blockquote key={p} className="font-serif text-2xl italic leading-snug text-zinc-200">
                {p}
              </blockquote>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="text-zinc-500">07 /</span> Contact
          </p>
          <h2 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Let's <span className="font-serif font-normal italic text-gradient">connect.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            I'm always interested in discussing new opportunities, collaborations, and innovative projects.
          </p>
          <a
            href={`mailto:${email}`}
            className="group mt-12 inline-flex max-w-full items-center gap-3 font-serif text-2xl italic text-white transition hover:text-peach sm:text-5xl"
          >
            <span className="truncate">{email}</span>
            <ArrowUpRight className="h-6 w-6 flex-shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-8 sm:w-8" />
          </a>
        </Reveal>
        <Reveal delay={0.15} className="mt-14 flex flex-wrap justify-center gap-3">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="chip flex items-center gap-2 px-5 py-2.5 text-sm transition hover:border-white/30 hover:text-white">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="chip flex items-center gap-2 px-5 py-2.5 text-sm transition hover:border-white/30 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <span className="chip flex items-center gap-2 px-5 py-2.5 text-sm">
            <MapPin className="h-4 w-4" /> Frisco, TX
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.45, ease }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-2"
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-2 to-transparent" />
          <button
            onClick={onClose}
            autoFocus
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/80"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-8">
          <span className="chip">{project.category}</span>
          <h3 id="project-title" className="mt-4 text-3xl font-semibold text-white">{project.title}</h3>
          <p className="mt-5 leading-relaxed text-zinc-400">{project.longDescription}</p>
          <h4 className="eyebrow mb-3 mt-8">Technologies used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-iris to-peach px-6 py-3 font-semibold text-ink"
            >
              <Github className="h-4 w-4" /> View code
            </a>
            <button onClick={onClose} className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [active, setActive] = useState('home');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen overflow-x-clip">
        <Nav active={active} />
        <main>
          <Hero />
          <Marquee />
          <About />
          <ExperienceSection />
          <Projects onSelect={setSelected} />
          <Skills />
          <Education />
          <Awards />
          <Contact />
        </main>
        <footer className="border-t border-white/[0.07] px-4 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-zinc-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Roshini Talluru. All Rights Reserved.</p>
            <a href="#home" className="transition hover:text-white">Back to top ↑</a>
          </div>
        </footer>
        <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
      </div>
    </MotionConfig>
  );
}

export default App;

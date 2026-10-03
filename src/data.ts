import {
  Code,
  Database,
  Brain,
  Server,
  Globe,
  BarChart3,
  Cpu,
  Cloud,
  GitBranch,
  AppWindow,
  BugPlay,
  Terminal,
  Send,
  type LucideIcon,
} from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

export const resumeUrl = `${baseUrl}images/Roshini_Talluru_Resume.pdf`;
export const photoUrl = `${baseUrl}images/bio.jpeg`;
export const email = 'roshini_t@outlook.com';
export const linkedin = 'https://linkedin.com/in/roshinitalluru/';
export const github = 'https://github.com/roshini189';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  category: string;
  group: 'Data Science' | 'Full Stack';
  image: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive and interactive personal portfolio website built with React and Tailwind CSS.',
    longDescription:
      'This project showcases my skills, experience, and personal projects. Built using React for dynamic UI and Tailwind CSS for rapid styling, the site features smooth scroll navigation, modal project details, and category filtering for both skills and projects. It includes routing logic, reusable components, dynamic theming, and is deployed using GitHub Pages.',
    technologies: [
      'React', 'Tailwind CSS', 'JavaScript', 'Vite', 'React Hooks',
      'Responsive Design', 'Lucide Icons', 'GitHub Pages',
      'Component Reusability', 'State Management',
    ],
    github: 'https://github.com/roshini189/website',
    category: 'Full Stack Development',
    group: 'Full Stack',
    image: `${baseUrl}images/port.jpeg`,
  },
  {
    id: 2,
    title: 'AIResearchEase — AI Research Chatbot',
    description: "Optimized a RAG-based AI web app using Ollama API LLM's and system performance with fine-tuning by 35%.",
    longDescription:
      'AIResearchEase is a secure, intelligent AI-powered web application designed to simplify academic research workflows. Built using Retrieval-Augmented Generation (RAG), FAISS-based semantic search, and local Large Language Models (LLMs), the app lets users upload research papers and ask context-aware questions, receiving instant, accurate answers.',
    technologies: ['Streamlit', 'Ollama API', 'Python', 'NLP', 'DeepLearning', 'RAG', 'LLM', 'FAISS', 'Docker'],
    github: 'https://github.com/roshini189/AI_Research_Ease',
    category: 'Deep Learning',
    group: 'Data Science',
    image: `${baseUrl}images/Ai.jpeg`,
  },
  {
    id: 3,
    title: 'ViceDetect — ML Prediction System',
    description:
      'Advanced machine learning system predicting smoking and drinking habits with 73.2% accuracy using XGBoost and K-means clustering.',
    longDescription:
      'Developed a comprehensive machine learning pipeline that analyzes behavioral patterns to predict smoking and drinking habits. Implemented advanced clustering algorithms, ensemble methods, and feature engineering techniques. The system processes large datasets and provides real-time predictions with detailed confidence intervals and feature importance analysis.',
    technologies: ['R', 'XGBoost', 'K-means', 'Machine Learning', 'Data Visualization', 'Statistical Analysis'],
    github: 'https://github.com/roshini189/ViceDetect',
    category: 'Machine Learning',
    group: 'Data Science',
    image: `${baseUrl}images/vice.jpeg`,
  },
  {
    id: 4,
    title: 'SafeClick — Phishing Detection',
    description:
      'A phishing detection web application using Django and JavaScript with 99.95% accuracy in threat detection with real-time insights.',
    longDescription:
      'Safe Click is a real-time phishing detection web application. Users can input any URL, and the system analyzes it using structural, behavioral, and content-based features such as number of dots, use of sensitive terms and more to classify the URL as Safe or Phishing.',
    technologies: ['Python', 'Django', 'Javascript', 'RFECV', 'Deep Learning', 'Gradient Boosting'],
    github: 'https://github.com/roshini189/Safeclick',
    category: 'Data Mining',
    group: 'Data Science',
    image: `${baseUrl}images/images.jpeg`,
  },
  {
    id: 5,
    title: 'Agricitease',
    description:
      'An Angular-based web application with AES-encrypted Java backend to enable secure transactions between farmers and customers with an integrated IBM Watson Assistant for live chat support and user feedback service.',
    longDescription:
      'Agricitease is a secure and user-friendly web application designed to eliminate intermediaries in the agricultural supply chain, enabling direct transactions between farmers and customers. This platform empowers farmers by providing them with a transparent marketplace, ensuring fair pricing and seamless trade.',
    technologies: ['Java', 'Angular', 'Javascript', 'MySQL', 'Springboot', 'RestAPI'],
    github: 'https://github.com/roshini189/Agricitease',
    category: 'Full Stack Development',
    group: 'Full Stack',
    image: `${baseUrl}images/Agricitease.jpeg`,
  },
  {
    id: 6,
    title: 'Customer Revenue Predictor',
    description: 'Predicting customer revenue using advanced regression models and robust data preprocessing techniques in R.',
    longDescription:
      'This project focuses on accurately forecasting customer revenue for an online retail platform using a variety of regression techniques. The pipeline begins with extensive data cleaning, missing value imputation, and outlier handling. Key features are transformed using log scaling and grouped at the customer level to better capture behavioral trends. We developed and evaluated multiple models including OLS, Partial Least Squares (PLS), LASSO, and Multivariate Adaptive Regression Splines (MARS). Through careful feature engineering and cross-validation, the MARS model emerged as the best performer, achieving the highest accuracy in terms of RMSE and R². This project showcases not only technical modeling skills but also a deep understanding of data quality, preprocessing strategies, and practical evaluation.',
    technologies: ['R', 'Mice', 'RStudio', 'Caret', 'Regression'],
    github: 'https://github.com/roshini189/Customer-Revenue-Predictor',
    category: 'Machine Learning',
    group: 'Data Science',
    image: `${baseUrl}images/crp.jpeg`,
  },
];

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  category: string;
}

export const skills: Skill[] = [
  { name: 'Java', level: 85, icon: Code, category: 'Programming Languages' },
  { name: 'Python', level: 95, icon: Code, category: 'Programming Languages' },
  { name: 'JavaScript/TypeScript', level: 90, icon: Code, category: 'Programming Languages' },
  { name: 'C', level: 90, icon: Code, category: 'Programming Languages' },
  { name: 'C++', level: 90, icon: Code, category: 'Programming Languages' },
  { name: 'R', level: 88, icon: Code, category: 'Programming Languages' },
  { name: 'Go', level: 80, icon: Code, category: 'Programming Languages' },
  { name: 'PostgreSQL/MongoDB', level: 87, icon: Database, category: 'Database' },
  { name: 'AzureSQL', level: 85, icon: Database, category: 'Database' },
  { name: 'MYSQL', level: 80, icon: Database, category: 'Database' },
  { name: 'DynamoDB/Cassandra', level: 78, icon: Database, category: 'Database' },
  { name: 'Redis/Valkey', level: 78, icon: Database, category: 'Database' },
  { name: 'React/Next.js', level: 92, icon: Globe, category: 'Frontend' },
  { name: 'Angular', level: 90, icon: Globe, category: 'Frontend' },
  { name: 'Vue.js', level: 78, icon: Globe, category: 'Frontend' },
  { name: 'HTML', level: 92, icon: Globe, category: 'Frontend' },
  { name: 'CSS', level: 92, icon: Globe, category: 'Frontend' },
  { name: 'SCSS', level: 92, icon: Globe, category: 'Frontend' },
  { name: 'Node.js/Express', level: 88, icon: Server, category: 'Backend' },
  { name: 'Java/Spring Boot', level: 90, icon: Server, category: 'Backend' },
  { name: 'GraphQL', level: 85, icon: Server, category: 'Backend' },
  { name: 'Apache Kafka', level: 85, icon: Server, category: 'Backend' },
  { name: 'JPA/Hibernate', level: 82, icon: Server, category: 'Backend' },
  { name: 'Machine Learning', level: 90, icon: Brain, category: 'AI/ML' },
  { name: 'Deep Learning', level: 85, icon: Cpu, category: 'AI/ML' },
  { name: 'Natural Language Processing', level: 85, icon: Cpu, category: 'AI/ML' },
  { name: 'Streamlit', level: 85, icon: Cpu, category: 'AI/ML' },
  { name: 'MCP Servers & AI Agents', level: 90, icon: Brain, category: 'AI/ML' },
  { name: 'Claude API / GitHub Copilot', level: 88, icon: Brain, category: 'AI/ML' },
  { name: 'Prompt Engineering', level: 88, icon: Brain, category: 'AI/ML' },
  { name: 'AWS/Azure', level: 83, icon: Cloud, category: 'Cloud' },
  { name: 'Docker/Kubernetes', level: 80, icon: Server, category: 'DevOps' },
  { name: 'Helm/Terraform', level: 78, icon: Server, category: 'DevOps' },
  { name: 'Ansible', level: 75, icon: Server, category: 'DevOps' },
  { name: 'Prometheus/Grafana', level: 80, icon: BarChart3, category: 'DevOps' },
  { name: 'Git/CI/CD', level: 90, icon: GitBranch, category: 'DevOps' },
  { name: 'Eclipse', level: 85, icon: AppWindow, category: 'Applications' },
  { name: 'VS Code', level: 90, icon: AppWindow, category: 'Applications' },
  { name: 'IntelliJ', level: 88, icon: AppWindow, category: 'Applications' },
  { name: 'SonarQube', level: 80, icon: BugPlay, category: 'Applications' },
  { name: 'Git', level: 90, icon: GitBranch, category: 'Applications' },
  { name: 'JIRA', level: 85, icon: Terminal, category: 'Applications' },
  { name: 'Bitbucket', level: 83, icon: GitBranch, category: 'Applications' },
  { name: 'JUnit', level: 82, icon: BugPlay, category: 'Applications' },
  { name: 'Postman', level: 87, icon: Send, category: 'Applications' },
];

export const skillCategories = [
  'All', 'Programming Languages', 'Database', 'Frontend', 'Backend', 'AI/ML', 'Applications', 'Cloud', 'DevOps',
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Cotiviti (Endeavour Technologies Inc)',
    period: 'Nov 2025 - Present',
    description:
      'Designing cloud-native healthcare microservices with event-driven pipelines and AI-powered developer tooling for 30+ enterprise clients across claims adjudication and appeal processing platforms, maintaining >90% test coverage and <5% defect rate.',
    achievements: [
      'Architected Java/Spring Boot microservices and GraphQL APIs with a Kafka event service layer delivering significant throughput and fault isolation across high-volume claim adjudication workflows serving millions of transactions.',
      'Engineered a custom MCP server integrating Jira, production-log, and context feeder AI agents and skills to autonomously drive spec-based development at enterprise scale.',
      'Built AI code review and defect-analysis agents autonomously inspecting Spring Boot logic, GraphQL resolver chains, and Angular 16/TypeScript components, accelerating PR cycles by 60% while improving defect-fix and RCA efficiency.',
      'Designed a reusable report-configuration framework for 30+ healthcare clients with dynamic mapping, standardizing validation rules and automating orchestration, eliminating 90% of manual onboarding for new clients.',
      'Eliminated duplicate-claim revenue leakage by engineering an Angular 16/TS detection workflow integrating REST polling and Kafka event stream consumption to validate live claim status and enforce deduplication.',
      'Implemented Prometheus metrics instrumentation and Grafana dashboards across 10+ microservices for real-time SLA visibility, proactive alerting, and data-driven performance tuning.',
      'Standardized Kubernetes and Helm chart deployments with Jenkins CI/CD automated rollback triggers and blue-green strategies, reducing deployment downtime to near-zero for healthcare-critical systems.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Community Dreams Foundation',
    period: 'Jul 2025 - Oct 2025',
    description:
      "Developed a Java-based financial application to facilitate the organization's fund processing, achieving a 30% reduction in processing overhead.",
    achievements: [
      'Architected an Angular 16 micro-frontend and containerized Go microservices fund-tracking platform with reusable UI components and dynamic resource allocation, reducing high-traffic sudden disruptions by 80%.',
      'Implemented MongoDB document funds data with indexed query optimization to scale to 1+ billion real-time records across 100+ client accounts, achieving API response times under 15 seconds through parallel handoffs.',
      'Designed a lazy-loaded Angular module architecture with NgRx state management and reusable components, reducing bundle size and enabling rapid feature iteration through the micro-frontend and AWS ECS to support dynamic scale.',
    ],
  },
  {
    title: 'Application Developer',
    company: 'University of Oklahoma',
    period: 'Aug 2023 - May 2025',
    description:
      'Rebuilt legacy university systems and delivered AI/ML-integrated full-stack platforms driving 40% engagement uplift and 30% performance improvement serving thousands of active users, establishing a team-wide AI-augmented engineering practice.',
    achievements: [
      'Boosted user engagement for React.js based learning platform by 40% through implementing personalized content recommendations, flexible tag-based navigation, and expert verification support.',
      'Redesigned ISS web application using Angular 16 to incorporate reusable components for chat support and interactive dashboards, utilizing lazy loading and enhanced overall application performance by 30%.',
      'Designed a secure Azure SQL database using TDE encryption and role-based access control to store student records.',
      'Contributed to medical advancement by designing a machine learning-based web app that detects kidney stones using the Fuzzy C-means algorithm, enhanced with GLCM and DWT techniques.',
      'Integrated Gemini and GitHub Copilot for AI-assisted LLM test generation and code scaffolding, establishing team-wide AI-augmented engineering practices across all active projects.',
      'Built OAuth 2.0/JWT integrations securing access for 5,000+ student and faculty users with zero security incidents.',
    ],
  },
  {
    title: 'Software Engineer/Analyst',
    company: 'Deloitte',
    period: '2022 - 2023',
    description:
      'Led end-to-end development of web and enterprise apps using Java, Angular, and JavaScript, improving scalability and deployment through AWS, Kubernetes, and CI/CD tools. Recognized with the Game Changer Award for streamlining operations across 12 states.',
    achievements: [
      'Launched Career Compass, a Javascript web application employing Credly data to enhance skill tracking with an integrated milestone dashboard and networking module to ease career growth opportunities by 60%.',
      'Designed a Resource Tracking application using Angular/Typescript, optimizing tracking performance for 40 business units with enhanced OAuth 2.0 security protocols and Two-Factor Authentication.',
      'Developed microservices, REST APIs using JAVA/Java EE/ SpringBoot and experienced working with JSON/XML.',
      'Incorporated Kubernetes and helm charts to streamline the application maintenance and deployment process.',
      'Hands-on experience with PCF, AWS, CI/CD, and associated tools JIRA, Jenkins, Git.',
      'Honored with Game Changer award for optimizing operations & ensuring timely rollouts across 12 states.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Talentsprint',
    period: 'Aug 2021 - May 2022',
    description:
      'Delivered full-stack platforms integrating AES-256 encryption, IBM Watson NLP, and Elasticsearch-powered search, increasing buyer engagement by 40% and achieving <100ms API response times.',
    achievements: [
      'Architected an Angular/Java e-commerce platform with AES-256-encrypted transactions and IBM Watson for real-time chat, intent classification, and automated query resolution, boosting user engagement by 40% within 60 days.',
      'Implemented REST APIs with JPA/Hibernate and MySQL composite-index queries achieving sub-1-second response times.',
      'Built a Django/Python rental platform with Elasticsearch-backed multi-filter property search and an NLP conversational chatbot using named-entity recognition, improving search-to-inquiry conversion and match time by 35%.',
      'Gained hands-on expertise in Angular, Django, Core Java, Python, and machine learning tools, while strengthening skills in secure web application design and deployment.',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'University of Oklahoma, Norman, OK',
    period: 'Aug 2023 - May 2025',
    notes: [
      'Awarded the Dorothy Grace Barkow Scholarship ($3,000) in recognition of academic excellence.',
      'Relevant Coursework: Machine Learning, Advanced Data Mining, Database Systems, Deep Learning, Healthcare Analytics, Big Data.',
    ],
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'BVRIT Hyderabad',
    period: '2017 - 2021',
    notes: [
      'Graduated with First Class Distinction. Involved in research and Women in Software Engineering Program (WISE).',
    ],
  },
];

export const awards = [
  'Game Changer Award, Deloitte — recognized for outstanding delivery performance and zero-escalation rollouts.',
  'Dorothy Grace Barkow Scholarship ($3,000) — awarded for academic excellence.',
  'Oracle Certified — Advanced Artificial Intelligence with Machine Learning in Java.',
  'Microsoft Certified — Azure AI Engineer Associate.',
  'Codinza Certified — Web Development using ReactJS and Java.',
];

export const publications = [
  '"Examination Room Guidance System" — Third International Conference on Engineering and Advancement in Technology (ICEAT), IEEE, 2022.',
];

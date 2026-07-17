import React, { useState, useEffect } from 'react';
import {
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Code, 
  Database, 
  Brain,
  Award,
  User,
  Briefcase,
  Phone,
  MapPin,
  Calendar,
  Star,
  Server,
  Globe,
  BarChart3,
  Cpu,
  Cloud,
  GitBranch,
  Wrench,
  AppWindow,
  BugPlay,
  Terminal,
  Send,
  FileText,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
 const [activeProjectCategory, setActiveProjectCategory] = useState('All');
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
     {
  
    id: 1,
    title: "Portfolio Website",
    description: "A responsive and interactive personal portfolio website built with React and Tailwind CSS.",
    longDescription: "This project showcases my skills, experience, and personal projects. Built using React for dynamic UI and Tailwind CSS for rapid styling, the site features smooth scroll navigation, modal project details, and category filtering for both skills and projects. It includes routing logic, reusable components, dynamic theming, and is deployed using GitHub Pages.",
    technologies: [
      "React", "Tailwind CSS", "JavaScript", "Vite", "React Hooks",
      "Responsive Design", "Lucide Icons", "GitHub Pages",
      "Component Reusability", "State Management"
    ],
    github: "https://github.com/roshini189/Portfolio",
    category: "Full Stack Development",
    image: "public/images/port.jpeg"
  },{
      id: 2,
      title: "AlResearchEase- AI Research Chatbot",
      description: "Optimized a RAG-based AI web app using Ollama API LLM's and system performance with fine-tuning by 35%.",
      longDescription: "AIResearchEase is a secure, intelligent AI-powered web application designed to simplify academic research workflows. Built using Retrieval-Augmented Generation (RAG), FAISS-based semantic search, and local Large Language Models (LLMs), the app lets users upload research papers and ask context-aware questions, receiving instant, accurate answers.",
      technologies: ["Streamlit","Ollama API","Python","NLP","DeepLearning","RAG","LLM","FAISS", "Docker"],
      github: "https://github.com/roshini189/AI_Research_Ease",
      category: "Deeplearning",
      image: "public/images/Ai.jpeg" },
    {
      id: 3,
      title: "ViceDetect - ML Prediction System",
      description: "Advanced machine learning system predicting smoking and drinking habits with 73.2% accuracy using XGBoost and K-means clustering.",
      longDescription: "Developed a comprehensive machine learning pipeline that analyzes behavioral patterns to predict smoking and drinking habits. Implemented advanced clustering algorithms, ensemble methods, and feature engineering techniques. The system processes large datasets and provides real-time predictions with detailed confidence intervals and feature importance analysis.",
      technologies: ["R", "XGBoost", "K-means", "Machine Learning", "Data Visualization", "Statistical Analysis"],
      github: "https://github.com/roshini189/ViceDetect",
      category: "Machine Learning",
      image: "public/images/vice.jpeg" ,
     },
   
    {
      id: 4,
      title: "SafeClick- Phishing Detection",
      description: " A phishing detection web application using Django and JavaScript with 99.95% accuracy in threat detection with real-time insights.",
      longDescription: "Safe Click is a real-time phishing detection web application. Users can input any URL, and the system analyzes it using structural, behavioral, and content-based features such as number of dots, use of sensitive termsand more to classify the URL as Safe or Phishing",
      technologies: ["Python", "Django", "Javascript", "RFECV", "Deep Learning", "Gradient Boosting"],
      github: "https://github.com/roshini189/Safeclick",
      Demo:"",
      category: "DataMining",
      image: "public/images/images.jpeg"  },
    {
      id: 5,
      title: "Agricitease",
      description: " An Angular-based web application with AES-encrypted Java backend to enable secure transactions between farmers and customers with an integrated IBM Watson Assistant for live chat support and user feedback service.",
      longDescription: "Agricitease is a secure and user-friendly web application designed to eliminate intermediaries in the agricultural supply chain, enabling direct transactions between farmers and customers. This platform empowers farmers by providing them with a transparent marketplace, ensuring fair pricing and seamless trade.",
      technologies: ["Java", "Angular", "Javascript", "MySQL", "Springboot", "RestAPI"],
      github: "https://github.com/roshini189/Agricitease",
      category: "Full Stack Development",
      image: "public/images/Agricitease.jpeg" },
    {
      id: 6,
      title: "Customer Revenue Predictor - ML Prediction",
      description: "Predicting customer revenue using advanced regression models and robust data preprocessing techniques in R.",
      longDescription: "This project focuses on accurately forecasting customer revenue for an online retail platform using a variety of regression techniques. The pipeline begins with extensive data cleaning, missing value imputation, and outlier handling. Key features are transformed using log scaling and grouped at the customer level to better capture behavioral trends. We developed and evaluated multiple models including OLS, Partial Least Squares (PLS), LASSO, and Multivariate Adaptive Regression Splines (MARS). Through careful feature engineering and cross-validation, the MARS model emerged as the best performer, achieving the highest accuracy in terms of RMSE and R². This project showcases not only technical modeling skills but also a deep understanding of data quality, preprocessing strategies, and practical evaluation.",
      technologies: ["R","Mice","RStudio","Caret","Regression"],
      github: "https://github.com/roshini189/Customer-Revenue-Predictor",
      category: "MachineLearning",
      image: "public/images/crp.jpeg" },
   
  ];

  const skills = [
    { name: "Java", level: 85, icon: Code, category: "Programming Languages" },
    { name: "Python", level: 95, icon: Code, category: "Programming Languages" },
    { name: "JavaScript/TypeScript", level: 90, icon: Code, category: "Programming Languages" },
    { name: "C", level: 90, icon: Code, category: "Programming Languages" },
    { name: "C++", level: 90, icon: Code, category: "Programming Languages" },
    { name: "R", level: 88, icon: Code, category: "Programming Languages" },
    { name: "Go", level: 80, icon: Code, category: "Programming Languages" },
    { name: "PostgreSQL/MongoDB", level: 87, icon: Database, category: "Database" },
{ name: "AzureSQL", level: 85, icon: Database, category: "Database" },
{ name: "MYSQL", level: 80, icon: Database, category: "Database" },
{ name: "DynamoDB/Cassandra", level: 78, icon: Database, category: "Database" },
{ name: "Redis/Valkey", level: 78, icon: Database, category: "Database" },
    { name: "React/Next.js", level: 92, icon: Globe, category: "Frontend" },
    { name: "Angular", level: 90, icon: Globe, category: "Frontend" },
    { name: "Vue.js", level: 78, icon: Globe, category: "Frontend" },
    { name: "HTML", level: 92, icon: Globe, category: "Frontend" },
    
    { name: "CSS", level: 92, icon: Globe, category: "Frontend" },
    
    { name: "SCSS", level: 92, icon: Globe, category: "Frontend" },
    { name: "Node.js/Express", level: 88, icon: Server, category: "Backend" },
    { name: "Java/Spring Boot", level: 90, icon: Server, category: "Backend" },
    { name: "GraphQL", level: 85, icon: Server, category: "Backend" },
    { name: "Apache Kafka", level: 85, icon: Server, category: "Backend" },
    { name: "JPA/Hibernate", level: 82, icon: Server, category: "Backend" },
    { name: "Machine Learning", level: 90, icon: Brain, category: "AI/ML" },
    { name: "Deep Learning", level: 85, icon: Cpu, category: "AI/ML" },
     { name: "Natural Language Processing", level: 85, icon: Cpu, category: "AI/ML" },
    { name: "Streamlit", level: 85, icon: Cpu, category: "AI/ML" },
    { name: "MCP Servers & AI Agents", level: 90, icon: Brain, category: "AI/ML" },
    { name: "Claude API / GitHub Copilot", level: 88, icon: Brain, category: "AI/ML" },
    { name: "Prompt Engineering", level: 88, icon: Brain, category: "AI/ML" },
        { name: "AWS/Azure", level: 83, icon: Cloud, category: "Cloud" },
    { name: "Docker/Kubernetes", level: 80, icon: Server, category: "DevOps" },
    { name: "Helm/Terraform", level: 78, icon: Server, category: "DevOps" },
    { name: "Ansible", level: 75, icon: Server, category: "DevOps" },
    { name: "Prometheus/Grafana", level: 80, icon: BarChart3, category: "DevOps" },
    { name: "Git/CI/CD", level: 90, icon: GitBranch, category: "DevOps" },
    { name: "Eclipse", level: 85, icon: AppWindow, category: "Applications" },
  { name: "VS Code", level: 90, icon: AppWindow, category: "Applications" },
  { name: "IntelliJ", level: 88, icon: AppWindow, category: "Applications" },
  { name: "SonarQube", level: 80, icon: BugPlay, category: "Applications" },
  { name: "Git", level: 90, icon: GitBranch, category: "Applications" },
  { name: "JIRA", level: 85, icon: Terminal, category: "Applications" },
  { name: "Bitbucket", level: 83, icon: GitBranch, category: "Applications" },
  { name: "JUnit", level: 82, icon: BugPlay, category: "Applications" },
  { name: "Postman", level: 87, icon: Send, category: "Applications" },

  ];
const filteredProjects = activeProjectCategory === "All"
    ? projects
    : projects.filter(p => {
        if (activeProjectCategory === "Data Science") {
          return ["Machine Learning", "DataMining", "Deeplearning"].includes(p.category);
        } else if (activeProjectCategory === "Full Stack") {
          return ["Full Stack Development"].includes(p.category);
        }
        return false;
      });

  const filteredSkills = activeSkillCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === activeSkillCategory);


  const experience = [
    {
      title: "Software Engineer",
      company: "Cotiviti (Endeavour Technologies Inc)",
      period: "Nov 2025 - Present",
      description: "Designing cloud-native healthcare microservices with event-driven pipelines and AI-powered developer tooling for 30+ enterprise clients across claims adjudication and appeal processing platforms, maintaining >90% test coverage and <5% defect rate.",
      achievements: [
        "Architected Java/Spring Boot microservices and GraphQL APIs with a Kafka event service layer delivering significant throughput and fault isolation across high-volume claim adjudication workflows serving millions of transactions.",
        "Engineered a custom MCP server integrating Jira, production-log, and context feeder AI agents and skills to autonomously drive spec-based development at enterprise scale.",
        "Built AI code review and defect-analysis agents autonomously inspecting Spring Boot logic, GraphQL resolver chains, and Angular 16/TypeScript components, accelerating PR cycles by 60% while improving defect-fix and RCA efficiency.",
        "Designed a reusable report-configuration framework for 30+ healthcare clients with dynamic mapping, standardizing validation rules and automating orchestration, eliminating 90% of manual onboarding for new clients.",
        "Eliminated duplicate-claim revenue leakage by engineering an Angular 16/TS detection workflow integrating REST polling and Kafka event stream consumption to validate live claim status and enforce deduplication.",
        "Implemented Prometheus metrics instrumentation and Grafana dashboards across 10+ microservices for real-time SLA visibility, proactive alerting, and data-driven performance tuning.",
        "Standardized Kubernetes and Helm chart deployments with Jenkins CI/CD automated rollback triggers and blue-green strategies, reducing deployment downtime to near-zero for healthcare-critical systems."
      ]
    },
    {
      title: "Software Engineer",
      company: "Community Dreams Foundation",
      period: "Jul 2025 - Oct 2025",
      description: "Developed a Java-based financial application to facilitate the organization's fund processing, achieving a 30% reduction in processing overhead.",
      achievements: [
        "Architected an Angular 16 micro-frontend and containerized Go microservices fund-tracking platform with reusable UI components and dynamic resource allocation, reducing high-traffic sudden disruptions by 80%.",
        "Implemented MongoDB document funds data with indexed query optimization to scale to 1+ billion real-time records across 100+ client accounts, achieving API response times under 15 seconds through parallel handoffs.",
        "Designed a lazy-loaded Angular module architecture with NgRx state management and reusable components, reducing bundle size and enabling rapid feature iteration through the micro-frontend and AWS ECS to support dynamic scale."
      ]
    },
    {
      title: "Application Developer",
      company: "University of Oklahoma",
      period: "Aug 2023 - May 2025",
      description: "Rebuilt legacy university systems and delivered AI/ML-integrated full-stack platforms driving 40% engagement uplift and 30% performance improvement serving thousands of active users, establishing a team-wide AI-augmented engineering practice.",
            achievements: [
       "Boosted user engagement for React.js based learning platform by 40% through implementing personalized content recommendations, flexible tag-based navigation, and expert verification support.",
  "Redesigned ISS web application using Angular 16 to incorporate reusable components for chat support and inter active dashboards, utilizing lazy loading and enhanced overall application performance by 30%.",
 "Designed a secure Azure SQL database using TDE encryption and role-based access control to store student records",
      "Contributed to medical advancement by designing a machine learning-based web app that detects kidney stones using the Fuzzy C-means algorithm, enhanced with GLCM and DWT techniques.",
      "Integrated Gemini and GitHub Copilot for AI-assisted LLM test generation and code scaffolding, establishing team-wide AI-augmented engineering practices across all active projects.",
      "Built OAuth 2.0/JWT integrations securing access for 5,000+ student and faculty users with zero security incidents."]
    },
    {
      title: "Software Engineer/Analyst",
      company: "Deloitte",
      period: "2022 - 2023",
      description: "Led end-to-end development of web and enterprise apps using Java, Angular, and JavaScript, improving scalability and deployment through AWS, Kubernetes, and CI/CD tools. Recognized with the Game Changer Award for streamlining operations across 12 states.",
      achievements: [
        "Launched Career Compass, a Javascript web application employing Credly data to enhance skill tracking with an integrated milestone dashboard and networking module to ease career growth opportunities by 60%.",
"Designed a Resource Tracking application using Angular/Typescript, optimizing tracking performance for 40 business units with enhanced OAuth 2.0 security protocols and Two-Factor Authentication."
 ,"Developed microservices, REST APIs using JAVA/Java EE/ SpringBoot and experienced working with JSON/XML."
 ,"Incorporated Kubernetes and helm charts to streamline the application maintenance and deployment process."
 ,"Hands-on experience with PCF, AWS, CI/CD, and associated tools JIRA, Jenkins, Git."
 ,"Honored with Game Changer award for optimizing operations & ensuring timely rollouts across 12 states.",   ]
    },
    {
      title: "Software Developer",
      company: "Talentsprint",
      period: "Aug 2021 - May 2022",
      description: "Delivered full-stack platforms integrating AES-256 encryption, IBM Watson NLP, and Elasticsearch-powered search, increasing buyer engagement by 40% and achieving <100ms API response times.",
      achievements: [
         "Architected an Angular/Java e-commerce platform with AES-256-encrypted transactions and IBM Watson for real-time chat, intent classification, and automated query resolution, boosting user engagement by 40% within 60 days."
 ,"Implemented REST APIs with JPA/Hibernate and MySQL composite-index queries achieving sub-1-second response times."
 ,"Built a Django/Python rental platform with Elasticsearch-backed multi-filter property search and an NLP conversational chatbot using named-entity recognition, improving search-to-inquiry conversion and match time by 35%."
 ,"Gained hands-on expertise in Angular, Django, Core Java, Python, and machine learning tools, while strengthening skills in secure web application design and deployment.",
   ] },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Roshini Talluru
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about','experience',  'projects', 'skills', 'education','awards','contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item 
                      ? 'text-purple-400 border-b-2 border-purple-400' 
                      : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

     
    
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <img
  src="public\images\bio.jpeg"
  alt="Roshini Talluru"
  className="w-full h-full rounded-full object-cover"
/>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Roshini Talluru
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto">
            Software Engineer — Full-Stack, Cloud-Native & AI-Augmented Systems
          </p>
          <p className="text-lg text-purple-300 mb-8 max-w-2xl mx-auto">
            Building healthcare-scale microservices and AI-powered developer tooling at the intersection of software engineering and data science
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="mailto:roshini_t@outlook.com" className="text-white hover:text-purple-300 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/roshinitalluru/" className="text-white hover:text-purple-300 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/roshini189" className="text-white hover:text-purple-300 transition-colors">
              <Github className="w-8 h-8" />
            </a>

{/* Resume Link */}
<a
  href="public/images/Roshini_Talluru_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-purple-300 transition-colors"
>
  <FileText className="w-8 h-8" />
</a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white hover:text-purple-300 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a versatile technologist with expertise spanning full-stack development, cloud-native systems, 
                and data science. As a Software Engineer at Cotiviti, I design healthcare-scale microservices and 
                event-driven pipelines, and build AI-powered developer tooling that accelerates engineering teams 
                across 30+ enterprise clients.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From developing scalable web applications with modern frameworks to implementing machine learning 
                models and AI agents that drive business decisions, I thrive at the intersection of technology and data. 
                My experience includes building end-to-end systems, engineering custom MCP servers and AI agents, 
                optimizing performance, and creating intuitive user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about leveraging technology to solve complex problems and am always eager to 
                learn new technologies and methodologies that can enhance my ability to deliver impactful solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
              Recipient of multiple academic awards and scholarships for excellence in software engineering and data analytics.
           </p>
         

              <div className="flex items-center space-x-4 text-purple-300">
                <MapPin className="w-5 h-5" />
                <span>Frisco, Texas</span>
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-600/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Expertise Areas</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Machine Learning & AI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Data Science & Analytics</span>
                </div>
  
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">5+ Years Experience</span>
                </div>
                  <div className="flex items-center space-x-3">
  <FileText className="w-5 h-5 text-purple-400" />
  <a
    href="src/Roshini_talluru_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-300 hover:underline"
  >
    Curious about the journey behind these skills? Peek into my resume.
  </a>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="text-purple-300 text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Data Science', 'Full Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30 text-white transition ${
                  activeProjectCategory === cat ? 'bg-purple-600/30' : 'hover:bg-purple-600/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-600/20 text-gray-400 px-2 py-1 rounded text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <button onClick={() => setSelectedProject(project)} className="text-purple-400 hover:text-purple-300 transition-colors">
                      Learn More
                    </button>
                    <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Technologies</h2>
          <div className="flex justify-center gap-4 mb-12">
            {['All', 'Programming Languages', 'Database', 'Frontend', 'Backend', 'AI/ML','Applications', 'Cloud', 'DevOps'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30 text-white transition ${
                  activeSkillCategory === cat ? 'bg-purple-600/30' : 'hover:bg-purple-600/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                      <div>
                        <span className="text-white font-semibold">{skill.name}</span>
                        <div className="text-sm text-purple-300">{skill.category}</div>
                      </div>
                    </div>
                    <span className="text-purple-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
{/* Education Section */}
<section id="education" className="py-20 px-4 bg-slate-800/30">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-white text-center mb-16">Education</h2>
    <div className="space-y-8">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">M.S. in Computer Science</h3>
            <p className="text-purple-300">University of Oklahoma, Norman, OK</p>
          </div>
          <span className="text-gray-400">Aug 2023 - May 2025</span>
          </div>
        <p className="text-gray-300">Awarded the Dorothy Grace Barkow Scholarship ($3,000) in recognition of academic excellence.</p>  
        <p className="text-gray-300">Relevant Coursework: Machine Learning, Advanced Data Mining, Database Systems, Deep Learning, Healthcare Analytics, Big Data.</p>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science and Engineering</h3>
            <p className="text-purple-300">BVRIT Hyderabad</p>
          </div>
          <span className="text-gray-400">2017 - 2021</span>
        </div>
        <p className="text-gray-300">Graduated with First Class Distinction. Involved in research and Women in Software Engineering Program (WISE).</p>
      </div>
    </div>
  </div>
</section>

      {/* Awards & Publications Section */}
      <section id="awards" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Awards & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Awards & Recognition</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Game Changer Award, Deloitte — recognized for outstanding delivery performance and zero-escalation rollouts.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Dorothy Grace Barkow Scholarship ($3,000) — awarded for academic excellence.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Oracle Certified — Advanced Artificial Intelligence with Machine Learning in Java.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Microsoft Certified — Azure AI Engineer Associate.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Codinza Certified — Web Development using ReactJS and Java.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Research Publications</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">"Examination Room Guidance System" — Third International Conference on Engineering and Advancement in Technology (ICEAT), IEEE, 2022.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities, collaborations, and innovative projects
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:roshini_t@outlook.com"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">roshini_t@outlook.com</p>
            </a>
            <a
              href="https://linkedin.com/in/roshinitalluru/"
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <Linkedin className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">Connect with me</p>
            </a>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Frisco, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Roshini Talluru. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {selectedProject.category}
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={selectedProject.github}
                  className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Code</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 
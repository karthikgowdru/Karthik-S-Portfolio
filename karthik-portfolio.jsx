import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Menu, X, Sun, Moon, ArrowUp } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [typingIndex, setTypingIndex] = useState(0);

  // Project modal state
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const roles = ['Frontend Developer', 'Information Science Student', 'Web Developer', 'Tech Enthusiast'];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: 'Weather App',
      category: 'frontend',
      description: 'Real-time weather application with API integration',
      tech: ['React', 'API Integration', 'CSS3'],
      icon: '\u{1F324}',
      workflow: ['Research', 'Design', 'API Integration', 'Testing', 'Deployment']
    },
    {
      id: 2,
      title: 'To-Do List App',
      category: 'frontend',
      description: 'Task management with local storage support',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      icon: '\u2713',
      workflow: ['Wireframe', 'Implement CRUD', 'LocalStorage', 'Polish UX']
    },
    {
      id: 3,
      title: 'Calculator Web App',
      category: 'frontend',
      description: 'Scientific calculator with responsive design',
      tech: ['JavaScript', 'CSS3', 'Responsive Design'],
      icon: '\u{1F522}',
      workflow: ['Spec Math Ops', 'Implement Logic', 'Responsive UI', 'QA']
    },
    {
      id: 4,
      title: 'E-Commerce Frontend',
      category: 'frontend',
      description: 'Shopping website with product cards and animations',
      tech: ['React', 'Bootstrap', 'CSS3'],
      icon: '\u{1F6D2}',
      workflow: ['Catalog Design', 'Product Cards', 'Cart Flow', 'Performance Tuning']
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'Animated portfolio with smooth transitions',
      tech: ['React', 'Tailwind CSS', 'Animations'],
      icon: '\u{1F4BC}',
      workflow: ['Content Collation', 'Design', 'Animations', 'Accessibility']
    }
  ];

  const openProject = (project) => { setSelectedProject(project); setProjectModalOpen(true); };
  const closeProject = () => { setSelectedProject(null); setProjectModalOpen(false); };

  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 78 },
    { name: 'C Programming', level: 75 },
    { name: 'Git & GitHub', level: 88 },
    { name: 'Responsive Design', level: 92 }
  ];

  return (
    <div className={`${darkMode ? 'dark' : 'light'}`}>
      {/* Background gradient animation */}
      <div className={`fixed inset-0 -z-50 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50'
      }`} />

      {/* Animated gradient orbs */}
      <div className={`fixed -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 -z-40 animate-pulse ${
        darkMode ? 'bg-purple-600' : 'bg-blue-400'
      }`} />
      <div className={`fixed -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 -z-40 animate-pulse ${
        darkMode ? 'bg-cyan-600' : 'bg-purple-300'
      }`} style={{ animationDelay: '2s' }} />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrollPosition > 50 
          ? darkMode 
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20' 
            : 'bg-white/80 backdrop-blur-xl border-b border-blue-200/30'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              KS
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-cyan-400 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-purple-500/20 hover:bg-purple-500/30 text-yellow-400' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-left px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'hover:bg-purple-500/20 text-gray-300' 
                      : 'hover:bg-blue-100 text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className={`text-6xl md:text-7xl font-bold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              KARTHIK S
            </h1>
            <div className={`h-20 flex items-center justify-center`}>
              <p className={`text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent min-h-10`}>
                {roles[typingIndex]}
              </p>
            </div>
          </div>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Information Science Student at PES College of Engineering, Mandya. Passionate about building responsive, modern web applications with stunning user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
            <button
              onClick={() => setResumeOpen(true)}
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all transform hover:scale-105 active:scale-95 ${
                darkMode
                  ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  : 'border-blue-500 text-blue-600 hover:bg-blue-100'
              }`}
            >
              View Resume
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 pt-8">
            <a
              href="https://github.com/karthikgowdru"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                darkMode
                  ? 'bg-purple-500/20 hover:bg-purple-500/40 text-cyan-400'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-s-b88308288"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                darkMode
                  ? 'bg-purple-500/20 hover:bg-purple-500/40 text-cyan-400'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:KARTHIKGOWDAS658@GMAIL.COM"
              className={`p-3 rounded-full transition-all transform hover:scale-110 ${
                darkMode
                  ? 'bg-purple-500/20 hover:bg-purple-500/40 text-cyan-400'
                  : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12 animate-bounce">
            <ChevronDown size={28} className={darkMode ? 'text-cyan-400 mx-auto' : 'text-blue-600 mx-auto'} />
          </div>
        </div>
      </section>

      {/* Project Workflow Modal */}
      {projectModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeProject} />
          <div className={`relative bg-white/95 dark:bg-slate-900/95 rounded-lg p-6 max-w-2xl mx-4 shadow-xl transform transition-all animate-fade-in`}>
            <div className="flex justify-between items-start">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{selectedProject.title}</h3>
              <button onClick={closeProject} className="p-2">Close</button>
            </div>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.description}</p>
            <div className="mt-4 space-y-2">
              {selectedProject.workflow.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold">{i+1}</div>
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Short description for {step.toLowerCase()} phase.</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={closeProject} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-slate-700">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 z-60 flex items-start justify-center pt-12">
          <div className="absolute inset-0 bg-black/60" onClick={() => setResumeOpen(false)}></div>
          <div className={`relative w-full max-w-4xl mx-4 bg-white/95 dark:bg-slate-900/95 rounded-xl shadow-2xl overflow-auto p-6 transform transition-all animate-slide-up`} style={{maxHeight: '85vh'}}>
            <div className="flex justify-between items-center sticky top-0 bg-transparent">
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Resume — KARTHIK S</h3>
              <div className="flex items-center gap-3">
                <button onClick={() => window.print()} className="px-3 py-2 rounded-md bg-cyan-500 text-white">Print</button>
                <button onClick={() => setResumeOpen(false)} className="px-3 py-2 rounded-md border">Close</button>
              </div>
            </div>

            <div className="mt-4 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800/60' : 'bg-white/60'}`}>
                  <h4 className="font-semibold">Contact</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>KARTHIKGOWDAS658@GMAIL.COM</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mandya, Karnataka</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800/60' : 'bg-white/60'}`}>
                  <h4 className="font-semibold">Education</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>B.E. Information Science — PES College</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800/60' : 'bg-white/60'}`}>
                  <h4 className="font-semibold">Skills</h4>
                  <div className="mt-2 space-y-2">
                    {skills.map(s => (
                      <div key={s.name} className="space-y-1">
                        <div className={`flex justify-between text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}><span>{s.name}</span><span>{s.level}%</span></div>
                        <div className="h-2 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all" style={{width: `${s.level}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800/60' : 'bg-white/60'}`}>
                  <h4 className="font-semibold mb-2">Professional Summary</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Information Science student with a focus on frontend development, building responsive web apps with attention to UX and performance.</p>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800/60' : 'bg-white/60'}`}>
                  <h4 className="font-semibold mb-2">Experience & Projects</h4>
                  <div className="space-y-3">
                    {projects.map(p => (
                      <div key={p.id} className="p-3 rounded-md border">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.title}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{p.description}</div>
                            <div className="mt-2 text-xs">
                              <strong>Workflow:</strong> {p.workflow.join(' → ')}
                            </div>
                          </div>
                          <div className={`text-2xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.icon}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800/60' : 'bg-white/60'}`}>
                  <h4 className="font-semibold mb-2">Additional</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Open to internships and collaboration opportunities in frontend development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resume Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Resume
          </h2>

          <div className={`p-8 rounded-2xl backdrop-blur-xl border transition-all ${
            darkMode
              ? 'bg-slate-800/50 border-purple-500/20'
              : 'bg-white/50 border-blue-200/50'
          }`}>
            <div className="flex flex-col md:flex-row md:gap-8">
              <div className="md:w-1/3">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>KARTHIK S</h3>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Information Science Student</p>
                <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>KARTHIKGOWDAS658@GMAIL.COM</p>
                <div className="mt-6">
                  <button onClick={() => window.print()} className="px-4 py-2 rounded-md bg-cyan-500 text-white">Print / Save as PDF</button>
                </div>
              </div>

              <div className="md:w-2/3 mt-6 md:mt-0 space-y-4">
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Education</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bachelor of Engineering in Information Science — PES College of Engineering, Mandya</p>
                </div>

                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.map(s => (
                      <span key={s.name} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-purple-500/10 text-purple-200' : 'bg-blue-100 text-blue-700'}`}>{s.name}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Projects Overview</h4>
                  <div className="mt-2 space-y-2">
                    {projects.map(p => (
                      <div key={p.id} className="p-3 rounded-md border">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.title}</div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{p.description}</div>
                          </div>
                          <div className={`text-2xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.icon}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h2>

          <div className={`p-8 rounded-2xl backdrop-blur-xl border transition-all hover:border-purple-500 ${
            darkMode
              ? 'bg-slate-800/50 border-purple-500/20'
              : 'bg-white/50 border-blue-200/50'
          }`}>
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I'm a passionate Information Science student at PES College of Engineering, Mandya, with a strong interest in frontend development and web technologies.
              </p>

              <p className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                My journey in web development has equipped me with skills in building responsive, modern websites and engaging UI/UX applications. I love solving problems through code and creating intuitive digital experiences.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-6">
                {[
                  { label: 'Location', value: 'Mandya, Karnataka' },
                  { label: 'University', value: 'PES College' },
                  { label: 'Current Role', value: 'Student Developer' }
                ].map((item) => (
                  <div key={item.label} className={`p-4 rounded-lg text-center ${
                    darkMode ? 'bg-purple-500/10' : 'bg-blue-100'
                  }`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                    <p className={`text-lg font-semibold ${
                      darkMode ? 'text-cyan-400' : 'text-blue-600'
                    }`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="space-y-2 animate-in fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${
                  darkMode ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105 hover:border-purple-500 cursor-pointer animate-in fade-in ${
                  darkMode
                    ? 'bg-slate-800/50 border-purple-500/20 hover:bg-slate-800/80 hover:shadow-xl hover:shadow-purple-500/20'
                    : 'bg-white/50 border-blue-200/50 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-200/50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-5xl mb-4 p-3 rounded-lg w-fit ${
                  darkMode ? 'bg-purple-500/20' : 'bg-blue-100'
                }`}>
                  {project.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4 flex gap-3">
                  <button onClick={() => openProject(project)} className={`px-3 py-2 rounded-md text-sm transition ${darkMode ? 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
                    View Workflow
                  </button>
                  <a href="#" onClick={(e)=>{e.preventDefault(); alert('Demo not provided in this workspace.')}} className={`px-3 py-2 rounded-md text-sm transition ${darkMode ? 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}>
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Education
          </h2>

          <div className={`p-8 rounded-2xl backdrop-blur-xl border transition-all ${
            darkMode
              ? 'bg-slate-800/50 border-purple-500/20'
              : 'bg-white/50 border-blue-200/50'
          }`}>
            <div className="space-y-6">
              <div className={`border-l-4 pl-6 ${
                darkMode ? 'border-cyan-400' : 'border-blue-500'
              }`}>
                <h3 className={`text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Bachelor of Engineering in Information Science
                </h3>
                <p className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  PES College of Engineering, Mandya
                </p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  USN: 4PS23IS027 | Currently Pursuing
                </p>
              </div>

              <div className={`grid md:grid-cols-2 gap-4 pt-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <div>
                  <p className="font-semibold mb-2">Key Focus Areas:</p>
                  <ol className="space-y-1 text-sm list-decimal list-inside">
                    <li>Web Development</li>
                    <li>Frontend Technologies</li>
                    <li>UI/UX Design</li>
                    <li>Software Development</li>
                  </ol>
                </div>
                <div>
                  <p className="font-semibold mb-2">Relevant Coursework:</p>
                  <ol className="space-y-1 text-sm list-decimal list-inside">
                    <li>Data Structures</li>
                    <li>Web Technologies</li>
                    <li>Database Management</li>
                    <li>Software Engineering</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className={`p-8 rounded-2xl backdrop-blur-xl border ${
              darkMode
                ? 'bg-slate-800/50 border-purple-500/20'
                : 'bg-white/50 border-blue-200/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Send Me a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-2 rounded-lg backdrop-blur-sm transition-all ${
                    darkMode
                      ? 'bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500'
                      : 'bg-white/50 border border-blue-200 text-slate-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-4 py-2 rounded-lg backdrop-blur-sm transition-all ${
                    darkMode
                      ? 'bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500'
                      : 'bg-white/50 border border-blue-200 text-slate-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none`}
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-4 py-2 rounded-lg backdrop-blur-sm transition-all resize-none ${
                    darkMode
                      ? 'bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500'
                      : 'bg-white/50 border border-blue-200 text-slate-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none`}
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500'
                  : 'bg-white/50 border-blue-200/50 hover:border-blue-500'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-purple-500/20' : 'bg-blue-100'
                  }`}>
                    <Mail className={darkMode ? 'text-cyan-400' : 'text-blue-600'} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                    <p className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      KARTHIKGOWDAS658@GMAIL.COM
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500'
                  : 'bg-white/50 border-blue-200/50 hover:border-blue-500'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-purple-500/20' : 'bg-blue-100'
                  }`}>
                    <Github className={darkMode ? 'text-cyan-400' : 'text-blue-600'} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>GitHub</p>
                    <a
                      href="https://github.com/karthikgowdru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-semibold hover:underline ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      @karthikgowdru
                    </a>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-2xl backdrop-blur-xl border transition-all hover:scale-105 ${
                darkMode
                  ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500'
                  : 'bg-white/50 border-blue-200/50 hover:border-blue-500'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-purple-500/20' : 'bg-blue-100'
                  }`}>
                    <Linkedin className={darkMode ? 'text-cyan-400' : 'text-blue-600'} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/karthik-s-b88308288"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-semibold hover:underline ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Karthik S
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 border-t ${
        darkMode
          ? 'border-purple-500/20 bg-slate-900/50'
          : 'border-blue-200/50 bg-white/50'
      }`}>
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className={`font-semibold text-lg ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Designed & Developed by KARTHIK S
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/karthikgowdru"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform transform hover:scale-110 ${
                darkMode ? 'text-cyan-400 hover:text-purple-400' : 'text-blue-600 hover:text-purple-600'
              }`}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-s-b88308288"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform transform hover:scale-110 ${
                darkMode ? 'text-cyan-400 hover:text-purple-400' : 'text-blue-600 hover:text-purple-600'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:KARTHIKGOWDAS658@GMAIL.COM"
              className={`transition-transform transform hover:scale-110 ${
                darkMode ? 'text-cyan-400 hover:text-purple-400' : 'text-blue-600 hover:text-purple-600'
              }`}
            >
              <Mail size={24} />
            </a>
          </div>
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            © 2024 Karthik S. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-50 ${
            darkMode
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-purple-500/50'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-blue-300/50'
          }`}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

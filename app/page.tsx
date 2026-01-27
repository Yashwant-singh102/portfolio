'use client';

import { useRef, useState, ReactNode, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Trophy,
  Zap,
  Brain,
  Globe,
  ArrowUpRight,
  Download,
  Rocket,
  Users,
  Target,
  Lightbulb,
  Shield,
  Smartphone,
  X,
  Youtube,
  Github,
  ExternalLink,
  Briefcase,
  Calendar,
  ChevronDown,
  Code2,
  Sparkles,
} from 'lucide-react';

// Simulated component imports
const BlurFade = ({ children, delay }: { children: ReactNode; delay: number }) => (
  <div style={{ animation: `fadeIn 0.6s ease-out ${delay}s both` }}>{children}</div>
);

const BorderBeam = ({ size, duration }: { size: number; duration: number }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
    <div
      className="absolute inset-0 animate-border-beam"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
        animationDuration: `${duration}s`,
      }}
    />
  </div>
);

const MagicCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const Particles = ({ className, quantity, color }: { className: string; quantity: number; color: string }) => (
  <div className={className}>
    {[...Array(quantity)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-purple-500/30"
        style={{
          width: Math.random() * 3 + 1 + 'px',
          height: Math.random() * 3 + 1 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          animationDelay: Math.random() * 5 + 's',
        }}
      />
    ))}
  </div>
);

const RetroGrid = ({ className }: { className?: string }) => (
  <div className={`absolute inset-0 ${className}`}>
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite',
      }}
    />
  </div>
);

const ShimmerButton = ({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 ${className}`}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </button>
);

const AnimatedGradientText = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={`inline-block rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 ${className}`}>
    {children}
  </div>
);

const FlipWords = ({ words, className }: { words: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`inline-block ${className}`}>
      <span key={index} className="animate-flip-in">
        {words[index]}
      </span>
    </span>
  );
};

const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => (
  <p className={className}>{words}</p>
);

const ThemeToggle = () => (
  <button className="rounded-full border border-zinc-800 bg-zinc-900/50 p-3 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-zinc-800">
    <Sparkles className="h-5 w-5 text-purple-400" />
  </button>
);

const PROJECTS = [
  {
    title: 'AI Trading Bot',
    description:
      'ML-powered trading bot with 23% better performance than traditional strategies using advanced algorithms and real-time market analysis',
    tech: ['Python', 'TensorFlow', 'WebSockets', 'Redis'],
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    metrics: '23% ROI',
    category: 'AI/ML',
    github: 'https://github.com/tosif121',
    demo: '#',
  },
  {
    title: 'Decentralized Social Platform',
    description: 'Web3 social network with IPFS storage, smart contract monetization, and decentralized governance',
    tech: ['Next.js', 'Solidity', 'IPFS', 'Web3.js'],
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    metrics: '10K+ users',
    category: 'Web3',
    github: 'https://github.com/tosif121',
    demo: '#',
  },
  {
    title: 'Video Collaboration Suite',
    description:
      'Enterprise WebRTC platform with AI-powered meeting summaries, screen sharing, and team collaboration tools',
    tech: ['React', 'WebRTC', 'OpenAI', 'Node.js'],
    icon: Zap,
    color: 'from-emerald-500 to-green-500',
    metrics: '500+ companies',
    category: 'Real-time',
    github: 'https://github.com/tosif121',
    demo: '#',
  },
  {
    title: 'Fitness AI Mobile App',
    description:
      'React Native fitness app with real-time form correction using computer vision and personalized workout plans',
    tech: ['React Native', 'TensorFlow Lite', 'Firebase'],
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    metrics: '50K+ downloads',
    category: 'Mobile',
    github: 'https://github.com/tosif121',
    demo: '#',
  },
];

const HACKATHONS = [
  {
    title: 'IoT Smart Home System',
    description: 'Intelligent home automation with real-time monitoring, AI-powered optimization, and voice control integration',
    tech: ['IoT', 'Python', 'TensorFlow', 'MQTT'],
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    achievement: '1st Place',
    event: 'TechFest 2024',
  },
  {
    title: 'Blockchain Supply Chain',
    description: 'Decentralized supply chain tracking with smart contracts for transparency and automated compliance verification',
    tech: ['Solidity', 'Web3.js', 'IPFS', 'React'],
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    achievement: 'Best Innovation',
    event: 'ETHGlobal 2023',
  },
  {
    title: 'Real-time Collaboration Hub',
    description: 'Live collaboration platform with WebRTC video, shared whiteboards, and real-time code editing capabilities',
    tech: ['WebRTC', 'Socket.io', 'React', 'Node.js'],
    icon: Zap,
    color: 'from-emerald-500 to-green-500',
    achievement: 'Winner',
    event: 'HackMIT 2023',
  },
];

const EXPERIENCE = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Innovators Inc.',
    period: '2023 - Present',
    description: 'Leading development of AI-powered features and scaling microservices architecture',
    tech: ['React', 'Node.js', 'AWS', 'TensorFlow'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2022 - 2023',
    description: 'Built core platform features and implemented real-time collaboration tools',
    tech: ['Next.js', 'PostgreSQL', 'WebRTC'],
  },
  {
    role: 'Junior Developer',
    company: 'CodeCraft Solutions',
    period: '2021 - 2022',
    description: 'Developed client projects and contributed to open-source initiatives',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const roles = ['Full-Stack Engineer', 'AI Developer', 'Web3 Builder', 'Hackathon Champion'];

  const categories = ['All', 'AI/ML', 'Web3', 'Real-time', 'Mobile'];
  
  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative bg-black text-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes flip-in {
          0% { transform: rotateX(90deg); opacity: 0; }
          100% { transform: rotateX(0); opacity: 1; }
        }
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes border-beam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-flip-in { animation: flip-in 0.5s ease-out; }
        .animate-border-beam { animation: border-beam 8s linear infinite; }
      `}</style>

      {/* Theme Toggle */}
      <div className="fixed right-6 top-6 z-50">
        <BlurFade delay={0.1}>
          <ThemeToggle />
        </BlurFade>
      </div>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Particles className="absolute inset-0" quantity={50} color="#8b5cf6" />
        <RetroGrid className="opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          <BlurFade delay={0.1}>
            <AnimatedGradientText className="mb-6">
              <span className="text-sm font-medium">✨ Available for opportunities</span>
            </AnimatedGradientText>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Tosif Raza
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mb-8 flex h-12 items-center justify-center text-xl text-zinc-400 md:text-2xl">
              <span className="mr-2">I'm a</span>
              <FlipWords words={roles} className="font-semibold text-white" />
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <TextGenerateEffect
              words="Building the future at the intersection of AI, blockchain, and real-time technologies. 3+ years crafting scalable solutions that matter."
              className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400"
            />
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <ShimmerButton onClick={() => scrollToSection('projects')}>
                <span className="flex items-center gap-2">
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </span>
              </ShimmerButton>
              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-3 font-medium backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-zinc-800"
              >
                Get in Touch
              </button>
            </div>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="flex justify-center gap-4">
              {[
                { icon: Github, href: 'https://github.com/tosif121', label: 'GitHub' },
                { icon: Globe, href: 'https://linkedin.com/in/tosif-raza-247471205', label: 'LinkedIn' },
                { icon: X, href: 'https://x.com/its_tossi', label: 'Twitter' },
                { icon: Youtube, href: 'https://www.youtube.com/@crush_ka_bhai', label: 'YouTube' },
                { icon: Mail, href: 'https://www.instagram.com/tosif._.raza/', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group rounded-full border border-zinc-800 bg-zinc-900/50 p-3 backdrop-blur-sm transition-all hover:-translate-y-1 hover:scale-110 hover:border-purple-500/30 hover:bg-zinc-800"
                >
                  <Icon className="h-5 w-5 transition-colors group-hover:text-purple-400" />
                </a>
              ))}
            </div>
          </BlurFade>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <BlurFade delay={0.1}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="mx-auto max-w-2xl text-zinc-400">
                Passionate about building the future through code, AI, and blockchain technology
              </p>
            </div>
          </BlurFade>

          <div className="mb-20 grid items-start gap-16 lg:grid-cols-2">
            <BlurFade delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                    <Brain className="h-6 w-6 text-purple-400" />
                    My Journey
                  </h3>
                  <div className="space-y-4 leading-relaxed text-zinc-400">
                    <p>
                      I'm a passionate full-stack engineer from{' '}
                      <span className="font-medium text-white">Jodhpur, India</span>, who thrives at the
                      intersection of cutting-edge technologies. My journey began with curiosity about how things work
                      and evolved into a deep passion for creating solutions that matter.
                    </p>
                    <p>
                      From AI-powered applications to decentralized systems, I build solutions that push boundaries. My
                      philosophy:{' '}
                      <span className="italic font-medium text-white">"Technology leads, society follows."</span>
                    </p>
                    <p>
                      With <span className="font-semibold text-purple-400">3+ years</span> of hands-on experience and
                      <span className="font-semibold text-purple-400"> 10+ hackathon victories</span>, I've learned that
                      the best solutions come from understanding both the technical challenges and human needs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:scale-105 hover:border-purple-500/30">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-purple-400" />
                      <span className="font-medium">Location</span>
                    </div>
                    <p className="text-sm text-zinc-400">Jodhpur, Rajasthan, India</p>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all hover:scale-105 hover:border-purple-500/30">
                    <div className="mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-400" />
                      <span className="font-medium">Focus</span>
                    </div>
                    <p className="text-sm text-zinc-400">AI, Web3, Full-Stack</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-purple-400 transition-colors hover:bg-purple-500/20">
                    <Rocket className="h-4 w-4" />
                    <span className="text-sm font-medium">10+ Hackathon Wins</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-400 transition-colors hover:bg-emerald-500/20">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">50+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-amber-400 transition-colors hover:bg-amber-500/20">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm font-medium">3+ Years</span>
                  </div>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="space-y-6">
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
                  <BorderBeam size={200} duration={12} />
                  <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
                    <Lightbulb className="h-6 w-6 text-purple-400" />
                    Core Technologies
                  </h3>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    {[
                      { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'React Native'] },
                      { title: 'Backend', skills: ['Node.js', 'Python', 'GraphQL', 'PostgreSQL'] },
                      { title: 'AI/ML', skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision'] },
                      { title: 'Web3', skills: ['Solidity', 'Web3.js', 'IPFS', 'Smart Contracts'] },
                    ].map(({ title, skills }) => (
                      <div key={title}>
                        <h4 className="mb-2 text-sm font-semibold text-purple-400">{title}</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.map((skill) => (
                            <span
                              key={skill}
                              className="cursor-default rounded bg-zinc-800 px-2 py-1 text-xs transition-all hover:bg-purple-500/10 hover:text-purple-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-zinc-800 pt-4">
                    <h4 className="mb-2 text-sm font-semibold text-purple-400">DevOps & Cloud</h4>
                    <div className="flex flex-wrap gap-1">
                      {['Docker', 'Kubernetes', 'AWS', 'Redis', 'MongoDB'].map((skill) => (
                        <span
                          key={skill}
                          className="cursor-default rounded bg-zinc-800 px-2 py-1 text-xs transition-all hover:bg-purple-500/10 hover:text-purple-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-purple-500/10 p-6 transition-all hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="mb-3 flex items-center gap-2 font-bold">
                    <Globe className="h-5 w-5 text-purple-400" />
                    What Drives Me
                  </h3>
                  <p className="leading-relaxed text-sm text-zinc-400">
                    I believe in the transformative power of technology. Whether it's building AI systems that solve
                    real problems, creating decentralized applications that empower users, or developing mobile apps
                    that enhance daily life, I'm driven by the impact my code can have on the world.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Experience Timeline */}
          <BlurFade delay={0.4}>
            <div className="mb-20">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
                  <Briefcase className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">Professional Journey</span>
                </div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
                </h2>
              </div>

              <div className="space-y-6">
                {EXPERIENCE.map((exp, i) => (
                  <BlurFade key={i} delay={0.5 + i * 0.1}>
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <h3 className="mb-1 text-xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          <p className="mb-2 text-zinc-400">{exp.company}</p>
                          <p className="mb-4 text-sm leading-relaxed text-zinc-500">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-lg border border-zinc-800 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium transition-all group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg bg-zinc-800/50 px-4 py-2 text-sm font-medium text-zinc-400">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <BlurFade delay={0.1}>
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
                <Code2 className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Featured Work</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Selected <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
                From AI/ML systems to decentralized applications, here are some projects I've built that push the boundaries of what's possible
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeFilter === category
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                        : 'border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-purple-500/30 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </BlurFade>

          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, i) => (
              <BlurFade key={project.title} delay={0.2 + i * 0.1}>
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`} />
                  
                  <MagicCard className="relative flex h-full flex-col p-8 transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <project.icon className="h-8 w-8 text-white transition-transform group-hover:scale-110" />
                      </div>
                      <div className="text-right">
                        <div className={`mb-2 inline-block rounded-full bg-gradient-to-r ${project.color} px-3 py-1 text-xs font-bold text-white shadow-lg`}>
                          {project.category}
                        </div>
                        <div className="text-2xl font-bold text-purple-400 transition-transform group-hover:scale-110">
                          {project.metrics}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-purple-400">
                      {project.title}
                    </h3>
                    <p className="mb-6 flex-1 leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-zinc-800 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium transition-all group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-800/50 px-4 py-2 text-sm font-medium transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </MagicCard>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* View All Projects CTA */}
          <BlurFade delay={0.6}>
            <div className="mt-12 text-center">
              <a
                href="https://github.com/tosif121"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-3 font-medium backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/30 hover:bg-zinc-800 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span>View All Projects on GitHub</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Hackathons Section - Enhanced */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <BlurFade delay={0.1}>
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">
                <Trophy className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">Competition Winners</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Hackathon <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Victories</span>
              </h2>
              <p className="mx-auto mb-2 text-lg font-medium text-zinc-300">10+ wins and counting</p>
              <p className="mx-auto max-w-2xl text-zinc-400">
                Rapid prototyping and innovative solutions under pressure. Here are some of my award-winning hackathon projects.
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-8 md:grid-cols-3">
            {HACKATHONS.map((project, i) => (
              <BlurFade key={project.title} delay={0.2 + i * 0.1}>
                <div className="group relative h-full">
                  {/* Animated border glow */}
                  <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30 group-hover:animate-pulse`} />
                  
                  <MagicCard className="relative flex h-full flex-col p-8 transition-all duration-500 group-hover:scale-[1.03] group-hover:-translate-y-2">
                    {/* Award Badge */}
                    <div className="absolute -top-4 right-6">
                      <div className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r ${project.color} px-4 py-2 shadow-lg`}>
                        <Trophy className="h-4 w-4 text-white" />
                        <span className="text-xs font-bold text-white">{project.achievement}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-4">
                      <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.color} shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <project.icon className="h-10 w-10 text-white transition-transform group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center flex-1 flex flex-col">
                      <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-purple-400">
                        {project.title}
                      </h3>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                        {project.description}
                      </p>

                      {/* Event Badge */}
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-800/50 px-4 py-2 text-xs font-medium text-zinc-400 transition-all group-hover:border-amber-500/30 group-hover:bg-amber-500/10 group-hover:text-amber-400">
                          <Calendar className="h-3 w-3" />
                          <span>{project.event}</span>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full border border-zinc-800/50 bg-zinc-800/30 px-3 py-1 text-xs font-medium transition-all group-hover:scale-105 ${
                              i === 0 ? 'group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-400' :
                              i === 1 ? 'group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400' :
                              'group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
                  </MagicCard>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Stats Row */}
          <BlurFade delay={0.5}>
            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { label: 'Hackathons Won', value: '10+', icon: Trophy, color: 'amber' },
                { label: 'Hours Coded', value: '5000+', icon: Code2, color: 'purple' },
                { label: 'Team Projects', value: '30+', icon: Users, color: 'blue' },
                { label: 'Technologies', value: '25+', icon: Rocket, color: 'emerald' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all hover:scale-105 hover:border-${stat.color}-500/30 hover:shadow-lg hover:shadow-${stat.color}-500/10`}
                >
                  <stat.icon className={`mx-auto mb-3 h-8 w-8 text-${stat.color}-400 transition-transform group-hover:scale-110`} />
                  <div className={`mb-1 text-3xl font-bold text-${stat.color}-400`}>{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <BlurFade delay={0.1}>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Let's Build Something <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
              I'm always excited to work on innovative projects. Whether you have a groundbreaking idea, need help
              scaling your product, or want to collaborate on the next big thing in AI or Web3, let's connect!
            </p>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:tosifraza8867@gmail.com"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:animate-bounce" /> Get in Touch
              </a>
              <a
                href="/Tosif_Resume.pdf"
                download="Tosif_Resume.pdf"
                className="group flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-8 py-4 font-medium backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-500/30 hover:bg-zinc-800 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <Download className="h-4 w-4 transition-transform group-hover:animate-bounce" /> Download Resume
              </a>
            </div>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm">
              <p className="mb-4 text-sm text-zinc-500">Or reach out directly via email</p>
              <a
                href="mailto:tosifraza8867@gmail.com"
                className="text-lg font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                tosifraza8867@gmail.com
              </a>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="mb-2 text-lg font-bold">Tosif Raza</p>
              <p className="text-sm text-zinc-500">Building the future, one commit at a time</p>
            </div>
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/tosif121', label: 'GitHub' },
                { icon: Globe, href: 'https://linkedin.com/in/tosif-raza-247471205', label: 'LinkedIn' },
                { icon: X, href: 'https://x.com/its_tossi', label: 'Twitter' },
                { icon: Youtube, href: 'https://www.youtube.com/@crush_ka_bhai', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-zinc-800 bg-zinc-900/50 p-3 transition-all hover:border-purple-500/30 hover:bg-zinc-800 hover:scale-110"
                >
                  <Icon className="h-5 w-5 transition-colors hover:text-purple-400" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Tosif Raza. Crafted with passion and code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
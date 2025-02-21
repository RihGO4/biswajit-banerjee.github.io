import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, BookOpen, Mail, ArrowUpRight, Moon, Sun } from 'lucide-react';

const FloatingShape = ({ delay, type }) => {
  const startPosition = Math.random() * 100;
  const duration = 20 + Math.random() * 10;
  const size = 30 + Math.random() * 20;
  
  const shapes = {
    circle: "rounded-full",
    square: "rotate-45",
    triangle: "triangle"
  };
  
  return (
    <div
      className={`absolute ${shapes[type]} backdrop-blur-sm`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${startPosition}%`,
        right: '-100px',
        opacity: 0.1,
        background: 'linear-gradient(45deg, #6366f1, #818cf8)',
        animation: `floatShape ${duration}s linear ${delay}s infinite`,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  );
};

const DayBackground = () => {
  const shapes = Array(12).fill(null);
  const shapeTypes = ['circle', 'square', 'triangle'];
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50" />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200 to-transparent animate-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-200 to-transparent animate-gradient-slow" />
      </div>
      
      {/* Interactive Particles */}
      <div className="absolute inset-0">
        {shapes.map((_, i) => (
          <FloatingShape 
            key={`shape-${i}`} 
            delay={i * 2} 
            type={shapeTypes[i % shapeTypes.length]}
          />
        ))}
      </div>

      {/* Light Beams */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-indigo-300/20 via-transparent to-transparent transform -rotate-45 animate-beam" />
        <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-blue-300/20 via-transparent to-transparent transform rotate-45 animate-beam animation-delay-2000" />
      </div>
    </div>
  );
};

const Meteor = ({ delay }) => {
  const startPosition = Math.random() * 100;
  const duration = 1 + Math.random() * 2;
  
  return (
    <div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        top: '0%',
        left: `${startPosition}%`,
        opacity: 0,
        animation: `meteor ${duration}s linear ${delay}s infinite`,
        boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.5)',
      }}
    />
  );
};

const StarryBackground = () => {
  const stars = Array(100).fill(null);
  const meteors = Array(8).fill(null);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-slate-900">
      {/* Stars */}
      {stars.map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 'px',
            height: Math.random() * 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${Math.random() * 4 + 3}s infinite ease-in-out`
          }}
        />
      ))}
      {/* Meteors */}
      {meteors.map((_, i) => (
        <Meteor key={`meteor-${i}`} delay={i * 4 + Math.random() * 2} />
      ))}
    </div>
  );
};

const ProjectCard = ({ title, description, tags, github, paper, server, featured = false, isDark }) => (
  <div className={`
    group relative p-6 rounded-xl shadow-lg transition-all duration-300
    ${featured ? 'md:col-span-2' : ''}
    hover:shadow-xl hover:scale-[1.02]
    ${isDark ? 
      'bg-slate-800 border border-slate-700 hover:border-indigo-900' : 
      'bg-white border border-slate-100 hover:border-indigo-100'}
  `}>
    <div className="flex justify-between items-start mb-4">
      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
      <div className="flex gap-2">
        {paper && (
          <a 
            href={paper} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-400 hover:text-indigo-600'} transition-colors`}
            title="Read Paper"
          >
            <BookOpen className="w-6 h-6" />
          </a>
        )}
        {server && (
          <a 
            href={server} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-400 hover:text-indigo-600'} transition-colors`}
            title="Visit Server"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        )}
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-400 hover:text-indigo-600'} transition-colors`}
          title="View Code"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>
    <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span 
          key={idx} 
          className={`px-3 py-1 text-sm rounded-full ${
            isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-50 text-slate-600'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-500'}`} />
    </div>
  </div>
);

const ResearchCard = ({ title, description, tags, github, isDark }) => (
  <div className={`
    group relative p-6 rounded-xl shadow-lg transition-all duration-300 
    hover:shadow-xl hover:scale-[1.02]
    ${isDark ? 
      'bg-slate-800/50 border border-slate-700 hover:border-indigo-900' : 
      'bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-indigo-100'}
  `}>
    <div className="flex justify-between items-start mb-4">
      <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${isDark ? 'text-slate-400 hover:text-indigo-400' : 'text-slate-400 hover:text-indigo-600'} transition-colors`}
      >
        <Github className="w-6 h-6" />
      </a>
    </div>
    <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span 
          key={idx} 
          className={`px-3 py-1 text-sm rounded-full ${
            isDark ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-50 text-indigo-600'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ year, role, company, description, skills, isDark }) => (
  <div className="relative pl-10 pb-10 last:pb-0">
    <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border-4 ${
      isDark ? 'bg-indigo-900 border-slate-800' : 'bg-indigo-100 border-white'
    }`}></div>
    <div className={`absolute left-3 top-6 bottom-0 w-[1px] last:hidden ${
      isDark ? 'bg-indigo-900' : 'bg-indigo-100'
    }`}></div>
    
    <div className="mb-1 flex items-baseline gap-4">
      <span className={`font-semibold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{year}</span>
      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{role}</h3>
    </div>
    <p className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>{company}</p>
    <p className={`mb-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span 
          key={idx} 
          className={`px-2 py-1 text-xs rounded-lg ${
            isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-50 text-slate-600'
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  const ongoingResearch = [
    {
      title: "Metabolic Pathway Analysis",
      description: "Investigating early life evolution through metabolic network expansion. With the help of meta ESM model making protein fold space searchable through embeddings. Current work shows promising results in reducing search space complexity.",
      tags: ["Deep Learning", "LLM", "Protein Folding"],
      github: "https://github.com/Biswajit-Banerjee"
    },
    {
      title: "RNA Structure Prediction",
      description: "Advancing research in RNA secondary structure prediction using transformer-based denoising model. Investigating novel attention mechanisms and architectural innovations for improved accuracy on RNA structure prediction.",
      tags: ["Transformers", "Bioinformatics", "Reinforcement Learning"],
      github: "https://github.com/Biswajit-Banerjee"
    }
  ];

  const projects = [
    {
      title: "RiboVision2: RNA Structure Visualization",
      description: "Created web platform for comprehensive RNA structure visualization and motief prediction using Graph Neural Networks. The webserver is capable of creating motiefs of any organism that with or without existing structure.",
      tags: ["Graph Neural Networks", "Bioinformatics", "Web Development"],
      github: "https://github.com/LDWLab/Ribovision_2.0_GT/",
      paper: "https://doi.org/10.1016/j.jmb.2024.168556",
      server: "https://ribovision3.chemistry.gatech.edu/",
      featured: true
    },
    {
      title: "Multi-Agent Interaction Behaviour",
      description: "Developed novel shared vision encoder for reinforcement learning agents in competitive environments. Implemented vision transfer between agents while maintaining distinct behaviors, with comprehensive analysis of emergent strategies.",
      tags: ["PyTorch", "Reinforcement Learning", "Computer Vision", "Multi-Agent Systems"],
      github: "https://github.com/chinardankhara/drl-combattank-project",
      paper: "/pdfs/Shared-Visual-Representation.pdf"
    },
    {
      title: "EteRNAity: RNA Structure Prediction",
      description: "Published transformer-based approach for RNA secondary structure prediction at ICLR 2021. Achieved competitive results with only 55K parameters through novel architecture design and training methodology.",
      tags: ["Deep Learning", "Transformers", "Bioinformatics", "PyTorch"],
      github: "https://github.com/Biswajit-Banerjee/Eternal",
      paper: "/pdfs/RNA2D-Structure-Prediction.pdf"
    },
    {
      title: "1.5-bit NEAT Evolution",
      description: "Implemented memory-efficient neural architecture evolution using 1.58-bit quantization. Achieved competitive performance on BipedalWalker-v3 while drastically reducing model size through innovative weight constraints.",
      tags: ["NeuroEvolution", "Quantization", "Reinforcement Learning", "AutoML"],
      github: "https://github.com/Biswajit-Banerjee/1.5bit-NEAT",
      paper: "/pdfs/bit-neat.pdf"
    },
    {
      title: "Host Tracking Across Dynamic IPs",
      description: "Published at USENIX 2023. Developed passive tracking methodology for mapping hosts across IP changes, achieving 85% one-to-one mapping accuracy. Novel feature-based algorithm for robust host identification.",
      tags: ["Network Analysis", "Machine Learning", "BigQuery", "Security"],
      github: "https://github.com/Biswajit-Banerjee",
      paper: "/pdfs/Mapping-Hosts.pdf"
    }
  ];

  const experience = [
    {
      year: "2023-Present",
      role: "Graduate Researcher",
      company: "NASA Center for Integration of the Origins of Life, Georgia Tech",
      description: "Leading research on metabolic fold space search-ability through protein fold level embedding and function alignment. Developed novel deep learning architectures achieving 85% accuracy in predicting protein active sites. Co-authored research on RiboVision2, implementing Graph Neural Networks for RNA motif prediction with 92% accuracy. Engineered scalable ML pipeline processing ~500K protein structures for metabolic pathway mapping.",
      skills: ["Deep Learning", "Reinforcement Learning", "Bioinformatics", "PyTorch", "Distributed Computing"]
    },
    {
      year: "2024",
      role: "ML Research Intern",
      company: "ExtraHop",
      description: "Developed compact LLM for network security detection, reducing false positives by 68% across 2,271 customer networks. Implemented end-to-end ML pipeline for identifying cyber kill-chain patterns.",
      skills: ["LLM", "Security Analytics", "AWS", "Data Science"]
    },
    {
      year: "2022-2023",
      role: "ML Engineer II",
      company: "Stellapps",
      description: "Led end-to-end computer vision system development achieving 92% accuracy in production for cattle identification. Optimized model performance achieving 2ms inference time on mobile devices through systematic profiling.",
      skills: ["Computer Vision", "Fast API", "Model Quantization", "Edge Deployement"]
    },
    {
      year: "2019-2022",
      role: "R&D Engineer II",
      company: "Synopsys",
      description: "Created ML-driven circuit placement optimization featured in Forbes. Built scalable data processing pipeline enabling dynamic transformations. Developed high-precision ML regression model reducing processing time from 3 weeks to 2-3 hours.",
      skills: ["ML Optimization", "Hardware Design", "Distributed Systems", "Pipeline Development"]
    }
  ];

  return (
    <div className="min-h-screen transition-all duration-700">
      {/* Background */}
      {isDark ? <StarryBackground /> : <DayBackground />}
      
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`
            p-4 rounded-xl transition-all duration-500
            backdrop-blur-md shadow-lg
            ${isDark ? 
              'bg-slate-800/50 text-yellow-400 hover:bg-slate-700/50' : 
              'bg-white/50 text-slate-800 hover:bg-white/70'
            }
            transform hover:scale-110
            group relative
          `}
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-6">
            <Sun className={`w-6 h-6 absolute transition-all duration-500 ${
              isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`} />
            <Moon className={`w-6 h-6 absolute transition-all duration-500 ${
              isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`} />
          </div>
          <span className={`
            absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
            px-2 py-1 text-sm rounded-md whitespace-nowrap
            opacity-0 group-hover:opacity-100 transition-opacity
            ${isDark ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}
          `}>
            Switch to {isDark ? 'light' : 'dark'} mode
          </span>
        </button>
      </div>

      {/* Hero Section */}
      <div className={`
        py-20 px-6 transition-all duration-1000 relative
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                Biswajit Banerjee
              </h1>
              <div className="space-y-2">
                <p className={`text-xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Machine Learning Researcher | Origin of Life
                </p>
                <p className={isDark ? 'text-indigo-400 text-lg' : 'text-indigo-600 text-lg'}>
                  Graduate Researcher @ NASA iCOOL
                </p>
                <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>Georgia Institute of Technology</p>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://github.com/Biswajit-Banerjee"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                    isDark ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=a6hOkOoAAAAJ&hl=en"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors ${
                    isDark ? 
                    'bg-slate-800 text-white border-slate-700 hover:border-indigo-800' : 
                    'bg-white text-slate-800 border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Publications
                </a>
                <a 
                  href="mailto:bbanerjee32@gatech.edu"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors ${
                    isDark ? 
                    'bg-slate-800 text-white border-slate-700 hover:border-indigo-800' : 
                    'bg-white text-slate-800 border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </a>
              </div>
            </div>
            
            <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-2xl">
              <div className={`absolute inset-0 mix-blend-overlay ${
                isDark ? 'bg-gradient-to-br from-indigo-900/20 to-purple-900/20' : 
                'bg-gradient-to-br from-indigo-500/20 to-purple-500/20'
              }`}></div>
              <img
                src="/images/profile.jpg"
                alt="Biswajit Banerjee"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Current Research */}
          <section>
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Research In Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingResearch.map((research, idx) => (
                <ResearchCard key={idx} {...research} isDark={isDark} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} isDark={isDark} />
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section>
            <h2 className={`text-3xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-800'}`}>
              Experience
            </h2>
            <div className="relative">
              {experience.map((item, idx) => (
                <TimelineItem key={idx} {...item} isDark={isDark} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t transition-colors ${
        isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-100'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
            © 2025 Biswajit Banerjee
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes meteor {
          0% {
            transform: translate(0, 0) rotate(45deg) scale(0);
            opacity: 0;
          }
          20% {
            transform: translate(-20vw, 20vh) rotate(45deg) scale(1);
            opacity: 1;
          }
          80% {
            transform: translate(-80vw, 80vh) rotate(45deg) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-100vw, 100vh) rotate(45deg) scale(0);
            opacity: 0;
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes floatShape {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translate(-100vw, -20vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes gradient {
          0% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(50%) translateY(0); }
          100% { transform: translateX(-50%) translateY(0); }
        }
        @keyframes beam {
          0% { opacity: 0.1; transform: translateY(-100%) rotate(45deg); }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; transform: translateY(100%) rotate(45deg); }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
        .animate-gradient-slow {
          animation: gradient 20s ease infinite;
        }
        .animate-beam {
          animation: beam 10s ease-in-out infinite;
        }
        .triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
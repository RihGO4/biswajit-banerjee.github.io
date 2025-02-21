import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, BookOpen, Mail, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, description, tags, github, paper, server, featured = false }) => (
  <div className={`
    group relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300
    ${featured ? 'md:col-span-2' : ''}
    hover:shadow-xl hover:scale-[1.02]
    border border-slate-100 hover:border-indigo-100
  `}>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <div className="flex gap-2">
        {paper && (
          <a 
            href={paper} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 transition-colors"
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
            className="text-slate-400 hover:text-indigo-600 transition-colors"
            title="Visit Server"
          >
            <ExternalLink className="w-6 h-6" />
          </a>
        )}
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-600 transition-colors"
          title="View Code"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>
    <p className="text-slate-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span 
          key={idx} 
          className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-5 h-5 text-indigo-500" />
    </div>
  </div>
);

const ResearchCard = ({ title, description, tags, github }) => (
  <div className="group relative bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-slate-100 hover:border-indigo-100">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-indigo-600 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
    </div>
    <p className="text-slate-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, idx) => (
        <span 
          key={idx} 
          className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const TimelineItem = ({ year, role, company, description, skills }) => (
  <div className="relative pl-10 pb-10 last:pb-0">
    <div className="absolute left-0 top-0 w-6 h-6 bg-indigo-100 rounded-full border-4 border-white"></div>
    <div className="absolute left-3 top-6 bottom-0 w-[1px] bg-indigo-100 last:hidden"></div>
    
    <div className="mb-1 flex items-baseline gap-4">
      <span className="text-indigo-600 font-semibold">{year}</span>
      <h3 className="text-lg font-semibold text-slate-800">{role}</h3>
    </div>
    <p className="text-indigo-600 mb-2">{company}</p>
    <p className="text-slate-600 mb-3">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
      // paper: "https://github.com/chinardankhara/drl-combattank-project/blob/d1267f1ddf28d8edf86bf4a8bc3d6a5ecb043360/cs8803-DRL.pdf",
      paper: "/pdfs/Shared-Visual-Representation.pdf",
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
    },
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className={`
        py-20 px-6 transition-all duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                Biswajit Banerjee
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-slate-600">
                  Machine Learning Researcher | Origin of Life
                </p>
                <p className="text-lg text-indigo-600">
                  Graduate Researcher @ NASA iCOOL
                </p>
                <p className="text-slate-500">Georgia Institute of Technology</p>
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://github.com/Biswajit-Banerjee"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=a6hOkOoAAAAJ&hl=en"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Publications
                </a>
                <a 
                  href="mailto:bbanerjee32@gatech.edu"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-800 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mix-blend-overlay"></div>
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
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Research In Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoingResearch.map((research, idx) => (
                <ResearchCard key={idx} {...research} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Experience</h2>
            <div className="relative">
              {experience.map((item, idx) => (
                <TimelineItem key={idx} {...item} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center text-slate-600">
          <p>© 2025 Biswajit Banerjee</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
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
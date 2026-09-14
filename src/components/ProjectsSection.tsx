import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  CheckCircle, 
  ArrowRight,
  X,
  Code2,
  Video,
  Database,
  Terminal
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web & Python' },
    { id: 'creative', label: 'Videography' },
    { id: 'dsa', label: 'DSA & Algorithms' },
    { id: 'ai', label: 'AI & ML Basics' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-stone-900/20 border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-100 tracking-tight">
              Featured Projects & Creative Works
            </h2>
            <p className="text-stone-400 text-base max-w-2xl mt-2">
              Demonstrating full-stack Python application architecture, responsive front-end design, and high-retention video production.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === f.id
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-stone-900/50 border border-stone-800/80 hover:border-stone-700 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-stone-800/80 text-amber-400 border border-stone-700/60">
                    {project.categoryLabel}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-800 text-stone-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-stone-100 group-hover:text-amber-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-amber-500/90 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-stone-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.keyHighlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[11px] text-stone-400">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-950/80 border border-stone-800 text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Stats */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                {project.stats && project.stats[0] ? (
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-400 font-mono">
                      {project.stats[0].label}
                    </span>
                    <span className="text-xs font-bold text-stone-200">
                      {project.stats[0].value}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-stone-400 font-mono">Raj Gopi Kalyan</span>
                )}

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-amber-300 text-xs font-semibold border border-stone-700 hover:border-amber-500/40 transition-all"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Project Overview */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="mb-4">
                <span className="inline-block text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-2">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="font-display font-bold text-2xl text-stone-100">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-amber-400 mt-1">
                  {activeModalProject.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 mb-6 text-sm text-stone-300 leading-relaxed">
                {activeModalProject.longDescription || activeModalProject.description}
              </div>

              {/* Key Highlights List */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3">
                  Key Technical & Creative Highlights
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              {activeModalProject.stats && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {activeModalProject.stats.map((stat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 text-center">
                      <div className="text-xs text-stone-400 font-mono">{stat.label}</div>
                      <div className="text-sm font-bold text-amber-400 mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-stone-800 text-xs font-mono text-stone-200 border border-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-stone-800 flex justify-end gap-3">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-stone-800 text-stone-200 text-xs font-semibold hover:bg-stone-700 transition-colors"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-stone-950 text-xs font-bold hover:bg-amber-400 transition-colors"
                >
                  Inquire About This Work
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

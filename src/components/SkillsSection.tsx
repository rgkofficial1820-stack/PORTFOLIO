import React, { useState } from 'react';
import { 
  Code, 
  Terminal, 
  Layout, 
  Video, 
  GitBranch, 
  Cpu, 
  Users, 
  Award,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { skillsData, softSkills } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [showSoftSkills, setShowSoftSkills] = useState(false);

  const tabs = [
    { id: 'all', label: 'All Technical' },
    { id: 'programming', label: 'Programming & CS' },
    { id: 'web', label: 'Web & Frontend' },
    { id: 'creative', label: 'Creative & Video' },
    { id: 'tools', label: 'Tools & Workflow' },
  ];

  const filteredGroups = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(group => group.id === activeTab);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Skill Matrix & Competencies</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-100 tracking-tight">
              Skills & Technical Tooling
            </h2>
            <p className="text-stone-400 text-base max-w-2xl mt-2">
              Structured knowledge acquired through B.Tech coursework, HackerRank challenges, hands-on development, and digital content creation.
            </p>
          </div>

          {/* Toggle between Technical & Soft Skills */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-stone-900 border border-stone-800 self-start md:self-auto">
            <button
              onClick={() => setShowSoftSkills(false)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                !showSoftSkills 
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20' 
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Technical Stack
            </button>
            <button
              onClick={() => setShowSoftSkills(true)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                showSoftSkills 
                  ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20' 
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Soft Skills & Leadership
            </button>
          </div>
        </div>

        {!showSoftSkills ? (
          <div>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-stone-100 text-stone-950 shadow-sm'
                      : 'bg-stone-900/80 text-stone-400 hover:text-stone-200 border border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skills Groups Grid */}
            <div className="space-y-10">
              {filteredGroups.map((group) => (
                <div key={group.id} className="p-6 sm:p-8 rounded-3xl bg-stone-900/40 border border-stone-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-stone-800/80 gap-2">
                    <div>
                      <h3 className="font-display font-bold text-xl text-stone-100 flex items-center gap-2.5">
                        {group.id === 'programming' && <Terminal className="w-5 h-5 text-amber-400" />}
                        {group.id === 'web' && <Layout className="w-5 h-5 text-amber-400" />}
                        {group.id === 'creative' && <Video className="w-5 h-5 text-amber-400" />}
                        {group.id === 'tools' && <GitBranch className="w-5 h-5 text-amber-400" />}
                        <span>{group.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-400 mt-1">
                        {group.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-stone-400 bg-stone-950/60 px-3 py-1 rounded-lg border border-stone-800 self-start sm:self-auto">
                      {group.skills.length} Competencies
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-stone-950/70 border border-stone-800/80 hover:border-stone-700 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold text-stone-100 text-sm group-hover:text-amber-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                              skill.levelText === 'Advanced' 
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold'
                                : skill.levelText === 'Proficient'
                                ? 'bg-stone-800 text-stone-200'
                                : 'bg-stone-900 text-stone-400'
                            }`}>
                              {skill.levelText}
                            </span>
                          </div>

                          {skill.description && (
                            <p className="text-xs text-stone-400 leading-relaxed mb-3">
                              {skill.description}
                            </p>
                          )}
                        </div>

                        {/* Visual Progress Meter */}
                        <div className="w-full">
                          <div className="flex justify-between text-[10px] text-stone-400 font-mono mb-1">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-700"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Soft Skills & Leadership View */
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-100 text-base sm:text-lg">
                  Interpersonal, Communication & Leadership Rigor
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  Success in technology demands more than clean code. As an active cricket player and collaborative team participant in hackathons and college symposiums, Raj brings high accountability, clarity under pressure, and mutual trust to every project.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800/80 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-stone-800 text-amber-400 flex items-center justify-center text-xs font-mono font-bold mb-3">
                      0{idx + 1}
                    </div>
                    <h4 className="font-display font-semibold text-stone-100 text-sm mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React from 'react';
import { 
  Code2, 
  Video, 
  Trophy, 
  Languages, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  FileText,
  Target
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const pillars = [
    {
      icon: Code2,
      title: 'Software Development & IT',
      description: 'Building robust backend logic with Python and Flask, understanding data structures, memory management with C, and normalized SQL databases.'
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Engineering visual stories through short-form reels on Instagram (@rgk_glary.18), rhythmic video cuts, sound sync, and visual pacing that commands audience engagement.'
    },
    {
      icon: Trophy,
      title: 'Cricket & Leadership',
      description: 'Active collegiate cricket player. Cultivating strategic resilience, rapid on-field decision making, mutual accountability, and high-synergy teamwork.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-stone-900/30 border-y border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-100 tracking-tight">
            About Raj Gopi Kalyan
          </h2>
          <p className="text-stone-400 text-base max-w-2xl mt-2">
            An engineer by intellect and a creator by heart, blending computational discipline with aesthetic visual narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-stone-900/60 border border-stone-800/80 shadow-md">
              <h3 className="font-display font-semibold text-xl text-stone-100 mb-4 flex items-center gap-2">
                <span>The Journey So Far</span>
              </h3>
              
              <div className="space-y-4 text-stone-300 text-base leading-relaxed">
                <p>
                  Currently pursuing a Bachelor of Technology in <strong className="text-stone-100 font-semibold">Information Technology (2025–2029)</strong> at <strong className="text-stone-100 font-semibold">Ramco Institute of Technology</strong>, I am driven by the thrill of turning ideas into functional software and immersive media.
                </p>
                <p>
                  My technical foundation spans <strong className="text-amber-400 font-medium">Python, Flask, C, and responsive web systems</strong>. Having achieved a 3-star rating on HackerRank in Python, I routinely challenge myself to refine algorithmic thinking, optimize logic, and write clean, maintainable code.
                </p>
                <p>
                  Simultaneously, through <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="text-pink-400 hover:underline font-medium">rgk_glary.18</a>, I explore the art of video editing and reel creation on Instagram. I treat post-production with the same architectural precision as software development—timing cuts to audio beats, grading color pallets, and designing kinetic typography for modern audiences.
                </p>
              </div>

              {/* Core Philosophy Callout */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">Guiding Principle</div>
                  <p className="text-sm text-stone-200 italic">
                    "{personalInfo.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-stone-900/40 border border-stone-800/80 hover:border-stone-700 transition-all flex flex-col"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-semibold text-stone-100 text-sm mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Quick Profile Details & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Facts Card */}
            <div className="p-6 rounded-3xl bg-stone-900/70 border border-stone-800/80">
              <h3 className="font-display font-semibold text-lg text-stone-100 mb-4 flex items-center justify-between">
                <span>Personal Overview</span>
                <span className="text-xs font-mono text-amber-400">RIT Student</span>
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Full Name</span>
                  <span className="font-semibold text-stone-200">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Current Program</span>
                  <span className="font-semibold text-stone-200 text-right">B.Tech IT (2025–2029)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Institution</span>
                  <span className="font-semibold text-stone-200 text-right">Ramco Inst. of Tech</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Location</span>
                  <span className="font-semibold text-stone-200">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Primary Focus</span>
                  <span className="font-semibold text-amber-400 text-right">Software Dev & Video Editing</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-800">
                  <span className="text-stone-400">Instagram / Reels</span>
                  <a 
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-pink-400 hover:text-pink-300 font-mono flex items-center gap-1"
                  >
                    <span>@rgk_glary.18</span>
                  </a>
                </div>
              </div>

              {/* Language Proficiencies */}
              <div className="mt-6 pt-4 border-t border-stone-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-300 mb-3">
                  <Languages className="w-4 h-4 text-amber-400" />
                  <span>Languages Known</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.languages.map((lang, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-stone-950/60 border border-stone-800">
                      <div className="font-semibold text-stone-100 text-sm">{lang.name}</div>
                      <div className="text-[11px] text-stone-400">{lang.fluency}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Full Resume Button */}
              <button
                onClick={onOpenResume}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-xs flex items-center justify-center gap-2 border border-stone-700 hover:border-amber-500/40 transition-all"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Open Digital Resume & Download</span>
              </button>
            </div>

            {/* Work Ethic Checklist */}
            <div className="p-5 rounded-2xl bg-stone-900/40 border border-stone-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                Working Principles
              </h4>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Iterative problem solving backed by code verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Clean, semantic web architecture and responsive layouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Consistent self-learning in emerging AI and engineering trends</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sportsmanship and team-first alignment on all projects</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { 
  Video, 
  Sparkles, 
  Film, 
  Play, 
  Scissors, 
  Volume2, 
  Eye, 
  Palette, 
  ExternalLink,
  Flame,
  CheckCircle2,
  Instagram
} from 'lucide-react';
import { creativeWorksData, personalInfo } from '../data/portfolioData';

export const CreativeGallery: React.FC = () => {
  const creativePillars = [
    {
      icon: Scissors,
      title: 'Precision Pacing & Cuts',
      desc: 'Frame-accurate cuts aligned with audio transients to maintain intense viewer engagement.'
    },
    {
      icon: Volume2,
      title: 'Dynamic Sound Design',
      desc: 'Layered sound effects, whooshes, risers, and curated background beats that elevate mood.'
    },
    {
      icon: Palette,
      title: 'Color Grading & Contrast',
      desc: 'Optimized vibrance and contrast matrices crafted specifically for OLED mobile displays.'
    },
    {
      icon: Sparkles,
      title: 'Kinetic Typography',
      desc: 'Punchy animated subtitles, contextual callouts, and motion text keeping eye focus locked.'
    }
  ];

  return (
    <section id="creative" className="py-20 bg-stone-900/30 border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Creative Studio • {personalInfo.creativeBrand}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-100 tracking-tight">
              Videography
            </h2>
            <p className="text-stone-400 text-base max-w-2xl mt-2">
              Where engineering precision meets visual storytelling. High-impact reel edits, pacing algorithms, and aesthetic multimedia delivery.
            </p>
          </div>

          <a 
            href={personalInfo.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-pink-500/50 flex items-center gap-3 group transition-all"
            title="Open Instagram page @rgk_glary.18"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 text-pink-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-100 group-hover:text-pink-400 flex items-center gap-1 transition-colors">
                <span>@rgk_glary.18</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </div>
              <div className="text-[11px] text-stone-400 font-mono">Instagram Page</div>
            </div>
          </a>
        </div>

        {/* 4 Creative Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {creativePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-900/50 border border-stone-800/80 hover:border-purple-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-300 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-semibold text-stone-100 text-sm mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Creative Works Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creativeWorksData.map((work) => (
            <div
              key={work.id}
              className="p-6 rounded-3xl bg-stone-900/40 border border-stone-800/80 hover:border-stone-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Mock Phone Frame Header for Reel aesthetic */}
                <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border border-stone-800 mb-5 overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Subtle Grid / Equalizer lines */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Play preview icon */}
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all shadow-lg shadow-amber-500/10">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span className="flex items-center gap-1">
                      <Film className="w-3 h-3 text-purple-400" />
                      <span>{work.channel}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-stone-900/80 text-amber-400">
                      9:16 Optimized
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                  <span className="font-mono text-amber-400">{work.type}</span>
                  <span className="text-[11px]">{work.role}</span>
                </div>

                <h3 className="font-display font-bold text-lg text-stone-100 group-hover:text-amber-300 transition-colors mb-2">
                  {work.title}
                </h3>

                <p className="text-xs text-stone-300 leading-relaxed mb-4">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {work.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-950/80 border border-stone-800 text-stone-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools footer */}
              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <span className="text-stone-400 text-[11px] font-mono">
                  {work.tools.join(', ')}
                </span>
                <a
                  href="#contact"
                  className="text-amber-400 hover:text-amber-300 font-semibold text-xs inline-flex items-center gap-1"
                >
                  <span>Collaborate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Banner with Instagram CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-pink-950/20 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
              <Instagram className="w-4 h-4" />
              <span>Instagram Reels & Video Production • @rgk_glary.18</span>
            </div>
            <h3 className="font-display font-bold text-xl text-stone-100 mb-1">
              Need High-Retention Reels or Video Editing for Your Brand or Project?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
              From college symposium recaps to tech breakdowns and brand storytelling, @rgk_glary.18 provides turnkey editing, beat synchronization, and visual pacing.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-90 text-white text-xs font-bold transition-all shadow-md shadow-pink-500/20 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Visit @rgk_glary.18</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold transition-colors border border-stone-700"
            >
              Contact Raj
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

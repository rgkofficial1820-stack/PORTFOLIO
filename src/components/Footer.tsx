import React from 'react';
import { ArrowUp, Heart, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-12 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-900">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-display font-bold text-stone-950 text-base shadow-sm">
              RGK
            </div>
            <div>
              <div className="font-display font-bold text-stone-200 text-sm">
                RAJ GOPI KALYAN M
              </div>
              <div className="text-[11px] text-stone-400 font-mono">
                B.Tech IT • Ramco Institute of Technology (2025–2029)
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-amber-400 transition-colors">Education</a>
            <a href="#creative" className="hover:text-amber-400 transition-colors">Videography</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="text-amber-400 hover:underline">Resume</button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100 hover:bg-stone-800 transition-all flex items-center gap-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Raj Gopi Kalyan M. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors font-medium">
              Instagram (@rgk_glary.18)
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-stone-200 transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-stone-200 transition-colors">
              Email
            </a>
            <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-stone-200 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

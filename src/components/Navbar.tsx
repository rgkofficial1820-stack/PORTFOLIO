import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Videography', href: '#creative' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-display font-bold text-stone-950 text-lg shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform">
            RGK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-stone-100 text-base tracking-tight group-hover:text-amber-400 transition-colors">
              RAJ GOPI KALYAN M
            </span>
            <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
              <span>B.Tech IT</span>
              <span className="text-amber-500">•</span>
              <span>Ramco Inst. of Tech</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-stone-900/60 border border-stone-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1 text-sm font-medium text-stone-300 hover:text-amber-400 hover:bg-stone-800/60 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-stone-700 bg-stone-900/80 hover:bg-stone-800 text-stone-200 text-xs font-semibold hover:border-amber-500/50 hover:text-amber-300 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </button>

          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20 active:scale-95"
          >
            <Send className="w-3.5 h-3.5 text-stone-950" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-stone-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-stone-900/95 border border-stone-800 shadow-2xl backdrop-blur-xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2.5 rounded-xl text-stone-200 hover:bg-stone-800 hover:text-amber-400 font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-700 bg-stone-800/80 text-stone-200 text-sm font-semibold"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View & Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-stone-950 text-sm font-bold shadow-md shadow-amber-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

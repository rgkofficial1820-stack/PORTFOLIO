import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  Linkedin, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Star,
  ExternalLink,
  Code,
  Video,
  Instagram,
  Camera,
  Upload,
  RotateCcw
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { photoUrl, isCustomPhoto, handleFileUpload, resetToDefault } = useProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const onFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ok = await handleFileUpload(file);
      if (ok) {
        setUploadNotice('Original photo applied directly!');
        setTimeout(() => setUploadNotice(null), 3500);
      }
    }
  };

  const onDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const ok = await handleFileUpload(file);
      if (ok) {
        setUploadNotice('Original photo applied directly!');
        setTimeout(() => setUploadNotice(null), 3500);
      }
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-stone-800/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for B.Tech Internships & Collaborations</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-stone-100 tracking-tight leading-[1.1] mb-4">
              RAJ GOPI <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                KALYAN M
              </span>
            </h1>

            {/* Dynamic Role Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 text-xs font-semibold">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                B.Tech IT Student (2025–2029)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 text-xs font-semibold">
                <Code className="w-3.5 h-3.5 text-amber-400" />
                Flask & Python Developer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900 border border-stone-800 text-stone-200 text-xs font-semibold">
                <Video className="w-3.5 h-3.5 text-amber-400" />
                Creative Reel Creator (rgk_glary.18)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                HackerRank 3★
              </span>
            </div>

            {/* Pitch & Philosophy */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Undergraduate in Information Technology at <span className="text-stone-100 font-semibold">Ramco Institute of Technology</span>. 
              Passionate about building smart digital solutions with Python & Flask, crafting responsive web architectures, and telling high-retention visual stories through creative video editing.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-resume-modal-btn"
                onClick={onOpenResume}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 border border-stone-700 hover:border-amber-500/50 font-semibold text-sm transition-all shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Resume Preview</span>
              </button>

              <a
                id="hero-whatsapp-btn"
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-xl bg-stone-900/80 hover:bg-emerald-950/40 text-emerald-400 border border-stone-800 hover:border-emerald-500/40 text-sm font-medium transition-all"
                title="Chat on WhatsApp"
              >
                <span className="text-xs font-semibold px-1">WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Fast Quick-Contact bar */}
            <div className="w-full pt-6 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone quick click/copy */}
              <div className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-stone-900/50 border border-stone-800/60 hover:border-stone-700 transition-colors">
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2.5 text-xs text-stone-300 hover:text-amber-400 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-stone-800 text-amber-400">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono">{personalInfo.formattedPhone}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 text-xs flex items-center gap-1"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? (
                    <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Email quick click/copy */}
              <div className="flex items-center justify-between p-2.5 px-3 rounded-xl bg-stone-900/50 border border-stone-800/60 hover:border-stone-700 transition-colors">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2.5 text-xs text-stone-300 hover:text-amber-400 transition-colors truncate mr-2"
                >
                  <div className="p-1.5 rounded-lg bg-stone-800 text-amber-400 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono truncate">{personalInfo.email}</span>
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1 rounded text-stone-400 hover:text-stone-200 hover:bg-stone-800 text-xs flex items-center gap-1 shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-1">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Credentials Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow & Border Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-stone-800 via-stone-900 to-stone-950 border border-stone-800 shadow-2xl">
                
                {/* Photo Container */}
                <div 
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={onDrop}
                  className={`relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900 border transition-all duration-300 group ${
                    isDragging ? 'border-amber-400 ring-4 ring-amber-400/20' : 'border-stone-800/80'
                  }`}
                >
                  <img
                    src={photoUrl}
                    alt="Raj Gopi Kalyan M"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent pointer-events-none" />

                  {/* Upload Photo Button Overlay - Quick click to set original photo */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={onFileInputChange}
                    className="hidden"
                  />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-2.5 py-1 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-amber-300 border border-stone-700/80 backdrop-blur-md text-[11px] font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                      title="Select and apply your original raj.jpeg photo directly"
                    >
                      <Camera className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isCustomPhoto ? 'Replace Photo' : 'Upload raj.jpeg'}</span>
                    </button>

                    {isCustomPhoto && (
                      <button
                        onClick={resetToDefault}
                        className="p-1 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-400 hover:text-rose-400 border border-stone-700/80 backdrop-blur-md text-[11px] shadow-md transition-all cursor-pointer"
                        title="Reset photo to default"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {uploadNotice && (
                    <div className="absolute top-12 left-3 right-3 py-1.5 px-3 rounded-lg bg-emerald-500/95 text-stone-950 text-xs font-bold text-center shadow-lg backdrop-blur-md z-20 animate-fade-in">
                      ✓ {uploadNotice}
                    </div>
                  )}

                  {isDragging && (
                    <div className="absolute inset-0 bg-stone-950/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-amber-400 p-4 text-center">
                      <Upload className="w-10 h-10 mb-2 animate-bounce" />
                      <p className="font-bold text-sm text-stone-100">Drop raj.jpeg here</p>
                      <p className="text-xs text-stone-400 mt-1">Applies your original photo exactly as it is</p>
                    </div>
                  )}

                  {/* Badges on the photo */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1.5 pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-stone-100 text-lg sm:text-xl">
                        Raj Gopi Kalyan M
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500 text-stone-950 text-[11px] font-extrabold uppercase tracking-wide">
                        B.Tech IT
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Ramco Institute of Technology, Tamil Nadu</span>
                    </p>
                  </div>
                </div>

                {/* Floating Micro Badge 1: 3-Star HackerRank */}
                <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-stone-900/95 border border-stone-700/80 shadow-xl backdrop-blur-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-100">3★ HackerRank</div>
                    <div className="text-[11px] text-amber-400 font-mono">Python Certified</div>
                  </div>
                </div>

                {/* Floating Micro Badge 2: Creative Reel Editor with Instagram Link */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute -top-4 -right-4 p-3 rounded-2xl bg-stone-900/95 border border-stone-700/80 hover:border-pink-500/60 shadow-xl backdrop-blur-md flex items-center gap-3 group/badge transition-all"
                  title="Visit @rgk_glary.18 on Instagram"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 text-pink-400 flex items-center justify-center font-bold group-hover/badge:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-100 group-hover/badge:text-pink-400 flex items-center gap-1">
                      <span>rgk_glary.18</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </div>
                    <div className="text-[11px] text-stone-400">Instagram Creator</div>
                  </div>
                </a>

              </div>

              {/* Social Links Row */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                <a
                  id="hero-instagram-link"
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 hover:from-pink-500/20 hover:to-purple-500/20 border border-pink-500/30 hover:border-pink-500/60 text-stone-200 hover:text-pink-300 text-xs font-semibold transition-all shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@rgk_glary.18</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  id="hero-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-[#0077b5]/20 border border-stone-800 hover:border-[#0077b5]/50 text-stone-300 hover:text-white text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-300 hover:text-amber-400 text-xs font-semibold transition-all"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-stone-900/40 border border-stone-800/70 hover:border-stone-700 transition-colors flex flex-col items-start"
            >
              <span className="font-display font-bold text-2xl sm:text-3xl text-amber-400 mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-stone-200">
                {stat.label}
              </span>
              <span className="text-[11px] text-stone-400 font-mono">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

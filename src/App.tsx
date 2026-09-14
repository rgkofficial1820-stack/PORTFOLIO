import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationTimeline } from './components/EducationTimeline';
import { CreativeGallery } from './components/CreativeGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoProvider } from './context/PhotoContext';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-300">
        {/* Sticky Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <AboutSection onOpenResume={() => setResumeOpen(true)} />
          <SkillsSection />
          <ProjectsSection />
          <EducationTimeline />
          <CreativeGallery />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setResumeOpen(true)} />

        {/* Interactive Printable & Downloadable Resume Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </PhotoProvider>
  );
}


import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Trophy, 
  Flame,
  FileBadge
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  const courseworks = [
    { title: 'Python Programming', category: 'Language & Logic', status: 'Certified & 3★ HackerRank' },
    { title: 'C Programming', category: 'Systems & Pointers', status: 'Core Curriculum' },
    { title: 'Web Development (Flask)', category: 'Backend Architecture', status: 'Hands-on Projects' },
    { title: 'Data Structures & Algorithms', category: 'Computational Thinking', status: 'Core Discipline' },
    { title: 'Database Management Systems', category: 'DBMS & Relational SQL', status: 'Core Curriculum' },
    { title: 'Responsive Web Design', category: 'UI & Layout Engines', status: 'FreeCodeCamp Certified' },
    { title: 'AI & Machine Learning Basics', category: 'Intelligent Systems', status: 'Webinar & Study' },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Certification History</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-100 tracking-tight">
            Education, Courses & Participations
          </h2>
          <p className="text-stone-400 text-base max-w-2xl mt-2">
            Formal academics at Ramco Institute of Technology paired with continuous self-learning, certifications, and technical clash competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-stone-100 flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span>Academic Pathway</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-stone-800 space-y-8">
              {educationData.map((edu, idx) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline bullet node */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    edu.status === 'Current' 
                      ? 'bg-amber-500 border-stone-950 ring-4 ring-amber-500/20' 
                      : 'bg-stone-800 border-stone-600'
                  }`} />

                  <div className="p-6 rounded-3xl bg-stone-900/50 border border-stone-800/80 hover:border-stone-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {edu.period}
                      </span>
                      {edu.badge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-800 text-stone-300">
                          {edu.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-lg text-stone-100 mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-stone-300 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-stone-400 flex items-center gap-1.5 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{edu.location}</span>
                    </p>

                    <div className="space-y-2 pt-3 border-t border-stone-800/70">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Coursework Directory */}
            <div className="mt-4 p-6 rounded-3xl bg-stone-900/40 border border-stone-800/80">
              <h4 className="font-display font-semibold text-stone-100 text-base mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Specialized B.Tech IT Coursework</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courseworks.map((course, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80">
                    <div className="text-xs font-bold text-stone-200">{course.title}</div>
                    <div className="text-[11px] text-amber-400/90 font-mono mt-0.5">{course.category}</div>
                    <div className="text-[10px] text-stone-400 mt-1">{course.status}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & Competitions */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-stone-100 flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Certifications & Competitions</span>
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-3xl bg-stone-900/50 border border-stone-800/80 hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300">
                        {cert.issuer}
                      </span>
                      {cert.rating ? (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{cert.rating}</span>
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-stone-400">{cert.date}</span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-base text-stone-100 mb-1.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800/80 flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-stone-950 border border-stone-800 text-amber-300/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Cricket & Teamwork Extra Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/30 border border-amber-500/20">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-100 text-base">
                    Active Cricket Player & Sports Discipline
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed mt-1.5">
                    "Demonstrating teamwork, high discipline, game awareness, and calm leadership on the field. Competitive sports instills the same tenacity required for long coding sessions and rapid sprint delivery."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

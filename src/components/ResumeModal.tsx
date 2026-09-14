import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Award,
  GraduationCap,
  Instagram
} from 'lucide-react';
import { personalInfo, skillsData, softSkills, educationData, certificationsData } from '../data/portfolioData';
import { useProfilePhoto } from '../context/PhotoContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { photoUrl } = useProfilePhoto();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
RAJ GOPI KALYAN M
B.Tech IT Student | Creative Editor and Reel Creator
Phone: ${personalInfo.phone}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
Instagram: ${personalInfo.instagramHandle} (${personalInfo.instagram})
Location: ${personalInfo.location}

ABOUT ME
${personalInfo.bio}

EDUCATION
- Ramco Institute of Technology — 2025–2029, B.Tech IT
- Sri Jayendra Swamigal Silver Jubilee Matric HR Sec School — 2025

TECHNICAL SKILLS & COURSES
- Python Programming (HackerRank 3★ Certified)
- C Programming
- Web Development (Flask-based Applications)
- Responsive Web Design (FreeCodeCamp Certified)
- Data Structures and Algorithms
- Database Management Systems (DBMS)
- AI & Machine Learning Basics
- Git & GitHub
- Video Editing & Motion Graphics

PARTICIPATIONS & ACHIEVEMENTS
- HackerRank 3★ Python Certified
- Web Design Clash Competitor
- Multiple Inter-Collegiate Hackathons & Symposiums
- Emerging Technology Webinars
- Active Collegiate Cricket Player (Teamwork & Leadership)
- Video Editing & Reel Production (@rgk_glary.18)

LANGUAGES
- English (Professional Working Proficiency)
- Tamil (Native / Bilingual)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="p-4 sm:px-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="text-xs sm:text-sm font-display font-bold text-stone-200">
              Raj Gopi Kalyan M — Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-medium border border-stone-700 flex items-center gap-1.5 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-stone-950/80 text-stone-100 print:bg-white print:text-stone-900 print:p-8">
          
          {/* Header */}
          <div className="border-b border-stone-800 pb-6 mb-6 print:border-stone-300">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={photoUrl}
                  alt="Raj Gopi Kalyan M"
                  className="w-16 h-16 rounded-2xl object-cover border border-stone-700 shadow-md shrink-0 print:hidden"
                />
                <div>
                  <h1 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-stone-100 print:text-black">
                    RAJ GOPI KALYAN M
                  </h1>
                  <p className="text-amber-400 font-semibold text-sm sm:text-base mt-0.5 print:text-stone-700">
                    B.Tech IT Student • Creative Reel Creator (@rgk_glary.18)
                  </p>
                  <p className="text-xs text-stone-400 mt-1 print:text-stone-600">
                    Ramco Institute of Technology (2025–2029) • Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Contact Block */}
              <div className="flex flex-col gap-1.5 text-xs font-mono text-stone-300 print:text-stone-700">
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-amber-400">
                  <Phone className="w-3.5 h-3.5 text-amber-400 print:text-stone-700" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-amber-400">
                  <Mail className="w-3.5 h-3.5 text-amber-400 print:text-stone-700" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-400">
                  <Instagram className="w-3.5 h-3.5 text-pink-400 print:text-stone-700" />
                  <span>instagram.com/rgk_glary.18</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-amber-400">
                  <Linkedin className="w-3.5 h-3.5 text-amber-400 print:text-stone-700" />
                  <span className="truncate max-w-[200px]">linkedin.com/in/raj-gopi-kalyan-m</span>
                </a>
              </div>
            </div>
          </div>

          {/* Two-Column Resume Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:grid-cols-12">
            
            {/* Left Side: Summary & Education & Participations */}
            <div className="md:col-span-8 flex flex-col gap-6 print:col-span-8">
              
              {/* About Me */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-2.5">
                  Professional Profile
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 print:text-stone-800 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-3">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-stone-100 print:text-black">
                        Ramco Institute of Technology (RIT)
                      </h4>
                      <span className="text-xs font-mono text-amber-400 print:text-stone-700">2025–2029</span>
                    </div>
                    <div className="text-xs font-semibold text-stone-300 print:text-stone-700">
                      B.Tech in Information Technology
                    </div>
                    <p className="text-xs text-stone-400 print:text-stone-600 mt-1">
                      Key areas: Data Structures, Database Systems, Python, Web Engineering, AI & Machine Learning.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-sm font-bold text-stone-100 print:text-black">
                        Sri Jayendra Swamigal Silver Jubilee Matric HR Sec School
                      </h4>
                      <span className="text-xs font-mono text-stone-400 print:text-stone-700">Completed 2025</span>
                    </div>
                    <div className="text-xs text-stone-300 print:text-stone-700">
                      Higher Secondary Certificate (HSC)
                    </div>
                  </div>
                </div>
              </div>

              {/* Participations & Achievements */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-3">
                  Participation & Achievements
                </h3>
                <ul className="space-y-2 text-xs text-stone-300 print:text-stone-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Earned 3★ Rating & Python Certification</strong> from HackerRank demonstrating core problem-solving capability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Participated in Web Design Clash</strong>, hackathons, and multiple inter-college technical events.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Attended emerging technology webinars</strong> in AI, Machine Learning, and Cloud industry trends.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Active cricket player</strong>, exemplifying teamwork, sportsmanship, and leadership under pressure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span><strong>Reel creator & Video Editor (rgkglary)</strong>, building narrative pacing and digital audience engagement.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Side: Skills, Courses & Languages */}
            <div className="md:col-span-4 flex flex-col gap-6 print:col-span-4">
              
              {/* Technical Coursework */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-2.5">
                  Coursework
                </h3>
                <div className="space-y-1.5 text-xs text-stone-300 print:text-stone-800">
                  <div>• Python Programming</div>
                  <div>• C Programming</div>
                  <div>• Web Dev (Flask-based Apps)</div>
                  <div>• Responsive Web Design (FreeCodeCamp)</div>
                  <div>• Data Structures and Algorithms</div>
                  <div>• Database Management Systems (DBMS)</div>
                  <div>• AI & Machine Learning Basics</div>
                </div>
              </div>

              {/* Hard Skills */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-2.5">
                  Hard Skills
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Flask', 'C Language', 'SQL / DBMS', 'HTML5 & CSS3', 'Video Editing', 'Git & GitHub', 'Project Tools'].map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-stone-900 print:bg-stone-100 border border-stone-800 print:border-stone-300 text-[11px] font-mono text-stone-300 print:text-stone-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-2.5">
                  Soft Skills
                </h3>
                <div className="space-y-1 text-xs text-stone-300 print:text-stone-800">
                  <div>• Communication</div>
                  <div>• Team Collaboration</div>
                  <div>• Problem-Solving</div>
                  <div>• Time Management</div>
                  <div>• Adaptability</div>
                  <div>• Critical Thinking</div>
                  <div>• Leadership & Sportsmanship</div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 print:text-stone-900 border-b border-stone-800 print:border-stone-300 pb-1 mb-2.5">
                  Languages
                </h3>
                <div className="text-xs text-stone-300 print:text-stone-800 space-y-1">
                  <div>• <strong>English</strong> (Professional)</div>
                  <div>• <strong>Tamil</strong> (Native)</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

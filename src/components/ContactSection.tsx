import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  CheckCircle,
  Instagram
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger direct mailto link with prefilled subject and message body
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-stone-950 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Let's Build Something Together</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-100 tracking-tight">
            Get in Touch with Raj
          </h2>
          <p className="text-stone-400 text-base max-w-2xl mt-2">
            Interested in hiring for B.Tech internships, discussing a software collaboration, or commissioning high-retention video editing? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-mono">Mobile / WhatsApp</div>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-base font-bold text-stone-100 hover:text-amber-400 font-mono transition-colors"
                  >
                    {personalInfo.formattedPhone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4 truncate mr-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-stone-400 font-mono">Primary Email</div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold text-stone-100 hover:text-amber-400 font-mono transition-colors truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-xl bg-stone-800 text-stone-400 hover:text-stone-100 hover:bg-stone-700 transition-colors shrink-0"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80 hover:border-stone-700 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/20 text-[#0077b5] flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-mono">Professional Network</div>
                  <div className="text-base font-bold text-stone-100">
                    LinkedIn Profile
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-[#0077b5] transition-colors"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Instagram Card (@rgk_glary.18) */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-pink-950/20 border border-stone-800/80 hover:border-pink-500/50 transition-all flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 text-pink-400 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-mono">Instagram / Creative Page</div>
                  <div className="text-base font-bold text-stone-100 flex items-center gap-1.5">
                    <span>@rgk_glary.18</span>
                    <span className="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-semibold">Creator</span>
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-stone-800 text-pink-400 hover:text-white hover:bg-pink-600 transition-colors"
                title="Open Instagram @rgk_glary.18"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Academic Base */}
            <div className="p-6 rounded-3xl bg-stone-900/40 border border-stone-800/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-stone-800 text-amber-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-stone-400 font-mono">Institution Location</div>
                <div className="text-sm font-semibold text-stone-200 mt-0.5">
                  Ramco Institute of Technology
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Rajapalayam, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Quick Instant WhatsApp Chat */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all active:scale-95"
            >
              <span>Instant Chat on WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-stone-900/50 border border-stone-800/80 shadow-xl">
              <h3 className="font-display font-bold text-xl text-stone-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mb-6">
                Fill in the details below to open a prefilled inquiry message directly addressed to <span className="text-stone-200">{personalInfo.email}</span>.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center text-center gap-3 animate-fade-in">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                  <div>
                    <h4 className="font-display font-bold text-stone-100 text-base">
                      Thank You! Message Triggered
                    </h4>
                    <p className="text-xs text-stone-300 mt-1">
                      Your default mail client has been opened with your inquiry. You can also connect directly at {personalInfo.formattedPhone}.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-amber-400 hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. B.Tech Internship Opportunity / Video Editing Project"
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, requirements, or timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Raj</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

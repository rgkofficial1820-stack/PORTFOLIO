import { Project, SkillGroup, EducationItem, CertificationItem, CreativeWork } from '../types';

export const personalInfo = {
  name: 'RAJ GOPI KALYAN M',
  preferredName: 'Raj Gopi Kalyan',
  title: 'B.Tech IT Student & Creative Technologist',
  subtitle: 'Aspiring Software Developer • Flask & Python • Creative Video Editor',
  location: 'Tamil Nadu, India',
  college: 'Ramco Institute of Technology',
  degree: 'B.Tech - Information Technology (2025–2029)',
  email: 'rgkofficial.1820@gmail.com',
  phone: '+91 9361999910',
  formattedPhone: '+91 93619 99910',
  whatsappUrl: 'https://wa.me/919361999910?text=Hi%20Raj%20Gopi%20Kalyan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!',
  linkedin: 'https://www.linkedin.com/in/raj-gopi-kalyan-m-4b52883b3',
  instagram: 'https://www.instagram.com/rgk_glary.18/',
  instagramHandle: '@rgk_glary.18',
  github: 'https://github.com',
  creativeBrand: 'rgk_glary.18',
  photoUrl: '/src/assets/images/raj_photo.jpg',
  avatarUrl: '/src/assets/images/raj_avatar.jpg',
  status: 'Open to B.Tech Internships, Projects & Collaborative Roles',
  bio: `I am an Information Technology undergraduate at Ramco Institute of Technology (2025–2029), passionate about engineering smart, efficient digital software and building engaging visual stories. With a strong foundation in Python, Flask, C, and responsive web design, I bridge technical software architecture with creative media and motion editing. I believe in consistency, self-learning, and hands-on execution.`,
  languages: [
    { name: 'English', fluency: 'Professional Working Proficiency' },
    { name: 'Tamil', fluency: 'Native / Bilingual' }
  ],
  stats: [
    { value: '3★', label: 'HackerRank Python', sub: 'Problem Solving' },
    { value: '2029', label: 'B.Tech IT Grad', sub: 'Ramco Inst. of Tech' },
    { value: '2+', label: 'Disciplines', sub: 'Software & Media' },
    { value: '100%', label: 'Commitment', sub: 'Hands-on Learning' },
  ],
  quote: "Combining technical discipline with creative storytelling to build digital solutions that matter."
};

export const skillsData: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming & Core CS',
    description: 'Foundational computing, algorithms, and backend scripting',
    skills: [
      { name: 'Python Programming', level: 85, levelText: 'Proficient', description: 'Certified & 3★ HackerRank. Scripting, automation, backend logic.' },
      { name: 'C Programming', level: 80, levelText: 'Proficient', description: 'Memory fundamentals, pointers, core systems programming logic.' },
      { name: 'Data Structures & Algorithms', level: 75, levelText: 'Intermediate', description: 'Arrays, Linked Lists, Stacks, Queues, Searching & Sorting algorithms.' },
      { name: 'DBMS & Relational SQL', level: 75, levelText: 'Intermediate', description: 'Relational database design, queries, normalization, ACID properties.' },
      { name: 'AI & ML Basics', level: 65, levelText: 'Intermediate', description: 'Supervised learning concepts, data preprocessing, model exploration.' }
    ]
  },
  {
    id: 'web',
    title: 'Web & Frontend Development',
    description: 'Building responsive, accessible, and dynamic interfaces',
    skills: [
      { name: 'Web Development (Flask)', level: 80, levelText: 'Proficient', description: 'Building lightweight Python web services, routing, Jinja templates, REST APIs.' },
      { name: 'Responsive Web Design', level: 88, levelText: 'Advanced', description: 'FreeCodeCamp certified, mobile-first layouts, Flexbox, CSS Grid.' },
      { name: 'HTML5 & Modern CSS3', level: 88, levelText: 'Advanced', description: 'Semantic structure, CSS variables, transitions, cross-browser compatibility.' },
      { name: 'Tailwind CSS & Styling', level: 82, levelText: 'Proficient', description: 'Utility-first styling, rapid UI prototyping, responsive breakpoints.' },
      { name: 'JavaScript / DOM Basics', level: 72, levelText: 'Intermediate', description: 'Client-side interactivity, event handling, asynchronous fetching.' }
    ]
  },
  {
    id: 'creative',
    title: 'Creative Media & Content Creation',
    description: 'High-impact visual storytelling, video pacing, and reel creation',
    skills: [
      { name: 'Video Editing & Production', level: 90, levelText: 'Advanced', description: 'Short-form reel pacing, visual storytelling, clip grading, dynamic transitions.' },
      { name: 'Videography & Creative Direction', level: 88, levelText: 'Advanced', description: 'Instagram reel curation (@rgk_glary.18), audience engagement, visual aesthetics.' },
      { name: 'Audio-Visual Synchronization', level: 85, levelText: 'Proficient', description: 'Beat matching, sound design, impactful hook composition.' },
      { name: 'Typography & Motion Graphics', level: 78, levelText: 'Proficient', description: 'Subtitles, animated overlays, kinetic captions, branding.' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools, Collaboration & Practices',
    description: 'Development environments, version control, and workflow management',
    skills: [
      { name: 'Git & GitHub', level: 82, levelText: 'Proficient', description: 'Branch management, commits, open source workflows, repositories.' },
      { name: 'Project Management Tools', level: 80, levelText: 'Proficient', description: 'Agile sprints, task boards, milestones, documentation.' },
      { name: 'VS Code & Linux CLI', level: 78, levelText: 'Proficient', description: 'Debugging, terminal commands, package environments.' },
      { name: 'Webinar & Technical Research', level: 85, levelText: 'Proficient', description: 'Keeping pace with emerging tech, AI tools, and industry standards.' }
    ]
  }
];

export const softSkills = [
  { name: 'Strong Communication', detail: 'Articulating technical concepts clearly in both team and client-facing settings.' },
  { name: 'Team Collaboration', detail: 'Fostering inclusive, high-synergy team dynamics during hackathons and projects.' },
  { name: 'Leadership & Discipline', detail: 'Honed through competitive cricket and leading project workstreams.' },
  { name: 'Problem-Solving Mindset', detail: 'Breaking complex programming and design challenges into structured modules.' },
  { name: 'Time Management', detail: 'Balancing rigorous B.Tech coursework, tech competitions, and creative projects.' },
  { name: 'Adaptability & Self-Learning', detail: 'Rapidly assimilating new frameworks, APIs, and emerging tech stacks.' },
  { name: 'Critical Thinking', detail: 'Evaluating architectural trade-offs, code efficiency, and user experience.' },
  { name: 'Self-Motivation', detail: 'Driven by passion for continuous hands-on creation and real-world impact.' }
];

export const educationData: EducationItem[] = [
  {
    id: 'rit',
    degree: 'B.Tech - Information Technology',
    institution: 'Ramco Institute of Technology (RIT)',
    period: '2025 – 2029',
    location: 'Rajapalayam, Tamil Nadu',
    status: 'Current',
    badge: 'Undergraduate Program',
    highlights: [
      'Comprehensive curriculum covering Data Structures, Database Systems, Computer Networks, and AI.',
      'Active participation in collegiate technical symposiums, hackathons, and design contests.',
      'Engaged in college cricket team, demonstrating leadership, tactical thinking, and sportsmanship.',
      'Collaborating on hands-on software development modules and coding challenges.'
    ]
  },
  {
    id: 'school',
    degree: 'Higher Secondary Certificate (HSC) / Matriculation',
    institution: 'Sri Jayendra Swamigal Silver Jubilee Matric Hr Sec School',
    period: 'Completed 2025',
    location: 'Tamil Nadu',
    status: 'Completed',
    badge: 'Higher Secondary',
    highlights: [
      'Built strong analytical, mathematics, and scientific problem-solving foundations.',
      'Represented school in inter-school competitions, sports, and cultural events.',
      'Demonstrated academic excellence and disciplined extracurricular balance.'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'hackerrank-python',
    title: 'HackerRank 3★ & Python Certification',
    issuer: 'HackerRank',
    date: '2025',
    rating: '3 Stars ★★★',
    category: 'coding',
    description: 'Demonstrated proficiency in Python syntax, data structures, algorithmic puzzles, and object-oriented paradigms.',
    skillsGained: ['Python Core', 'List Comprehensions', 'Algorithmic Logic', 'Error Handling']
  },
  {
    id: 'fcc-web',
    title: 'Responsive Web Design Certification',
    issuer: 'FreeCodeCamp',
    date: '2024–2025',
    category: 'web',
    description: 'Mastery of semantic HTML5, modern CSS3 layout engines (Flexbox, CSS Grid), responsive typography, and media queries.',
    skillsGained: ['CSS Flexbox & Grid', 'Mobile-First Design', 'Accessibility', 'Cross-browser Compatibility']
  },
  {
    id: 'web-design-clash',
    title: 'Web Design Clash Finalist / Participant',
    issuer: 'Inter-Collegiate Technical Event',
    date: '2025',
    category: 'competition',
    description: 'Competed in rapid-prototyping front-end design and coding challenge, crafting functional and aesthetically refined interfaces under strict time constraints.',
    skillsGained: ['Rapid UI Prototyping', 'Performance Optimization', 'Design Systems', 'Team Pitching']
  },
  {
    id: 'hackathons-symposiums',
    title: 'Multi-Hackathons & Tech Symposiums',
    issuer: 'Various Colleges & Online Platforms',
    date: '2025',
    category: 'competition',
    description: 'Participated in coding sprints and idea hackathons addressing real-world problem statements through software innovation.',
    skillsGained: ['Agile Collaboration', 'Pitch Deck Presentation', 'Rapid MVP Building', 'Idea Validation']
  },
  {
    id: 'emerging-tech-webinars',
    title: 'Emerging Technologies & Industry Trends',
    issuer: 'Industry & Tech Webinar Series',
    date: '2025',
    category: 'workshop',
    description: 'Attended sessions on Artificial Intelligence, Cloud Computing, modern development frameworks, and future tech careers.',
    skillsGained: ['AI & ML Foundations', 'Industry Workflows', 'Continuous Learning Mindset']
  }
];

export const projectsData: Project[] = [
  {
    id: 'flask-smart-app',
    title: 'Flask-Based Web Application',
    subtitle: 'Dynamic Python Web Architecture with Relational Database',
    description: 'A modular, full-featured web application engineered with Python and Flask. Incorporates secure routing, database integration (DBMS), session management, and responsive frontend templates.',
    longDescription: 'Developed to bridge Python algorithmic processing with user-facing web utilities. Implements MVC pattern with Flask blueprints, RESTful endpoints for CRUD operations, and responsive styling to ensure seamless access on both desktop and mobile devices.',
    category: 'web',
    categoryLabel: 'Python & Web Backend',
    techStack: ['Python', 'Flask', 'SQLite / SQL', 'HTML5', 'Tailwind CSS', 'Jinja2'],
    keyHighlights: [
      'Engineered clean REST API endpoints for data management and query handling.',
      'Implemented relational schema design adhering to database normalization principles.',
      'Crafted mobile-optimized responsive templates with lightweight styling.',
      'Secured routes with input validation and clean error handling.'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    stats: [
      { label: 'Architecture', value: 'Flask MVC' },
      { label: 'Endpoints', value: 'RESTful' },
      { label: 'Database', value: 'SQL Schema' }
    ],
    featured: true,
    badge: 'Core Project'
  },
  {
    id: 'web-design-clash-ui',
    title: 'Modern Responsive Web Experience',
    subtitle: 'Web Design Clash & FreeCodeCamp Showcase',
    description: 'A high-performance responsive web interface created for competitive design showcase. Focuses on typographic hierarchy, smooth CSS micro-interactions, and accessible UI components.',
    longDescription: 'Built to demonstrate frontend mastery acquired through FreeCodeCamp and competitive Web Design Clash challenges. Adheres to modern web accessibility standards (WCAG), CSS Grid architecture, and fluid scaling.',
    category: 'web',
    categoryLabel: 'UI / UX & Frontend',
    techStack: ['HTML5', 'CSS3 / Modern Layouts', 'JavaScript', 'Responsive UI', 'Flexbox / Grid'],
    keyHighlights: [
      'Achieved seamless mobile-to-desktop responsive adaptation across all viewports.',
      'Designed custom UI components with zero external bloated libraries.',
      'Integrated CSS variables for dynamic theming and color balance.',
      'Optimized asset loading for near-instant first contentful paint (FCP).'
    ],
    githubUrl: 'https://github.com',
    liveUrl: '#',
    stats: [
      { label: 'Responsive', value: '100% Mobile Ready' },
      { label: 'Standard', value: 'WCAG Compliant' },
      { label: 'Framework', value: 'Modern Vanilla / CSS' }
    ],
    featured: true,
    badge: 'Competition Showcase'
  },
  {
    id: 'rgkglary-creative-hub',
    title: 'Videography — Creative Media & Reel Production',
    subtitle: 'Instagram Content Creation & Visual Storytelling',
    description: 'Personal creative studio and visual content platform (@rgk_glary.18) focusing on engaging short-form reels, rhythmic editing, motion graphics, and audio-visual synchronization.',
    longDescription: 'Demonstrating the creative dimension of Raj Gopi Kalyan M. rgk_glary.18 on Instagram combines cinematic storytelling, narrative pacing, color correction, and kinetic typography to captivate audience retention and communicate visual ideas dynamically.',
    category: 'creative',
    categoryLabel: 'Video Editing & Content Creation',
    techStack: ['Video Editing', 'Instagram Reels', 'CapCut / Premiere', 'Motion Design', 'Sound Sync', 'Color Grading'],
    keyHighlights: [
      'Crafted dynamic visual transitions and synchronized beat-drops for maximum viewer retention.',
      'Applied color grading and tone enhancement tailored for modern mobile displays.',
      'Integrated kinetic subtitle typography and motion stickers.',
      'Built a dedicated visual identity under the @rgk_glary.18 Instagram brand.'
    ],
    githubUrl: 'https://www.instagram.com/rgk_glary.18/',
    liveUrl: 'https://www.instagram.com/rgk_glary.18/',
    stats: [
      { label: 'Platform', value: '@rgk_glary.18' },
      { label: 'Format', value: 'Reels & Shorts' },
      { label: 'Discipline', value: 'Visual Storytelling' }
    ],
    featured: true,
    badge: 'Creative Showcase'
  },
  {
    id: 'hackerrank-dsa-repo',
    title: 'DSA & Python Problem-Solving Suite',
    subtitle: 'HackerRank 3★ Algorithmic Solutions in Python & C',
    description: 'Curated repository of algorithmic solutions covering fundamental data structures, sorting, searching, recursion, and mathematical logic in Python and C.',
    longDescription: 'Documenting the path to achieving a 3-star HackerRank rating in Python. Each problem is accompanied by time and space complexity evaluations, edge case testing, and clean modular code.',
    category: 'dsa',
    categoryLabel: 'Data Structures & Algorithms',
    techStack: ['Python', 'C Language', 'DSA', 'Algorithms', 'HackerRank'],
    keyHighlights: [
      'Engineered optimized implementations of lists, stacks, queues, and tree traversals.',
      'Solved complex string manipulation, hashing, and array partitioning challenges.',
      'Practiced writing memory-efficient C code with explicit pointer arithmetic.',
      'Maintained consistent coding conventions and algorithmic documentation.'
    ],
    githubUrl: 'https://github.com',
    stats: [
      { label: 'Rating', value: '3★ HackerRank' },
      { label: 'Languages', value: 'Python & C' },
      { label: 'Domain', value: 'Algorithms' }
    ],
    featured: false,
    badge: 'Certified Solutions'
  },
  {
    id: 'ai-ml-explorations',
    title: 'AI & Machine Learning Foundations',
    subtitle: 'Introductory Data Science & Predictive Models',
    description: 'Exploratory implementations analyzing datasets, exploring linear regression, classification algorithms, and feature extraction using Python data science libraries.',
    longDescription: 'Created as part of academic curiosity and webinar deep dives into emerging artificial intelligence. Demonstrates data cleaning, visualization with Python, and basic machine learning pipeline workflows.',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence & ML',
    techStack: ['Python', 'Data Analysis', 'ML Basics', 'NumPy / Pandas Concepts'],
    keyHighlights: [
      'Explored core concepts of supervised vs unsupervised machine learning algorithms.',
      'Implemented data preprocessing, normalization, and outlier detection logic.',
      'Synthesized insights from technical webinars into working code snippets.'
    ],
    githubUrl: 'https://github.com',
    stats: [
      { label: 'Field', value: 'AI / ML Basics' },
      { label: 'Core', value: 'Python Scripting' },
      { label: 'Status', value: 'Continuous Learning' }
    ],
    featured: false,
    badge: 'Research & Study'
  }
];

export const creativeWorksData: CreativeWork[] = [
  {
    id: 'reel-series-1',
    title: 'Tech & Lifestyle High-Retention Reels',
    channel: '@rgk_glary.18',
    type: 'Instagram Reel',
    role: 'Editor, Director & Sound Designer',
    tools: ['CapCut', 'Premiere Pro', 'Audio FX', 'Motion Typography'],
    description: 'Fast-paced rhythmic video edits with precise beat transitions, kinetic typography, and color grading tuned for visual appeal and high watch-time retention on Instagram (@rgk_glary.18).',
    metrics: 'High engagement & visual retention',
    tags: ['Beat Sync', 'Kinetic Text', 'Color Grading', 'Viral Hooks']
  },
  {
    id: 'reel-series-2',
    title: 'College & Event Highlights Reel',
    channel: '@rgk_glary.18',
    type: 'Cinematic Recaps',
    role: 'Videography & Post-Production',
    tools: ['Stabilization', 'Speed Ramps', 'Sound Design'],
    description: 'Cinematic recap reels capturing campus energy, symposiums, and cricket matches with dramatic speed ramping and sound design.',
    metrics: 'Dynamic campus showcase',
    tags: ['Speed Ramps', 'Cinematic Flow', 'Atmospheric Audio']
  },
  {
    id: 'reel-series-3',
    title: 'Creative Visual Transitions & Aesthetics',
    channel: '@rgk_glary.18',
    type: 'Creative Montages',
    role: 'Visual Concept & Assembly',
    tools: ['Frame Masking', 'Whip Pans', 'Match Cuts'],
    description: 'Experimental visual cuts connecting everyday moments into continuous visual momentum, showcasing storytelling precision.',
    metrics: 'Creative portfolio milestone',
    tags: ['Match Cuts', 'Seamless Transitions', 'Visual Momentum']
  }
];

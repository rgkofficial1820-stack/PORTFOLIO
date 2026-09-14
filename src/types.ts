export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'web' | 'creative' | 'dsa' | 'ai';
  categoryLabel: string;
  techStack: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
  image?: string;
  badge?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  levelText: 'Beginner' | 'Intermediate' | 'Proficient' | 'Advanced';
  experienceYears?: string;
  iconName?: string;
  description?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: 'Current' | 'Completed';
  highlights: string[];
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  rating?: string;
  category: 'coding' | 'web' | 'competition' | 'workshop';
  skillsGained: string[];
}

export interface CreativeWork {
  id: string;
  title: string;
  channel: string;
  type: string;
  role: string;
  tools: string[];
  description: string;
  metrics?: string;
  tags: string[];
}

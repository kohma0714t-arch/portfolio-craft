export interface WorkItem {
  id: string;
  projectNumber: string;
  category: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  techStack: string[];
  highlights: string[];
  challenges: string[];
  architecture?: string[];
  futurePlans?: string[];
  status: 'published' | 'coming-soon';
  iconImage?: string;
  screenshotImage?: string;
  qrCodeImage?: string;
  accentColor: 'pop-blue' | 'pop-orange' | 'pop-mint';
  period?: string;
  role?: string;
  githubUrl?: string;
  demoUrl?: string;
  disclaimer?: string;
  retrospective?: RetrospectiveSection;
}

export interface RetrospectiveItem {
  subtitle: string;
  description: string;
}

export interface RetrospectiveSection {
  title: string;
  items: RetrospectiveItem[];
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  award: string;
  date: string;
  team: string;
  role: string;
  description: string;
  longDescription: string[];
  problemAndSolution: {
    problem: string;
    solution: string;
  };
  keyFeatures: string[];
  technicalHighlights: string[];
  photos: { src: string; alt: string; caption?: string }[];
  externalLink?: string;
  linkText?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'mobile' | 'language' | 'tool' | 'design';
  level: string; // e.g., 'メイン実務・開発', '習熟', '基礎'
  experience: string;
  description: string;
  useCases: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

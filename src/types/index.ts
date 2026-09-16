export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
  courseworkTitle: string;
  coursework: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  badgeText: string;
  description: string;
  highlights: string[];
}

export interface TechnicalPracticeData {
  sectionTag: string;
  sectionTitle: string;
  sectionSubtitle: string;
  cardTitle: string;
  badge: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  techPills: string[];
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  track: string;
  issuer: string;
  period: string;
  badge: string;
}

export interface TranslationData {
  nav: {
    brand: string;
    about: string;
    education: string;
    experience: string;
    technicalPractice: string;
    skills: string;
    certifications: string;
    contact: string;
  };
  hero: {
    status: string;
    greeting: string;
    name: string;
    roleBadge: string;
    headline: string;
    bio: string;
    location: string;
    getInTouch: string;
    connectLinkedIn: string;
    copyEmail: string;
    copied: string;
    stats: {
      degree: string;
      focus: string;
      training: string;
    };
    codeSnippet: {
      filename: string;
      version: string;
      comment: string;
      statusComment: string;
    };
  };
  education: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    data: EducationItem;
  };
  experience: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    data: ExperienceItem;
  };
  technicalPractice: TechnicalPracticeData;
  skills: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    groups: SkillGroup[];
  };
  certifications: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    items: CertificationItem[];
  };
  contact: {
    sectionTag: string;
    sectionTitle: string;
    sectionSubtitle: string;
    getInTouch: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    linkedinLabel: string;
    copyButton: string;
    copiedButton: string;
    callButton: string;
    emailButton: string;
    viewProfile: string;
  };
  footer: {
    rightsReserved: string;
    builtWith: string;
    backToTop: string;
  };
}

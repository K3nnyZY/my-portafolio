export type Locale = "en" | "es";
export type ProjectCategory = "ai" | "software";

export interface EngineeringFocus {
  title: string;
  items: { title: string; description: string }[];
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  label: string;
  description: string;
  tags: string[];
  details: string[];
  visual: "chat" | "editor" | "signal";
}

export interface PortfolioContent {
  locale: Locale;
  meta: { title: string; description: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    menu: string;
    close: string;
    label: string;
    lightMode: string;
    darkMode: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    title: string;
    accent: string;
    description: string;
    projects: string;
    contact: string;
    location: string;
    scroll: string;
    portraitLabel: string;
    annotation: string;
    visual: {
      label: string;
      title: string;
      data: string;
      ai: string;
      aiStack: string;
      software: string;
      dataDetail: string;
      dataFocus: EngineeringFocus;
      aiDetail: string;
      aiFocus: EngineeringFocus;
      softwareDetail: string;
      softwareFocus: EngineeringFocus;
      pauseMotion: string;
      resumeMotion: string;
    };
  };
  stats: { value: string; label: string }[];
  about: {
    eyebrow: string;
    title: string;
    description: string;
    skillsTitle: string;
    skills: { title: string; items: string[] }[];
    educationTitle: string;
    education: {
      school: string;
      degree: string;
      location: string;
      dates: string;
      gpa: string;
    }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      company: string;
      role: string;
      dates: string;
      location: string;
      description: string;
      points: string[];
      tags: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    ai: string;
    software: string;
    details: string;
    github: string;
    list: Project[];
    visuals: {
      conversation: string;
      question: string;
      answer: string;
      collaborative: string;
      connected: string;
      research: string;
      signal: string;
    };
  };
  achievements: {
    eyebrow: string;
    title: string;
    items: { title: string; label: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    accent: string;
    description: string;
    email: string;
    copy: string;
    copied: string;
    copyFailed: string;
    resume: string;
    resumeNote: string;
    links: string;
  };
  footer: { description: string; rights: string; top: string };
}

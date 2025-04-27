export interface IHeroProps {
  name: string;
  summary: string[];
}

export interface IExperience {
  name: string;
  title?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface IExperienceProps {
  heading: string;
  items: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  image: string;
  githubUrl?: string;
  deploymentUrl?: string;
  description: string[];
  environment: string[];
}

export interface IProjectsWrapperProps {
  projects: IProject[];
}

export const enum Page {
  Home = "home",
  About = "about",
  Contact = "contact",
  Projects = "projects",
}

export interface IInfo {
  baseUrl: string;
  openGraphImageUrl: string;
  resumeUrl: string;
  pages: Page[];
  metaDescriptions: Record<Page, string>;
  name: string;
  subtitle: string;
  socialMedia: {
    github: string;
    email: string;
    linkedin: string;
    medium: string;
  };
  summary: string[];
  about: string[];
  experience: IExperience[];
  education: IExperience[];
  certifications: IExperience[];
  projects: IProject[];
}

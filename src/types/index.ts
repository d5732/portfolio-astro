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
  title: string;
  details: IExperience[];
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

export interface IInfo {
  baseUrl: string;
  openGraphImageUrl: string;
  resumeUrl: string;
  pages: string[];
  metaDescriptions: {
    home: string;
    about: string;
    contact: string;
    projects: string;
  };
  name: string;
  jobDescription: string;
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

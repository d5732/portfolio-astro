export interface IMetaHead {
    title: string;
    description: string;
    ogImageUrl: string;
}

export interface IHeroProps {
    name: string;
    about: string;
}

export interface IContactProps {
    email: string;
}

export interface IExperience {
    name: string;
    title?: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
}
export interface IExperiences {
    title: string;
    details: IExperience[];
}

export interface IProject {
    title: string;
    isFeatured: boolean;
    thumbnail: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    description: string[];
    environment: string[];
}

export interface IProjects {
    projects: IProject[];
}

export interface IProjectDetails {
    projectDetail: IProject;
}

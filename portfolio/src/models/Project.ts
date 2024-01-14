export enum EProjectType {
    personal = '$vuetify.projects.filtering.types.personal',
    professional = '$vuetify.projects.filtering.types.professional',
    student = '$vuetify.projects.filtering.types.student'
};

export interface Project {
    title: string;
    description: string;
    skills: string[];
    imgName: string;
    projectLink?: string;
    projectLinkText?: string;
    type: EProjectType;
    dialogComponent?: string;
    tags: string[]
};

export enum EViewMode {
    line = 'line',
    grid = 'grid'
};

export const DEFAULT_TYPES: EProjectType[] = [
    EProjectType.personal,
    EProjectType.professional,
    EProjectType.student
];
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
};

export const PROJECTS: Project[] = [
    // Triple Triad
    {
        title: '$vuetify.projects.tripleTriad.title',
        description: '$vuetify.projects.tripleTriad.description',
        skills: [
            '$vuetify.projects.tripleTriad.skills.one',
            '$vuetify.projects.tripleTriad.skills.two',
            '$vuetify.projects.tripleTriad.skills.three'
        ],
        imgName: 'tripleTriad.gif',
        projectLink: 'https://www.mickael-lalanne.fr/triple-triad/',
        projectLinkText: '$vuetify.projects.tripleTriad.link',
        type: EProjectType.personal
    },
    // Intuiface HCMS
    {
        title: '$vuetify.projects.hcms.title',
        description: '$vuetify.projects.hcms.description',
        skills: [
            '$vuetify.projects.hcms.skills.one',
            '$vuetify.projects.hcms.skills.two',
            '$vuetify.projects.hcms.skills.three',
            '$vuetify.projects.hcms.skills.four'
        ],
        imgName: 'hcms.png',
        dialogComponent: 'ProjectHCMS',
        type: EProjectType.professional
    },
    // Intuiface Analytics
    {
        title: '$vuetify.projects.analytics.title',
        description: '$vuetify.projects.analytics.description',
        skills: [
            '$vuetify.projects.analytics.skills.one',
            '$vuetify.projects.analytics.skills.two',
            '$vuetify.projects.analytics.skills.three',
            '$vuetify.projects.analytics.skills.four'
        ],
        imgName: 'analytics.png',
        dialogComponent: 'ProjectAnalytics',
        type: EProjectType.professional
    },
    // Intuiface Player Next Gen
    {
        title: '$vuetify.projects.playerNextGen.title',
        description: '$vuetify.projects.playerNextGen.description',
        skills: [
            '$vuetify.projects.playerNextGen.skills.one',
            '$vuetify.projects.playerNextGen.skills.two',
            '$vuetify.projects.playerNextGen.skills.three'
        ],
        imgName: 'player.png',
        dialogComponent: 'ProjectPLN',
        type: EProjectType.professional
    },
    // Journal du capitaine
    {
        title: '$vuetify.projects.journal.title',
        description: '$vuetify.projects.journal.description',
        skills: [
            '$vuetify.projects.journal.skills.one',
            '$vuetify.projects.journal.skills.two',
            '$vuetify.projects.journal.skills.three'
        ],
        imgName: 'journal.png',
        projectLink: 'https://journalducapitaine.fr/',
        projectLinkText: '$vuetify.projects.journal.link',
        type: EProjectType.personal
    },
    // Tutoriel API Explorer
    {
        title: '$vuetify.projects.apiExplorer.title',
        description: '$vuetify.projects.apiExplorer.description',
        skills: [
            '$vuetify.projects.apiExplorer.skills.one',
            '$vuetify.projects.apiExplorer.skills.two',
            '$vuetify.projects.apiExplorer.skills.three'
        ],
        imgName: 'apiExplorer.png',
        dialogComponent: 'ProjectApiExplorer',
        type: EProjectType.professional
    },
    // My Ice Tool
    {
        title: '$vuetify.projects.myIceTool.title',
        description: '$vuetify.projects.myIceTool.description',
        skills: [
            '$vuetify.projects.myIceTool.skills.one',
            '$vuetify.projects.myIceTool.skills.two',
            '$vuetify.projects.myIceTool.skills.three'
        ],
        imgName: 'myIceTool.png',
        dialogComponent: 'ProjectMyIceTool',
        type: EProjectType.student
    },
]
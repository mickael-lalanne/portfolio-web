import { EProjectType, Project } from "@/models/Project";

const frontTags: string[] = ['front-end', 'front end', 'frontend', 'javascript', 'html', 'css'];
const vueTags: string[] = ['vue.js', 'vue', 'vue js', 'vuejs', 'vuetify'];
const backEndTags: string[] = ['back-end', 'backend', 'back end'];
const fullStackTags: string[] = ['full stack', 'full-stack', 'fullstack', ...frontTags, ...backEndTags];

export const PROJECTS: Project[] = [
    // Ranking App
    {
        title: '$vuetify.projects.rankingApp.title',
        description: '$vuetify.projects.rankingApp.description',
        resume: '$vuetify.projects.rankingApp.resume',
        skills: [
            '$vuetify.projects.rankingApp.skills.one',
            '$vuetify.projects.rankingApp.skills.two',
            '$vuetify.projects.rankingApp.skills.three',
            '$vuetify.projects.rankingApp.skills.four'
        ],
        imgName: 'rankingApp.gif',
        dialogComponent: 'ProjectRankingApp',
        type: EProjectType.personal,
        tags: [], // TODO
        date: '2024',
        pinned: 2
    },
    // Triple Triad
    {
        title: '$vuetify.projects.tripleTriad.title',
        description: '$vuetify.projects.tripleTriad.description',
        resume: '$vuetify.projects.tripleTriad.resume',
        skills: [
            '$vuetify.projects.tripleTriad.skills.one',
            '$vuetify.projects.tripleTriad.skills.two',
            '$vuetify.projects.tripleTriad.skills.three'
        ],
        imgName: 'tripleTriad.gif',
        projectLink: 'https://www.mickael-lalanne.fr/triple-triad/',
        projectLinkText: '$vuetify.projects.tripleTriad.link',
        type: EProjectType.personal,
        tags: [...vueTags, ...fullStackTags, 'typescript', 'aws', 'amplify', 'graphql', 'vue router', 'pinia'],
        date: '2023',
        pinned: 1
    },
    // Intuiface HCMS
    {
        title: '$vuetify.projects.hcms.title',
        description: '$vuetify.projects.hcms.description',
        resume: '$vuetify.projects.hcms.resume',
        skills: [
            '$vuetify.projects.hcms.skills.one',
            '$vuetify.projects.hcms.skills.two',
            '$vuetify.projects.hcms.skills.three',
            '$vuetify.projects.hcms.skills.four'
        ],
        imgName: 'hcms.png',
        dialogComponent: 'ProjectHCMS',
        type: EProjectType.professional,
        tags: [...vueTags, ...fullStackTags, 'typescript', 'aws', 'end to end', 'e2e', 'lambda', 's3', 'jest', 'cypress', 'jenkins', 'vuex'],
        date: '2019 / 2022'
    },
    // Intuiface Analytics
    {
        title: '$vuetify.projects.analytics.title',
        description: '$vuetify.projects.analytics.description',
        resume: '$vuetify.projects.analytics.resume',
        skills: [
            '$vuetify.projects.analytics.skills.one',
            '$vuetify.projects.analytics.skills.two',
            '$vuetify.projects.analytics.skills.three',
            '$vuetify.projects.analytics.skills.four'
        ],
        imgName: 'analytics.png',
        dialogComponent: 'ProjectAnalytics',
        type: EProjectType.professional,
        tags: [...fullStackTags, 'typescript', 'angular', 'highcharts', 'mongodb', 'mongo', 'end to end', 'e2e'],
        date: '2018 / 2019'
    },
    // Intuiface Player Next Gen
    {
        title: '$vuetify.projects.playerNextGen.title',
        description: '$vuetify.projects.playerNextGen.description',
        resume: '$vuetify.projects.playerNextGen.resume',
        skills: [
            '$vuetify.projects.playerNextGen.skills.one',
            '$vuetify.projects.playerNextGen.skills.two',
            '$vuetify.projects.playerNextGen.skills.three'
        ],
        imgName: 'player.png',
        dialogComponent: 'ProjectPLN',
        type: EProjectType.professional,
        tags: [...frontTags, 'angular', 'typescript', 'jest', 'ios', 'android', 'brightsign', 'samsung'],
        date: '2023'
    },
    // Journal du capitaine
    {
        title: '$vuetify.projects.journal.title',
        description: '$vuetify.projects.journal.description',
        resume: '$vuetify.projects.journal.resume',
        skills: [
            '$vuetify.projects.journal.skills.one',
            '$vuetify.projects.journal.skills.two',
            '$vuetify.projects.journal.skills.three'
        ],
        imgName: 'journal.png',
        projectLink: 'https://journalducapitaine.fr/',
        projectLinkText: '$vuetify.projects.journal.link',
        type: EProjectType.personal,
        tags: [...frontTags, 'wordpress', 'cms', 'responsive'],
        date: '2019'
    },
    // Tutoriel API Explorer
    {
        title: '$vuetify.projects.apiExplorer.title',
        description: '$vuetify.projects.apiExplorer.description',
        resume: '$vuetify.projects.apiExplorer.resume',
        skills: [
            '$vuetify.projects.apiExplorer.skills.one',
            '$vuetify.projects.apiExplorer.skills.two',
            '$vuetify.projects.apiExplorer.skills.three'
        ],
        imgName: 'apiExplorer.png',
        dialogComponent: 'ProjectApiExplorer',
        type: EProjectType.professional,
        tags: [...frontTags, 'e2e', 'end to end', 'jquery', 'stage', 'internship'],
        date: '2018'
    },
    // My Ice Tool
    {
        title: '$vuetify.projects.myIceTool.title',
        description: '$vuetify.projects.myIceTool.description',
        resume: '$vuetify.projects.myIceTool.resume',
        skills: [
            '$vuetify.projects.myIceTool.skills.one',
            '$vuetify.projects.myIceTool.skills.two',
            '$vuetify.projects.myIceTool.skills.three'
        ],
        imgName: 'myIceTool.png',
        dialogComponent: 'ProjectMyIceTool',
        type: EProjectType.student,
        tags: [...fullStackTags, 'php', 'laravel', 'cron', 'sql', 'mysql', 'api'],
        date: '2017'
    },
]
<template>
    <div class="project-container">
        <div class="section-title">Projets</div>
        <div class="title-separator"></div>
        <!-- Intuiface Analytics -->
        <ProjectPreview
            :title="P1_TITLE"
            :description="P1_DESCRIPTION"
            :skills="P1_SKILLS"
            :imgName="P1_IMG"
            :dialogComponent="P1_DIALOG"
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Tutoriel API Explorer -->
        <ProjectPreview
            :title="P2_TITLE"
            :description="P1_DESCRIPTION"
            :skills="P1_SKILLS"
            :imgName="P2_IMG"
            :dialogComponent="P2_DIALOG"
            reverse
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Tutoriel API Explorer -->
        <ProjectPreview
            :title="P3_TITLE"
            :description="P3_DESCRIPTION"
            :skills="P3_SKILLS"
            :imgName="P3_IMG"
            :dialogComponent="P3_DIALOG"
        />
    </div>
</template>

<script>
import ProjectPreview from "@/components/projects/ProjectPreview.vue";

export default {
    name: "Projects",
    components: { ProjectPreview },
    data: () => ({
        P1_TITLE: "INTUIFACE ANALYTICS - CHART & DASHBOARDS",
        P1_DESCRIPTION:
            "The website and membership management system we created for the association had to replace an existing set-up which had become old and cumbersome. We produced detailed user profiles of all the user groups to ensure that the site would meet the needs of diverse audiences as much as possible as well as being engaging to visit.",
        P1_IMG: "analytics",
        P1_SKILLS: ["Angular", "Highcharts", "Mongodb"],
        P1_DIALOG: "ProjectAnalytics",
        P2_TITLE: "API EXPLORER - TUTORIEL",
        P2_IMG: "apiExplorer",
        P2_DIALOG: "ProjectApiExplorer",
        P3_TITLE: "MY ICE TOOL - PROJET TUTEURÉ",
        P3_DESCRIPTION: `My Ice Tool est un projet étudiant que j'ai du réalisé durant ma licence professionnelle à Gap.
            L'objectif était de réaliser un site web permettant de visualiser les conditions d'escalades sur des cascades de glaces dans des zones spécifiques.
            Notre équipe a notamment dû créer l'identité graphique du site, gérer l'authentification, l'ajout de commentaires, utiliser l'api de Google Maps afin de tracer des zones et des points d'intérêts, stocker l'historique des températures en base à l'aide d'un cron, ...`,
        P3_IMG: "myIceTool",
        P3_DIALOG: "ProjectMyIceTool",
        P3_SKILLS: ["Framework PHP Laravel", "Google Maps API", "Cron et Base de données MySQL"]
    }),
};
</script>

<style lang="scss" scoped>
.project-container {
    /* height: 100vh; */
    background-color: #1a1c20;
    padding: 100px 5%;
}
.section-title {
    color: var(--v-primary-base);
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}
.project-divider {
    background-color: white;
    margin: 7vh 0;
}
.title-separator {
    width: 100px;
    height: 4px;
    background-color: var(--v-primary-base);
    text-align: center;
    margin: auto;
    margin-bottom: 100px;
}
</style>

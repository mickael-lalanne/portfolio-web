<template>
    <div class="all-projects-container">
        <h2 class="section-title">Projets</h2>
        <div class="title-separator"></div>
        <!-- Intuiface HCMS -->
        <ProjectPreview
            :title="HCMS_TITLE"
            :description="HCMS_DESCRIPTION"
            :skills="HCMS_SKILLS"
            :imgName="HCMS_IMG"
            :dialogComponent="HCMS_DIALOG"
            reverse
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Intuiface Analytics -->
        <ProjectPreview
            :title="P1_TITLE"
            :description="P1_DESCRIPTION"
            :skills="P1_SKILLS"
            :imgName="P1_IMG"
            :dialogComponent="P1_DIALOG"
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Intuiface Player Next Gen -->
        <ProjectPreview
            :title="PLN_TITLE"
            :description="PLN_DESCRIPTION"
            :skills="PLN_SKILLS"
            :imgName="PLN_IMG"
            :dialogComponent="PLN_DIALOG"
            reverse
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Journal du capitaine -->
        <ProjectPreview
            :title="JOURNAL_TITLE"
            :description="JOURNAL_DESCRIPTION"
            :skills="JOURNAL_SKILLS"
            :imgName="JOURNAL_IMG"
        >
            <template v-slot:projectLink>
                <a href="https://journalducapitaine.fr/" target="_blank">journalducapitaine.fr</a>
            </template>
        </ProjectPreview>
        <v-divider class="project-divider"></v-divider>
        <!-- Tutoriel API Explorer -->
        <ProjectPreview
            :title="P2_TITLE"
            :description="P2_DESCRIPTION"
            :skills="P2_SKILLS"
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
    name: "ProjectsSection",
    components: { ProjectPreview },
    data: () => ({
        P1_TITLE: "INTUIFACE ANALYTICS - CHART & DASHBOARDS",
        P1_DESCRIPTION:
            "Application web développée avec Angular permettant la visualisation de données client via des charts. Les charts sont entièrement personnalisables et peuvent êtres affichés de n'importe quelle façon dans des dashboards par drag & drop et redimensionnement. Il est aussi possible de partager ces dashboards par lien pour accéder à une version readonly. Pour ce projet, nous étions une équipe de 5 personnes: 1 chef de projet, 1 designer, 2 développeurs front et 1 développeur back.",
        P1_IMG: "analytics",
        P1_SKILLS: ["Travail en équipe", "Angular, Highcharts", "Base de données Mongodb", "Tests end to end"],
        P1_DIALOG: "ProjectAnalytics",
        P2_TITLE: "API EXPLORER - TUTORIEL",
        P2_DESCRIPTION:
            "Sujet de stage durant mon année en licence professionnelle. L'objectif était de remplacer un tutoriel d'onboarding intégré avec Appcues pour les nouveaux utilisateurs. Le but était de ne plus être dépendant financièrement du produit et d'avoir son propre tutoriel. J'ai donc dû m'adapter sur un grand projet existant et reproduire l'ancien tutoriel avec des nouvelles améliorations, comme la possibilité de revenir à des étapes précendentes.",
        P2_IMG: "apiExplorer",
        P2_DIALOG: "ProjectApiExplorer",
        P2_SKILLS: ["S'adapter à un projet existant", "Javascript, jQuery", "Tests end to end"],
        P3_TITLE: "MY ICE TOOL - PROJET TUTEURÉ",
        P3_DESCRIPTION: `My Ice Tool est un projet étudiant que j'ai dû réaliser durant ma licence professionnelle à Gap.
            L'objectif était de réaliser un site web permettant de visualiser les conditions d'escalades sur des cascades de glaces dans des zones spécifiques.
            Notre équipe a notamment dû créer l'identité graphique du site, gérer l'authentification, l'ajout de commentaires, utiliser l'api de Google Maps afin de tracer des zones et des points d'intérêts, stocker l'historique des températures en base à l'aide d'un cron, ...`,
        P3_IMG: "myIceTool",
        P3_DIALOG: "ProjectMyIceTool",
        P3_SKILLS: ["Framework PHP Laravel", "Google Maps API", "Cron et Base de données MySQL"],
        HCMS_TITLE: "INTUIFACE HCMS",
        HCMS_DESCRIPTION: `Application web développée avec <i>Vue.js</i> permettant aux utilisateurs d'uploader et d'éditer du contenu pour leurs expériences. Entre autre, HCMS permet de: <br>
            - Créer un contenu bien structuré pour une variété de formats de médias (images, vidéos, documents, couleurs, date, …) <br>
            - Utiliser la notion de “variant” pour identifier les champs qui varient selon le contexte <br>
            - Gérer les utilisateurs et le workflow pour contrôler l'édition et la publication de données
        `,
        HCMS_IMG: "hcms",
        HCMS_SKILLS: ["Projet de presque 3 ans, 2 développeurs front, 1 développeur back", "Vues.js, Vuetify, Vuex", "Backend avec AWS (Lambda, S3)", "Tests unitaires avec jest, tests end to end avec cypress"],
        HCMS_DIALOG: "ProjectHCMS",
        PLN_TITLE: "INTUIFACE PLAYER NEXT GEN",
        PLN_DESCRIPTION: "Le Player Next Gen permet aux utilisateurs de visualiser des expériences créées depuis le Composer, sur n'importe quelle plateforme. L'application est développée sur la dernière version d'Angular. Sur ce grand projet que j'ai rejoint en cours de route, je me suis occupé du développement des assets <b><i>Youtube</i></b>, <b><i>Webcam</i></b> et <b><i>Linear Gauge</i></b>.",
        PLN_IMG: "player",
        PLN_SKILLS: ["Angular", "Développement multiplateforme: web, android, iOS, Brightsign, Samsung Kiosk, …", "Tests unitaires avec jest"],
        PLN_DIALOG: "ProjectPLN",
        JOURNAL_TITLE: "JOURNAL DU CAPITAINE",
        JOURNAL_DESCRIPTION: "Ma première passion, ce sont les jeux vidéo. Ma deuxième, c'est écrire. J'ai donc décidé de réaliser un site web me permettant de réunir ces deux passions. Réalisé sous Wordpress, ce site me permet de publier des articles en rapport avec le jeu vidéo.",
        JOURNAL_IMG: "journal",
        JOURNAL_SKILLS: ["Projet personnel", "Wordpress", "Responsive"],
    }),
};
</script>

<style lang="scss" scoped>
.all-projects-container {
    background-color: #1a1c20;
    padding: 100px 5%;
    padding-top: 70px;
}
.section-title {
    color: rgb(var(--v-theme-primary));
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
    background-color:rgb(var(--v-theme-primary));
    text-align: center;
    margin: auto;
    margin-bottom: 65px;
}
</style>

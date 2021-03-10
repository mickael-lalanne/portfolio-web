<template>
    <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card class="project-container">
            <v-btn icon @click="$emit('close')">
                <v-icon color="black">mdi-close</v-icon>
            </v-btn>
            <div class="project-title">
                <img class="" src="@/assets/images/projects/apx/logo.png" />
            </div>
            <!-- PRESENTATION -->
            <div class="section-title">
                Présentation de l’API Explorer
            </div>
            <div class="section-content">
                L’API Explorer permet la création d’une interface pour n’importe
                quelle requête service web de type REST. Avec cette interface,
                une expérience IntuiFace en cours d'exécution peut lire et
                écrire de manière dynamique sur la source de données et / ou le
                périphérique accessible via ce service Web. L’API Explorer
                permet d’avoir accès à des dizaines de milliers d'API publiques
                et privées disponibles dans le cloud.
                <br />
                Il y a tout : des listes de films, des prévisions
                météorologiques, les dernières photos de la NASA et tout ce qui
                est possible de trouver sur Internet. La majorité est gratuite
                tandis que d'autres peuvent exiger des frais d'accès. Certains
                peuvent être privés et internes à votre organisation. Peu
                importe, tous sont accessibles dans Intuiface.
            </div>
            <!-- OBJECTIF -->
            <div class="section-title">
                Objectif
            </div>
            <div class="section-content">
                Le tutoriel de l'API Explorer avait été réalisé avec Appcues.
                Appcues est un service logiciel payant qui aide les entreprises
                à mettre en place un tutoriel pour leurs clients. Même sans
                compétences de codage, les utilisateurs peuvent créer des
                procédures pas à pas et des messages intégrés à l'application
                pour accueillir leurs clients. Le but de cette mission était
                d'avoir son propre tutoriel pour améliorer la maintenance du
                produit et ne plus être dépendant financièrement d'Appcues.
                <br />
                Nous avons profité de la refonte du tutoriel pour intégrer
                quelques changements :
                <br />- Côté client : la possibilité de revenir à une étape
                précédente <br />- Côté serveur : le contenu du tutoriel serait
                stocké en base de données pour permettre aux personnes de
                l’équipe de modifier son contenu sans toucher au code
            </div>
            <div>
                <img
                    class=""
                    src="@/assets/images/projects/apx/maquetteStep.png"
                />
            </div>
            <!-- CONCLUSION -->
            <div class="section-title">
                Conclusion
            </div>
            <div class="section-content">
                Cette mission était la longue et la plus important que j’ai eu à
                réaliser durant mon stage. Elle m’aura demandé beaucoup
                d’autonomie, mais aussi beaucoup de temps pour comprendre le
                code existant et m’y adapter. Au final, on se retrouve côté
                interne avec un tutoriel plus facilement maintenable, qui permet
                de modifier le contenu des étapes sans passer par le code grâce
                à une base de données et qui n’est plus dépendant d’Appcues.
                Côté client, le tutoriel est désormais plus réactif et permet
                aux utilisateurs de revenir à une étape précédente.
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "ProjectApiExplorer",
    components: {},
    props: {
        showDialog: { type: Boolean },
    },
    data: () => ({
        dialog: false,
    }),
};
</script>

<style scoped>
.project-container {
    background-color: var(--v-light-base);
    padding: 0 20% !important;
    text-align: justify;
}
.project-title {
    text-align: center;
    padding-bottom: 15px;
}
.section-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    padding: 15px 0;
}
</style>

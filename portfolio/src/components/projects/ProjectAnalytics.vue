<template>
    <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <div class="project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />
            <!-- TITLE -->
            <div class="project-title">
                <img src="@/assets/images/projects/analytics/logo.png" />
            </div>
            <!-- Présentation -->
            <div class="section-title">
                Présentation
            </div>
            <div class="section-content">
                Analytics - Chart & Dashboards est une application web
                accessible directement sur son compte my.intuiface. Du début des
                devs jusqu'à sa release, c'est mon pre J'ai aussi continué de
                travailler sur le projet une fois releasé pour ajouter de
                nouvelles features comme les charts de type "Gauge" et Single
                "Value". Le projet a été développé avec le framework Angular.
                Pour les charts, nous avons utilisé la librairie
                <a href="https://www.highcharts.com/" target="_blank"
                    >Highcharts</a
                >.<br />
                Nous étions 2 développeurs front-end, 1 développeur back-end, 1
                graphiste et un chef de projet qui s'occupait des tests et
                specfications UX.
            </div>
            <div style="text-align: center;" class="pt-3">
                <iframe
                    style="max-width: 100%;"
                    width="600"
                    height="337.5"
                    src="https://www.youtube.com/embed/MQQxB4HIFbc"
                ></iframe>
            </div>

            <!-- Dashboard -->
            <div class="section-title">Partie Dashboard</div>
            <div class="section-content">
                La partie Dahsboard permet la visualition des données client.<br />
                La première fois qu'un utilisateur se connecte, 2 dashboards lui
                sont automatiquement créé: <br />
                <div class="pl-10">
                    - un dashboard avec des charts par défaut basé sur SES
                    données.<br />
                    - un deuxième dashboard appelé "Tradeshow", basé sur les
                    données d'Intuiface sur une plage de date spécifique et qui
                    aura toujours des données.<br />
                </div>
                Il est possible d'agencer les charts de la manière que l'on
                souhaite avec du drag & drop, mais aussi de les redimensionner.
                Pour chaque chart, nous avons la possibilité de les télécharger
                dans plusieurs formats: png, jpeg, svg, pdf, csv, xls.
            </div>
            <img
                class="pt-3"
                src="@/assets/images/projects/analytics/chartTemplateLibrary.png"
            />

            <!-- Chart Editor -->
            <div class="section-title">Chart Editor</div>
            <div class="section-content">
                La partie chart editor permet quant à elle d'éditer le chart. Il
                est possible de drag & dropper ce que l'on appele des "Data
                Point Parameters" pour filtrer ou afficher des valeurs. Il est
                notamment possible de: - Spécifier une plage de date (date
                range) ou d'utiliser celle définit côté Dashboard - Choisir le
                type de chart parmis: Line, Area, Bar, Column, Pie, Radar,
                Single Value et Gauge. - Changer des options comme le refresh
                automatique des valeurs, le format des valeurs affichés
                (préfixe, suffixe, multiplicateur) ou encore des options
                sépcifique au type de chart.
            </div>
            <img
                class="pt-3"
                src="@/assets/images/projects/analytics/chartEditor.png"
            />

            <!-- Chart Template Library -->
            <div class="section-title">Chart Template Library</div>
            <div class="section-content">
                Le Chart Teplate Library propose à l'utilisateur des
                configurations de chart toute prête qu'il peut directement
                utiliser. Il a la possibilité d'ajouter le chart directement
                dans son dashboard ou d'éditer d'abord le template dans le Chart
                Editor.<br />
                Chaque template est stocké en base de données avec un numéro de
                version.
            </div>
            <div style="margin: auto" class="pt-3">
                <img
                    src="@/assets/images/projects/analytics/chartTemplateLibrary.png"
                />
            </div>

            <!-- Partage de Dashboard -->
            <div class="section-title">Partage de dashboard</div>
            <div class="section-content">
                Une autre fonctionnalité est le partage des dashboards, via
                <b> URL</b> ou <b>iframe</b>. La popup d'options permet de
                sélectionner les options à afficher comme le nom, la description
                ou le logo du dashboard. Mais aussi de définir une plage de date
                spécifique ou les charts à partager.<br />
                N'importe quelle personne disposant du lien pourra alors accéder
                à une version readonly du dashboard.
            </div>
            <img
                class="pt-3"
                src="@/assets/images/projects/analytics/sharedOptions.png"
            />
        </div>
    </v-dialog>
</template>

<script>
import CloseButton from "@/components/shared/CloseButton.vue";

export default {
    name: "ProjectAnalytics",
    components: { CloseButton },
    props: {
        showDialog: { type: Boolean },
    },
    data: () => ({
        dialog: false,
    }),
};
</script>

<style lang="scss" scoped>
.project-container {
    background-color: var(--v-light-base);
    padding: 5vh 30vw !important;
    text-align: justify;
}
.project-title {
    text-align: center;
    img {
        width: 600px;
    }
}
img {
    max-width: 100%;
}
.section-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    padding-top: 30px;
    padding-bottom: 15px;
}
.section-content-title {
    padding-top: 10px;
    padding-bottom: 5px;
    text-decoration: underline;
}

// RESPONSIVE

@media (max-width: 1200px) {
    .project-container {
        padding: 5vh 15vw !important;
    }
}
// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .project-container {
        padding: 5vh 3vw !important;
    }
    .project-title {
        padding-top: 50px;
    }
}
</style>

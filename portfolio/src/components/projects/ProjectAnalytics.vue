<template>
    <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <ImageExtend
            v-if="imageToExtend"
            :imgId="imageToExtend"
            @close="imageToExtend = null"
        />
        <div class="project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />
            <!-- TITLE -->
            <div class="project-title">
                <img
                    alt="Logo Intuiface Analytics"
                    :src="require('@/assets/images/projects/analytics/logo.png')"
                    @click="imageToExtend = 'lYW0rP7.png'"
                />
            </div>
            <!-- Présentation -->
            <div class="section-title">
                Présentation
            </div>
            <div class="section-content">
                Analytics - Chart & Dashboards est une application web accessible directement sur son compte 
                <a href="https://my.intuiface.com/" target="_blank" rel="noopener">
                    my.intuiface
                </a>.<br>
                C'est mon premier vrai projet professionnel et j'ai eu la chance d'être impliqué dès le début des devs.<br>
                Même après la release du produit, j'ai continué de travailler sur le projet pour ajouter de nouvelles features comme les charts de type <b>"Gauge"</b> et <b>"Single Value"</b>.<br>
                L'application a été développée avec le framework <b>Angular</b>.
                Pour les charts, nous avons utilisé la librairie
                <a href="https://www.highcharts.com/" target="_blank" rel="noopener">
                    Highcharts
                </a >.<br />
                L'équipe était composée d'un chef de projet qui s'occupait des tests et spécifications UX, d'un designer, de deux développeurs front-end et d'un développeur back-end.
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
                sont automatiquement créés: <br />
                <div class="pl-10">
                    - un dashboard avec des charts par défaut basé sur SES données.<br />
                    - un deuxième dashboard appelé "Tradeshow", basé sur les
                    données d'Intuiface sur une plage de date spécifique et qui
                    aura toujours des données.<br />
                </div>
                Il est possible d'agencer les charts de la manière que l'on
                souhaite avec du <b>drag & drop</b>, mais aussi de les <b>redimensionner</b>.
                Pour chaque chart, nous avons la possibilité de les <b>télécharger
                dans plusieurs formats</b>: png, jpeg, svg, pdf, csv, xls.<br>
                Il est à noter qu'il existe des règles de tarifications pouvant impacter le nombre de dashboard et le nombre de charts à l'intérieur.
            </div>
            <img
                alt="Dashboard"
                class="pt-3"
                :src="require('@/assets/images/projects/analytics/dashboard.png')"
                @click="imageToExtend = 'HFpIOts.png'"
            />

            <!-- Chart Editor -->
            <div class="section-title">Chart Editor</div>
            <div class="section-content">
                La partie chart editor permet quant à elle d'éditer le chart. Il
                est possible de drag & dropper ce que l'on appelle des "Data
                Point Parameters" pour filtrer ou afficher des valeurs.
                Il est notamment possible de:
                <div class="">
                    - Spécifier une plage de date (<b>date range</b>) ou d'utiliser celle définie côté Dashboard <br>
                    - Choisir le <b>type de chart</b> parmi: Line, Area, Bar, Column, Pie, Radar, Single Value et Gauge <br>
                    - Changer des options comme le <b>refresh automatique des valeurs</b>, le <b>formatting des valeurs affichées</b> <br>
                    (préfixe, suffixe, multiplicateur) ou encore des options spécifiques au type de chart
                </div>
            </div>
            <img
                alt="Chart Editor"
                class="pt-3"
                :src="require('@/assets/images/projects/analytics/chartEditor.png')"
                @click="imageToExtend = 'FZAamGv.png'"
            />

            <!-- Chart Template Library -->
            <div class="section-title">Chart Template Library</div>
            <div class="section-content">
                Le Chart Teplate Library propose à l'utilisateur des
                configurations de chart toutes prêtes qu'il peut directement
                utiliser. Il a la possibilité d'ajouter le chart directement
                dans son dashboard ou d'éditer d'abord le template dans le Chart
                Editor.<br />
                Chaque template est <b>stocké en base de données</b> avec un numéro de
                version.
            </div>
            <div style="margin: auto" class="pt-3">
                <img
                    alt="Chart Template Library"
                    :src="require('@/assets/images/projects/analytics/chartTemplateLibrary.png')"
                    @click="imageToExtend = '0kI6hxv.png'"
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
                alt="Dashboard options de partage"
                class="pt-3"
                :src="require('@/assets/images/projects/analytics/sharedOptions.png')"
                @click="imageToExtend = 'jSGmmN6.png'"
            />
        </div>
    </v-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.js';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectAnalytics"
});
</script>

<style lang="scss" scoped>
.project-container {
    background-color: rgb(var(--v-theme-light));
    padding: 5vh 30vw !important;
    text-align: justify;
    font-family: 'Roboto';
    font-display: swap;
}
.project-title {
    text-align: center;
    img {
        width: 600px;
    }
}
img {
    max-width: 100%;
    cursor: pointer;
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

a {
    text-decoration: underline;
    color: unset !important;
    &:hover {
        color: rgb(var(--v-theme-secondary)) !important;
    }
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

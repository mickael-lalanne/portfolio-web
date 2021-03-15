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
        <v-card class="project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />
            <!-- TITLE -->
            <div class="project-title">
                <img
                    alt="API Explorer logo"
                    src="@/assets/images/projects/apx/logo.png"
                    @click="imageToExtend = 'MygysNL.png'"
                />
            </div>
            <!-- Présentation -->
            <div class="section-title">
                Présentation de l'API Explorer
            </div>
            <div class="section-content">
                L’API Explorer permet la création d’une interface pour n’importe quelle requête service web de type REST.
                Avec cette interface, une expérience Intuiface en cours d'exécution peut lire et écrire de manière dynamique sur la source de données et / ou le périphérique accessible via ce service Web.
                L’API Explorer permet d’avoir accès à des dizaines de milliers d'API publiques et privées disponibles dans le cloud.
                Il y a tout : des listes de films, des prévisions météorologiques, les dernières photos de la NASA et tout ce qui est possible de trouver sur Internet.
                La majorité est gratuite tandis que d'autres peuvent exiger des frais d'accès.
                Certaines peuvent être privées et internes à votre organisation.
                Peu importe, tous sont accessibles dans Intuiface.
            </div>
            <img
                alt="API Explorer"
                class="pt-3"
                src="@/assets/images/projects/apx/apx.png"
                @click="imageToExtend = 'BLELnAM.png'"
            />

            <!-- Objectif -->
            <div class="section-title">Objectif du stage</div>
            <div class="section-content">
                Le tutoriel de l'API Explorer avait été réalisé avec Appcues.<br>
                Appcues est un service logiciel payant qui aide les entreprises à mettre en place un tutoriel pour leurs clients.
                Même sans compétences de codage, les utilisateurs peuvent créer des procédures pas à pas et des messages intégrés à l'application pour accueillir leurs clients.<br>

                Le but de cette mission était d'avoir son propre tutoriel pour améliorer la maintenance du produit et ne plus être dépendant financièrement d'Appcues.
                Nous avons profité de la refonte du tutoriel pour intégrer quelques changements :

                <div class="pl-10">
                    - Côté client : la possibilité de revenir à une étape précédente <br>
                    - Côté serveur : le contenu du tutoriel serait stocké en base de données pour permettre aux personnes de l’équipe de modifier son contenu sans toucher au code <br>
                </div>
            </div>

            <!-- Technologies -->
            <div class="section-title">Technologies utilisées</div>
            <div style="width: 400px; margin: auto">
                <img
                    alt="jQuery logo"
                    class="pb-3"
                    src="@/assets/images/projects/apx/jquery.png"
                    @click="imageToExtend = '8aGF3Vu.png'"
                />
            </div>
            <div class="section-content">
                <b>HTML5</b>, <b>CSS</b> avec <b>less.js</b>, <b>Javascript</b>, <b>jQuery</b>.<br>
                J'ai pendant un moment utilisé la librairie iziModal, pour finalement me rendre compte qu'elle était trop restrictive.<br>
                Le point fort de cette librairie est qu'elle permettait d'aller d'étape en étape automatiquement.<br>
                Cependant, il y avait tellement d'actions à prendre en compte lors du changement d’étape (animations à ajouter ou supprimer, faire apparaître
                ou disparaître le fond noir, lancer des requêtes, envoyer l'étape actuelle au serveur, ...) que je me retrouvais à réécrire tout le cheminement. <br>
                De plus, il n'était pas possible de positionner les étapes par rapport à d'autres éléments.
                J'ai donc décidé d'écrire le cheminement en dur, en essayant de rendre le code le plus court et lisible possible.<br>
                Pour ce qui est du positionnement, je me suis tourné vers la librairie <b>jQueryUI</b> qui était déjà installée sur le projet.<br>

                Pour gérer la base de données <b>MongoDB</b>, j'ai d'abord utilisé <b>Studio3T</b> le temps de sa version d'essai.<br>

                Une fois la version d'essai terminée, je suis passé sur Robo3T. <b>Codeceptjs</b> et <b>Nightmare.js</b> pour les tests end to end.
            </div>

            <!-- Design -->
            <div class="section-title">Design</div>
            <div class="section-content">
                En ce qui concerne le design du tutoriel, il est resté en grande partie fidèle à celui réalisé avec Appcues.<br>
                Dans un premier temps, j'ai reproduit exactement le même tutoriel que l'existant.<br>
                Au fur et à mesure de l'avancée de la mission, des idées et des améliorations ont été trouvées (agrandissement des tooltips, animations, ajout d'un bouton précédent, ...).
                Des maquettes m'ont été fournies par l’UX Designer et se sont vu évoluées avec le temps.<br>
                Les éléments situés à l'intérieur des étapes ont été positionnés avec <b>flexbox</b>.
                Les couleurs utilisées pour le tutoriel ont été placées dans le fichier constant.less pour faciliter la maintenance.<br>
                Les différences avec l'ancien tutoriel sont :<br>
                <div class="pl-10">
                    - l'ajout d'un <b>bouton previous</b><br>
                    - de nouveaux <b>effets de transition</b> entre les étapes importantes (transitions sur le côté) et entre les tooltips (transitions d'opacité) <br>
                    - un <b>effet d'animation</b> (scale et surbrillance) mis en place pour attirer le regard de l'utilisateur<br>
                    <img
                        alt="API Explorer effet de surbrillance"
                        class="pb-3"
                        src="@/assets/images/projects/apx/highlight.png"
                        @click="imageToExtend = 'Y4SvFhr.png'"
                    />
                </div>
                Pour ce qui est du positionnement de l'étape, il se fait par rapport à l'élément qui doit être expliqué.<br>
                Pour ce faire, je suis passé par le framework <b>jQueryUI</b>, et notamment sa fonction <b>position()</b>.
            </div>
            <div style="margin: auto" class="pt-3">
                <img
                    alt="API Explorer maquettes"
                    src="@/assets/images/projects/apx/design.png"
                    @click="imageToExtend = 's5zHoER.png'"
                />
            </div>

            <!-- Tests -->
            <div class="section-title">Tests end to end</div>
            <div class="section-content">
                Une fois le nouveau tutoriel terminé, j'ai réalisé des tests end to end avec prise et comparaison de screenshots à l'aide de la librairie <b>CodeceptJS</b>.<br>
                Le but étant de vérifier que le tutoriel fonctionne correctement du début à la fin.<br>
                Pour mes tests, j'ai créé plusieurs scénarios :
                <div class="pl-10">
                    - l'utilisateur suit le cheminement normal du tutoriel<br>
                    - l'utilisateur saute la première partie pour arriver directement à la deuxième<br>
                    - l'utilisateur clique sur le bouton 'Skip tutorial'<br>
                    - l'utilisateur clique sur le bouton 'Home' pendant la deuxième partie<br>
                    - l'utilisateur clique sur le menu hamburger à la place du bouton 'Restart Tutorial'<br>
                    - l'utilisateur clique sur les boutons du 'right panel'<br>
                </div>
                J'ai aussi vérifié que :
                <div class="pl-10">
                    - les boutons du footer (download, share et machine learning) soient désactivés<br>
                    - le bouton previous fonctionne<br>
                    - toutes les animations apparaissent et disparaissent correctement<br>
                    - le tutoriel ne se relance pas quand l'utilisateur effectue une nouvelle requête<br>
                </div>
            </div>

            <!-- Conclusion -->
            <div class="section-title">Conclusion</div>
            <div class="section-content">
                Cette mission était la plus longue et la plus importante que j’ai eu à réaliser durant mon stage.
                Elle m’aura demandé beaucoup d’autonomie, mais aussi beaucoup de temps pour comprendre le code existant et m’y adapter.<br>
                Au final, on se retrouve côté interne avec un tutoriel plus facilement maintenable, qui permet de modifier le contenu des étapes sans passer par
                le code grâce à une base de données et qui n’est plus dépendant d’Appcues.<br>
                Côté client, le tutoriel est désormais plus réactif et permet aux utilisateurs de revenir à une étape précédente.
            </div>
            <img
                alt="API Explorer tutoriel"
                class="pt-3"
                src="@/assets/images/projects/apx/step.png"
                @click="imageToExtend = 'BxbbXlC.png'"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import Vue from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.js';

export default Vue.extend({
    mixins: [ProjectMixin],
    name: "ProjectApiExplorer"
});
</script>

<style lang="scss" scoped>
.project-container {
    background-color: var(--v-light-base) !important;
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

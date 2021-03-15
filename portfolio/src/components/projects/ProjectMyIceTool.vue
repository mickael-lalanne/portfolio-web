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
                    alt="My Ice Tool logo"
                    src="@/assets/images/projects/myIceTool/logoName.png"
                    @click="imageToExtend = 'C6BPSTs.png'"
                />
            </div>
            <!-- PRESENTATION -->
            <div class="section-title">
                Présentation
            </div>
            <div class="section-content">
                <b>My Ice Tool</b> est un projet étudiant que j'ai dû réaliser durant ma licence professionnelle à Gap.
                L'objectif était de réaliser un site web permettant de visualiser les conditions d'escalades sur des cascades de glaces dans des zones spécifiques.
                Notre équipe a notamment dû:
                <div class="pl-10"> 
                    - Créer l'identité graphique du site. <br>
                    - Gérer l'authentification, avec la possibilité de <b>s'inscrire directement avec son compte Google ou Facebook</b>. <br>
                    - Utiliser l'<b>api Google Maps</b> afin de tracer des zones sur une carte et d'y afficher des points d'intérêts. <br>
                    - Gérer l'ajout et la visualisation de commentaires. <br>
                    - Afficher l'historique des dernières températures pour chaque cascade.
                    Pour se faire, un <b>cron</b> se charge une fois par jour d'appeler une api météo pour récupérer les dernières températures et les stocker dans une base de données <b>MySQL</b>.<br>
                </div>
                Ce projet a été réalisé à l'aide du framework PHP <b>Laravel</b> et une équipe constituée de 3 développeurs et 1 graphiste.
            </div>

            <!-- Page d'inscription -->
            <div class="section-title">Page d'inscription</div>
            <img
                alt="My Ice Tool page d'accueil"
                class="pb-3"
                src="@/assets/images/projects/myIceTool/home.jpg"
                @click="imageToExtend = '8TkVFgp.jpg'"
            />
            <div class="section-content">
                <div class="section-content-title">
                    - Connexion/inscription avec validation du compte:
                </div>
                Un formulaire de connexion et d’inscription seront disponibles sur la page principale. Une fois le formulaire d’inscription correctement rempli, les informations seront stockées dans la base de données.
                <br>
                L’utilisateur aura aussi la possibilité de s’inscrire avec Google. Pour cela, on récupérera ses nom, prénom et adresse mail directement avec l’API Google+, et on demandera à l’utilisateur s’il souhaite s’inscrire à la newsletter.
                <br>
                <div class="section-content-title">
                    - Connexion Google/Facebook:
                </div>
                L’utilisateur peut se connecter directement avec son compte Google ou Facebook sans rentrer ses identifiants. Il faudra utiliser les API Facebook et Google+.
                <div class="section-content-title">
                    - Force de mot de passe:
                </div>
                Il existe 3 niveaux de force pour le mot de passe : faible, moyen, bon. Pour que l’utilisateur puisse s’inscrire, le mot de passe doit obligatoirement :
                <div class="pl-10"> 
                    - Être au minimum de niveau moyen <br>
                    - Avoir au moins 8 caractères <br>
                    - Contenir au moins 1 chiffre <br>
                    - Contenir au moins 1 majuscule <br>
                    - Interdire les suites de lettres <br>
                </div>
            </div>

            <!-- Page principale -->
            <div class="section-title">Page Principale</div>
            <img
                alt="My Ice Tool page principale"
                class="pb-3"
                src="@/assets/images/projects/myIceTool/main.jpg"
                @click="imageToExtend = '78jfABU.jpg'"
            />
            <div class="section-content">
                <div class="section-content-title">
                    - API Google Map, Afficher les zones et les cascades:
                </div>
                Lors du chargement de la page principale, la carte devra se placer sur la cascade préférée de l’utilisateur connecté. Ensuite, des requêtes AJAX permettront d’afficher les zones et cascades disponibles dans le périmètre.
                En cliquant sur une cascade, il sera possible de connaître ses coordonnées, sa température, son niveau de danger, et d’afficher l’historique des températures ainsi que les commentaires.
                <div class="section-content-title">
                    - Recherche de cascades avec autocomplétion:
                </div>
                Quand l’utilisateur commence à taper le nom d’une zone ou d’une cascade dans la barre de recherche, une liste de résultats s’affiche en temps réel pour auto compléter la recherche.
            </div>

            <!-- Historique des températures -->
            <div class="section-title">Historique des températures</div>
            <img
                alt="My Ice Tool historique"
                class="pb-3"
                src="@/assets/images/projects/myIceTool/history.jpg"
                @click="imageToExtend = 'vnyuxEx.jpg'"
            />
            <div class="section-content">
                Quand l’utilisateur cliquera sur ‘Historique des températures’, on ira récupérer dans la base de données l’historique de la cascade sélectionnée et on affichera les résultats sous forme de tableau.
            </div>

            <!-- Commentaires -->
            <div class="section-title">Commentaires</div>
            <img
                alt="My Ice Tool commentaires"
                class="pb-3"
                src="@/assets/images/projects/myIceTool/comment.jpg"
                @click="imageToExtend = 'tbku7yV.jpg'"
            />
            <div class="section-content">
                <div class="section-content-title">
                    - Affichage des commentaires:
                </div>
                Quand l’utilisateur cliquera sur ‘Commentaires’, on ira récupérer dans la base de données les commentaires de la cascade sélectionnée et on les affichera sous forme de liste comme ci-dessus.
                On affichera : le nom de l’utilisateur, la date à laquelle il a posté le commentaire, le contenu, la / les photos disponibles.
                <div class="section-content-title">
                    - Recherche de cascades avec autocomplétion:
                </div>
                    Quand l’utilisateur cliquera sur ‘Commentaires’, il aura la possibilité d’ajouter un commentaire, accompagné ou non d'une ou plusieurs photos.
                    Son nom et la date à laquelle le commentaire a été posté seront récupérés automatiquement.
            </div>

            <!-- A proos -->
            <div class="section-title">Page à propos</div>
            <img
                alt="My Ice Tool page à propos"
                class="pb-3"
                src="@/assets/images/projects/myIceTool/about.jpg"
                @click="imageToExtend = 'MiMw4FZ.jpg'"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import Vue from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.js';

export default Vue.extend({
    mixins: [ProjectMixin],
    name: "ProjectMyIceTool"
});
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

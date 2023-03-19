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
                    alt="Player logo"
                    :src="require('@/assets/images/projects/player/logo.png')"
                    @click="imageToExtend = '.png'"
                />
            </div>

            <!-- About -->
            <div class="section-title">Qu'est ce que le Player Next Gen</div>
            <div class="section-content">
                <p>
                    Grâce à Intuiface, les utilisateurs ont la possibilité de créer des applications sans avoir besoin de coder.
                    On appelle ces applications des <b><i>expériences</i></b>.
                    Avec une interface semblable à Photoshop, l'utilisateur peut très facilement ajouter des <b><i>assets</i></b> (images, vidéos, texte, documents, …) et les faire interagir entre eux.
                </p>
                <p>
                    La player permet de jouer ces expériences sur n'importe quelle plateforme (navigateur web, android, iOS, Brightsign, Samsung Kiosk, …).
                    Pour se faire, on se base sur un fichier <i>.ifx</i>, semblable à un fichier <i>.xml</i> pour déterminer quel élément doit être affiché à quel endroit, mais également quel comportement il doit avoir.
                </p>

                <p>
                    Le projet est réalisé en <b>typescript</b> sur la dernière version d'<b>Angular</b>.
                    Des tests unitaires sont obligatoirement mis en place pour chaque composant.
                    Comme c'est un grand projet (jusqu'à 9 développeurs en parallèle), nous suivons un process bien établi.
                    Pour le process, toute feature est réalisée dans une branche à part. Une <b><i>pull request</i></b> doit être réalisée une fois le développement terminé.
                    Du code review est systématiquement effectué et la <i>PR</i> doit être validée par l'ensemble des développeurs avant d'être mergée.
                </p>
                <p>
                    De mon côté, je me suis occupé de l'implémentation de différents assets.
                </p>
            </div>

            <!-- Asset Youtube -->
            <div class="section-title">Asset Youtube</div>
            <div class="section-content">
                L'asset Youtube permet d'afficher n'importe quelle vidéo uploadée sur Youtube.
                Lors du développement, je me suis basé sur la librairie officielle d'Angular:
                <a href="https://github.com/angular/components/tree/main/src/youtube-player" target="_blank">youtube-player</a>.
                La vidéo Youtube doit pouvoir s'afficher dans le Player suivant différents formats de source (url complète, url abrégée, seulement l'id, …).
                Une <b>expression régulière</b> permet de récupérer l'id de la vidéo, peu importe le format.<br>

                
                <p class="pt-2">L'asset doit pouvoir lever des événements quand:</p>
                <div class="pl-10">
                    - La vidéo est terminée <br>
                    - La vidéo est mise en pause <br>
                    - La vidéo est rembobinée <br>
                    - La vidéo atteint un certain temps définit par l'utilisateur <br>
                    - La vidéo a commencée à jouer <br>
                    - La timeline de la vidéo a changé <br>
                    - Le volume de la vidéo a changé
                </div>

                <p class="pt-2">Quand il reçoit certains événements, l'asset doit être capable de:</p>
                <div class="pl-10">
                    - Changer la source de la vidéo <br>
                    - Mettre la vidéo en pause <br>
                    - Jouer la vidéo <br>
                    - Stopper la vidéo <br>
                    - Rembobiner la vidéo <br>
                    - Changer le temps de la vidéo <br>
                    - Changer le volume <br>
                    - Toggle le mode play / pause <br>
                    - Activer ou désactiver le mode loop
                </div>

                <img
                    alt="Player Next Gen - Asset Youtube"
                    class="pt-5"
                    :src="require('@/assets/images/projects/player/youtube.png')"
                    @click="imageToExtend = '.png'"
                />
            </div>

            <!-- Asset Linear Gauge -->
            <div class="section-title">Asset Linear Gauge</div>
            <div class="section-content">
                L'asset Linear Gauge peut être utilisé pour représenter visuellement une valeur dans une plage de valeurs.
                Cette valeur peut varier dynamiquement au cours de l'expérience pour par exemple animer des graphiques interactifs.

                
                <p class="pt-2">L'asset est composé de deux images spécifiées par l'utilisateur:</p>
                <div class="pl-10">
                    - une image correspondant à la gauge vide <br>
                    - une image correspondant à la gauge complète
                </div>

                <img
                    alt="Player Next Gen - Asset Linear Gauge"
                    class="pt-5"
                    :src="require('@/assets/images/projects/player/linear-gauge.png')"
                    @click="imageToExtend = '.png'"
                />

                <p>L'utilisateur peut fournir n'importe quel type d'image, tant que la progression est en ligne droite (horizontale ou verticale).
                Il peut aussi définir la direction de remplissage dans les propriétés de l'actif.</p>

                <img
                    alt="Player Next Gen - Asset Linear Gauge"
                    :src="require('@/assets/images/projects/player/linear-gauge2.png')"
                    @click="imageToExtend = '.png'"
                />

                <p class="pt-2">
                    Pour développer cet asset, j'ai principalement utilisé la propriété CSS
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path" target="_blank"> clip-path</a>
                    pour n'afficher qu'une partie de l'image représentant la valeur de remplissage.
                </p>

            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.js';

export default defineComponent({
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

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
                    alt="HCMS logo"
                    :src="require('@/assets/images/projects/hcms/logo.png')"
                    @click="imageToExtend = 'aLJYtCt.png'"
                />
            </div>

            <img
                alt="HCMS - Overview"
                class="pb-3"
                :src="require('@/assets/images/projects/hcms/overview.gif')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <!-- Dashboard -->
            <div class="section-title">Dashboard</div>
            <div class="section-content">
                Depuis le dashboard, l'administrateur peut modifier le nom de sa base, sa description ou son image.
                Il peut aussi ajouter ou supprimer des utilisateurs à sa base, et gérer leurs permissions.
                Pour chaque utilisateur, l'administrateur peut définir les 4 permissions suivantes:

                <div class="pl-10">
                    - Dashboard: modifiez les paramètres de la base et invitez des utilisateurs supplémentaires à la base. <br>
                    - Structure : modifiez la structure de données de la base, y compris l'utilisation de variantes. <br>
                    - Content: Ajouter / modifier / supprimer du contenu de la base. <br>
                    - Use in experience: utilisez cette base dans Composer.
                </div>

                <img
                    alt="HCMS - Add new user"
                    class="pt-5"
                    :src="require('@/assets/images/projects/hcms/addUser.gif')"
                    @click="imageToExtend = 'Fei1g5x.gif'"
                />
            </div>

            <!-- Structure -->
            <div class="section-title">Structure</div>
            <div class="section-content">
                La structure permet à l'utilisateur de définir le type de contenu à utiliser dans son expérience et la manière dont il souhaite l'organiser.
                Il peut ajouter autant de composants qu'il le souhaite. Cela peut être:

                <div class="pl-10 pb-5">
                    - Un groupe: une instance unique de propriétés associées <br>
                    - Une collection: une liste d'éléments qui partageront le même ensemble de propriétés
                </div>

                <img
                    alt="HCMS - Property"
                    class="pb-3 pt-5"
                    :src="require('@/assets/images/projects/hcms/property.gif')"
                    @click="imageToExtend = 'o8poIbC.gif'"
                />

                <p>
                    <a href="https://support.intuiface.com/hc/en-us/articles/4406850589458-Property-Types" target="_blank">
                        Plus d'infos sur la liste des types de propriétés ici
                    </a>
                </p>

                <div class="py-5 font-weight-bold">La notion de variant</div>

                <p>
                    Dans sa structure, l'utilisateur peut aussi définir des variants.
                    Un Variant est un contexte qui peut modifier la valeur d'une ou plusieurs propriétés.
                    Pour chaque variation d'une variant donnée, l'utilisateur peut spécifier une nouvelle valeur pour une propriété.<br>
                    Par exemple, un variant <i>Langue</i> peut avoir comme variation: <i>Anglais</i>, <i>Français</i>, …
                </p>

                <img
                    alt="HCMS - Variant"
                    class="pb-3 pt-5"
                    :src="require('@/assets/images/projects/hcms/variant.gif')"
                    @click="imageToExtend = 't1jdb7C.gif'"
                />
            </div>

            <!-- Content -->
            <div class="section-title">Content</div>
            <div class="section-content">
                <div class="font-weight-bold pb-5">Import</div>
                <div class="pb-5">
                    Plusieurs items d'une collection peuvent être créés en une seule étape grâce à l'utilisation d'un mécanisme d'import.
                </div>

                <a href="https://support.intuiface.com/hc/en-us/articles/4417928218642-Import-content-into-a-collection" target="_blank">
                    Plus d'infos sur l'import ici
                </a>

                <div class="font-weight-bold py-5">La notion de workflow</div>

                <p>
                    La notion de workflow permet à l'utilisateur de travailler à son propre rythme, garantissant que seul le contenu terminé est mis à la disposition d'une expérience Intuiface.
                    Cela peut également être un moyen pour un utilisateur de préparer tout le contenu, de le mettre dans l'état Stage for publishing pour le faire relire ou valider par un autre utilisateur avant de le publier.
                </p>

                <img
                    alt="HCMS - Workflow"
                    class="pb-3 pt-5"
                    :src="require('@/assets/images/projects/hcms/workflow.gif')"
                    @click="imageToExtend = 'wvYM7fm.gif'"
                />

                <div></div>

                <a href="https://support.intuiface.com/hc/en-us/articles/4406850770834-Content-publication-workflow" target="_blank">
                    Plus d'infos sur la notion de workflow ici
                </a>
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

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
                    :src="require('@/assets/images/projects/apx/logo.png')"
                    @click="imageToExtend = 'MygysNL.png'"
                />
            </div>
            <!-- Présentation -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.apiExplorer.details.presentationTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.presentationContent')"
            ></div>
            <img
                alt="API Explorer"
                class="pt-3"
                :src="require('@/assets/images/projects/apx/apx.png')"
                @click="imageToExtend = 'BLELnAM.png'"
            />

            <!-- Objectif -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.apiExplorer.details.objectiveTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.objectiveContent')"
            ></div>

            <!-- Technologies -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.apiExplorer.details.technologiesTitle') }}
            </div>
            <div style="width: 400px; margin: auto">
                <img
                    alt="jQuery logo"
                    class="pb-3"
                    :src="require('@/assets/images/projects/apx/jquery.png')"
                    @click="imageToExtend = '8aGF3Vu.png'"
                />
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.technologiesContent')"
            ></div>

            <!-- Design -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.apiExplorer.details.designTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.designContent')"
            ></div>
            <img
                alt="API Explorer effet de surbrillance"
                class="pb-3 ml-10"
                :src="require('@/assets/images/projects/apx/highlight.png')"
                @click="imageToExtend = 'Y4SvFhr.png'"
            />
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.designContent2')"
            ></div>
            <div style="margin: auto" class="pt-3">
                <img
                    alt="API Explorer maquettes"
                    :src="require('@/assets/images/projects/apx/design.png')"
                    @click="imageToExtend = 's5zHoER.png'"
                />
            </div>

            <!-- Tests -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.apiExplorer.details.testsTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.testsContent')"
            ></div>

            <!-- Conclusion -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.apiExplorer.details.conclusionTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.apiExplorer.details.conclusionContent')"
            ></div>
            <img
                alt="API Explorer tutoriel"
                class="pt-3"
                :src="require('@/assets/images/projects/apx/step.png')"
                @click="imageToExtend = 'BxbbXlC.png'"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.ts';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectApiExplorer"
});
</script>

<style lang="scss" scoped>
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
</style>

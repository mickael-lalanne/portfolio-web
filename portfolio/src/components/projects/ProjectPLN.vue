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
                    @click="imageToExtend = 'KzLQUMV.png'"
                />
            </div>

            <!-- About -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.playerNextGen.details.presentationTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.playerNextGen.details.presentationContent')"
            ></div>

            <!-- Asset Youtube -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.playerNextGen.details.youtubeTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.playerNextGen.details.youtubeContent')"
            ></div>

            <img
                alt="Player Next Gen - Asset Youtube"
                class="pt-5"
                :src="require('@/assets/images/projects/player/youtube.png')"
                @click="imageToExtend = 'nnCnJHZ.png'"
            />

            <!-- Asset Linear Gauge -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.playerNextGen.details.gaugeTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.playerNextGen.details.gaugeContent')"
            ></div>

            <img
                alt="Player Next Gen - Asset Linear Gauge"
                class="pt-5"
                :src="require('@/assets/images/projects/player/linear-gauge.png')"
                @click="imageToExtend = 'pX3YbuX.png'"
            />

            <div
                class="project-section-content my-5"
                v-html="$vuetify.locale.t('$vuetify.projects.playerNextGen.details.gaugeContent2')"
            ></div>

            <img
                alt="Player Next Gen - Asset Linear Gauge"
                :src="require('@/assets/images/projects/player/linear-gauge2.png')"
                @click="imageToExtend = '0nKiH2v.png'"
            />

            <div
                class="project-section-content mt-5"
                v-html="$vuetify.locale.t('$vuetify.projects.playerNextGen.details.gaugeContent3')"
            ></div>
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
    img {
        width: 600px;
    }
}
</style>

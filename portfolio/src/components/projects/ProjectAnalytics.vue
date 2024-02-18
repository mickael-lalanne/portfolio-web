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
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.analytics.details.presentationTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.analytics.details.presentationContent')"
            ></div>
            <div style="text-align: center;" class="pt-3">
                <iframe
                    style="max-width: 100%;"
                    width="600"
                    height="337.5"
                    src="https://www.youtube.com/embed/MQQxB4HIFbc"
                ></iframe>
            </div>

            <!-- Dashboard -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.analytics.details.dashboardTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.analytics.details.dashboardContent')"
            ></div>
            <img
                alt="Dashboard"
                class="pt-3"
                :src="require('@/assets/images/projects/analytics/dashboard.png')"
                @click="imageToExtend = 'HFpIOts.png'"
            />

            <!-- Chart Editor -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.analytics.details.chartEditorTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.analytics.details.chartEditorContent')"
            ></div>
            <img
                alt="Chart Editor"
                class="pt-3"
                :src="require('@/assets/images/projects/analytics/chartEditor.png')"
                @click="imageToExtend = 'FZAamGv.png'"
            />

            <!-- Chart Template Library -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.analytics.details.templateLibraryTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.analytics.details.templateLibraryContent')"
            ></div>
            <div style="margin: auto" class="pt-3">
                <img
                    alt="Chart Template Library"
                    :src="require('@/assets/images/projects/analytics/chartTemplateLibrary.png')"
                    @click="imageToExtend = '0kI6hxv.png'"
                />
            </div>

            <!-- Partage de Dashboard -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.analytics.details.shareTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.analytics.details.shareContent')"
            ></div>
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
import { ProjectMixin } from '@/mixins/projectMixin.ts';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectAnalytics"
});
</script>

<style lang="scss" scoped>
.project-title {
    img {
        width: 600px;
    }
}
</style>

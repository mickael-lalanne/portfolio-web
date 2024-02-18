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
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.hcms.details.dashboardTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.hcms.details.dashboardContent')"
            ></div>

            <img
                alt="HCMS - Add new user"
                class="pt-5"
                :src="require('@/assets/images/projects/hcms/addUser.gif')"
                @click="imageToExtend = 'Fei1g5x.gif'"
            />

            <!-- Structure -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.hcms.details.structureTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.hcms.details.structureContent')"
            ></div>

            <img
                alt="HCMS - Property"
                class="pb-3 pt-5"
                :src="require('@/assets/images/projects/hcms/property.gif')"
                @click="imageToExtend = 'o8poIbC.gif'"
            />

            <p>
                <a href="https://support.intuiface.com/hc/en-us/articles/4406850589458-Property-Types" target="_blank">
                    {{ $vuetify.locale.t('$vuetify.projects.hcms.details.propertyDetails') }}
                </a>
            </p>

            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.hcms.details.variantTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.hcms.details.variantContent')"
            ></div>

            <img
                alt="HCMS - Variant"
                class="pb-3 pt-5"
                :src="require('@/assets/images/projects/hcms/variant.gif')"
                @click="imageToExtend = 't1jdb7C.gif'"
            />

            <!-- Content -->
            <div class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.hcms.details.contentTitle') }}
            </div>

            <div class="project-section-content">
                <div class="font-weight-bold pb-5">
                    {{ $vuetify.locale.t('$vuetify.projects.hcms.details.importTitle') }}
                </div>
                <div class="pb-5">
                    {{ $vuetify.locale.t('$vuetify.projects.hcms.details.importContent') }}
                </div>

                <a href="https://support.intuiface.com/hc/en-us/articles/4417928218642-Import-content-into-a-collection" target="_blank">
                    {{ $vuetify.locale.t('$vuetify.projects.hcms.details.importDetails') }}
                </a>

                <div class="font-weight-bold py-5">
                    {{ $vuetify.locale.t('$vuetify.projects.hcms.details.workflowTitle') }}
                </div>

                <p>
                    {{ $vuetify.locale.t('$vuetify.projects.hcms.details.workflowContent') }}
                </p>

                <img
                    alt="HCMS - Workflow"
                    class="pb-3 pt-5"
                    :src="require('@/assets/images/projects/hcms/workflow.gif')"
                    @click="imageToExtend = 'wvYM7fm.gif'"
                />

                <div></div>

                <a href="https://support.intuiface.com/hc/en-us/articles/4406850770834-Content-publication-workflow" target="_blank">
                     {{ $vuetify.locale.t('$vuetify.projects.hcms.details.workflowDetails') }}
                </a>
            </div>
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

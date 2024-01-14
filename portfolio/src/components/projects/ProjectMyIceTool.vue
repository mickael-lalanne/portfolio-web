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
                    :src="require('@/assets/images/projects/myIceTool/logoName.png')"
                    @click="imageToExtend = 'C6BPSTs.png'"
                />
            </div>
            <!-- PRESENTATION -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.presentationTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.myIceTool.details.presentationContent')"
            ></div>

            <!-- Page d'inscription -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.registrationTitle') }}
            </div>
            <img
                alt="My Ice Tool page d'accueil"
                class="pb-3"
                :src="require('@/assets/images/projects/myIceTool/home.jpg')"
                @click="imageToExtend = '8TkVFgp.jpg'"
            />
            <div class="section-content">
                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.accountVerificationTitle') }}
                </div>
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.accountVerificationContent')}}

                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.loginTitle') }}
                </div>
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.loginContent')}}
                
                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.passwordTitle') }}
                </div>
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.passwordContent')}}
            </div>

            <!-- Page principale -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.mainPageTitle') }}
            </div>
            <img
                alt="My Ice Tool page principale"
                class="pb-3"
                :src="require('@/assets/images/projects/myIceTool/main.jpg')"
                @click="imageToExtend = '78jfABU.jpg'"
            />
            <div class="section-content">
                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.apiTitle') }}
                </div>
                <span v-html="$vuetify.locale.t('$vuetify.projects.myIceTool.details.apiContent')"></span>

                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.searchTitle') }}
                </div>
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.searchContent') }}
            </div>

            <!-- Historique des températures -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.historyTitle') }}
            </div>
            <img
                alt="My Ice Tool historique"
                class="pb-3"
                :src="require('@/assets/images/projects/myIceTool/history.jpg')"
                @click="imageToExtend = 'vnyuxEx.jpg'"
            />
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.myIceTool.details.historyContent')"
            ></div>

            <!-- Commentaires -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.commentsTitle') }}
            </div>
            <img
                alt="My Ice Tool commentaires"
                class="pb-3"
                :src="require('@/assets/images/projects/myIceTool/comment.jpg')"
                @click="imageToExtend = 'tbku7yV.jpg'"
            />
            <div class="section-content">
                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.displayCommentsTitle') }}
                </div>
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.displayCommentsContent') }}

                <div class="section-content-title">
                    {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.addCommentsTitle') }}
                </div>
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.addCommentsContent') }}
            </div>

            <!-- A proos -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.myIceTool.details.about') }}
            </div>
            <img
                alt="My Ice Tool page à propos"
                class="pb-3"
                :src="require('@/assets/images/projects/myIceTool/about.jpg')"
                @click="imageToExtend = 'MiMw4FZ.jpg'"
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.ts';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectMyIceTool"
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

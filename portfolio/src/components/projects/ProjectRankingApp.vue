<template>
    <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card class="project-container ranking-app-project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />

            <!-- TITLE -->
            <div class="project-title">
                <img
                    alt="Ranking App logo"
                    :src="require('@/assets/images/projects/rankingApp/logo.png')"
                    @click="imageToExtend = 'aLJYtCt.png'"
                />
            </div>

            <img
                alt="Ranking App - Overview"
                :src="require('@/assets/images/projects/rankingApp/demo.gif')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <!-- TODO : SUMMARY -->

            <!-- In short -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortList')"
            ></div>
            <div
                class="section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortContent')"
            ></div>
            <div
                class="section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortCode')"
            ></div>

            <!-- Why -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.whyTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.whyContent')"
            ></div>

            <!-- Authentication and Image Management -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.authImageTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.authImageContent')"
            ></div>

            <div class="section-content-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.authTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.authContent')"
            ></div>
            <div class="section-content-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.imageTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.imageContent')"
            ></div>

            <!-- Responsive and UX Design -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.UiUxTitle') }}
            </div>
            <div
                class="section-content-title pt-2"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UiContent')"
            ></div>
            <img
                alt="Ranking App - Responsive"
                style="height: 375px; width: fit-content;"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/responsive.gif')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content-title pt-2 mb-2"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxContent')"
            ></div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList')"
            ></div>
            <img
                alt="Ranking App - Popup de confirmation (template)"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/confirmationTemplate.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList2')"
            ></div>
            <img
                alt="Ranking App - Popup de confirmation (tierlist)"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/confirmationTierlist.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList3')"
            ></div>
            <img
                alt="Ranking App - Loading serveur"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/fetchingLoading.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList4')"
            ></div>
            <img
                alt="Ranking App - Loading création"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/creationLoading.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList5')"
            ></div>
            <img
                alt="Ranking App - Ajout d'un tier"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/newTier.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList6')"
            ></div>
            <img
                alt="Ranking App - No tierlist message"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/noTierlistMessage.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList7')"
            ></div>
            <img
                alt="Ranking App - No template message"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/noTemplateMessage.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList8')"
            ></div>

            <!-- Tests -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.testsTitle') }}
            </div>
            <div
                class="section-content-title pt-0"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.unitTestsTitle')"
            ></div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.unitTestsContent')"
            ></div>
            <img
                alt="Ranking App - Coverage"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/coverage.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />
            <div
                class="section-content-title"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eTitle')"
            ></div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eContent')"
            ></div>
            <img
                alt="Ranking App - Mock"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/mock.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eCypressContent')"
            ></div>
            <img
                alt="Ranking App - Cypress"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/cypress.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <!-- Github Actions -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.gaTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.gaContent')"
            ></div>

            <!-- Security -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.securityTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityContent')"
            ></div>
            <div
                class="section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList')"
            ></div>
            <div
                class="section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList2')"
            ></div>
            <img
                alt="Ranking App - Access token"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/accessToken.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList3')"
            ></div>
            <div
                class="section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList4')"
            ></div>
            <div
                class="section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList5')"
            ></div>
            <img
                alt="Ranking App - Security headers before"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/securityHeadersBefore.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList6')"
            ></div>
            <img
                alt="Ranking App - Security headers after"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/securityHeadersAfter.webp')"
                @click="imageToExtend = 's0Si75U.gif'"
            />

            <!-- SSL -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.sslTitle') }}
            </div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.sslContent')"
            ></div>

            <!-- Conclusion -->
            <div class="section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionTitle') }}
            </div>
            <div
                class="section-content-title pt-4"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionSubtitle1')"
            ></div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionContent1')"
            ></div>
            <div
                class="section-content-title"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionSubtitle2')"
            ></div>
            <div
                class="section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionContent2')"
            ></div>
        </v-card>
    </v-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.ts';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectRankingApp"
});
</script>

<style lang="scss" scoped>
.project-title {
    text-align: center;
}
.section-title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    padding-top: 30px;
    padding-bottom: 15px;
}
.section-content-title {
    padding-top: 35px;
    padding-bottom: 5px;
    text-decoration: underline;
}

.ranking-app-img {
    margin-top: 5px;
    margin-bottom: 15px;
}
</style>

<style lang="scss">
.ranking-app-project-container .section-content span {
    margin-left: 25px;
}

.ranking-app-project-container .section-content code {
    background-color: black;
    color: white;
}
</style>

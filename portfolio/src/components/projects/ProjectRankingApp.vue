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
            :imgur="false"
            @close="imageToExtend = null"
        />
        <v-card class="project-container ranking-app-project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />

            <!-- TITLE -->
            <div class="project-title">
                <img
                    alt="Ranking App logo"
                    :src="require('@/assets/images/projects/rankingApp/logo.png')"
                />
            </div>

            <img
                alt="Ranking App - Overview"
                :src="require('@/assets/images/projects/rankingApp/demo.gif')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/demo.gif')"
            />

            <!-- SUMMARY -->
            <div class="summary">
                <div class="project-section-title">{{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.summary') }}</div>
                <ul class="ml-6">
                    <li class="summary-title">
                        <a @click="scrollToPart('inShort')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortTitle') }}
                        </a>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('why')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.whyTitle') }}
                        </a>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('authImage')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.authImageTitle') }}
                        </a>
                        <div class="summary-subtitle">
                            <a @click="scrollToPart('auth')">
                                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.authTitle') }}
                            </a>
                        </div>
                        <div class="summary-subtitle">
                            <a @click="scrollToPart('image')">
                                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.imageTitle') }}
                            </a>
                        </div>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('uiUx')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.UiUxTitle') }}
                        </a>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('tests')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.testsTitle') }}
                        </a>
                        <div class="summary-subtitle">
                            <a @click="scrollToPart('unitTests')">
                                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.unitTestsTitle') }}
                            </a>
                        </div>
                        <div class="summary-subtitle">
                            <a @click="scrollToPart('e2eTests')">
                                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eTitle') }}
                            </a>
                        </div>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('githubActions')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.gaTitle') }}
                        </a>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('security')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.securityTitle') }}
                        </a>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('ssl')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.sslTitle') }}
                        </a>
                    </li>
                    <li class="summary-title">
                        <a @click="scrollToPart('conclusion')">
                            {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionTitle') }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- In short -->
            <div ref="inShort" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortList')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortContent')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.inShortCode')"
            ></div>

            <!-- Why -->
            <div ref="why" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.whyTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.whyContent')"
            ></div>

            <!-- Authentication and Image Management -->
            <div ref="authImage" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.authImageTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.authImageContent')"
            ></div>

            <div ref="auth" class="project-section-content-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.authTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.authContent')"
            ></div>
            <div ref="image" class="project-section-content-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.imageTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.imageContent')"
            ></div>

            <!-- Responsive and UX Design -->
            <div ref="uiUx" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.UiUxTitle') }}
            </div>
            <div
                class="project-section-content-title pt-2"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UiContent')"
            ></div>
            <img
                alt="Ranking App - Responsive"
                style="height: 375px; width: fit-content;"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/responsive.gif')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/responsive.gif')"
            />

            <div
                class="project-section-content-title pt-2 mb-2"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxContent')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList')"
            ></div>
            <img
                alt="Ranking App - Popup de confirmation (template)"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/confirmationTemplate.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/confirmationTemplate.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList2')"
            ></div>
            <img
                alt="Ranking App - Popup de confirmation (tierlist)"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/confirmationTierlist.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/confirmationTierlist.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList3')"
            ></div>
            <img
                alt="Ranking App - Loading serveur"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/fetchingLoading.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/fetchingLoading.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList4')"
            ></div>
            <img
                alt="Ranking App - Loading création"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/creationLoading.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/creationLoading.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList5')"
            ></div>
            <img
                alt="Ranking App - Ajout d'un tier"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/newTier.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/newTier.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList6')"
            ></div>
            <img
                alt="Ranking App - No tierlist message"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/noTierlistMessage.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/noTierlistMessage.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList7')"
            ></div>
            <img
                alt="Ranking App - No template message"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/noTemplateMessage.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/noTemplateMessage.webp')"
            />

            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.UxList8')"
            ></div>

            <!-- Tests -->
            <div ref="tests" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.testsTitle') }}
            </div>
            <div
                ref="unitTests"
                class="project-section-content-title pt-0"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.unitTestsTitle')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.unitTestsContent')"
            ></div>
            <img
                alt="Ranking App - Coverage"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/coverage.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/coverage.webp')"
            />
            <div
                ref="e2eTests"
                class="project-section-content-title"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eTitle')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eContent')"
            ></div>
            <img
                alt="Ranking App - Mock"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/mock.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/mock.webp')"
            />
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.e2eCypressContent')"
            ></div>
            <img
                alt="Ranking App - Cypress"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/cypress.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/cypress.webp')"
            />

            <!-- Github Actions -->
            <div ref="githubActions" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.gaTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.gaContent')"
            ></div>

            <!-- Security -->
            <div ref="security" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.securityTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityContent')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList2')"
            ></div>
            <img
                alt="Ranking App - Access token"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/accessToken.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/accessToken.webp')"
            />
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList3')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList4')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList5')"
            ></div>
            <img
                alt="Ranking App - Security headers before"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/securityHeadersBefore.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/securityHeadersBefore.webp')"
            />
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.securityList6')"
            ></div>
            <img
                alt="Ranking App - Security headers after"
                class="ranking-app-img"
                :src="require('@/assets/images/projects/rankingApp/securityHeadersAfter.webp')"
                @click="imageToExtend = require('@/assets/images/projects/rankingApp/securityHeadersAfter.webp')"
            />

            <!-- SSL -->
            <div ref="ssl" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.sslTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.sslContent')"
            ></div>

            <!-- Conclusion -->
            <div ref="conclusion" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionTitle') }}
            </div>
            <div
                class="project-section-content-title pt-4"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionSubtitle1')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionContent1')"
            ></div>
            <div
                class="project-section-content-title"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionSubtitle2')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.rankingApp.details.conclusionContent2')"
            ></div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectRankingApp",
    methods: {
        scrollToPart: function(ref: string) {
            this.$refs[ref].scrollIntoView();
        },
    }
});
</script>

<style lang="scss" scoped>
.ranking-app-project-container {
    scroll-behavior: smooth;
}

.ranking-app-img {
    margin-top: 5px;
    margin-bottom: 15px;
}

.summary {
    .summary-subtitle {
        margin-left: 30px;
    }
}
</style>

<style lang="scss">
.ranking-app-project-container .project-section-content span {
    margin-left: 25px;
}

.ranking-app-project-container .project-section-content code {
    background-color: black;
    color: white;
}
</style>

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
        <v-card class="project-container kaisen-workout-project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />

            <!-- TITLE -->
            <div class="project-title">
                <img
                    alt="Kaisen Workout logo"
                    :src="require('@/assets/images/projects/kaisenWorkout/logo.png')"
                />
            </div>

            <div class="header-container d-flex align-center justify-center mt-4">
                <img
                    alt="Kaisen Workout - Overview"
                    :src="require('@/assets/images/projects/kaisenWorkout/demo.gif')"
                    @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/demo.gif')"
                    style=" margin-right: 15px;"
                />

                <!-- SUMMARY -->
                <div class="summary">
                    <div class="project-section-title">{{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.summary') }}</div>
                    <ul class="ml-6">
                        <li class="summary-title">
                            <a @click="scrollToPart('inShort')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.inShortTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('what')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.whatTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('architecture')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.architectureTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('program')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.programTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('workout')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.workoutTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('progression')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.progressionTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('preferences')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.preferencesTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('copilot')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.copilotTitle') }}
                            </a>
                        </li>
                        <li class="summary-title">
                            <a @click="scrollToPart('conclusion')">
                                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.conclusionTitle') }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- In short -->
            <div ref="inShort" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.inShortTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.inShortList')"
            ></div>
            <div
                class="project-section-content mt-6"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.inShortContent')"
            ></div>

            <!-- What -->
            <div ref="what" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.whatTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.whatContent')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.whatList')"
            ></div>

            <!-- Architecture -->
            <div ref="architecture" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.architectureTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.architectureContent')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.architectureContent2')"
            ></div>
            <img
                alt="Kaisen Workout - Architecture"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/architecture.png')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/architecture.png')"
            />

            <!-- Program -->
            <div ref="program" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.programTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.programContent')"
            ></div>
            <img
                alt="Kaisen Workout - Program"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/program.webp')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/program.webp')"
            />

            <!-- Workout -->
            <div ref="workout" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.workoutTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.workoutContent')"
            ></div>
            <img
                alt="Kaisen Workout - Last session code"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/lastSessionCode.png')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/lastSessionCode.png')"
            />
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.workoutContent2')"
            ></div>
            <img
                alt="Kaisen Workout - Last rep code"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/lastRepCode.png')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/lastRepCode.png')"
            />
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.workoutContent3')"
            ></div>
            <img
                alt="Kaisen Workout - Workout"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/workout.webp')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/workout.webp')"
            />

            <!-- Progression -->
            <div ref="progression" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.progressionTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.progressionContent')"
            ></div>
            <img
                alt="Kaisen Workout - Progression"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/progression.webp')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/progression.webp')"
            />

            <!-- Preferences -->
            <div ref="preferences" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.preferencesTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.preferencesContent')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.preferencesList')"
            ></div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.preferencesContent2')"
            ></div>
            <img
                alt="Kaisen Workout - Preferences"
                class="kaisen-workout-img"
                :src="require('@/assets/images/projects/kaisenWorkout/preferences.webp')"
                @click="imageToExtend = require('@/assets/images/projects/kaisenWorkout/preferences.webp')"
            />

            <!-- Copilot -->
            <div ref="copilot" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.copilotTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.copilotContent')"
            ></div>

            <!-- Conclusion -->
            <div ref="conclusion" class="project-section-title">
                {{ $vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.conclusionTitle') }}
            </div>
            <div
                class="project-section-content"
                v-html="$vuetify.locale.t('$vuetify.projects.kaisenWorkout.details.conclusionContent')"
            ></div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectKaisenWorkout",
    methods: {
        scrollToPart: function(ref: string) {
            this.$refs[ref].scrollIntoView();
        },
    }
});
</script>

<style lang="scss" scoped>
.kaisen-workout-project-container {
    scroll-behavior: smooth;

    img {
        max-height: 500px;
        object-fit: contain;
        margin-block: 10px;
    }
}

.summary {
    .summary-subtitle {
        margin-left: 30px;
    }
}

// RESPONSIVE
@media (max-width: 500px) {
    .header-container {
        flex-direction: column;
    }
}
</style>

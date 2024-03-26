<template>
    <div class="project-preview-container">
        <div class="project-left">
            <div class="project-preview-title d-flex align-center">
                <img
                    v-if="pinned"
                    class="mr-2"
                    :src="require('@/assets/images/mario/star.png')"
                />
                <span>{{ title }} <span class="project-date">- {{ date }}</span></span>
                
            </div>
            <div
                class="project-description"
                :style="`white-space: ${windowWidth > 700 ? 'pre-line' : 'normal'};`"
                v-html="windowWidth > 700 ? description : resume"
            ></div>
            <!-- By default, the link open a new dialog to see more details -->
            <div v-if="!this.$slots.projectLink" class="project-link" @click="showDialog = true">
                {{ $vuetify.locale.t('$vuetify.projects.detail') }}
            </div>
            <!-- Otherwise, display custom link -->
            <div v-else class="project-link">
                <slot name="projectLink" class="project-link"></slot>
            </div>
            <div class="skills-container">
                <div
                    v-for="skill in skills"
                    :key="skill"
                    class="skill-container"
                >
                    <img
                        alt="Check icone"
                        class="skill-icon"
                        :src="require('@/assets/images/check.png')"
                    />
                    {{ $vuetify.locale.t(skill) }}
                </div>
            </div>
        </div>
        <div>
            <img
                :alt="`Image de preview ${imgName}`"
                class="project-img"
                :src="require(`@/assets/images/${imgName}`)"
            />
        </div>
        <component
            :is="dialogComponent"
            :showDialog="showDialog"
            @close="showDialog = false"
        ></component>
    </div>
</template>

<script>
import ProjectAnalytics from "@/components/projects/ProjectAnalytics.vue";
import ProjectApiExplorer from "@/components/projects/ProjectApiExplorer.vue";
import ProjectMyIceTool from "@/components/projects/ProjectMyIceTool.vue";
import ProjectHCMS from "@/components/projects/ProjectHCMS.vue";
import ProjectPLN from "@/components/projects/ProjectPLN.vue";
import ProjectRankingApp from "@/components/projects/ProjectRankingApp.vue";
import ProjectKaisenWorkout from "@/components/projects/ProjectKaisenWorkout.vue";

export default {
    name: "ProjectPreview",
    components: {
        ProjectAnalytics,
        ProjectApiExplorer,
        ProjectMyIceTool,
        ProjectHCMS,
        ProjectPLN,
        ProjectRankingApp,
        ProjectKaisenWorkout,
    },
    props: {
        title: { type: String },
        description: { type: String },
        resume: { type: String },
        imgName: { type: String },
        skills: { type: Array },
        dialogComponent: { type: String },
        date: { type: String },
        pinned: { type: Number },
        windowWidth: { type: Number },
    },
    data: () => ({
        showDialog: false,
    }),
};
</script>

<style lang="scss" scoped>
.project-preview-container {
    display: flex;
    color: white;
    align-items: center;
    justify-content: flex-start;
    min-width: 100%;
    transform: rotateX(180deg);
    scroll-snap-align: center;
    padding-inline: 15px;
    height: 500px;
}
.project-left {
    width: 80%;
    max-width: 770px;
    margin-right: 50px;
}
.project-preview-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 15px;
    padding-top: 20px;
}
.project-date {
    color: rgb(var(--v-theme-primary));
    font-size: 20px;
    font-weight: normal;
    margin-left: 15px;
    font-family: Roboto;
    font-style: italic;
    white-space: nowrap;
    padding-top: 13px;
}
.project-description {
    margin-bottom: 15px;
    font-size: 15px;
    text-align: justify;
}
.project-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    padding: 7.5px 0;
    color: rgb(var(--v-theme-primary));
    font-weight: bold;
    border: 1px solid rgb(var(--v-theme-primary));
    text-align: center;
    &:hover {
        background-color: rgb(var(--v-theme-primary));
        border-color: white;
        color: white;
        a {
            color: white !important;
        }
    }
}
.project-img {
    display: block;
    max-width: 80vw;
    width: 800px;
    height: auto;
    border: 2px solid white;
    pointer-events: none;
}
.skills-container {
    margin-top: 20px;
}
.skill-container {
    display: flex;
    align-items: center;
}
.skill-icon {
    width: 25px;
    height: 100%;
    padding-right: 5px;
}

// RESPONSIVE

// Devices under 1600px
@media (max-width: 1599px) {
    .project-preview-container {
        flex-direction: column !important;
    }
    .project-img {
        margin-top: 50px;
    }
    .project-left {
        margin: 0px 0px;
        min-width: 95%;
    }
}
// Small devices (landscape phones, max 576px and less)
@media (max-width: 576px) {
    .project-img {
        max-width: 100%;
    }
    .project-preview-container {
        height: inherit;
    }
    .project-preview-title {
        font-size: 25px;
        padding-top: 15px;
        span {
            padding-top: 5px;
        }
    }
    .project-date {
        font-size: 14px;
        margin-left: 10px;
    }
}
@media (max-width: 1700px) {
    .project-preview-container {
        height: unset;
    }
}
</style>

<style lang="scss">

.project-preview-container .project-description a {
    color: rgb(var(--v-theme-secondary));
    text-decoration: none;
    &:hover {
        color: rgb(var(--v-theme-primary));
    }
}
</style>
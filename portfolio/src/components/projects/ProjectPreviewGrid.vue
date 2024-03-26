<template>
    <div
        class="project-preview-container"
        @click="onProjectClick"
    >
        <img v-if="pinned" class="project-preview-pinned" :src="require('@/assets/images/mario/star.png')"/>
        <div class="project-preview-title">{{ title }}</div>
        <div class="project-preview-date">{{ date }}</div>
        <div class="project-preview-resume" v-html="resume"></div>
        <v-spacer></v-spacer>
        <div class="hover-background"></div>
        <img
            :alt="`Image de preview ${imgName}`"
            class="project-img"
            :src="require(`@/assets/images/${imgName}`)"
        />
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
    name: "ProjectPreviewGrid",
    components: {
        ProjectAnalytics,
        ProjectApiExplorer,
        ProjectMyIceTool,
        ProjectHCMS,
        ProjectPLN,
        ProjectRankingApp,
        ProjectKaisenWorkout
    },
    props: {
        title: { type: String },
        resume: { type: String },
        imgName: { type: String },
        dialogComponent: { type: String },
        projectLink: { type: String },
        date: { type: String },
        pinned: { type: Number }
    },
    data: () => ({
        showDialog: false,
    }),
    methods: {
        onProjectClick() {
            if (this.dialogComponent) {
                this.showDialog = true
            }

            if (this.projectLink) {
                window.open(this.projectLink, '_blank').focus()
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.project-preview-container {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    width: 350px;
    aspect-ratio: 1;
    margin: 20px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 500ms;
    transition-property: transform;
    background-color: rgb(var(--v-theme-dark));
    &:hover {
        transform: scale(1.05);
        border-width: 1.5px;
        border-color: rgb(var(--v-theme-primary));
        .hover-background {
            top: 0;
            visibility: visible;
        }
        .project-preview-title {
            text-shadow: 0 0 10px white;
        }
        .project-preview-resume {
            visibility: visible;
            height: 100px;
        }
    }
}
.project-preview-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    padding: 0 50px;
    z-index: 1;
}
.project-preview-date {
    position: absolute;
    top: 0;
    right: 0;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    padding: 7px;
    border-bottom-left-radius: 10px;
}
.project-preview-pinned {
    position: absolute;
    left: 10px;
    top: 10px;
}
.project-preview-resume {
    padding: 0 15px 15px 15px;
    font-size: 14px;
    height: 0;
    visibility: hidden;
    z-index: 1;
    transition: height 500ms ease;
}
.project-img {
    display: block;
    width: 100%;
    border-top: 1px solid white;
    z-index: 1;
    height: 174px;
    object-fit: cover;
}
.hover-background {
    background: rgb(var(--v-theme-primary));
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 180px;
    visibility: hidden;
    transition-duration: 500ms;
    transition-property: top;
}

// Small devices (landscape phones, max 576px and less)
@media (max-width: 576px) {
    .project-preview-container {
        margin: 20px 5px;
    }
    .project-preview-title {
        padding: 0 10px;
    }
}
</style>

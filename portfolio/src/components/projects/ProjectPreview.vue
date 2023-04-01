<template>
    <div
        class="project-preview-container"
        :style="`flex-direction: ${reverse ? 'row-reverse' : 'row'}`"
    >
        <div class="project-left">
            <div class="project-preview-title">{{ title }}</div>
            <div class="project-description" v-html="description"></div>
            <!-- By default, the link open a new dialog to see more details -->
            <div v-if="!this.$slots.projectLink" class="project-link" @click="showDialog = true">DÉTAIL</div>
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
                    {{ skill }}
                </div>
            </div>
        </div>
        <div>
            <img
                :alt="`Image de preview ${imgName}`"
                class="project-img"
                :src="require(`@/assets/images/${imgName}.png`)"
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

export default {
    name: "ProjectPreview",
    components: {
        ProjectAnalytics,
        ProjectApiExplorer,
        ProjectMyIceTool,
        ProjectHCMS,
        ProjectPLN
    },
    props: {
        title: { type: String },
        description: { type: String },
        imgName: { type: String },
        skills: { type: Array },
        reverse: { type: Boolean },
        dialogComponent: { type: String },
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
    justify-content: center;
}
.project-left {
    width: 80%;
    max-width: 770px;
    margin: 0px 50px;
}
.project-preview-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 15px;
}
.project-description {
    margin-bottom: 10px;
    font-size: 20px;
    text-align: justify;
    white-space: pre-line;
}
.project-link {
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
    padding-top: 10px;
    color: rgb(var(--v-theme-primary));
    font-weight: bold;
}
.project-img {
    display: block;
    max-width: 80vw;
    width: 800px;
    height: 100%;
    border: 2px solid white;
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
        width: 100%;
    }
}
// Small devices (landscape phones, max 576px and less)
@media (max-width: 576px) {
    .project-img {
        max-width: 95vw;
    }
}
</style>

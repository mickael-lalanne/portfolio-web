<template>
    <div
        class="project-preview-container"
        :style="`flex-direction: ${reverse ? 'row-reverse' : 'row'}`"
    >
        <div class="project-left">
            <div class="project-title">{{ title }}</div>
            <div class="project-description">{{ description }}</div>
            <div class="project-link" @click="showDialog = true">DÉTAIL</div>
            <!-- <div class="project-link">LIEN VERS LE SITE</div> -->
            <div class="skills-container">
                <div
                    v-for="skill in skills"
                    :key="skill"
                    class="skill-container"
                >
                    <img class="skill-icon" src="@/assets/images/check.png" />
                    {{ skill }}
                </div>
            </div>
        </div>
        <div>
            <img
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

export default {
    name: "ProjectPreview",
    components: {
        ProjectAnalytics,
        ProjectApiExplorer,
        ProjectMyIceTool
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
.project-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 15px;
}
.project-description {
    margin-bottom: 10px;
    font-size: 20px;
    text-align: justify;
}
.project-link {
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
    padding-top: 10px;
    color: var(--v-primary-base);
}
.project-img {
    display: block;
    max-width: 80vw;
    width: 800px;
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
    margin-top: 5px;
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
}
</style>

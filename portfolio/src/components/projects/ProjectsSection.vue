<template>
    <div id="projects" class="all-projects-container">
        <h2 class="section-title">{{ $vuetify.locale.t('$vuetify.projects.title') }}</h2>
        <div class="title-separator"></div>

        <!-- FILTERING -->
        <ProjectFiltering
            :viewMode="viewMode"
            @viewModeChange="newViewMode => viewMode = newViewMode"
            @typeChange="newTypes => projectTypes = newTypes"
            @searchChange="newSearch => searchFilter = newSearch"
        ></ProjectFiltering>

        <!-- NO PROJECT MESSAGE -->
        <div
            v-if="filteredProjects.length === 0 || soLongAnimation"
            style="position: relative"
        >
            <div
                class="no-project-container d-flex align-center"
                :class="{ 'no-project-out-animation': soLongAnimation }"
            >
                <img
                    alt="Sad Mario Logo"
                    class="mx-5"
                    :src="require('@/assets/images/sadMario.png')"
                />
                <div>
                    <div class="no-project-title">
                        {{ $vuetify.locale.t('$vuetify.projects.noProject.title') }}
                    </div>
                    <div class="no-project-subtitle">
                        {{ $vuetify.locale.t('$vuetify.projects.noProject.subtitle') }}
                    </div>
                </div>
            </div>
            <img
                v-if="showMarioHammerAnimation"
                id="marioHammerAnimation"
                alt="Mario animation"
                class="mario-animation-img"
                :src="require('@/assets/images/marioHammer.gif')"
            />
        </div>

        <!-- PROJECTS -->
        <div v-if="viewMode === EViewMode.line">
        <!-- <div v-if="false"> -->
            <ProjectPreview
                v-for="(project, i) in filteredProjects"
                :key="i"
                :reverse="!!(i % 2)"
                :title="$vuetify.locale.t(project.title)"
                :description="$vuetify.locale.t(project.description)"
                :skills="project.skills"
                :imgName="project.imgName"
                :dialogComponent="project.dialogComponent"
            >
                <template v-slot:projectLink v-if="project.projectLink">
                    <a :href="project.projectLink" target="_blank" style="color: rgb(var(--v-theme-primary));">
                        {{ $vuetify.locale.t(project.projectLinkText!) }}
                    </a>
                </template>

                <template v-slot:append>
                    <v-divider class="project-divider"></v-divider>
                </template>
            </ProjectPreview>
        </div>
        <!-- <div v-else class="grid-view-container"> -->
        <div v-else-if="true === false" class="grid-view-container">
            <ProjectPreviewGrid
                v-for="(project, i) in filteredProjects"
                :key="i"
                :title="$vuetify.locale.t(project.title)"
                :resume="$vuetify.locale.t(project.resume)"
                :imgName="project.imgName"
                :dialogComponent="project.dialogComponent"
                :project-link="project.projectLink"
            >
                <template v-slot:projectLink v-if="project.projectLink">
                    <a :href="project.projectLink" target="_blank" style="color: rgb(var(--v-theme-primary));">
                        {{ $vuetify.locale.t(project.projectLinkText!) }}
                    </a>
                </template>

                <template v-slot:append>
                    <v-divider class="project-divider"></v-divider>
                </template>
            </ProjectPreviewGrid>
        </div>
    </div>
</template>

<script lang="ts">
import ProjectPreview from "@/components/projects/ProjectPreview.vue";
import ProjectPreviewGrid from "@/components/projects/ProjectPreviewGrid.vue";
import ProjectFiltering from "@/components/projects/ProjectFiltering.vue";
import { EProjectType, Project, EViewMode, DEFAULT_TYPES } from "@/models/Project";
import { PROJECTS } from './projectsList';

export default {
    name: "ProjectsSection",
    components: { ProjectPreview, ProjectPreviewGrid, ProjectFiltering },
    computed: {
        filteredProjects(): Project[] {
            let filteredProjects: Project[] = PROJECTS.slice();
            const filter: string = this.searchFilter?.toLowerCase();

            return filteredProjects.filter(p => 
                // Filter by text
                (
                    !filter ||
                    p.tags.some(tag => tag.includes(filter)) ||
                    this.$vuetify.locale.t(p.title).toLowerCase().includes(filter)
                ) &&
                // Filter by type (personal, professional, student)
                this.projectTypes.includes(p.type)
            );
        },
    },
    watch: {
        filteredProjects: function(newFilters: Project[], oldFilters: Project[]) {
            if (oldFilters && oldFilters.length > 0 && newFilters.length === 0) {
                new Audio(require('@/assets/sounds/oof.mp3')).play();
            }
            else if (oldFilters && oldFilters.length === 0 && newFilters.length > 0) {
                this.soLongAnimation = true;
                this.showMarioHammerAnimation = true;

                // Play "So long" sound
                new Audio(require('@/assets/sounds/soLong.mp3')).play();

                // Hide and reset Mario GIF animation 
                setTimeout(() => {
                    this.showMarioHammerAnimation = false;
                    const marioHammerImage: HTMLImageElement = document.getElementById('marioHammerAnimation') as HTMLImageElement;
                    marioHammerImage.src = '' + marioHammerImage.src;
                }, 1800);

                // Reset the "So long" animation
                setTimeout(() => {
                    this.soLongAnimation = false;
                }, 4000);
            }
        }
    },
    data: () => ({
        EViewMode: EViewMode,
        searchFilter: '' as string,
        viewMode: EViewMode.line as EViewMode,
        projectTypes: DEFAULT_TYPES as EProjectType[],
        technologies: ['Front-end', 'Back-end', 'Full-stack'],
        sortOptions: ['Date', 'Alphabetical'],
        soLongAnimation: false as boolean,
        showMarioHammerAnimation: false as boolean
    }),
};
</script>

<style lang="scss" scoped>
.all-projects-container {
    background-color: #1a1c20;
    padding: 100px 5%;
    padding-top: 70px;
}
.section-title {
    color: rgb(var(--v-theme-primary));
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}
.project-divider {
    opacity: 100;
    color: white;
    margin: 7vh 0;
}
.title-separator {
    width: 100px;
    height: 4px;
    background-color:rgb(var(--v-theme-primary));
    text-align: center;
    margin: auto;
    margin-bottom: 30px;
}

.no-project-container {
    width: fit-content;
    padding: 50px;
    background-color: #fcf1f1;
    border-radius: 5px;
    position: relative;
    .no-project-title {
        font-size: 22px;
        font-weight: 700;
    }
}

.grid-view-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

// So long animation
@keyframes soLongAnimation {
  0%   {}
  25%  {
    transform: translate(0, 0) rotate3d(0, 0, 0, 0);
  }
  100%  {
    transform: translate(100vw, -100vh) rotate3d(0, 1, 0.5, 15rad);
  }
}

.mario-animation-img {
    position: absolute;
    bottom: -52px;
    left: -62px;
}

.no-project-out-animation {
    animation-name: soLongAnimation;
    animation-duration: 4s;
}

// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .no-project-container {
        flex-direction: column;
        .no-project-title {
            margin-top: 10px;
            margin-bottom: 5px;
        }
    }
}
@media (max-width: 400px) {
    .no-project-container {
        padding: 20px;
    }
}
</style>

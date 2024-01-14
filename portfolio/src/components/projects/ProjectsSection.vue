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
        >

        </ProjectFiltering>

        <!-- PROJECTS -->
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

        <!-- NO PROJECT MESSAGE -->
        <div
            v-if="filteredProjects.length === 0"
            class="no-project-container d-flex align-center"
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
    </div>
</template>

<script lang="ts">
import ProjectPreview from "@/components/projects/ProjectPreview.vue";
import ProjectFiltering from "@/components/projects/ProjectFiltering.vue";
import { EProjectType, Project, EViewMode, DEFAULT_TYPES } from "@/models/Project";
import { PROJECTS } from './projectsList';

export default {
    name: "ProjectsSection",
    components: { ProjectPreview, ProjectFiltering },
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
    data: () => ({
        EViewMode: EViewMode,
        searchFilter: '' as string,
        viewMode: EViewMode.line as EViewMode,
        projectTypes: DEFAULT_TYPES as EProjectType[],
        technologies: ['Front-end', 'Back-end', 'Full-stack'],
        sortOptions: ['Date', 'Alphabetical']
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
    .no-project-title {
        font-size: 22px;
        font-weight: 700;
    }
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

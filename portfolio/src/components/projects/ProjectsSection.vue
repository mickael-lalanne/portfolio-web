<template>
    <div id="projects" class="all-projects-container">
        <h2 class="section-title">{{ $vuetify.locale.t('$vuetify.projects.title') }}</h2>
        <div class="title-separator"></div>

        <!-- FILTERING -->
        <div class="projects-filtering">
            <v-text-field
                v-model="searchFilter"
                :label="$vuetify.locale.t('$vuetify.projects.filtering.searchLabel')"
                :placeholder="$vuetify.locale.t('$vuetify.projects.filtering.searchPlaceholder')"
                persistent-placeholder
                color="primary"
                variant="underlined"
                class="text-white search-field"
                clearable
            ></v-text-field>
            <v-select
                chips
                :label="$vuetify.locale.t('$vuetify.projects.filtering.typeLabel')"
                :items="projectTypes"
                v-model="projectTypesValues"
                class="text-white project-types-select"
                multiple
            >
                <template v-slot:chip="{ item }">
                    <v-chip>{{ $vuetify.locale.t(item.value) }}</v-chip>
                </template>

                <template v-slot:item="{ item, props }">
                    <v-list-item v-bind="props" title="">
                        {{ $vuetify.locale.t(item.value) }}

                        <template v-slot:prepend="{ isSelected }">
                            <v-checkbox :model-value="isSelected" hide-details></v-checkbox>
                        </template>
                    </v-list-item>
                </template>
            </v-select>
            <v-spacer></v-spacer>
            <div class="view-mode">
                <!-- Grid -->
                <v-btn
                    variant="text"
                    icon="mdi-view-grid"
                    :color="viewMode === EViewMode.grid ? 'primary' : 'white'"
                    @click="viewMode = EViewMode.grid"
                ></v-btn>
                <!-- Line -->
                <v-btn
                    variant="text"
                    icon="mdi-view-headline"
                    :color="viewMode === EViewMode.line ? 'primary' : 'white'"
                    @click="viewMode = EViewMode.line"
                ></v-btn>
            </div>
        </div>

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
import { PROJECTS, Project, EProjectType } from './projectsList';

const DEFAULT_TYPES: EProjectType[] = [
    EProjectType.personal,
    EProjectType.professional,
    EProjectType.student
];

enum EViewMode {
    line = 'line',
    grid = 'grid'
};

export default {
    name: "ProjectsSection",
    components: { ProjectPreview },
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
                this.projectTypesValues.includes(p.type)
            );
        },
    },
    data: () => ({
        EViewMode: EViewMode,
        searchFilter: '',
        viewMode: EViewMode.line as EViewMode,
        projectTypes: DEFAULT_TYPES as EProjectType[],
        projectTypesValues: DEFAULT_TYPES as EProjectType[],
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

.projects-filtering {
    display: flex;
    align-items: flex-end;
    margin-bottom: 65px;
    .search-field {
        margin-right: 20px;
        max-width: 300px;
    }
    .project-types-select {
        max-width: 315px;
        width: 315px;
        min-height: 82px;
    }
    .view-mode {
        align-self: baseline;
        margin-top: 8px;
    }
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
    .projects-filtering {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
        .search-field {
            margin-right: 0;
            max-width: unset;
            width: 100%;
            margin-bottom: 8px;
        }
        .project-types-select {
            max-width: unset;
            width: 100%;
            min-height: 82px;
        }
        .view-mode {
            margin-top: 0;
        }
    }
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

<style lang="scss">
.projects-filtering {
    .project-types-select .v-input__control {
        height: 60px;
    }
}
</style>

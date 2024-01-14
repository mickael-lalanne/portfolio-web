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
                item-title="hey"
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
                    :color="viewMode === 'grid' ? 'primary' : 'white'"
                    @click="viewMode = 'grid'"
                ></v-btn>
                <!-- Line -->
                <v-btn
                    variant="text"
                    icon="mdi-view-headline"
                    :color="viewMode === 'line' ? 'primary' : 'white'"
                    @click="viewMode = 'line'"
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
                <a :href="project.projectLink" target="_blank" style="color: rgb(var(--v-theme-primary));">{{ project.projectLinkText}}</a>
            </template>

            <template v-slot:append>
                <v-divider class="project-divider"></v-divider>
            </template>
        </ProjectPreview>
    </div>
</template>

<script>
import ProjectPreview from "@/components/projects/ProjectPreview.vue";
import { PROJECTS } from './projectsList.js';

const DEFAULT_TYPES = [
    '$vuetify.projects.filtering.types.personal',
    '$vuetify.projects.filtering.types.professional',
    '$vuetify.projects.filtering.types.student'
];

export default {
    name: "ProjectsSection",
    components: { ProjectPreview },
    computed: {
        filteredProjects: function() {
            const projects = PROJECTS;

            return projects;
        },
    },
    data: () => ({
        searchFilter: '',
        viewMode: 'line',
        projectTypes: DEFAULT_TYPES,
        projectTypesValues: DEFAULT_TYPES,
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
</style>
<style lang="scss">
.projects-filtering {
    .project-types-select .v-input__control {
        height: 60px;
    }
}
</style>

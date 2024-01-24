<template>
    <div id="projects" class="all-projects-container bg-grid-effect">
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
            style="position: relative; width: 100%;"
        >
            <div
                class="no-project-container d-flex align-center"
                :class="{
                    'no-project-out-animation': soLongAnimation,
                    'no-project-in-animation': !soLongAnimation
                }"
            >
                <img
                    alt="Sad Mario Logo"
                    class="mx-5 sad-mario-img"
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
        <!-- Used to simulate a translate animation for project in animation -->
        <div
            v-if="filteredProjects.length === 0 || soLongAnimation"
            class="no-project-spacer"
            :class="{ 'no-project-spacer-out': soLongAnimation }"
        ></div>

        <!-- PROJECTS -->
        <div
            v-if="viewMode === EViewMode.line"
            :class="{ 'projects-in-animation': soLongAnimation }"
            class="line-view-container"
        >
            <div class="pagination-container">
                <v-btn
                    v-show="filteredProjects.length > 0 && projectPosition > 0"
                    variant="text"
                    icon="mdi-arrow-left-thin"
                    color="primary"
                    @click="scrollToProject(projectPosition - 1)"
                ></v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    v-show="filteredProjects.length > 0 && projectPosition < filteredProjects.length - 1"
                    variant="text"
                    icon="mdi-arrow-right-thin"
                    color="primary"
                    @click="scrollToProject(projectPosition + 1)"
                ></v-btn>
            </div>
            <div class="line-view-projects-container" ref="lineModeContainer">
                <ProjectPreview
                    v-for="(project, i) in filteredProjects"
                    :key="i"
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
                </ProjectPreview>
            </div>
        </div>
        <div v-else class="grid-view-container" :class="{ 'projects-in-animation': soLongAnimation }">
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
        viewMode: function(newMode: EViewMode) {
            // As the line mode HTML container is deleted when switching mode
            // The scroll event is not longer called
            // So we have to to create an event listener again 
            if (newMode === EViewMode.line) {
                setTimeout(() => {
                    this.$refs.lineModeContainer
                        .addEventListener('scroll', this.determineProjectPosition);
                    this.determineProjectPosition();
                }, 100);
            } else {
                this.$refs.lineModeContainer
                    .removeEventListener('scroll', this.determineProjectPosition);
            }
        },
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
                    if (marioHammerImage) {
                        marioHammerImage.src = '' + marioHammerImage.src;
                    }
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
        showMarioHammerAnimation: false as boolean,
        projectPosition: 0 as number
    }),
    mounted: function() {
        this.$refs.lineModeContainer
            .addEventListener('scroll', this.determineProjectPosition );
    },
    beforeDestroy() { 
        this.$refs.lineModeContainer
            .removeEventListener('scroll', this.determineProjectPosition);
    },
    methods: {
        /**
         * Called when scrolling in the project section
         * Determine the current position to know if we have to display the arrow buttons or not
         */
        determineProjectPosition(): void {
            const containerElt: HTMLElement = this.$refs.lineModeContainer;
            const scrollPercentage: number = containerElt.scrollLeft / containerElt.scrollWidth;
            this.projectPosition = Math.round(scrollPercentage * this.filteredProjects.length);
        },
        /**
         * Called when the next or previous arrow button has been clicked
         * Scroll the projects section the desired project
         * @param {number} targetProject project to scroll to
         */
        scrollToProject(targetProject: number): void {
            const containerElt: HTMLElement = this.$refs.lineModeContainer;
            const targetPercentage: number = targetProject / this.filteredProjects.length;
            const targetPosition: number = targetPercentage * containerElt.scrollWidth;
            containerElt.scrollLeft = targetPosition;
        }
    }
};
</script>

<style lang="scss" scoped>
$no-project-height: 325px;
$no-project-margin: 25px;
$project-preview-height: 935px;
$arrow-separator-height: 100px;
.all-projects-container {
    background-color: rgb(var(--v-theme-dark));
    padding-inline: 5%;
    padding-top: 70px;
    overflow: hidden;
    position: relative;
    padding-bottom: calc(#{$arrow-separator-height} + 50px);
    clip-path: polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0);
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
    background-color:rgb(var(--v-theme-light));
    border-radius: 5px;
    position: absolute;
    height: $no-project-height;
    margin-top: $no-project-margin;
    .no-project-title {
        font-size: 22px;
        font-weight: 700;
    }
    .sad-mario-img {
        min-height: 0;
    }
}
.no-project-spacer {
    height: $no-project-height;
}
.line-view-projects-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    transform: rotateX(180deg);
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        height: 2px;
    }
    &::-webkit-scrollbar-track:horizontal {
        background-color: white;
    }
}
.pagination-container {
    display: flex;
    justify-content: space-between;
}

.grid-view-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

/************************
       ANIMATIONS
************************/
@keyframes oofAnimation {
    0% {
        opacity: 0;
        transform: translateX(-2000px);
    }
    60% {
        opacity: 1;
        transform: translateX(30px);
    }
    80% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}
@keyframes soLongAnimation {
    25% {
        transform: translate(0, 0) rotate3d(0, 0, 0, 0);
    }
    100% {
        transform: translate(100vw, -100vh) rotate3d(0, 1, 0.5, 15rad);
    }
}

@keyframes showProjectsAnimation {
    0% {
        opacity: 0;
        max-height: 0;
    }
    70% { opacity: 1;}
    100% {
        opacity: 1;
        max-height: 10000px;
    }
}

@keyframes noProjectOutAnimation {
    0% { height: $no-project-height; }
    30% { height: $no-project-height; }
    70% { height: 0; }
    100% { height: 0; }
}

.no-project-out-animation {
    animation-name: soLongAnimation;
    animation-duration: 4s;
}
.no-project-in-animation {
    animation-name: oofAnimation;
    animation-duration: 1s;
}
.projects-in-animation {
    animation-name: showProjectsAnimation;
    animation-duration: 3s;
    animation-delay: 1s;
    max-height: 0;
    opacity: 0;
}
.no-project-spacer-out {
    animation-name: noProjectOutAnimation;
    animation-duration: 4s;
}


.mario-animation-img {
    position: absolute;
    top: 252px;
    left: -62px;
}

// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .all-projects-container {
        clip-path: polygon(100% 0, 100% 96.5%, 50% 100%, 0 96.5%, 0 0);
        padding-bottom: calc(#{$arrow-separator-height} + 0px);
    }
    .no-project-container {
        flex-direction: column;
        padding: 20px;
        .no-project-title {
            margin-top: 10px;
            margin-bottom: 5px;
        }
    }
}
</style>

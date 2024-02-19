<template>
    <div
        id="projects"
        class="all-projects-container bg-grid-effect"
        :class="{ 'all-projects-container-line-view': viewMode === EViewMode.line }"
    >
        <GlitchText class="mb-6" :text="$vuetify.locale.t('$vuetify.projects.title')" />

        <!-- FILTERING -->
        <ProjectFiltering
            :viewMode="viewMode"
            :disable="soLongAnimation || showMarioHammerAnimation"
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
                    alt="Bowser face"
                    class="mx-5 sad-mario-img"
                    :src="require('@/assets/images/mario/bowser.png')"
                />
                <div>
                    <div class="no-project-title">
                        GAME OVER
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
                :src="require('@/assets/images/mario/marioHammer.gif')"
            />
        </div>
        <!-- Used to simulate a translate animation for project in animation -->
        <div
            v-if="filteredProjects.length === 0 || soLongAnimation"
            class="no-project-spacer"
            :class="{ 'no-project-spacer-out': soLongAnimation }"
        ></div>

        <!-- LINE VIEW -->
        <div
            v-if="viewMode === EViewMode.line"
            :class="{ 'projects-in-animation': soLongAnimation }"
            class="line-view-container"
        >
            <!-- class="line-view-container d-flex align-center justify-center" -->
            <div
                class="pagination-btn pagination-left-btn"
                :class="{
                    'pagination-btn-hidden': !filteredProjects.length || projectPosition === 0
                }"
                @click="scrollToProject(projectPosition - 1)"
            >
                <v-icon color="primary" size="30">mdi-arrow-left-bold</v-icon>
            </div>
            <div
                class="line-view-projects-container"
                :style="`overflow-x: ${filteredProjects.length > 0 ? 'scroll' : 'auto'}`"
                ref="lineModeContainer"
                @mouseup="onLineProjectsMouseUp"
                @mousedown="onLineProjectsMouseDown"
            >
                <ProjectPreview
                    v-for="(project, i) in filteredProjects"
                    :key="i"
                    :title="$vuetify.locale.t(project.title)"
                    :description="$vuetify.locale.t(project.description)"
                    :resume="$vuetify.locale.t(project.resume)"
                    :skills="project.skills"
                    :imgName="project.imgName"
                    :dialogComponent="project.dialogComponent"
                    :date="project.date"
                    :pinned="project.pinned"
                    :windowWidth="windowWidth"
                >
                    <template v-slot:previousButton>
                    </template>
                    <template v-slot:projectLink v-if="project.projectLink">
                        <a :href="project.projectLink" target="_blank">
                            {{ $vuetify.locale.t(project.projectLinkText!) }}
                        </a>
                    </template>
                </ProjectPreview>
            </div>
            <div
                class="pagination-btn pagination-right-btn"
                :class="{
                    'pagination-btn-hidden': !filteredProjects.length || projectPosition >= filteredProjects.length - 1
                }"
                @click="scrollToProject(projectPosition + 1)"
            >
                <v-icon color="primary" size="30">mdi-arrow-right-bold</v-icon>
            </div>
        </div>
        <!-- GRID VIEW -->
        <div v-else class="grid-view-container" :class="{ 'projects-in-animation': soLongAnimation }">
            <ProjectPreviewGrid
                v-for="(project, i) in filteredProjects"
                :key="i"
                :title="$vuetify.locale.t(project.title)"
                :resume="$vuetify.locale.t(project.resume)"
                :imgName="project.imgName"
                :dialogComponent="project.dialogComponent"
                :project-link="project.projectLink"
                :date="project.date"
                :pinned="project.pinned"
            >
                <template v-slot:projectLink v-if="project.projectLink">
                    <a :href="project.projectLink" target="_blank">
                        {{ $vuetify.locale.t(project.projectLinkText!) }}
                    </a>
                </template>

                <template v-slot:append>
                    <v-divider class="project-divider"></v-divider>
                </template>
            </ProjectPreviewGrid>
        </div>

        <!-- MARIO WALKING -->
        <div class="mario-walking-container">
            <div class="mario-walking-content">
                <img
                    id="marioWalkingGif"
                    alt="Mario en train de marcher"
                    :src="require('@/assets/images/mario/marioWalking.gif')"
                />
            </div>
            <div class="mario-walking-ground"></div>
        </div>
    </div>
</template>

<script lang="ts">
import ProjectPreview from "@/components/projects/ProjectPreview.vue";
import ProjectPreviewGrid from "@/components/projects/ProjectPreviewGrid.vue";
import ProjectFiltering from "@/components/projects/ProjectFiltering.vue";
import GlitchText from "@/components/shared/GlitchText.vue";
import { EProjectType, Project, EViewMode, DEFAULT_TYPES } from "@/models/Project";
import { PROJECTS } from './projectsList';

export default {
    name: "ProjectsSection",
    components: { ProjectPreview, ProjectPreviewGrid, ProjectFiltering, GlitchText },
    computed: {
        filteredProjects(): Project[] {
            let filteredProjects: Project[] = PROJECTS.slice();
            const filter: string = this.searchFilter?.toLowerCase();

            return filteredProjects
                .filter(p => 
                    // Filter by text
                    (
                        !filter ||
                        p.tags.some(tag => tag.includes(filter)) ||
                        this.$vuetify.locale.t(p.title).toLowerCase().includes(filter)
                    ) &&
                    // Filter by type (personal, professional, student)
                    this.projectTypes.includes(p.type)
                )
                // Sort by date
                .sort((a, b) => Number(b.date.slice(-4)) - Number(a.date.slice(-4)))
                // Then, display pinned projects first 
                .sort((a, b) => a.pinned! - b.pinned!);
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
                }, 3000);
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
        projectPosition: 0 as number,
        mousePosition: { top: 0, left: 0, x: 0, y: 0 } as { top: number, left: number, x: number, y: number },
        windowWidth: window.innerWidth
    }),
    mounted: function() {
        this.$refs.lineModeContainer
            .addEventListener('scroll', this.determineProjectPosition );
        
        // There is a bug where Mario walking gif stop playing after a while
        // To prevent this, reset the gif every minute
        setInterval(() => {
            const marioWalkingImage: HTMLImageElement = document.getElementById('marioWalkingGif') as HTMLImageElement;
            if (marioWalkingImage) {
                marioWalkingImage.src = '' + marioWalkingImage.src;
            }
        }, 60000);

        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() { 
        this.$refs.lineModeContainer
            .removeEventListener('scroll', this.determineProjectPosition);
        window.removeEventListener('resize', this.onResize); 
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
        },
        /**
         * Called on mouse down event
         * Apply style to makes scroll pleasant and add listeners
         * @param {MouseEvent} e mouse down event
         */
        onLineProjectsMouseDown(e: MouseEvent): void {
            this.$refs.lineModeContainer.style.scrollSnapType = 'none';
            this.$refs.lineModeContainer.style.scrollBehavior = 'auto';
            this.$refs.lineModeContainer.style.cursor = 'grabbing';
            this.mousePosition = {
                left: this.$refs.lineModeContainer.scrollLeft,
                top: this.$refs.lineModeContainer.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            };
            document.addEventListener('mousemove', this.onLineProjectsMouseMove);
            document.addEventListener('mouseup', this.onLineProjectsMouseUp);
        },
        /**
         * Called on mouse up event
         * Reset styles and remove listeners
         */
        onLineProjectsMouseUp(): void {
            this.$refs.lineModeContainer.style.scrollSnapType = 'x mandatory';
            this.$refs.lineModeContainer.style.scrollBehavior = 'smooth';
            this.$refs.lineModeContainer.style.cursor = 'grab';
            document.removeEventListener('mousemove', this.onLineProjectsMouseMove);
            document.removeEventListener('mouseup', this.onLineProjectsMouseUp);
        },
        /**
         * Called after a mouse down when the mouse is mooving
         * Scroll in the project lists (line mode only)
         * @param {MouseEvent} e mouse mouve event
         */
        onLineProjectsMouseMove(e: MouseEvent): void {
            // How far the mouse has been moved
            const dx = e.clientX - this.mousePosition.x;
            const dy = e.clientY - this.mousePosition.y;
            // Scroll in project lists
            this.$refs.lineModeContainer.scrollTop = this.mousePosition.top - dy;
            this.$refs.lineModeContainer.scrollLeft = this.mousePosition.left - dx;
        },
        onResize() {
            this.windowWidth = window.innerWidth;
        }
    }
};
</script>

<style lang="scss" scoped>
$no-project-height: 350px;
$no-project-margin: 25px;
$project-preview-height: 935px;
$arrow-separator-height: 100px;
.all-projects-container {
    background-color: rgb(var(--v-theme-dark));
    padding-inline: 5%;
    padding-top: 35px;
    overflow: hidden;
    position: relative;
    padding-bottom: calc(#{$arrow-separator-height} + 50px);
    clip-path: polygon(100% 0, 100% 92%, 50% 100%, 0 92%, 0 0);
}
.all-projects-container-line-view {
    height: 930px;
}
.project-divider {
    opacity: 100;
    color: white;
    margin: 7vh 0;
}

.no-project-container {
    width: fit-content;
    padding: 50px;
    background-color: rgb(var(--v-theme-light));
    position: absolute;
    height: $no-project-height;
    margin-top: $no-project-margin;
    box-shadow: -5px 0 0 0 rgb(var(--v-theme-primary)),
        5px 0 0 0 rgb(var(--v-theme-primary)),
        0 -5px 0 0 rgb(var(--v-theme-primary)),
        0 5px 0 0 rgb(var(--v-theme-primary));
    .no-project-title {
        font-family: "VT323";
        font-size: 70px;
        text-align: center;
        font-weight: 700;
    }
    img {
        min-height: 0;
        animation: bowserAnimation linear 3s infinite;
    }
}
.no-project-spacer {
    height: $no-project-height;
}
.line-view-container {
    padding: 0 45px;
    margin-top: 15px;
    position: relative;
}
.line-view-projects-container {
    display: flex;
    scroll-snap-type: x mandatory;
    transform: rotateX(180deg);
    scroll-behavior: smooth;
    cursor: grab;
    user-select: none;
    &::-webkit-scrollbar {
        height: 2px;
    }
    &::-webkit-scrollbar-track:horizontal {
        background-color: white;
    }
}
.pagination-right-btn {
    right: 0;
}
.pagination-left-btn {
    left: 0;
}
.pagination-btn {
    top: calc(50% - 19px);
    position: absolute;
    min-width: 38px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 15px;
    border: 1px solid rgb(var(--v-theme-primary));
    &-hidden {
        opacity: 0;
        pointer-events: none;
        height: 0;
        margin: 0;
        padding: 0;
    }
    &:hover {
        background-color: rgb(var(--v-theme-primary));
        i {
            color: white !important;
        }
    }
}

.grid-view-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.project-link {
    a {
        color: rgb(var(--v-theme-primary));
        text-decoration: unset;
        text-transform: uppercase;
    }
    &:hover {
        a {
            color: white;
        }
    }
}

.mario-walking-container {
    height: 100px;
    pointer-events: none;
    user-select: none;
    .mario-walking-content {
        position: absolute;
        left: 0;
        width: 100vw;
        animation: marioWalkingAnimation linear 5s infinite;
        bottom: 93px;
    }
    .mario-walking-ground {
        background-image: url('@/assets/images/mario/marioBlock.png');
        width: 100vw;
        height: 100px;
        background-repeat: repeat;
        position: absolute;
        left: 0;
        bottom: 0;
    }
}

/************************
       ANIMATIONS
************************/
@keyframes oofAnimation {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    60% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% { transform: scale(1.0); }
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

@keyframes marioWalkingAnimation {
    0% { transform: translateX(-85px); }
    100% { transform: translateX(100vw); }
}

@keyframes bowserAnimation {
    0% { transform: scale(1.0); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1.0); }
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
    top: 277px;
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
    .line-view-container {
        padding: 0;
    }
    .pagination-btn {
        display: none;
    }
    .mario-walking-content {
        animation-duration: 2s !important;
    }
}
@media (max-width: 1700px) {
    .all-projects-container {
        height: unset;
    }
}
</style>

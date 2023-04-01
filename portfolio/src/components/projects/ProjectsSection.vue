<template>
    <div id="projects" class="all-projects-container">
        <h2 class="section-title">{{ $vuetify.locale.t('$vuetify.projects.title') }}</h2>
        <div class="title-separator"></div>
        <!-- Intuiface HCMS -->
        <ProjectPreview
            :title="$vuetify.locale.t('$vuetify.projects.hcms.title')"
            :description="$vuetify.locale.t('$vuetify.projects.hcms.description')"
            :skills="[
                $vuetify.locale.t('$vuetify.projects.hcms.skills.one'),
                $vuetify.locale.t('$vuetify.projects.hcms.skills.two'),
                $vuetify.locale.t('$vuetify.projects.hcms.skills.three'),
                $vuetify.locale.t('$vuetify.projects.hcms.skills.four')
            ]"
            imgName="hcms"
            dialogComponent="ProjectHCMS"
            reverse
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Intuiface Analytics -->
        <ProjectPreview
            :title="$vuetify.locale.t('$vuetify.projects.analytics.title')"
            :description="$vuetify.locale.t('$vuetify.projects.analytics.description')"
            :skills="[
                $vuetify.locale.t('$vuetify.projects.analytics.skills.one'),
                $vuetify.locale.t('$vuetify.projects.analytics.skills.two'),
                $vuetify.locale.t('$vuetify.projects.analytics.skills.three'),
                $vuetify.locale.t('$vuetify.projects.analytics.skills.four')
            ]"
            imgName="analytics"
            dialogComponent="ProjectAnalytics"
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Intuiface Player Next Gen -->
        <ProjectPreview
            :title="$vuetify.locale.t('$vuetify.projects.playerNextGen.title')"
            :description="$vuetify.locale.t('$vuetify.projects.playerNextGen.description')"
            :skills="[
                $vuetify.locale.t('$vuetify.projects.playerNextGen.skills.one'),
                $vuetify.locale.t('$vuetify.projects.playerNextGen.skills.two'),
                $vuetify.locale.t('$vuetify.projects.playerNextGen.skills.three')
            ]"
            imgName="player"
            dialogComponent="ProjectPLN"
            reverse
        />
        <v-divider class="project-divider"></v-divider>
        <!-- Journal du capitaine -->
        <ProjectPreview
            :title="$vuetify.locale.t('$vuetify.projects.journal.title')"
            :description="$vuetify.locale.t('$vuetify.projects.journal.description')"
            :skills="[
                $vuetify.locale.t('$vuetify.projects.journal.skills.one'),
                $vuetify.locale.t('$vuetify.projects.journal.skills.two'),
                $vuetify.locale.t('$vuetify.projects.journal.skills.three')
            ]"
            imgName="journal"
        >
            <template v-slot:projectLink>
                <a href="https://journalducapitaine.fr/" target="_blank" style="color: rgb(var(--v-theme-primary));">journalducapitaine.fr</a>
            </template>
        </ProjectPreview>
        <v-divider class="project-divider"></v-divider>
        <!-- Tutoriel API Explorer -->
        <ProjectPreview
            :title="$vuetify.locale.t('$vuetify.projects.apiExplorer.title')"
            :description="$vuetify.locale.t('$vuetify.projects.apiExplorer.description')"
            :skills="[
                $vuetify.locale.t('$vuetify.projects.apiExplorer.skills.one'),
                $vuetify.locale.t('$vuetify.projects.apiExplorer.skills.two'),
                $vuetify.locale.t('$vuetify.projects.apiExplorer.skills.three')
            ]"
            imgName="apiExplorer"
            dialogComponent="ProjectApiExplorer"
            reverse
        />
        <v-divider class="project-divider"></v-divider>
        <!-- My Ice Tool -->
        <ProjectPreview
            :title="$vuetify.locale.t('$vuetify.projects.myIceTool.title')"
            :description="$vuetify.locale.t('$vuetify.projects.myIceTool.description')"
            :skills="[
                $vuetify.locale.t('$vuetify.projects.myIceTool.skills.one'),
                $vuetify.locale.t('$vuetify.projects.myIceTool.skills.two'),
                $vuetify.locale.t('$vuetify.projects.myIceTool.skills.three')
            ]"
            imgName="myIceTool"
            dialogComponent="ProjectMyIceTool"
        />
    </div>
</template>

<script>
import ProjectPreview from "@/components/projects/ProjectPreview.vue";

export default {
    name: "ProjectsSection",
    components: { ProjectPreview }
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
    margin-bottom: 65px;
}
</style>

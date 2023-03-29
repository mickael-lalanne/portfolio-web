<template>
    <div>
        <link rel="icon" href="@assets/logo.png">
        <HomePage />
    </div>
</template>

<script>
import HomePage from "@/components/home/HomePage.vue";
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router'

export default {
    name: "App",
    components: { HomePage },
    beforeCreate: function() {
        // Check query params to set the lang if necessary
        const route = useRoute();
        const langQuery = computed(() => route.query.lang);

        // Called when the query parameter "lang" has changed
        watch(langQuery, newLangQuery => {
            this.$vuetify.locale.current = newLangQuery;
        });
    },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
html,
body {
    scroll-behavior: smooth;
    margin: 0;
}
.v-application {
    font-family: 'Raleway', sans-serif;
    font-display: swap;
}

// Scrollbar
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 0px;
	background-color: #404347;
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: #404347;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: rgb(var(--v-theme-primary));
}

.project-container {
    background-color: rgb(var(--v-theme-light)) !important;
    padding: 5vh 30vw !important;
    text-align: justify;
    font-family: 'Roboto';
    font-display: swap;
    min-height: unset !important;
    min-width: unset !important;
    overflow-x: auto;

    a {
        text-decoration: underline;
        color: rgb(var(--v-theme-primary));
        &:hover {
            color: rgb(var(--v-theme-secondary));
        }
    }
}

.section-content {
    white-space: pre-line;
}

// RESPONSIVE

@media (max-width: 1200px) {
    .project-container {
        padding: 5vh 15vw !important;
    }
}
// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .project-container {
        padding: 5vh 3vw !important;
    }
    .project-title {
        padding-top: 50px;
    }
}
</style>

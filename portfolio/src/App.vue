<template>
    <div>
        <link rel="icon" href="@assets/logo.png">
        <HomePage />
    </div>
</template>

<script>
import HomePage from "@/components/home/HomePage.vue";

export default {
    name: "App",

    components: { HomePage },

    data: () => ({
    }),
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

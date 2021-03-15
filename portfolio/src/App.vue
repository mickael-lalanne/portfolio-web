<template>
    <div>
        <link rel="icon" href="@assets/logo.png">
        <Home />
    </div>
</template>

<script>
import Home from "@/components/home/Home.vue";

export default {
    name: "App",

    components: { Home },

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
	background-color: var(--v-primary-base);
}
</style>

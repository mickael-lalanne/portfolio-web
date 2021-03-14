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
$font-family: 'Raleway', sans-serif;
html,
body {
    scroll-behavior: smooth;
}
.v-application {
    font-family: 'Raleway', sans-serif;
}
</style>

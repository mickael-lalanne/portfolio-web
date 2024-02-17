<template>
    <div>
        <link rel="icon" href="@assets/logo.png" />
        <HomePage />
    </div>
</template>

<script>
import HomePage from '@/components/home/HomePage.vue';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

// TMP : Stop error resizeObserver when using a v-select component
// Cf https://github.com/vuejs/vue-cli/issues/7431#issuecomment-1793385162
// Waiting for this issue to be fixed :  https://github.com/vuetifyjs/vuetify-loader/issues/329
const debounce = (callback, delay) => {
    let tid;
    return function (...args) {
        const ctx = self;
        tid && clearTimeout(tid);
        tid = setTimeout(() => {
            callback.apply(ctx, args);
        }, delay);
    };
};

const _ = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ {
    constructor(callback) {
        callback = debounce(callback, 20);
        super(callback);
    }
};

export default {
    name: 'App',
    components: { HomePage },
    beforeCreate: function () {
        // Check query params to set the lang if necessary
        const route = useRoute();
        const langQuery = computed(() => route.query.lang);

        // Called when the query parameter "lang" has changed
        watch(langQuery, (newLangQuery) => {
            this.$vuetify.locale.current = newLangQuery;
        });
    },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
@font-face {
    font-family: 'Black Ops One';
    src: url('@/assets/fonts/BlackOpsOne-Regular.ttf');
}
@font-face {
    font-family: VT323;
    src: url('@/assets/fonts/VT323-Regular.ttf');
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-Thin.ttf');
    font-weight: 100;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-ExtraLight.ttf');
    font-weight: 200;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-Light.ttf');
    font-weight: 300;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-Regular.ttf');
    font-weight: 400;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-Medium.ttf');
    font-weight: 500;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-SemiBold.ttf');
    font-weight: 600;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-Bold.ttf');
    font-weight: 700;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-ExtraBold.ttf');
    font-weight: 800;
}
@font-face {
    font-family: Raleway;
    src: url('@/assets/fonts/raleway/Raleway-Black.ttf');
    font-weight: 900;
}
html,
body {
    scroll-behavior: smooth;
    margin: 0;
}
.v-application {
    font-family: 'Raleway', sans-serif;
    font-display: swap;
}
html {
    view-timeline: --scrollAnimationTimeline block;
}

// Scrollbar
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0px;
    background-color: #404347;
}

::-webkit-scrollbar {
    width: 5px;
    background-color: #404347;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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

.bg-grid-effect {
    --color: rgba(114, 114, 114, 0.1);    
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
    ),
    linear-gradient(
        90deg,
        transparent 24%,
        var(--color) 24%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
    );
    background-size: 55px 55px;
    background-repeat: repeat;
    background-attachment: fixed;
    background-position: center;
}

.vs-code-design {
    background-color: #1d1e22;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
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

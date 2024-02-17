<template>
    <div id="presentation" class="presentation-container">
        <GlitchText class="my-6" :text="$vuetify.locale.t('$vuetify.homepage.presentationTitle')" />
        <div class="profile-container">
            <div class="profile-picture">
                <img
                    class="vs-code-design"
                    alt="Profile Picture"
                    :src="require('@/assets/images/profilePicture.webp')"
                />
                <a href="https://github.com/mickael-lalanne" target="_blank" class="vs-code-design github-btn">
                    <v-icon color="white" size="70">mdi-github</v-icon>
                </a>
                <a href="https://www.linkedin.com/in/mickael-lalanne/" target="_blank" class="vs-code-design linkedin-btn">
                    <v-icon color="white" size="70">mdi-linkedin</v-icon>
                </a>
            </div>
            <CodeBlockInformations class="code-block" />
        </div>
        <div class="keywords-container mt-12">
            <a
                v-for="(keyword, i) in randomKeywords"
                :key="keyword.name"
                :href="keyword.link"
                target="_blank"
                rel="noopener"
            >
                <img
                    alt="Boo"
                    class="boo-img"
                    :class="{ 'boo-img-displayed': i === booToDisplay }"
                    :src="require('@/assets/images/mario/boo.gif')"
                />
                <v-chip class="keyword-chip" color="secondary">
                    {{ keyword.name }}
                </v-chip>
            </a>
        </div>
        <CustomTimeline class="timeline-container" />
    </div>
</template>

<script>
import CustomTimeline from "@/components/presentation/CustomTimeline.vue";
import CodeBlockInformations from "@/components/presentation/CodeBlockInformations.vue";
import GlitchText from "@/components/shared/GlitchText.vue";

export default {
    name: "PresentationSection",
    components: { CustomTimeline, CodeBlockInformations, GlitchText },
    data: () => ({
        KEYWORDS: [
            { name: "Vue.js", link: "https://vuejs.org/" },
            { name: "Angular", link: "https://angular.io/" },
            { name: "npm", link: "https://www.npmjs.com/" },
            {
                name: "Typsecript",
                link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
            },
            { name: "Javascript", link: "https://www.typescriptlang.org/" },
            {
                name: "HTML",
                link: "https://developer.mozilla.org/fr/docs/Web/HTML",
            },
            {
                name: "CSS",
                link: "https://developer.mozilla.org/fr/docs/Web/css",
            },
            { name: "Vuex", link: "https://vuex.vuejs.org/" },
            { name: "ngrx", link: "https://ngrx.io/" },
            { name: "AWS", link: "https://aws.amazon.com/fr/" },
            { name: "Lambda", link: "https://aws.amazon.com/fr/lambda/" },
            { name: "S3", link: "https://aws.amazon.com/fr/s3/" },
            { name: "Jenkins", link: "https://www.jenkins.io/" },
            {
                name: "Jira",
                link: "https://www.atlassian.com/fr/software/jira",
            },
            { name: "Git", link: "https://git-scm.com/" },
            { name: "MongoDB", link: "https://www.mongodb.com/fr" },
            { name: "Jest", link: "https://jestjs.io/" },
            { name: "Vuetify", link: "https://vuetifyjs.com/en/" },
            { name: "ESLint", link: "https://eslint.org/" },
            {
                name: "Lighthouse",
                link: "https://developers.google.com/web/tools/lighthouse",
            },
            { name: "Node.js", link: "https://nodejs.org/en/" },
            { name: ".NET", link: "https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet/" },
            { name: "React", link: "https://fr.react.dev/" }
        ],
        booToDisplay: undefined
    }),
    computed: {
        randomKeywords: function() {
            const array = [...this.KEYWORDS];
            let currentIndex = array.length,
                temporaryValue,
                randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        },
    },
    mounted() {
        // Each 5 seconds, show a random boo
        setInterval(() => {
            this.booToDisplay = Math.floor(Math.random() * this.KEYWORDS.length);
            setTimeout(() => {
                this.booToDisplay = undefined;
            }, 2000);
        }, 3500);
    },
};
</script>

<style lang="scss" scoped>
.presentation-container {
    background-color: #fcf1f1;
}
.profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.resume-name {
    color: rgb(var(--v-theme-primary));
    text-align: center;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bold;
}
.resume-icon {
    font-weight: bold;
    margin-right: 10px;
    background-color: rgb(var(--v-theme-dark));
    height: 44px;
    width: 44px;
    min-width: 44px;
    border-radius: 10%;
}
.keywords-container {
    margin-top: 20px;
    text-align: center;
    margin: auto;
    font-family: 'Roboto';
    font-display: swap;
    a {
        text-decoration: none;
        color: unset;
        position: relative;
        display: inline-block;
        &:hover {
            .keyword-chip {
                transform: scale(1.1);
                color: rgb(var(--v-theme-secondaryHover)) !important;
            }
        }
    }
}
.boo-img {
    position: absolute;
    opacity: 0;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    z-index: 1;
}
.boo-img-displayed {
    animation: booAnimation 2s infinite;
}
@keyframes booAnimation {
    0% {
        opacity: 0;
        transform: rotate(0deg) translate(-25px) rotate(0deg);
    }
    50% { opacity: 1; }
    100% {
        opacity: 0;
        transform:rotate(360deg) translate(-25px) rotate(-360deg);
    }
}
.keyword-chip {
    margin: 5px;
    cursor: pointer;
    transition-duration: 0.3s;
}

.profile-picture {
    height: 380px;
    aspect-ratio: 1;
    z-index: 0;
    position: relative;
    &:hover {
        z-index: 2;
    }
    img {
        transition-duration: 0.3s;
        transform: rotate(-2deg);
        width: 100%;
        height: 100%;
        padding: 15px;
        &:hover {
            transform: rotate(-2deg) scale(1.1);
        }
    }
}
.code-block {
    transform: rotate(2deg);
    z-index: 1;
    transition-duration: 0.3s;
    &:hover {
        transform: rotate(2deg) scale(1.1);
    }
}
.github-btn,
.linkedin-btn {
    position: absolute;
    left: -27px;
    padding: 12px;
    transition-duration: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: rgb(var(--v-theme-primary));
    }
    &:active {
        background-color: rgb(var(--v-theme-secondary));;
    }
}
.github-btn {
    bottom: -25px;
    z-index: 2;
    transform: rotate(-17deg);
    &:hover {
        transform: rotate(-17deg) scale(1.1);
    }
    &:active {
        background-color: rgb(var(--v-theme-secondary));;
    }
}
.linkedin-btn {
    bottom: 55px;
    z-index: 1;
    transform: rotate(12deg);
    &:hover {
        transform: rotate(12deg) scale(1.1);
    }
}

// RESPONSIVE

// Medium devices (tablets, max 768px and less)
@media (max-width: 850px) {
    .profile-container {
        flex-direction: column;
    }
    .profile-picture,
    .code-block {
        transform: unset;
        &:hover {
            transform: unset;
        }
    }
    .profile-picture img,
    .profile-picture img:hover,
    .code-block,
    .linkedin-btn,
    .github-btn {
        transform: unset;
        z-index: unset;
    }
    .linkedin-btn,
    .github-btn {
        left: -20px;
    }
    .linkedin-btn {
        top: 0;
        bottom: unset;
    }
    .github-btn {
        bottom: 0;
        right: -20px;
        left: unset;
    }
}

@media (max-width: 1200px) {
    .timeline-container {
        padding: 0 20%;
    }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
    .presentation-container {
        padding: 0px 28%;
    }
}

// Small devices (landscape phones, less than 576px)
@media (max-width: 576px) {
    .timeline-container {
        padding: 0 10px;
    }
}

@media screen and (max-width: 420px) {
    .profile-picture {
        height: 320px;
    }
}
</style>

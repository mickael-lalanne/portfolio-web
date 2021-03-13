<template>
    <div class="presentation-container">
        <h2 class="resume-name pt-12">Qui va là ?</h2>
        <div class="title-separator mb-12"></div>
        <div class="profile-container">
            <img
                alt="Profile Picture"
                class="profile-picture"
                src="@/assets/images/profilePicture.png"
            />
            <div>
                <div class="resume-category">
                    <v-icon class="resume-icon" color="var(--v-primary-base)">
                        mdi-account-circle-outline
                    </v-icon>
                    <div class="resume-text">Mickaël Lalanne, 24 ans</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-icon" color="var(--v-primary-base)">
                        mdi-pin-outline
                    </v-icon>
                    <div class="resume-text">Toulouse, France</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-icon" color="var(--v-primary-base)">
                        mdi-email-outline
                    </v-icon>
                    <div class="resume-text">mickael.lalanne03@gmail.com</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-icon" color="var(--v-primary-base)">
                        mdi-briefcase-outline
                    </v-icon>
                    <div class="resume-text">
                        Ingénieur R&D pour
                        <a
                            href="https://www.intuiface.com/"
                            target="_blank"
                            class="pl-1"
                        >
                            Intuiface
                        </a>
                    </div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-icon" color="var(--v-primary-base)">
                        mdi-gamepad-square-outline
                    </v-icon>
                    <div class="resume-text">Jeux vidéo, montage vidéo</div>
                </div>
            </div>
        </div>
        <div class="d-flex align-center keywords-social-container">
            <div class="keywords-container mt-12">
                <v-chip
                    v-for="keyword in KEYWORDS"
                    :key="keyword"
                    class="keyword-chip"
                    text-color="var(--v-dark-base)"
                    color="var(--v-light2-base)"
                >
                    {{ keyword }}
                </v-chip>
            </div>
            <ul class="d-flex justify-center mt-10">
                <li>
                    <a
                        class="resume-social-icon"
                        href="https://github.com/mickael-lalanne"
                        target="_blank"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <v-icon
                            color="var(--v-dark-base)"
                            size="70"
                            class="resume-social-network-icon"
                        >
                            mdi-github
                        </v-icon>
                    </a>
                </li>
            </ul>
        </div>
        <Timeline class="timeline-container" />
    </div>
</template>

<script>
import Timeline from "@/components/presentation/Timeline.vue";

export default {
    name: "Presentation",
    components: { Timeline },
    data: () => ({
        KEYWORDS: [
            "Vue.js",
            "Angular",
            "npm",
            "Typsecript",
            "Javascript",
            "HTML",
            "CSS",
            "Vuex",
            "ngrx",
            "AWS",
            "Lambda",
            "S3",
            "Jenkins",
            "Jira",
            "Git",
            "MongoDB",
            "Jest",
            "Vuetify",
            "ESLint"
        ],
    }),
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
.profile-picture {
    width: 400px;
    max-width: 80vw;
}
.resume-name {
    color: var(--v-primary-base);
    text-align: center;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bold;
}
.resume-icon {
    font-weight: bold;
    margin-right: 10px;
    background-color: var(--v-dark-base);
    padding: 10px;
    border-radius: 10%;
}
.resume-category {
    display: flex;
    font-size: 18px;
    margin-top: 16px;
}
.resume-text {
    display: flex;
    align-items: center;
    color: black;
    & a {
        text-decoration: none;
        color: unset;
        font-weight: 500;
        &:hover {
            color: var(--v-primary-base);
        }
    }
}
.keywords-container {
    margin-top: 20px;
    text-align: center;
    margin: auto;
}
.keyword-chip {
    margin: 5px;
}
.title-separator {
    width: 100px;
    height: 4px;
    background-color: var(--v-primary-base);
    text-align: center;
    margin: auto;
}

ul li {
    list-style: none;
}
ul li a {
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 40px;
    text-align: center;
    text-decoration: none;
    color: var(--v-dark-base);
    margin: 0 30px;
    transition: 0.5s;
}
ul li a span {
    position: absolute;
    transition: transform 0.5s;
}
ul li a span:nth-child(1),
ul li a span:nth-child(3) {
    width: 100%;
    height: 3px;
    background: var(--v-dark-base);
}
ul li a span:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right;
}
ul li a:hover span:nth-child(1) {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s;
}

ul li a span:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left;
}
ul li a:hover span:nth-child(3) {
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
}

ul li a span:nth-child(2),
ul li a span:nth-child(4) {
    width: 3px;
    height: 100%;
    background: var(--v-dark-base);
}
ul li a span:nth-child(2) {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: bottom;
}
ul li a:hover span:nth-child(2) {
    transform: scale(1);
    transform-origin: top;
    transition: transform 0.5s;
}
ul li a span:nth-child(4) {
    top: 0;
    right: 0;
    transform: scale(0);
    transform-origin: top;
}
ul li a:hover span:nth-child(4) {
    transform: scale(1);
    transform-origin: bottom;
    transition: transform 0.5s;
}

.resume-social-icon:hover {
    span {
        background: var(--v-primary-base);
    }
    .resume-social-network-icon {
        color: var(--v-primary-base) !important;
    }
}

// RESPONSIVE

// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .profile-container {
        flex-direction: column;
    }
    .keywords-social-container {
        flex-direction: column-reverse;
    }
}

@media (min-width: 768px) {
    .profile-picture {
        margin-right: 48px;
    }
}

@media (max-width: 1200px) {
    .keywords-social-container,
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
    .keywords-social-container,
    .timeline-container {
        padding: 0 5px;
    }
}
</style>

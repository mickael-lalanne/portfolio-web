<template>
    <div class="presentation-container">
        <div class="resume-name pt-12">Qui va là ?</div>
        <div class="title-separator mb-12"></div>
        <div class="profile-container">
            <img
                class="profile-picture mr-12"
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
                    <div class="resume-text">France, Toulouse</div>
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
                        Ingénieur R&D pour <i class="ml-1">Intuiface</i>
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
        <Timeline />
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
            "Jest"
        ],
    }),
};
</script>

<style scoped>
.presentation-container {
    background-color: #fcf1f1;
    padding: 0px 28%;
}
.profile-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
.profile-picture {
    width: 400px;
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
</style>

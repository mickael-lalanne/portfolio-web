<template>
    <div class="presentation-container">
        <div class="profile-container">
            <img class="profile-picture" src="@/assets/images/profilePicture.png"/>
            <div>
                <div class="resume-name">Mickaël Lalanne</div>
                <div class="resume-category">
                    <v-icon class="resume-title" color="black">
                        mdi-cake
                    </v-icon>
                    <div class="resume-text">24</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-title" color="black">
                        mdi-pin-outline
                    </v-icon>
                    <div class="resume-text">Toulouse</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-title" color="black">
                        <!-- mdi-email --> mdi-email-outline
                    </v-icon>
                    <div class="resume-text">mickael.lalanne03@gmail.com</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-title" color="black">
                        mdi-briefcase-outline
                    </v-icon>
                    <div class="resume-text">Ingénieur R&D chez Intuiface</div>
                </div>
                <div class="resume-category">
                    <v-icon class="resume-title" color="black">
                        mdi-gamepad-square-outline
                    </v-icon>
                    <div class="resume-text">Jeux vidéo</div>
                </div>
                <div class="keywords-container">
                    <v-chip
                        v-for="keyword in KEYWORDS" :key="keyword"
                        class="keyword-chip"
                        :color="'green'"
                        text-color="white"
                    >
                        {{ keyword }}
                    </v-chip>
                </div>
            </div>
        </div>
            <Timeline/>
    </div>
</template>

<script>
import Timeline from '@/components/presentation/Timeline.vue';

export default {
    name: 'Presentation',
    components: { Timeline },
    data: () => ({
        KEYWORDS: ['Vue.js', 'Angular', 'npm', 'Typsecript', 'Javascript', 'HTML', 'CSS', 'Vuex', 'ngrx',
            'AWS', 'Lambda', 'S3', 'Jenkins', 'Jira', 'Git']
    }),
};
</script>

<style scoped>
.presentation-container {
    height: 100vh;
    background-color: #fcf1f1;
    padding: 0px 20%;
}
.profile-container {
    padding-top: 2%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.profile-picture {
    width: 20vw;
}
.resume-name {
    color: #f9813a;
    text-align: center;
    font-size: 32px;
    margin-bottom: 32px;
    margin-top: 32px;
}
.resume-title {
    font-weight: bold;
    margin-right: 15px;
}
.resume-category {
    display: flex;
    font-size: 18px;
    margin-top: 16px;
}
.keywords-container {
    margin-top: 20px;
    width: 500px;
}
.keyword-chip {
    margin: 5px;
}
</style>

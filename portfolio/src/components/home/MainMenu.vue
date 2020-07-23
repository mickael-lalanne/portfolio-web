<template>
  <div class="main-menu-container">
    <v-row class="text-center">
      <v-col cols="3">
          <MainMenuItem :videoSrc="'/media/keyboard.7213bb9f.mp4'" :itemName="'Présentation'"/>
      </v-col>
      <v-col cols="3">
          <MainMenuItem :videoSrc="'/media/keyboard.7213bb9f.mp4'" :itemName="'Formation'"/>
      </v-col>
      <v-col cols="3">
          <MainMenuItem :videoSrc="'/media/keyboard.7213bb9f.mp4'" :itemName="'Projets'"/>
      </v-col>
      <v-col cols="3">
          <MainMenuItem :videoSrc="'/media/keyboard.7213bb9f.mp4'" :itemName="'Hobbies'"/>
      </v-col>

    </v-row>
  </div>
</template>

<script>
  import MainMenuItem from '@/components/home/MainMenuItem.vue';
  export default {
    name: 'MainMenu',
    components: {
        MainMenuItem,
    },
    data: () => ({
    }),
  }
</script>

<style scoped>
.main-menu-container {
    padding-left: 10%;
    padding-right: 10%;
}
.menu-category {
    transform: rotate(-90deg);
    font-size: 5em;
}
.background-video {
    position: absolute;
    height: 100%;
}
</style>

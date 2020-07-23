<template>
  <div class="home-container">
      <HeaderShape/>
      <MainMenu/>
  </div>
</template>

<script>
  import MainMenu from '@/components/home/MainMenu.vue';
  import HeaderShape from '@/components/home/HeaderShape.vue';
  export default {
    name: 'Home',
    components: { MainMenu, HeaderShape },
    data: () => ({
    }),
  }
</script>

<style scoped>
.home-container {
  height: 100vh;
  width: 100vw;
  background: var(--v-lighter-base);
}
</style>

<template>
  <div>
    <Home/>
  </div>
</template>

<script>
import Home from '@/components/home/Home.vue';

export default {
  name: 'App',

  components: { Home },

  data: () => ({
    //
  }),
};
</script>
<style>
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

html, body {
  font-family: 'Lato', sans-serif;
  scroll-behavior: smooth;
}

</style>

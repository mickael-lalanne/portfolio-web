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
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');

html, body {
  font-family: 'Nunito Sans', sans-serif;
}

</style>

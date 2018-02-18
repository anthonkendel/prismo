<template lang="pug">
  #app
    p-nav-bar
    router-view
</template>

<script>
import PNavBar from '@/components/PNavBar';

export default {
  name: 'App',
  components: {
    PNavBar,
  },
};
</script>

<style lang="scss">
  @import "assets/prismo-styles";
</style>

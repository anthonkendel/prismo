<template lang="pug">
  #app
    p-nav-bar
    router-view
    p-auth
</template>

<script>
import PAuth from '@/components/PAuth';
import PNavBar from '@/components/PNavBar';
import store from '@/store';

export default {
  name: 'App',
  components: {
    PAuth,
    PNavBar,
  },
  store,
};
</script>

<style lang="scss">
  @import "assets/prismo-styles";
</style>

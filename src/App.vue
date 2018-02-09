<template>
  <div id="app">
    <l-nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import store from '@/store';
import LNavBar from '@/components/LNavBar';

export default {
  name: 'App',
  components: { LNavBar },
  store,
};
</script>

<style lang="scss">
  @import "/assets/lns-styles";
</style>

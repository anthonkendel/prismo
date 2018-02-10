<template lang="pug">
  .container
    l-profile-tabs
    router-view
</template>

<script>
import LProfileTabs from '@/components/LProfileTabs';

export default {
  name: 'LProfile',
  components: {
    LProfileTabs,
  },
};
</script>

<style lang="scss" scoped>
</style>

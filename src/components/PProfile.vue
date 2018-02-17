<template lang="pug">
  .container
    p-profile-tabs
    router-view
</template>

<script>
import PProfileTabs from '@/components/PProfileTabs';

export default {
  name: 'PProfile',
  components: {
    PProfileTabs,
  },
};
</script>

<style lang="scss" scoped>
</style>

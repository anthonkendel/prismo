<template lang="pug">
  .container
    l-profile-view
    l-profile-edit
</template>

<script>
import LProfileView from '@/components/LProfileView';
import LProfileEdit from '@/components/LProfileEdit';

export default {
  name: 'LProfile',
  components: { LProfileView, LProfileEdit },
};
</script>

<style lang="scss" scoped>

</style>

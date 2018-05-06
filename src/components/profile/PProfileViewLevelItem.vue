<template lang="pug">
  .level-item
    .content-container
      p.heading {{ heading }}
        .slot-container
          slot
</template>

<script>
export default {
  name: 'PProfileViewLevelItem',
  props: {
    heading: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
  .slot-container {
    font-size: 1.5em;
  }
</style>

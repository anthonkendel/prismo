<template lang="pug">
  .l-profile-current
    .level
      .level-item
        .left-eye
          b-icon(icon="eye")
          p.heading Left eye
          p.title -1.25
      .level-item
        .right-eye
          b-icon(icon="eye")
          p.heading Right eye
          p.title -1.5
</template>

<script>
export default {
  name: 'LProfileCurrent',
};
</script>

<style lang="scss" scoped>
  .l-profile-current {
    text-align: center;
  }
</style>

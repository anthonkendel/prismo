<template lang="pug">
  section.section
    .tabs.is-toggle.is-fullwidth
      ul
        router-link(:to="{ 'name': 'PProfileView' }" tag="li" exact)
          a
            b-icon(icon="user-circle")
            span Profile
        router-link(:to="{ 'name': 'PProfileEdit' }" tag="li" exact)
          a
            b-icon(icon="edit")
            span Edit
</template>

<script>
export default {
  name: 'PProfileTabs',
};
</script>

<style lang="scss" scoped>
  @import "../assets/prismo-styles";

  .router-link-exact-active {
    @extend .is-active
  }
</style>

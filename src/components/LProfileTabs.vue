<template lang="pug">
  section.section
    .tabs.is-toggle.is-fullwidth
      ul
        router-link(:to="{ 'name': 'LProfileView' }" tag="li" exact)
          a
            b-icon(icon="user-circle")
            span Profile
        router-link(:to="{ 'name': 'LProfileEdit' }" tag="li" exact)
          a
            b-icon(icon="edit")
            span Edit

</template>

<script>
export default {
  name: 'LProfileTabs',
};
</script>

<style lang="scss" scoped>
  @import "../assets/lns-styles";

  .router-link-exact-active {
    @extend .is-active
  }
</style>

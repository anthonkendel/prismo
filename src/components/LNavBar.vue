<template lang="pug">
  nav.navbar.is-black(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        router-link.navbar-item(:to="{ 'name': 'LNS' }" exact)
          .title Prismo.cc
        button.button.navbar-burger.is-black(
        @click="toggleNavigation",
        :class="{ 'is-active': isMobileNavigation }")
          span
          span
          span
      .navbar-menu(:class="{ 'is-active': isMobileNavigation }")
        .navbar-end
          router-link.navbar-item(:to="{ 'name': 'LProfileView' }")
            i.fa.fa-user-circle
            | Profile

</template>

<script>
export default {
  name: 'LNavBar',
  data() {
    return {
      isMobileNavigation: false,
    };
  },
  methods: {
    toggleNavigation() {
      this.isMobileNavigation = !this.isMobileNavigation;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/lns-styles";

  .title {
    color: $white;
    font-size: 1.4em;
    text-transform: uppercase;
  }

  svg {
    margin-left: 4px;
    margin-right: 4px;
  }
</style>

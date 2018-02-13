<template lang="pug">
  nav.navbar.is-black(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        router-link.navbar-item(:to="{ 'name': 'LNS' }" exact)
          .title Prism
            b-icon(icon="dot-circle")
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

  figure {
    padding: 10px;

    .image {
      max-height: 40px;
      width: auto;
    }
  }

  .title {
    color: $white;
    letter-spacing: 1px;
    font-size: 1.4em;
    text-transform: uppercase;

    .icon {
      position: absolute;
      color: $primary;
    }
  }

  svg {
    margin-left: 4px;
    margin-right: 4px;
  }
</style>

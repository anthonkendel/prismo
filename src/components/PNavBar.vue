<template lang="pug">
  nav.navbar.is-info(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        router-link.navbar-item(:to="{ 'name': 'Prismo' }" exact)
          .title Prism
            b-icon(icon="dot-circle")
        button.button.navbar-burger.is-info(
        @click="toggleNavigation",
        :class="{ 'is-active': isMobileNavigation }")
          span
          span
          span
      .navbar-menu(:class="{ 'is-active': isMobileNavigation }")
        .navbar-end(v-if="isAuthenticated")
            router-link.navbar-item(:to="{ 'name': 'PProfileView' }")
              i.fa.fa-user-circle
              | Profile
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'PNavBar',
  data() {
    return {
      isMobileNavigation: false,
    };
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
    }),
  },
  methods: {
    toggleNavigation() {
      this.isMobileNavigation = !this.isMobileNavigation;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/prismo-styles";

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

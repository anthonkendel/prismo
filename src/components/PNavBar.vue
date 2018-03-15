<template lang="pug">
  nav.navbar.is-info(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        router-link.navbar-item(:to="{ 'name': 'Prismo' }" exact)
          .title Prism
            b-icon(icon="dot-circle")
        button.button.navbar-burger.is-info(
        @click="toggleNavigation",
        :class="{ 'is-active': isMobileNavigation }",
        v-if="isAuthenticated")
          span
          span
          span
      .navbar-menu(
      :class="{ 'is-active': isMobileNavigation }",
      v-if="isAuthenticated")
        .navbar-end(v-if="isAuthenticated")
          router-link.navbar-item(:to="{ 'name': 'PProfileView' }")
            span Profile
          .navbar-item
            p-nav-bar-logout
</template>

<script>
import PNavBarLogout from '@/components/PNavBarLogout';
import { mapGetters } from 'vuex';

export default {
  name: 'PNavBar',
  components: { PNavBarLogout },
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
</style>

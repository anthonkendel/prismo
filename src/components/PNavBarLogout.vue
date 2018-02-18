<template lang="pug">
  b-dropdown(hoverable custom position="is-bottom-left")
    button.button.is-info(slot='trigger')
      img.profile-picture(:src="userInfo.picture")

    b-dropdown-item.user-info(custom)
      | Logged in as #[b {{ userInfo.name }}]
    hr.dropdown-divider
    b-dropdown-item.logout(custom)
      button.button.is-danger.is-small(@click="logout")
        span Logout
        b-icon(icon="sign-out-alt")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import authService from '@/services/authService';

export default {
  name: 'PNavBarLogout',
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      userInfo: 'getUserInfo',
    }),
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'setUserInfo',
      clearStore: 'clearStore',
    }),
    logout() {
      this.clearStore();
      authService.setAccessToken('');
      this.$router.push({ name: 'PLogin' });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/prismo-styles";

  .user-info {
    text-align: center;
  }

  .logout {
    text-align: center;

    button.button.is-danger.is-small {
      width: 100%;
    }
  }

  .profile-picture {
    border-radius: 20px;
    border: 2px solid $primary;
  }
</style>

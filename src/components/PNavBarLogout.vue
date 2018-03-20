<template lang="pug">
  b-dropdown.dropdown(hoverable)
    template(slot='trigger')
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
import authService from '@/shared/services/authService';

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
      this.$dialog
        .confirm({
          message: 'Are you sure you want to logout?',
          cancelText: 'Cancel 🗙',
          confirmText: 'Yes 👌',
          onConfirm: () => {
            authService.setAccessToken('');
            this.clearStore();
            this.$router.push({ name: 'PWelcome' });
          },
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/prismo-styles";

  .dropdown {
    padding-top: 8px;
  }

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

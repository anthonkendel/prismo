<template lang="pug">
  button.button.is-primary.is-outlined.is-small(@click="logout")
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
</style>

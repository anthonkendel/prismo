<template lang="pug">
  .container
    section.section
      .columns
        .column
          section.hero.is-info
            .hero-body
              .container
                .title Prism
                  b-icon(icon="dot-circle")
                .subtitle Your lens companion online
          section.section(v-if="!isAuthenticated")
            .buttons.is-centered
              button.button.is-primary(@click="loginWithGoogle")
                span Login with
                b-icon(icon="google", pack="fab")
</template>

<script>
import authService from '@/shared/services/authService';
import { mapGetters } from 'vuex';

export default {
  name: 'PWelcome',
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
    }),
  },
  methods: {
    async loginWithGoogle() {
      await authService.initiateLogin();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/prismo-styles";

  .hero {
    text-align: center;

    .title {
      padding-right: 25px;
      color: $white;
      letter-spacing: 1px;
      font-size: 1.4em;
      text-transform: uppercase;

      .icon {
        position: absolute;
        color: $primary;
      }
    }
  }

  button.button.is-primary {
    .icon {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>

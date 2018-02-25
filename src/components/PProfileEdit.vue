<template lang="pug">
  div
    section.section
      .columns
        .column
          h2.title Edit
      .columns
        .column
          h3.title Left eye
          p-profile-edit-eye(:eye="left")
        .column
          h3.title Right eye
          p-profile-edit-eye(:eye="right")
    section.section
      .columns
        .column
          button.button.is-primary(
          @click="saveChanges",
          :class="{ 'is-loading': isLoading }")

            | Save changes
</template>

<script>
import { authService, prismoProfileService } from '@/services';
import { mapGetters, mapMutations } from 'vuex';
import Eye from '@/models/Eye';
import PProfileEditEye from '@/components/PProfileEditEye';
import PrismoProfile from '@/models/PrismoProfile';

export default {
  name: 'PProfileEdit',
  components: { PProfileEditEye },
  data() {
    return {
      left: new Eye(),
      right: new Eye(),
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      profile: 'getPrismoProfile',
    }),
  },
  mounted() {
    this.left = { ...new Eye(), ...this.profile.left };
    this.right = { ...new Eye(), ...this.profile.right };
  },
  methods: {
    ...mapMutations({
      setPrismoProfile: 'setPrismoProfile',
    }),
    async saveChanges() {
      const profile = new PrismoProfile({ left: this.left, right: this.right });
      try {
        this.isLoading = true;
        await prismoProfileService.uploadPrismoProfile(authService.getAccessToken(), profile);
        this.setPrismoProfile(profile);
        this.isLoading = false;
        this.$snackbar
          .open({
            message: 'Profile saved',
            type: 'is-primary',
            actionText: 'OK 👌',
          });
      } catch (e) {
        // Intentionally left empty.
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 1.6em;
  }

  button.button.is-primary {
    width: 100%;
  }
</style>

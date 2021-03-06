<template lang="pug">
  div
    section.section
      .columns
        .column
          h2.title Edit
      .columns
        .column
          h3.title Left eye
          p-profile-edit-eye(
          :eye="left",
          @validation="onValidation")
        .column
          h3.title Right eye
          p-profile-edit-eye(
          :eye="right",
          @validation="onValidation")
    section.section
      .columns
        .column
          button.button.is-primary.is-fullwidth(
          @click="saveChanges",
          :class="{ 'is-loading': isLoading }",
          :disabled="!isValid")
            | Save changes
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Eye from '@/shared/models/Eye';
import PProfileEditEye from '@/components/profile/PProfileEditEye';
import PrismoProfile from '@/shared/models/PrismoProfile';
import authService from '@/shared/services/authService';
import numberHelpers from '@/shared/helpers/numberHelpers';
import prismoProfileService from '@/shared/services/prismoProfileService';
import toastService from '@/shared/services/toastService';

export default {
  name: 'PProfileEdit',
  components: { PProfileEditEye },
  data() {
    return {
      left: new Eye(),
      right: new Eye(),
      isLoading: false,
      isValid: false,
    };
  },
  computed: {
    ...mapGetters({
      profile: 'getPrismoProfile',
    }),
  },
  mounted() {
    this.left = new Eye(this.profile.left);
    this.right = new Eye(this.profile.right);
  },
  methods: {
    ...mapMutations({
      setPrismoProfile: 'setPrismoProfile',
    }),
    createProfile() {
      return new PrismoProfile({
        left: {
          ...this.left,
          strength: numberHelpers.parseToFloat(this.left.strength),
          inventory: numberHelpers.parseToInt(this.left.inventory),
        },
        right: {
          ...this.right,
          strength: numberHelpers.parseToFloat(this.right.strength),
          inventory: numberHelpers.parseToInt(this.right.inventory),
        },
      });
    },
    async saveChanges() {
      const profile = this.createProfile();
      try {
        this.isLoading = true;
        await prismoProfileService.uploadPrismoProfile(authService.getAccessToken(), profile);
        this.setPrismoProfile(profile);
        this.isLoading = false;
        toastService.open({ vue: this, message: 'Profile saved 👌' });
      } catch (e) {
        // Intentionally left empty.
      }
    },
    onValidation(valid) {
      this.isValid = valid;
    },
  },
};
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 1.6em;
  }
</style>

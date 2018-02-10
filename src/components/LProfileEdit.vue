<template lang="pug">
  div
    section.section
      .columns
        .column
          h1.title Edit
      .columns
        .column
          h2.title Left eye
          l-profile-edit-eye(:eye="left")
        .column
          h2.title Right eye
          l-profile-edit-eye(:eye="right")
    section.section
      .columns
        .column
          button.button.is-black(@click="saveChanges") Save changes
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import EyeSetting from '@/models/EyeSetting';
import LNSProfile from '@/models/LNSProfile';
import LProfileEditEye from '@/components/LProfileEditEye';

export default {
  name: 'LProfileEdit',
  computed: {
    ...mapGetters({
      profile: 'getLNSProfile',
    }),
  },
  data() {
    return {
      left: new EyeSetting(),
      right: new EyeSetting(),
    };
  },
  methods: {
    ...mapMutations({
      setLNSProfile: 'setLNSProfile',
    }),
    saveChanges() {
      const profile = new LNSProfile({ left: this.left, right: this.right });
      this.setLNSProfile(profile);
      this.$snackbar
        .open({
          message: 'Profile saved',
          type: 'is-success',
          actionText: 'OK 👌',
        });
    },
  },
  components: { LProfileEditEye },
  mounted() {
    this.left = Object.assign(new EyeSetting(), this.profile.left);
    this.right = Object.assign(new EyeSetting(), this.profile.right);
  },
};
</script>

<style lang="scss" scoped>
  h2 {
    font-size: 1.6em;
  }

  button.button.is-black {
    width: 100%;
  }
</style>

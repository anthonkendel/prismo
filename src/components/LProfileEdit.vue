<template lang="pug">
  div
    section.section
      .columns
        .column
          h2.title Edit
      .columns
        .column
          h3.title Left eye
          l-profile-edit-eye(:eye="left")
        .column
          h3.title Right eye
          l-profile-edit-eye(:eye="right")
    section.section
      .columns
        .column
          button.button.is-primary(@click="saveChanges") Save changes
</template>

<script>
import LProfileEditEye from '@/components/LProfileEditEye';
import EyeSetting from '@/models/EyeSetting';
import LNSProfile from '@/models/LNSProfile';
import { mapGetters, mapMutations } from 'vuex';

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
          type: 'is-primary',
          actionText: 'OK 👌',
        });
    },
  },
  components: { LProfileEditEye },
  mounted() {
    this.left = { ...new EyeSetting(), ...this.profile.left };
    this.right = { ...new EyeSetting(), ...this.profile.right };
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

<template lang="pug">
  section.section
    .columns
      .column
        .level
          l-profile-view-level-item(heading="Left eye")
            b-icon(icon="eye")
        .level
          l-profile-view-level-item(heading="Product")
            | {{ profile.left.product }}
        .level
          l-profile-view-level-item(heading="Strength")
            | {{ profile.left.strength }}
          l-profile-view-level-item(heading="Inventory")
            | {{ profile.left.inventory }} left
        .notes-level
          p.heading Additional notes
          p {{ profile.left.notes }}
      .column
        .level
          l-profile-view-level-item(heading="Right eye")
            b-icon(icon="eye")
        .level
          l-profile-view-level-item(heading="Product")
            | {{ profile.right.product }}
        .level
          l-profile-view-level-item(heading="Strength")
            | {{ profile.right.strength }}
          l-profile-view-level-item(heading="Inventory")
            | {{ profile.right.inventory }} left
        .notes-level
          p.heading Additional notes
          p {{ profile.right.notes }}
</template>

<script>
import { mapGetters } from 'vuex';
import LProfileViewLevelItem from '@/components/LProfileViewLevelItem';

export default {
  name: 'LProfileCurrent',
  computed: {
    ...mapGetters({
      profile: 'getLNSProfile',
    }),
  },
  components: { LProfileViewLevelItem },
};
</script>

<style lang="scss" scoped>
  section.section {
    text-align: center;

    /* Override Bulma */
    .level:not(:last-child) {
      margin-bottom: 2rem;
    }

    .notes-level {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
</style>

<template lang="pug">
  section.section
    .columns
      .column
        .level
          p-profile-view-level-item(heading="Left eye")
            b-icon(icon="eye")
        .level
          p-profile-view-level-item(heading="Product")
            p.product-name {{ profile.left.product.name }}
            small.product-supplier {{ profile.left.product.supplier }}
        .level
          p-profile-view-level-item(heading="Strength")
            p {{ profile.left.strength }}
          p-profile-view-level-item(heading="Inventory")
            p {{ profile.left.inventory }} left
        .notes-level
          p.heading Additional notes
          p {{ profile.left.notes }}
      .column
        .level
          p-profile-view-level-item(heading="Right eye")
            b-icon(icon="eye")
        .level
          p-profile-view-level-item(heading="Product")
            p.product-name {{ profile.right.product.name }}
            small.product-supplier {{ profile.right.product.supplier }}
        .level
          p-profile-view-level-item(heading="Strength")
            p {{ profile.right.strength }}
          p-profile-view-level-item(heading="Inventory")
            p {{ profile.right.inventory }} left
        .notes-level
          p.heading Additional notes
          p {{ profile.right.notes }}
</template>

<script>
import PProfileViewLevelItem from '@/components/profile/PProfileViewLevelItem';
import { mapGetters } from 'vuex';

export default {
  name: 'PProfileCurrent',
  components: { PProfileViewLevelItem },
  computed: {
    ...mapGetters({
      profile: 'getPrismoProfile',
    }),
  },
};
</script>

<style lang="scss" scoped>
  section.section {
    text-align: center;

    .product-name {
      font-size: 0.8em;
    }

    .product-supplier {
      font-size: 0.7em;
    }

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

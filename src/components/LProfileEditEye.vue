<template lang="pug">
  div
    l-profile-edit-eye-autocomplete(:product="eye.product", @input="setProduct")
    .columns
      .column
        b-field.is-expanded(label="Set your strength")
          b-input(
          v-model="eye.strength",
          placeholder="e.g. 1.4",
          type="number",
          step=".01"
          icon="bullseye",
          min="-15",
          max="10")
      .column
        b-field(label="Set your inventory")
          b-input(
          v-model="eye.inventory",
          placeholder="e.g. 6",
          type="number",
          icon="archive")
    b-field(label="Additional notes")
      b-input(
      v-model="eye.notes",
      type="textarea",
      maxlength="250",
      has-counter)
</template>

<script>
import LProfileEditEyeAutocomplete from '@/components/LProfileEditEyeAutocomplete';

export default {
  components: { LProfileEditEyeAutocomplete },
  name: 'LProfileEditEye',
  props: {
    eye: {
      type: Object,
      required: true,
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setProduct(product) {
      this.eye.product = product;
    },
  },
};
</script>

<style scoped>

</style>

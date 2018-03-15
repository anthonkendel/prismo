<template lang="pug">
  div
    p-profile-edit-eye-autocomplete(
    :product="eye.product",
    @input="setProduct")
    .columns
      .column
        b-field.is-expanded(label="Set your strength")
          b-input(
          v-model="eye.strength",
          @input="checkHtml5Validity",
          @focus="checkHtml5Validity",
          @focusin="checkHtml5Validity",
          @focusout="checkHtml5Validity",
          placeholder="e.g. 1.4",
          type="number",
          step=".01",
          icon="bullseye",
          min="-15",
          max="10",
          ref="strength")
      .column
        b-field(label="Set your inventory")
          b-input(
          v-model="eye.inventory",
          @input="checkHtml5Validity",
          @focus="checkHtml5Validity",
          @focusin="checkHtml5Validity",
          @focusout="checkHtml5Validity",
          placeholder="e.g. 6",
          type="number",
          icon="archive",
          min="0",
          ref="inventory")
    b-field(label="Additional notes")
      b-input(
      v-model="eye.notes",
      type="textarea",
      maxlength="250",
      has-counter)
</template>

<script>
import PProfileEditEyeAutocomplete from '@/components/PProfileEditEyeAutocomplete';

const VALIDATION = 'validation';

export default {
  name: 'PProfileEditEye',
  components: { PProfileEditEyeAutocomplete },
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
    checkHtml5Validity() {
      const isStrengthValid = this.$refs.strength.checkHtml5Validity();
      const isInventoryValid = this.$refs.inventory.checkHtml5Validity();
      const isInputValid = isStrengthValid && isInventoryValid;
      this.$emit(VALIDATION, isInputValid);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

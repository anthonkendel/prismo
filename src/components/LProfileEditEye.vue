<template lang="pug">
  div
    b-field(label="Find your product")
      b-autocomplete(
      v-model="eye.product",
      :data="filteredDataArray",
      placeholder="e.g. BioInfinity",
      icon="search")
        template(slot="empty") No results found
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
export default {
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
  computed: {
    filteredDataArray() {
      return this.data.filter(option => option
        .toString()
        .toLowerCase()
        .indexOf(this.eye.product.toLowerCase()) >= 0);
    },
  },
  data() {
    return {
      data: [
        'Angular',
        'Angular 2',
        'Aurelia',
        'Backbone',
        'Ember',
        'jQuery',
        'Meteor',
        'Node.js',
        'Polymer',
        'React',
        'RxJS',
        'Vue.js',
      ],
    };
  },
};
</script>

<style scoped>

</style>

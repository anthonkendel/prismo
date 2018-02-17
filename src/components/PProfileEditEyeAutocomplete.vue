<template lang="pug">
  b-field(label="Find your product")
    b-autocomplete(
    v-model="product.name",
    :data="data",
    :loading="isLoading",
    placeholder="e.g. Biofinity",
    field="name",
    icon="search",
    open-on-focus,
    @input="onInput",
    @select="option => selected = option")
      template(slot-scope='props')
        .media
          .media-content
            | {{ props.option.name }}
            br
            small
              | {{ props.option.supplier }}
      template(slot="empty") No results found
</template>

<script>
import { productService } from '@/services';

function hide(elements) {
  // eslint-disable-next-line
    elements.forEach(element => (element.style.display = 'none'));
}

export default {
  name: 'PProfileEditEyeAutocomplete',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: {},
      data: [],
      isLoading: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const dropdowns = this.$el.querySelectorAll('.dropdown-menu');
      hide(dropdowns);
    });
  },
  methods: {
    async onInput() {
      this.data = [];
      this.isLoading = true;

      const products = await productService.getProducts();
      const filteredProducts = products.filter(
        item => item.name.indexOf(this.product.name) >= 0,
      );
      this.data = [...filteredProducts];

      this.isLoading = false;
      if (this.selected) {
        this.$emit('input', this.selected);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

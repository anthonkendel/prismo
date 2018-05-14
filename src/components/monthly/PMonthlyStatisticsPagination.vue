<template lang="pug">
  nav.pagination(
  role="navigation",
  aria-label="pagination")
    button.button.is-primary(
    :disabled="!hasStatisticsForPreviousYear",
    @click="emit('click-previous-year')")
      | Previous year
    button.button.is-primary(
    :disabled="!hasStatisticsForNextYear",
    @click="emit('click-next-year')")
      | Next year
</template>

<script>
import EmitMixin from '@/mixins/EmitMixin';

export default {
  name: 'PMonthlyStatisticsPagination',
  mixins: [EmitMixin],
  props: {
    hasStatisticsForPreviousYear: {
      type: Boolean,
      default: () => false,
    },
    hasStatisticsForNextYear: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

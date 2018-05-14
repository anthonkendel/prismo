<template lang="pug">
  div
    p-monthly-statistics-data(:statistics="statistics")
    p-monthly-statistics-pagination(
    :has-statistics-for-previous-year="hasStatisticsForPreviousYear",
    :has-statistics-for-next-year="hasStatisticsForNextYear",
    @click-previous-year="emit('click-previous-year')",
    @click-next-year="emit('click-next-year')")
</template>

<script>
import EmitMixin from '@/mixins/EmitMixin';
import PMonthlyStatisticsData from '@/components/monthly/PMonthlyStatisticsData';
import PMonthlyStatisticsPagination from '@/components/monthly/PMonthlyStatisticsPagination';

export default {
  name: 'PMonthlyStatistics',
  components: { PMonthlyStatisticsData, PMonthlyStatisticsPagination },
  mixins: [EmitMixin],
  props: {
    statistics: {
      type: Array,
      default: () => [],
    },
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

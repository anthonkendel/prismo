<template lang="pug">
  .columns.is-multiline
    .column.is-3(
    v-for="(statistic, index) in statistics",
    :key="index")
      b {{ statistic.name }} {{ statistic.year }}
      p
        div(v-if="statistics.days > 0")
          small 0
          small.is-pulled-right {{ maxNumberOfDays }}
          progress.progress.is-primary(
          :value="statistic.days"
          :max="maxNumberOfDays")
        div.has-text-danger(v-else)
          small No data available.
</template>

<script>
export default {
  name: 'PMonthlyStatisticsData',
  props: {
    statistics: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    maxNumberOfDays() {
      const allDays = this.statistics.map(statistic => statistic.days);
      return Math.max(...allDays);
    },
  },
};
</script>

<style scoped>

</style>

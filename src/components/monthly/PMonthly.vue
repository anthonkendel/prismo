<template lang="pug">
  .container
    section.section
      .columns
        .column
          .field
            b-field(label="Select a start date")
              b-datepicker(
              placeholder="Click to select...",
              :date-formatter="dateFormatter")
            b-field(label="Select an end date")
              b-datepicker(
              placeholder="Click to select...",
              :date-formatter="dateFormatter")
            button.button.is-primary.is-fullwidth Save
    section.section
      p-monthly-statistics(
      :has-statistics-for-previous-year="hasStatisticsForPreviousYear",
      :has-statistics-for-next-year="hasStatisticsForNextYear",
      :statistics="statisticsForCurrentYear",
      @click-previous-year="onClickPreviousYear()",
      @click-next-year="onClickNextYear()")
</template>

<script>
import PMonthlyStatistics from '@/components/monthly/PMonthlyStatistics';

function getDefaultDataForYear(year) {
  return [
    { year, name: 'January', days: 0 },
    { year, name: 'February', days: 0 },
    { year, name: 'March', days: 0 },
    { year, name: 'April', days: 0 },
    { year, name: 'May', days: 0 },
    { year, name: 'June', days: 0 },
    { year, name: 'July', days: 0 },
    { year, name: 'August', days: 0 },
    { year, name: 'September', days: 0 },
    { year, name: 'October', days: 0 },
    { year, name: 'November', days: 0 },
    { year, name: 'December', days: 0 },
  ];
}

export default {
  name: 'PMonthly',
  components: { PMonthlyStatistics },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      yearlyStatistics: {
        [new Date().getFullYear()]: getDefaultDataForYear(new Date().getFullYear()),
      },
    };
  },
  computed: {
    hasStatisticsForPreviousYear() {
      return !!this.yearlyStatistics[this.currentYear - 1];
    },
    hasStatisticsForNextYear() {
      return !!this.yearlyStatistics[this.currentYear + 1];
    },
    statisticsForCurrentYear() {
      return this.yearlyStatistics[this.currentYear];
    },
  },
  methods: {
    onClickNextYear() {
      this.currentYear = this.currentYear + 1;
    },
    onClickPreviousYear() {
      this.currentYear = this.currentYear - 1;
    },
    dateFormatter(date) {
      const [isoDate] = date.toISOString().split('T');
      return isoDate;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

export default {
  parseToInt(value) {
    return parseInt(value, 10) || 0;
  },
  parseToFloat(value) {
    return parseFloat(value) || 0.0;
  },
};

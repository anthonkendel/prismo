export default {
  open({ vue, message = '', position = 'is-top', type = 'is-primary' }) {
    vue.$toast
      .open({
        message,
        position,
        type,
      });
  },
};

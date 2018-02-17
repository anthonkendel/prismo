export default {
  setPrismoProfile(state, profile) {
    state.prismoProfile = profile;
  },
  setAuthenticated(state, authenticated) {
    state.user.authenticated = authenticated;
  },
};

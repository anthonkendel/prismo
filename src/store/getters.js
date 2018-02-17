export default {
  getPrismoProfile(state) {
    return state.prismoProfile;
  },
  getUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.user.authenticated;
  },
};

export default {
  getPrismoProfile(state) {
    return state.prismoProfile;
  },
  getUser(state) {
    return state.user;
  },
  getUserInfo(state) {
    return state.user.userInfo;
  },
  isAuthenticated(state) {
    return state.user.authenticated;
  },
};

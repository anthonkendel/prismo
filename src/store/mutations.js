import PrismoProfile from '@/shared/models/PrismoProfile';
import UserInfo from '@/shared/models/UserInfo';

export default {
  setPrismoProfile(state, profile) {
    state.prismoProfile = profile;
  },
  setUserInfo(state, userInfo) {
    state.user.userInfo = userInfo;
  },
  setAuthenticated(state, authenticated) {
    state.user.authenticated = authenticated;
  },
  clearStore(state) {
    state.prismoProfile = new PrismoProfile();
    state.user = {
      userInfo: new UserInfo(),
      authenticated: false,
    };
  },
};

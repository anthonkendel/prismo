import PrismoProfile from '@/shared/models/PrismoProfile';
import UserInfo from '@/shared/models/UserInfo';

export default {
  prismoProfile: new PrismoProfile(),
  user: {
    userInfo: new UserInfo(),
    authenticated: false,
  },
};

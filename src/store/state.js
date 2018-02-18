import PrismoProfile from '@/models/PrismoProfile';
import UserInfo from '@/models/UserInfo';

export default {
  prismoProfile: new PrismoProfile(),
  user: {
    userInfo: new UserInfo(),
    authenticated: false,
  },
};

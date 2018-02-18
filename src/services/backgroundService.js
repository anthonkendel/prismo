import authService from '@/services/authService';
import store from '@/store';

const SECOND = 1000;
const INTERVAL = 20 * SECOND;
let VALIDATE_ACCESS_TOKEN_IN_BACKGROUND_INTERVAL = null;

export default {
  start() {
    VALIDATE_ACCESS_TOKEN_IN_BACKGROUND_INTERVAL = setInterval(async () => {
      const authenticated = await authService.validateAccessToken(authService.getAccessToken());
      store.commit('setAuthenticated', authenticated);
    }, INTERVAL);
  },
  stop() {
    clearInterval(VALIDATE_ACCESS_TOKEN_IN_BACKGROUND_INTERVAL);
  },
};

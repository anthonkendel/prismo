import PProfile from '@/components/profile/PProfile';
import PProfileEdit from '@/components/profile/PProfileEdit';
import PProfileView from '@/components/profile/PProfileView';
import PWelcome from '@/components/welcome/PWelcome';
import Router from 'vue-router';
import Vue from 'vue';
import authService from '@/shared/services/authService';
import prismoProfileService from '@/shared/services/prismoProfileService';
import store from '@/store';

Vue.use(Router);

const configuration = {
  mode: 'history',
  routes: [
    {
      path: '/welcome',
      name: 'PWelcome',
      component: PWelcome,
    },
    {
      path: '/',
      name: 'Prismo',
      redirect: { name: 'PProfileView' },
      meta: {
        authentication: true,
      },
    },
    {
      path: '/profile',
      component: PProfile,
      meta: {
        authentication: true,
      },
      children: [
        {
          path: '',
          name: 'PProfileView',
          component: PProfileView,
          meta: {
            authentication: true,
          },
        },
        {
          path: 'edit',
          name: 'PProfileEdit',
          component: PProfileEdit,
          meta: {
            authentication: true,
          },
        },
      ],
    },
  ],
};

const router = new Router(configuration);

async function validateAccessTokenReceivedFromHash(hash) {
  const params = new URLSearchParams(hash.slice(1));
  const accessToken = params.get('access_token');
  if (accessToken) {
    const authenticated = await authService.validateAccessToken(accessToken);
    if (authenticated) {
      authService.setAccessToken(accessToken);
      store.commit('setAuthenticated', authenticated);

      const userInfo = await authService.getUserInfo(accessToken);
      store.commit('setUserInfo', userInfo);

      const profile = await prismoProfileService.getPrismoProfile(accessToken);
      store.commit('setPrismoProfile', profile);

      router.push({ hash: '' });
    }
  }
}

function checkRouteAuthentication(to, from, next) {
  if (to.matched.some(record => record.meta.authentication)) {
    const isAuthenticated = store.getters.isAuthenticated;
    if (isAuthenticated) {
      next();
    } else {
      next({ name: 'PWelcome' });
    }
  } else {
    next();
  }
}

router.beforeEach(async (to, from, next) => {
  await validateAccessTokenReceivedFromHash(to.hash);
  checkRouteAuthentication(to, from, next);
});

export default router;

import PLogin from '@/components/PLogin';
import PProfile from '@/components/PProfile';
import PProfileEdit from '@/components/PProfileEdit';
import PProfileView from '@/components/PProfileView';
import Router from 'vue-router';
import Vue from 'vue';
import authService from '@/services/authService';
import store from '@/store';

Vue.use(Router);

const configuration = {
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'PLogin',
      component: PLogin,
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
      next({ name: 'PLogin' });
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

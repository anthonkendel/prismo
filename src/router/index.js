import LProfile from '@/components/LProfile';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LNS',
      redirect: { name: 'LProfile' },
    },
    {
      path: '/profile',
      name: 'LProfile',
      component: LProfile,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';

import LProfile from '@/components/LProfile';
import LProfileEdit from '@/components/LProfileEdit';
import LProfileView from '@/components/LProfileView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LNS',
      redirect: { name: 'LProfileView' },
    },
    {
      path: '/profile',
      component: LProfile,
      children: [
        {
          path: '',
          name: 'LProfileView',
          component: LProfileView,
        },
        {
          path: 'edit',
          name: 'LProfileEdit',
          component: LProfileEdit,
        },
      ],
    },
  ],
});

import PProfile from '@/components/PProfile';
import PProfileEdit from '@/components/PProfileEdit';
import PProfileView from '@/components/PProfileView';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const configuration = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Prismo',
      redirect: { name: 'PProfileView' },
    },
    {
      path: '/profile',
      component: PProfile,
      children: [
        {
          path: '',
          name: 'PProfileView',
          component: PProfileView,
        },
        {
          path: 'edit',
          name: 'PProfileEdit',
          component: PProfileEdit,
        },
      ],
    },
  ],
};

export default new Router(configuration);

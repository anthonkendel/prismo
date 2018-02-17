import 'buefy/lib/buefy.css';
import App from '@/App';
import Buefy from 'buefy';
import Vue from 'vue';
import { router } from '@/router';

Vue.config.productionTip = false;
Vue.use(Buefy, { defaultIconPack: 'fas' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

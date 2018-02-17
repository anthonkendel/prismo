import 'buefy/lib/buefy.css';
import App from '@/App';
import Buefy from 'buefy';
import Vue from 'vue';
import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;
Vue.use(Buefy, { defaultIconPack: 'fas' });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});

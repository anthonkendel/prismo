import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/store/actions';
import createPersistedState from 'vuex-persistedstate';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import state from '@/store/state';

Vue.use(Vuex);

const KEY = 'PRISMO';
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      key: KEY,
      paths: ['user', 'prismoProfile'],
    }),
  ],
});

export default store;

/**
 * Created by kdkjPC on 2018/3/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import stores from './config.js'
Vue.use(Vuex);

const store = new Vuex.Store(stores);
export default store;

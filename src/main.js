import Vue from 'vue'
import App from './App.vue'


import store from './vuex/store'
import router from './router/router';
import { EventBus } from "./event-bus/event-bus";
//Animation
import { gsap } from 'gsap'
import anim from 'css-animation';
//font-awesome
import { fonts } from './fonts/fonts';
import './assets/styles/styles.scss'
//Video


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store,
  anim,
  fonts,
  gsap,
  EventBus

}).$mount('#app')

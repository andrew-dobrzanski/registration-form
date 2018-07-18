import Vue from 'vue';
import App from './App.vue';
import Registration from './Registration.vue';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.component('app-registration', Registration);

new Vue({
  el: '#app',
  render: h => h(App)
});

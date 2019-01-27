import Vue from 'vue';
import App from './components/App.vue';
import router from './router.js';

new Vue({
  el: "#app",
  template: "<app/>",
  components: { App },
  router
});

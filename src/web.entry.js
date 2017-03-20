// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import weexVueRender from 'weex-vue-render';
weexVueRender.install(Vue);
import App from './App';
import router from './router';
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

//
// import Hello from './Hello.vue';
// Hello.el = '#app';
// new Vue(Hello);

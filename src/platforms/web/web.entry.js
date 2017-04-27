// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import weexVueRender from 'weex-vue-render';
weexVueRender.install(Vue);
import Home from '../../pages/home/index.vue';
new Vue({
  el: '#app',
  template: '<Home/>',
  components: { Home }
});

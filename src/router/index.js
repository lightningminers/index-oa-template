import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/index.vue'

Vue.use(Router);

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    }
];

export default new Router({
    routes: routes
});

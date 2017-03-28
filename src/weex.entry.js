import Hello from './Hello.vue';
var dingtalk = require('./weex-dingtalk.js');
dingtalk.init();
Hello.el = '#app';
new Vue(Hello);


// import Home from './pages/home/index.vue';
// Home.el = '#app';
// new Vue(Home);

//加载vue
import Vue from 'vue'
//加载路由
import VueRouter from 'vue-router'
//引入router.js文件
import routes from './routers.js'

//引入mintui的css
import 'mint-ui/lib/style.css'
import './assets/style/base.scss'
import 'babel-polyfill';
import Mint from 'mint-ui';
import axios from 'axios';

//引入app.vue文件
import App from './App.vue'

Vue.prototype.$http = axios;

//申明使用路由
Vue.use(VueRouter);
//申明使用mint ui框架
Vue.use(Mint);

//创建路由
const router = new VueRouter({
  routes
});

//实例化vue,启动路由，挂载页面
const app = new Vue({
  render: h => h(App),
  router
}).$mount('#app');


import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routeConfig.js'
import stores from './store/store.js'
import axios from 'axios'
import Loading from './components/Loading'
//import filters from './filters/index.js'

//Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
Vue.use(VueRouter);
Vue.use(Loading);

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
	stores.dispatch('showLoading')  
	return config;
}, function (error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
	stores.dispatch('hideLoading')
	return response;
}, function (error) {
	return Promise.reject(error);
});

const router=new VueRouter({
	mode:'history',//切换路径模式，变成history模式
	scrollBehavior:()=>({y:0}), // 滚动条从头开始滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes
})

require('./assets/css/base.css'); //引入全局的base文件

//配置请求根路径
//axios.defaults.baseURL='http://localhost:8080/';

//设置post头部信息
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$http=axios //把axios对象挂到Vue原型上，其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})

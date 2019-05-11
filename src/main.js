import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/sys.css';
import App from './App'
import router from './router'
import axios from 'axios'
import {
	library
} from '@fortawesome/fontawesome-svg-core'
import {
	faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
	FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.prototype.$http = axios

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.config.productionTip = false
Vue.config.productionTip = true
//- 设置全局请求前缀
axios.defaults.baseURL = 'http://localhost:9000'
//- 设置全局超时时间
axios.defaults.timeout = 6000 * 60;

Vue.use(ElementUI);

axios.interceptors.request.use(function(config) {
	var token = window.localStorage.getItem('LTokenD');
	if (!token || token == '') {
		router.replace({
			path: '/'
		})
	} else {
		// 设置全局请求头部信息
		config.headers.common['LTokenD'] = token;
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});
//- 拦截器
axios.interceptors.response.use(function(response) { // 对响应数据做点什么
	if (!response.data.success) {
		if (response.data.message == 'logout') {
			response.data.message = '请从新登录';
			router.push({
				path: '/'
			});
		}
	}
	return response;
}, function(error) { //-  对响应错误做点什么
	if (error.message == 'Network Error') {
		return Promise.reject("服务器挂机");
	} else if (error.message == 'timeout of 6000ms exceeded') {
		return Promise.reject("请求服务器超时");
	} else {
		return Promise.reject(error);
	}
});
//-  路由拦截器
router.beforeEach((to, from, next) => {
	// 获取自定义属性
	// if (to.matched.some(record => record.meta.isLogin)) {
	// 	var token = window.localStorage.getItem('LTokenD');
	// 	if (!token || token == '') {
	// 		router.replace({
	// 			path: '/'
	// 		})
	// 	} else {
	// 		to.matched.forEach(function(e, index) {
	// 			// 权限判断
	// 			next();
	// 		});
	// 		// next();
	// 	}
	// } else {
	// 	next();
	// }
	// 开发阶段
	next();
});

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

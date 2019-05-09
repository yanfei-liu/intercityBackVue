// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import {
	library
} from '@fortawesome/fontawesome-svg-core'
import {
	faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import {
	FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

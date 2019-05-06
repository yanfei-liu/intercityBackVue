import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
			meta: {
				isLogin: false
			}
    },
		{
		  path: '/home',
		  name: 'home',
		  component: home,
			meta: {
				isLogin: true
			}
		}
  ]
})

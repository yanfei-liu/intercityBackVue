import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home/index'
import right from '@/components/home/right'
import personal from '@/components/personal/personal'

// 404
import noFile from '@/components/noFile'

Vue.use(Router)

export default new Router({
	routes: [{
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
			},
			children: [{
					path: 'right',
					name: 'right',
					component: right,
					meta: {
						isLogin: true
					}
				},{
					path: 'personal',
					name: 'personal',
					component: personal,
					meta: {
						isLogin: true
					}
				},




				{
					path: '*',
					name: '404',
					component: noFile,
					meta: {
						isLogin: true
					}
				}
			]
		}
	]
})

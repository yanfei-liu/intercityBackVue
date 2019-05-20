import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home/index'
import right from '@/components/home/right'
import personal from '@/components/personal/personal'
import organization from '@/components/organization/organization'
import department from '@/components/department/department'
import position from '@/components/position/position'
import jurisdiction from '@/components/jurisdiction/jurisdiction'
import sysParameter from '@/components/sysParameter/sysParameter'
import staff from '@/components/staff/staff'
import staffAdd from '@/components/staff/add'
import staffUpdate from '@/components/staff/update'
import gps from '@/components/gps/gps'
import user from '@/components/user/user'
import driver from '@/components/user/driver'
import cars from '@/components/cars/cars'
import orders from '@/components/orders/orders'
import userToDirver from '@/components/usertodirver/userToDirver'

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
				}, {
					path: 'personal',
					name: 'personal',
					component: personal,
					meta: {
						isLogin: true
					}
				}, {
					path: 'organization',
					name: 'organization',
					component: organization,
					meta: {
						isLogin: true
					}
				}, {
					path: 'department',
					name: 'department',
					component: department,
					meta: {
						isLogin: true
					}
				}, {
					path: 'position',
					name: 'position',
					component: position,
					meta: {
						isLogin: true
					}
				}, {
					path: 'jurisdiction',
					name: 'jurisdiction',
					component: jurisdiction,
					meta: {
						isLogin: true
					}
				}, {
					path: 'sysParameter',
					name: 'sysParameter',
					component: sysParameter,
					meta: {
						isLogin: true
					}
				}, {
					path: 'staff',
					name: 'staff',
					component: staff,
					meta: {
						isLogin: true
					}
				}, {
					path: 'staffAdd',
					name: 'staffAdd',
					component: staffAdd,
					meta: {
						isLogin: true
					}
				}, {
					path: 'staffUpdate',
					name: 'staffUpdate',
					component: staffUpdate,
					meta: {
						isLogin: true
					}
				}, {
					path: 'gps',
					name: 'gps',
					component: gps,
					meta: {
						isLogin: true
					}
				}, {
					path: 'user',
					name: 'user',
					component: user,
					meta: {
						isLogin: true
					}
				}, {
					path: 'driver',
					name: 'driver',
					component: driver,
					meta: {
						isLogin: true
					}
				}, {
					path: 'userToDirver',
					name: 'userToDirver',
					component: userToDirver,
					meta: {
						isLogin: true
					}
				}, {
					path: 'cars',
					name: 'cars',
					component: cars,
					meta: {
						isLogin: true
					}
				}, {
					path: 'orders',
					name: 'orders',
					component: orders,
					meta: {
						isLogin: true
					}
				}




				, {
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

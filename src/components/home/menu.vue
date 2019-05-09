<template>
	<div style="height: calc(100vh - 60px) !important;overflow-x: hidden;overflow-y: scroll;width: 230px;">
		<el-row class="tac">
			<el-col :span="24">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
				 text-color="#fff" active-text-color="#ffd04b">
					<el-menu-item index="0" @click="to('right')">
						首页
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>系统设置</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" @click="to('organization')">组织机构</el-menu-item>
							<el-menu-item index="1-2" @click="to('jurisdiction')">权限管理</el-menu-item>
							<el-menu-item index="1-3" @click="to('sysParameter')">系统参数</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>员工管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1" @click="to('staff')">员工管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>客户管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="3-1" @click="to('customer')">用户管理</el-menu-item>
							<el-menu-item index="3-2" @click="to('driver')">司机管理</el-menu-item>
							<el-menu-item index="3-3" @click="to('cars')">车辆管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>车辆监控设备</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1" @click="to('customer')">GPS管理</el-menu-item>
							<el-menu-item index="4-2" @click="to('driver')">监控管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>订单管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="5-1" @click="to('customer')">未完成订单</el-menu-item>
							<el-menu-item index="5-2" @click="to('driver')">订单历史查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>台账</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="6-1" @click="to('customer')">今日入账</el-menu-item>
							<el-menu-item index="6-2" @click="to('driver')">今日出帐</el-menu-item>
							<el-menu-item index="6-3" @click="to('driver')">今日关注量</el-menu-item>
							<el-menu-item index="6-4" @click="to('driver')">今日取消量</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>黑/灰名单</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="7-1" @click="to('customer')">黑名单管理</el-menu-item>
							<el-menu-item index="7-2" @click="to('driver')">灰名单管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="8">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>客户管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="8-1" @click="to('customer')">投诉管理</el-menu-item>
							<el-menu-item index="8-2" @click="to('driver')">疑问订单</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			// 跳转页面
			to: function(url) {
				this.$router.push({
					path: '/home/' + url
				});
			}
		}
	}
</script>

<style>
	.el-submenu__title {
		text-align: left;
	}
</style>

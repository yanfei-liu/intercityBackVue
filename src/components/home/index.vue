<template>
	<div class="index">
		<el-container>
			<el-header>
				<el-row>
					<el-col :span="12">
						<div class="grid-content bg-purple">
							{{msg}}
							参考地址：https://element.eleme.cn/#/zh-CN/component/icon
						</div>
					</el-col>
					<el-col :span="12">
						<div class="grid-content bg-purple-light" style="text-align: right;">
							<span class="el-icon-user-solid a" title="个人中心" @click="to('personal')"></span>
							&nbsp;
							<span class="el-icon-switch-button a" title="注销" @click="logout"></span>
						</div>
					</el-col>
				</el-row>
			</el-header>
			<el-container>
				<el-aside width="210px">
					<menus></menus>
				</el-aside>
				<el-container>
					<el-main>
						<router-view/>
					</el-main>
					<el-footer>
						版权所有@2019
					</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import menus from '@/components/home/menu.vue';
	export default {
		name: 'index',
		data() {
			return {
				msg: '城际快车后台管理系统'
			}
		},
		components: {
			menus
		},
		methods: {
			logout: function() {
				this.$router.push({
					path: '/'
				});
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.el-header,
	.el-footer {
		background-color: #409EFF;
		color: floralwhite;
		text-align: left;
		line-height: 60px;
		padding: 0 15px;
	}

	.el-footer {
		height: 30px !important;
		line-height: 30px;
		text-align: right;
		font-size: 12px;
	}

	.el-aside {
		background-color: rgb(84, 92, 100);
		color: #333;
		text-align: center;
		/* height: calc(100vh - 60px) !important; */
		line-height: calc(100vh - 60px);
		overflow: hidden;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: left;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.a:hover {
		cursor: pointer;
		color: #42B983;
	}

	.el-main{
		padding: 5px;
	}
</style>

<template>
	<div class="index">
		<el-container>
			<el-main>
				<h1>{{msg}}</h1>
				<div style="width: 300px;margin-left: 70%;height: 50px;">
					<el-input placeholder="请输入账号" v-model="account">
						<template slot="prepend">账号</template>
					</el-input>
				</div>
				<div style="width: 300px;margin-left: 70%;height: 50px;">
					<el-input placeholder="请输入密码" v-model="password" show-password>
						<template slot="prepend">密码</template>
					</el-input>
				</div>
				<div style="width: 300px;margin-left: 70%;">
					<button type="button" class="el-button el-button--primary is-plain" style="width: 100%;" @click="login">
						<span>主要按钮</span>
					</button>
				</div>
			</el-main>
			<el-footer>
				版权所有@2019
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: '城际快车后台管理系统',
				account: '',
				password: ''
			}
		},
		methods: {
			login: function() {
				this.$router.push({
					path: '/home'
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
		color: rgb(179, 216, 255);
		;
		text-align: left;
		line-height: 60px;
	}

	.el-footer {
		height: 30px !important;
		line-height: 30px;
		text-align: right;
		font-size: 12px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: calc(100vh - 60px);
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: left;
		line-height: 160px;
		height: calc(100vh - 30px) !important;
		overflow-y: hidden !important;
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
</style>

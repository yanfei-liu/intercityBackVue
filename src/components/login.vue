<template>
	<div class="index" :style="{backgroundImage:'url('+url+')'}" style="background-size: 100% 100%">
		<el-container>
			<el-main>
				<span class="title">{{msg}}</span>
				<div style="margin-left: 70%;margin-top: 13%;">
					<div style="width: 300px;height: 50px;">
						<el-input placeholder="请输入账号" v-model="account">
							<template slot="prepend">账号</template>
						</el-input>
					</div>
					<div style="width: 300px;height: 50px;">
						<el-input placeholder="请输入密码" v-model="password" show-password>
							<template slot="prepend">密码</template>
						</el-input>
					</div>
					<div style="width: 300px;">
						<button type="button" class="el-button el-button--primary is-plain" style="width: 100%;" @click="login">
							<span>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;陆</span>
						</button>
					</div>
				</div>
			</el-main>
			<el-footer>
				版权所有@2019
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import Img from '@/assets/loginBack.jpg'
	export default {
		name: 'index',
		data() {
			return {
				msg: '城际快车后台管理系统',
				account: '',
				password: '',
				url: Img
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
	.el-footer {
		background-color: #409EFF;
		color: rgb(179, 216, 255);
		height: 30px !important;
		line-height: 30px;
		text-align: right;
		font-size: 12px;
	}

	.el-main {
		color: #333;
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
	.title{
		color: #42B983;
		font-size: 40px;
	}
</style>

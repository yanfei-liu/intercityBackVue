<template>
	<el-container>
		<el-header>
		</el-header>
		<el-main>
			<el-form :model="form" label-width="80px">
				<el-row>
					<el-col class="line" :span="6">
						<el-form-item label="姓名">
							<el-input v-model="form.name" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="6">
						<el-form-item label="账号">
							<el-input disabled v-model="form.account" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="6">
						<el-form-item label="密码">
							<el-input v-model="form.password" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="6">
						<el-form-item label="状态">
							<el-select v-model="form.state" placeholder="请选择">
								<el-option label="在职" value="1"></el-option>
								<el-option label="长期休假" value="2"></el-option>
								<el-option label="离职" value="3"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col class="line" :span="8">
						<el-form-item label="入职日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="form.entryDate" style="width: 100%;"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="8">
						<el-form-item label="转正日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="form.vacationDate" style="width: 100%;"></el-date-picker>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="8">
						<el-form-item label="离职日期">
							<el-date-picker type="date" placeholder="选择日期" v-model="form.quitDate" style="width: 100%;" disabled></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col class="line" :span="8">
						<el-form-item label="户籍">
							<el-input v-model="form.name" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="8">
						<el-form-item label="现住址">
							<el-input v-model="form.account" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="8">
						<el-form-item label="联系电话">
							<el-input v-model="form.password" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col class="line" :span="8">
						<el-form-item label="紧急联系人">
							<el-input v-model="form.name" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="8">
						<el-form-item label="紧急联系电话">
							<el-input v-model="form.account" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="8">
						<el-form-item label="紧急联系地址">
							<el-input v-model="form.password" placeholder="请输入内容"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-form-item label="备注">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="save">确定</el-button>
					<el-button type="primary" @click="toBack">返回</el-button>
				</el-form-item>
			</el-form>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'staffUpdate',
		data() {
			return {
				form: {
					name: '',
					account: '',
					password: '',
					state: '1',
					entryDate: '',
					vacationDate: '',
					quitDate: ''
				}
			}
		},
		components: {},
		mounted: function() {},
		methods: {
			save: function() {
				this.$message({
					type: 'success',
					message: '成功!'
				});
			},
			toBack: function() {
				this.$router.push({
					path: '/home/staff'
				});
			}
		}
	}
</script>

<style>
</style>

<template>
	<el-container>
		<el-header>
			<el-form :inline="true" :model="form" class="demo-form-inline">
				<el-form-item label="员工名称">
					<el-input v-model="form.name" placeholder="员工名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="page(1)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-header>
		<el-main>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="入职时间">
								<span>{{ props.row.entryDate }}</span>
							</el-form-item>
							<el-form-item label="转正时间">
								<span>{{ props.row.vacationDate }}</span>
							</el-form-item>
							<el-form-item label="离职时间">
								<span>{{ props.row.quitDate }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="序号">
					<template slot-scope="scope">
						{{scope.$index + 1}}
					</template>
				</el-table-column>
				<el-table-column label="员工名称" prop="name">
				</el-table-column>
				<el-table-column label="状态" prop="state">
				</el-table-column>
				<el-table-column label="联系电话" prop="account">
				</el-table-column>
				<el-table-column label="紧急联系电话" prop="account">
				</el-table-column>
				<el-table-column align="right">
					<template slot="header" slot-scope="scope">
						<button type="button" class="el-button el-button--success" @click="toAdd">
							<i class="el-icon-circle-plus"></i>
						</button>
					</template>
					<template slot-scope="scope">
						<el-button-group>
							<button v-if="scope.row.state != '离职'" type="button" class="el-button el-button--warning" @click="toUpdate(scope)">
								<i class="el-icon-edit"></i>
							</button>
							<button v-if="scope.row.state != '离职'" type="button" class="el-button el-button--danger" @click="toDelete(scope)">
								<i class="el-icon-delete"></i>
							</button>
						</el-button-group>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
		<el-footer>
			<pageUtils ref="refPage"></pageUtils>
		</el-footer>
	</el-container>
</template>

<script>
	import pageUtils from '../utils/pageUtils/pageUtils.vue';
	export default {
		name: 'staff',
		data() {
			return {
				tableData: [{
					uuid: '1',
					name: '张三',
					account: 'zhangsan',
					password: '',
					state: '在职',
					entryDate: '2019-05-11',
					vacationDate: '',
					quitDate: ''
				}, {
					uuid: '2',
					name: '张三',
					account: 'zhangsan',
					password: '',
					state: '长期休假',
					entryDate: '2019-05-11',
					vacationDate: '',
					quitDate: ''
				}, {
					uuid: '3',
					name: '张三',
					account: 'zhangsan',
					password: '',
					state: '离职',
					entryDate: '2019-05-11',
					vacationDate: '',
					quitDate: ''
				}, {
					uuid: '4',
					name: '张三',
					account: 'zhangsan',
					password: '',
					state: '在职',
					entryDate: '2019-05-11',
					vacationDate: '',
					quitDate: ''
				}],
				form: {
					name: '',
					account: '',
					password: '',
					state: '1',
					entryDate: '',
					vacationDate: '',
					quitDate: ''
				},
				pages: {
					totalElements: 4, //总条数
					totalPages: 1, //总页数
					numbers: [], //页数工具条
					nowNumber: 1 //当前页数
				}
			}
		},
		components: {
			pageUtils
		},
		mounted: function() {
			this.page(1);
		},
		methods: {
			page: function(p) {
				// 利用p当前页数请求数据
				// 返回的分页信息赋值给pages
				// this.$refs.pageUtils.pageInit(pages);
				this.$refs.refPage.pageInit(this.$data.pages);
				this.$message({
					type: 'success',
					message: '成功!'
				});
			},
			toAdd: function() {
				this.$router.push({
					path: '/home/staffAdd'
				});
			},
			toUpdate: function(scope) {
				this.$router.push({
					path: '/home/staffUpdate'
				});
			},
			toDelete: function(scope) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		}
	}
</script>

<style scoped>
	.demo-table-expand {
		font-size: 0;
	}

	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}

	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>

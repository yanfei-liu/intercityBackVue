<template>
	<el-container>
		<el-header>
			<el-form :inline="true" :model="form" class="demo-form-inline">
				<el-form-item label="参数名称">
					<el-input placeholder="参数名称"></el-input>
				</el-form-item>
				<el-form-item label="参数标识">
					<el-input placeholder="参数标识"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="page(1)">查询</el-button>
				</el-form-item>
			</el-form>
		</el-header>
		<el-main>
			<el-table :data="tableData" style="width: 100%">
				<!-- <el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="商品名称">
								<span>{{ props.row.name }}</span>
							</el-form-item>
							<el-form-item label="所属店铺">
								<span>{{ props.row.shop }}</span>
							</el-form-item>
							<el-form-item label="商品 ID">
								<span>{{ props.row.id }}</span>
							</el-form-item>
							<el-form-item label="店铺 ID">
								<span>{{ props.row.shopId }}</span>
							</el-form-item>
							<el-form-item label="商品分类">
								<span>{{ props.row.category }}</span>
							</el-form-item>
							<el-form-item label="店铺地址">
								<span>{{ props.row.address }}</span>
							</el-form-item>
							<el-form-item label="商品描述">
								<span>{{ props.row.desc }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column> -->
				<el-table-column label="序号">
					<template slot-scope="scope">
						{{scope.$index + 1}}
					</template>
				</el-table-column>
				<el-table-column label="参数名称" prop="depName">
				</el-table-column>
				<el-table-column label="参数标识" prop="depName">
				</el-table-column>
				<el-table-column label="参数值" prop="depName">
				</el-table-column>
				<el-table-column align="right">
					<template slot="header" slot-scope="scope">
						<button type="button" class="el-button el-button--success" @click="toAdd">
							<i class="el-icon-circle-plus"></i>
						</button>
					</template>
					<template slot-scope="scope">
						<el-button-group>
							<button type="button" class="el-button el-button--warning" @click="toUpdate(scope)">
								<i class="el-icon-edit"></i>
							</button>
							<button type="button" class="el-button el-button--danger" @click="toDelete(scope)">
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
		<!-- 弹框 -->
		<el-dialog :title="dialogsTitle" :visible.sync="dialogs">
			<el-form :model="form">
				<el-form-item label="参数名称" label-width="120px">
					<el-input v-model="form.depName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="参数标识" label-width="120px">
					<el-input v-model="form.depName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="参数值" label-width="120px">
					<el-input v-model="form.depName" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogs = false">取 消</el-button>
				<el-button type="primary" @click="dialogs = false">确 定</el-button>
			</div>
		</el-dialog>
	</el-container>
</template>

<script>
	import pageUtils from '../utils/pageUtils/pageUtils.vue';
	export default {
		name: 'sysParameter',
		data() {
			return {
				tableData: [{
					uuid: '1',
					depName: '研发部'
				}, {
					uuid: '2',
					depName: '运维部'
				}, {
					uuid: '3',
					depName: '市场部'
				}, {
					uuid: '4',
					depName: '办公室'
				}],
				form: {
					depName: ''
				},
				dialogs: false,
				dialogsTitle: '',
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
				this.$data.dialogs = true;
				this.$data.dialogsTitle = "新增参数";
			},
			toUpdate: function(scope) {
				this.$data.dialogs = true;
				this.$data.dialogsTitle = "修改参数";
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

<template>
	<el-container>
		<el-header>
			<el-form :inline="true" :model="form" class="demo-form-inline">
				<el-form-item label="微信标识">
					<el-input v-model="form.weChatId" placeholder="微信标识"></el-input>
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
							<el-form-item label="车辆颜色">
								<span>{{ props.row.carColour }}</span>
							</el-form-item>
							<el-form-item label="车辆品牌">
								<span>{{ props.row.carBrandId }}</span>
							</el-form-item>
							<el-form-item label="车辆型号">
								<span>{{ props.row.carTypeId }}</span>
							</el-form-item>
							<el-form-item label="车辆准乘数量">
								<span>{{ props.row.carSeatSize }}</span>
							</el-form-item>
							<el-form-item label="车辆类型">
								<span>{{ props.row.carClassificationId }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column label="序号">
					<template slot-scope="scope">
						{{scope.$index + 1}}
					</template>
				</el-table-column>
				<el-table-column label="微信标识" prop="weChatId">
				</el-table-column>
				<el-table-column label="车牌号前缀" prop="carRelgionId">
				</el-table-column>
				<el-table-column label="车牌号后缀" prop="licensePlateEnd">
				</el-table-column>
				<el-table-column align="right">
					<template slot="header" slot-scope="scope">

					</template>
					<template slot-scope="scope">

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
		name: 'cars',
		data() {
			return {
				tableData: [{
					uuid: '1',
					weChatId: 'ljl546sfd3sd3ds',
					carRelgionId: '冀',
					licensePlateEnd: '369GH',
					carColour: '红色',
					carBrandId: '斯堪尼亚',
					carTypeId: 'S750',
					carSeatSize: 5,
					carClassificationId: 'SUV'
				}, {
					uuid: '2',
					weChatId: 'ljl546sfd3sd3ds',
					carRelgionId: '冀',
					licensePlateEnd: '369GH',
					carColour: '红色',
					carBrandId: '斯堪尼亚',
					carTypeId: 'S750',
					carSeatSize: 5,
					carClassificationId: 'SUV'
				}, {
					uuid: '3',
					weChatId: 'ljl546sfd3sd3ds',
					carRelgionId: '冀',
					licensePlateEnd: '369GH',
					carColour: '红色',
					carBrandId: '斯堪尼亚',
					carTypeId: 'S750',
					carSeatSize: 5,
					carClassificationId: 'SUV'
				}, {
					uuid: '4',
					weChatId: 'ljl546sfd3sd3ds',
					carRelgionId: '冀',
					licensePlateEnd: '369GH',
					carColour: '红色',
					carBrandId: '斯堪尼亚',
					carTypeId: 'S750',
					carSeatSize: 5,
					carClassificationId: 'SUV'
				}],
				form: {
					weChatId: '',
					carRelgionId: '',
					licensePlateEnd: ''
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

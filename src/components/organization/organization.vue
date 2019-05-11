<template>
	<div>
		<el-container>
			<el-header>
			</el-header>
			<el-main>
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'organization',
		data() {
			return {
				data: [{
					label: 'xxx模块',
					children: [{
						label: 'xx新增',
						children: [{
							label: 'xx详情'
						}]
					}, {
						label: 'xx修改',
						children: [{
							label: '三级 1-1-1'
						}]
					}, {
						label: 'xx删除',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		components: {},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			}
		}
	}
</script>

<style scoped>

</style>

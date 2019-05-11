<template>
	<!-- 警告框 -->
	<el-alert :title="titles" :type="types">
	</el-alert>
	<!-- <el-alert :title="titles" type="error" v-if="isError">
	</el-alert>
	<el-alert :title="titles" type="info" v-if="isInfo">
	</el-alert>
	<el-alert :title="titles" type="warning" v-if="isWarning">
	</el-alert> -->
</template>

<script>
	export default {
		name: 'alert',
		props:['types','titles'],
		data() {
			return {
			}
		},
		components: {},
		methods: {
		}
	}
</script>

<style>
</style>

<template>
	<div class="index" :style="note">
		<h5>{{msg}}</h5>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				msg: '城际快车后台管理系统',
				note: {
					backgroundImage: 'url(' + require('../assets/backcar.jpg') + ')',
					width: '99vw',
					height: '97vh',
					backgroundSize: '100vw 100vh',
					margin: '0 !important',
					border:'0 !important'
				},
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h5{
		margin: 0;
		border: 0;
	}
</style>

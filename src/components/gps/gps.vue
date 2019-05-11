<template>
	<div>
		<div id="container"></div>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			this.aMap();
		},
		methods: {
			aMap: function() {
				var map = new AMap.Map('container', {
					zoom: 11, //级别
					// center: [116.397428, 39.90923], //中心点坐标
					// viewMode: '3D' //使用3D视图
					
				});
				//实时路况图层
				var trafficLayer = new AMap.TileLayer.Traffic({
					zIndex: 10
				});
				map.add(trafficLayer); //添加图层到地图
			}
		}
	}
</script>

<style>
	#container {
		width: calc(100vw - 220px);
		height: calc(100vh - 100px);
	}
</style>

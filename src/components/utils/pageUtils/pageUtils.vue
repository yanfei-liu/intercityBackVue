<template>
	<el-button-group>
		<el-button disabled>
			总页数：{{pages.totalPages}}
		</el-button>
		<el-button disabled>
			总条数：{{pages.totalElements}}
		</el-button>
		<el-button :disabled="pages.nowNumber == 1" @click="click_page_up">
			上一页
		</el-button>
		<el-button v-for="item in pages.numbers" 
		:key="item" 
		:style="pages.nowNumber == item ? pageColor : ''"
		 @click="click_page_to(item)"
		>
			{{item}}
		</el-button>
		<el-button :disabled="pages.totalPages == pages.nowNumber" @click="click_page_dow">
			下一页
		</el-button>
	</el-button-group>
</template>

<script>
	export default {
		data() {
			return {
				pages: {
					totalElements: 25, //总条数
					totalPages: 5, //总页数
					numbers: [1, 2, 3, 4, 5], //页数工具条
					nowNumber: 1 //当前页数
				},
				pageColor: {
					'color': '#FFFFFF',
					'backgroundColor': '#66b1ff'
				}
			}
		},
		components: {},
		methods: {
			// page赋值
			pageInit:function(pages){
				this.$data.pages = pages;
			},
			// 上一页
			click_page_up:function(){
				this.$parent.page(this.$data.pages.nowNumber - 1);
			},
			// 下一页
			click_page_dow:function(){
				this.$parent.page(this.$data.pages.nowNumber + 1);
			},
			// 跳转制定页
			click_page_to:function(p){
				this.$parent.page(p);
			}
		}
	}
</script>

<style scoped>
</style>

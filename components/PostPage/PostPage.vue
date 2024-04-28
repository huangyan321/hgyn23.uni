<template>
	<view class="page-posts">
		<scroll-view class="listview" style="flex: 1;" enableBackToTop="true" scroll-y @scrolltolower="loadMore()">
			<view v-for="(item , index) in dataList" :key="item.id">
				<PostPageItem :post-item="item" @click="goDetail(item)"></PostPageItem>
			</view>
		</scroll-view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import PostPageItem from './PostPageItem.vue'
	interface IProps {
		tabId : number
	}
	defineProps<IProps>()

	// 数据处理

	const dataList = ref([{ id: 1, content: '这是一篇文章' }])
	function loadData() {
		console.log('loadData');
	}
	// 处理页面跳转

	function goDetail(item : any) {

	}
	// 处理上拉加载
	function loadMore() { }
	// 处理下拉刷新
	const refreshIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
	const isLoading = ref(false)
	// function refreshData() {
	// 	if (isLoading) {
	// 		return;
	// 	}
	// 	this.pulling = true;
	// 	this.refreshing = true;
	// 	this.refreshText = "正在刷新...";
	// 	this.loadData(true);
	// },

	defineExpose({ loadData, dataList })
</script>

<style scoped lang="scss">
	@import "./styles/page.scss"
</style>
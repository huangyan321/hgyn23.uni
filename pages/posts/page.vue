<template>
	<view class="page-posts">

		<scroll-view class="listview" enable-flex enableBackToTop scroll-y @scrolltolower="loadMore()">

			<view v-for="(item , index) in dataList" :key="item.id">
				<PageItem :post-item="item" @click="goDetail(item)">
				</PageItem>
			</view>
			<LoadMore :status="loadMoreStatus"></LoadMore>
		</scroll-view>
		<NoData class="no-data" v-if="isNoData" @retry="loadMore"></NoData>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref, } from 'vue'
	import NoData from '@/components/NoData/NoData.nvue'
	import { getPostList } from '@/api';
	interface IProps {
		tabId ?: number
	}
	const props = defineProps<IProps>()
	// 数据处理
	const isNoData = ref(false)
	const dataList = ref([])
	const requestParams = reactive({
		page: 1,
		page_size: 6
	})

	const loadMoreStatus = ref<'more' | 'loading' | 'noMore'>('loading')
	async function loadData(type : 'init' | 'incr') {
		if (loadMoreStatus.value === 'noMore') return

		loadMoreStatus.value = 'loading'

		const res = await getPostList({
			...requestParams,
			category_id: props.tabId,
		}, 500)
		const records = res.data.records as any[]
		if (records.length) {
			switch (type) {
				case 'incr':
					dataList.value.push(...records)
					break
				default:
					dataList.value = records
					break
			}
			loadMoreStatus.value = 'more'
		} else {
			loadMoreStatus.value = 'noMore'
		}

	}

	function clearData() {
		dataList.value.length = 0;
		requestParams.page = 1
		requestParams.page_size = 6
	}
	// 处理页面跳转

	function goDetail(detail : any) {
		uni.navigateTo({
			url: '/pages/post-detail/index?query=' + encodeURIComponent(JSON.stringify({ title: detail.title, id: detail.id }))
		});
	}
	// 处理上拉加载
	function loadMore() {
		requestParams.page++
		loadData('incr')
	}
	// 处理下拉刷新
	const refreshIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="
	// function refreshData() {
	// 	if (isLoading) {
	// 		return;
	// 	}
	// 	this.pulling = true;
	// 	this.refreshing = true;
	// 	this.refreshText = "正在刷新...";
	// 	this.loadData(true);
	// },

	defineExpose({ loadData, dataList, clear: clearData })
</script>

<style scoped lang="scss">
	.no-data {
		flex: 1;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
	}

	.page-posts {
		flex: 1;
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}

	.listview {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		/* #ifndef MP-ALIPAY */
		flex-direction: column;
		/* #endif */
	}

	.refresh {
		justify-content: center;
	}

	.refresh-view {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		width: 750rpx;
		height: 64px;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}

	.refresh-icon {
		width: 32px;
		height: 32px;
		transition-duration: .5s;
		transition-property: transform;
		transform: rotate(0deg);
		transform-origin: 15px 15px;
	}

	.refresh-icon-active {
		transform: rotate(180deg);
	}

	.loading-icon {
		width: 28px;
		height: 28px;
		margin-right: 5px;
		color: gray;
	}

	.loading-text {
		margin-left: 2px;
		font-size: 16px;
		color: #999999;
	}

	.loading-more {
		align-items: center;
		justify-content: center;
		padding-top: 14px;
		padding-bottom: 14px;
		text-align: center;
	}

	.loading-more-text {
		font-size: 28upx;
		color: #999;
	}
</style>
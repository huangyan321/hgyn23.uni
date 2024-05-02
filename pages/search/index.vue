<template>
	<view class="search-container">
		<NavBar v-model:searchText="requestParams.title" @confirm="search" is-search-mode></NavBar>
		<view class="search-wrapper">
			<!-- 没有进行搜索操作 -->
			<view v-if="!isSearchingMode" class="search-history-container">
				<!-- 头部 -->
				<view class="search-header">
					<text class="history-text">搜索历史</text>
					<text class="history-clean" @click="cleanHistory">清空</text>
				</view>
				<!-- 内容部分 -->
				<view v-if="publicStore.searchHistoryGetter.length" class="search-content">
					<view class="search-item" v-for="record in publicStore.searchHistoryGetter" :key="record"
						@click="historyClickHandler(record)">
						{{record}}
					</view>
				</view>
				<!-- 没有内容 -->
				<view v-else class="no-data">
					当前没有搜索历史
				</view>
			</view>
			<!-- 开始搜索操作 -->
			<view v-else class="search-list-container">
				<!-- 搜索到内容 -->
				<view v-if="dataList.length && !isLoading" class="search-item">
					<PageItem v-for="item in dataList" :key="item.id" :post-item="item" @click="goDetail(item)">
					</PageItem>
				</view>
				<!-- 正在搜索 -->
				<LoadMore v-else-if="isLoading" :content-text="loadMoreContext" :status="loadMoreStatus"></LoadMore>
				<!-- 没有搜索到内容 -->
				<view v-else class="no-data">
					没有搜索到相关数据哦
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import { getPostList } from '@/api'
	import { reactive, ref, watch } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { usePublicStore } from '@/store/public';
	const publicStore = usePublicStore()
	const dataList = ref<any[]>([])
	const requestParams = reactive({
		page: 1,
		page_size: 999,
		title: ''
	})
	const loadMoreStatus = ref<'more' | 'loading' | 'noMore'>('loading')
	const isLoading = ref(false)
	const isSearchingMode = ref(false)
	const loadMoreContext = {
		contentrefresh: '正在搜索...',
	}

	async function search() {
		if (!requestParams.title || (typeof requestParams.title === 'string') ? !requestParams.title.trim() : false) return isSearchingMode.value = false
		dataList.value = []
		isLoading.value = true
		isSearchingMode.value = true
		publicStore.setSearchHistory(requestParams.title)
		const res = await getPostList(requestParams, 500)
		const records = res.data.records as any[]
		if (records.length) {
			dataList.value = records
		} else {
			loadMoreStatus.value = "noMore"
		}
		isLoading.value = false

	}
	onLoad(() => {
		isSearchingMode.value = false
	})
	// 处理页面跳转

	function goDetail(detail : any) {
		uni.navigateTo({
			url: '/pages/post-detail/index?query=' + encodeURIComponent(JSON.stringify({ title: detail.title, id: detail.id }))
		});
	}
	function historyClickHandler(record : string) {
		requestParams.title = record
		search()
	}
	function cleanHistory() {
		uni.showModal({
			title: '删除全部搜索历史？',
			confirmText: '全部删除',
			cancelText: '取消'
		}).then(() => {
			publicStore.cleanSearchHistory()
		})
	}
</script>
<style scoped lang="scss">
	.search-container {
		flex: 1;
		width: 100%;
		@include flex(flex-start, column);

		.search-wrapper {
			width: 100%;
			background-color: #ffffff;
			margin-bottom: 20rpx;

			.search-header {
				@include flex();
				font-size: 28rpx;
				padding: 20rpx 30rpx;
				border-bottom: 1px solid #f5f5f5;

				.history-text {
					color: $base-color;
				}

				.history-clean {
					color: #30b33a;
					font-weight: bold;
				}

			}

			.search-content {
				@include flex(flex-start, row, wrap);
				padding: 30rpx;
				padding-top: 0%;

				.search-item {
					border: 1px solid #666;
					border-radius: 10rpx;
					margin-top: 24rpx;
					margin-right: 18rpx;
					padding: 6rpx 20rpx;
					font-size: 28rpx;
					color: #666;
				}
			}

			.no-data {
				height: 400rpx;
				width: 100%;
				color: #666;
				font-size: 28rpx;
				@include flex(center, row, nowrap)
			}
		}
	}
</style>
<style lang="scss">
	page {
		background-color: #f5f5f5;
		display: flex;
		height: 100%;
	}
</style>
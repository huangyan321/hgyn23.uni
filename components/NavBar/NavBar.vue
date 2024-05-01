<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<view v-if="isSearchMode" class="back-icon" @click="back">
				<uni-icons type="back" size="26" color="#fff"></uni-icons>
			</view>
			<view @click="goSearchPage" class="nav-bar-content"
				:style="{marginRight:marginRight + 'rpx', marginLeft: isSearchMode ? '30rpx' : ''}">
				<uni-icons class="nav-bar-search-icon" type="search" color="#999"></uni-icons>
				<view v-if="!isSearchMode" class="nav-bar-search-placeholder">输入文章标题进行搜索</view>
				<template v-else>
					<input focus class="nav-bar-search-input" type="text" placeholder="输入文章标题进行搜索" confirm-type="search"
						:value="searchText" @confirm="confirmInput" @input="changeInput" />
					<uni-icons v-if="showClearIcon" type="close" size="22" color="#333"
						@click="changeInput"></uni-icons>
				</template>
			</view>
		</view>
		<!-- 底部垫片 -->
		<view :style="{ height: 80 + statusHeight + 'rpx'}"></view>
	</view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	const props = withDefaults(defineProps<{
		isSearchMode ?: boolean;
		searchText : string
	}>(), {
		isSearchMode: false,
		searchText: ''
	})
	const emit = defineEmits(['update:searchText', 'confirm'])
	const statusHeight = ref(40)
	const marginRight = ref(0)
	const showClearIcon = ref(false)

	function initStatusBarHeight() {
		const systemInfo = uni.getSystemInfoSync()
		statusHeight.value = systemInfo.statusBarHeight ? systemInfo.statusBarHeight * 2 : 20;
		/* 如果是小程序的话，进行胶囊处理*/
		// #ifdef MP-WEIXIN
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
		marginRight.value = menuButtonInfo.width * 2
		statusHeight.value = menuButtonInfo.top * 2
		// #endif
	}
	function goSearchPage() {
		if (props.isSearchMode) return
		uni.navigateTo({
			url: '/pages/search/index'
		})
	}
	function changeInput(e : any) {
		const value = e ? e.detail.value : ''
		emit('update:searchText', value)
		if (value.length > 0) {
			showClearIcon.value = true
		} else {
			showClearIcon.value = false
		}
	}
	function confirmInput() {
		emit('confirm')
	}
	function back() {
		// #ifdef H5
		uni.switchTab({
			url: '../../pages/posts/index'
		})
		// #endif
		// #ifndef H5
		uni.navigateBack()
		// #endif
	}
	onLoad(() => {
		initStatusBarHeight()
	})
</script>

<style scoped lang="scss">
	.nav-bar {
		.nav-bar-top {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $base-color;
			padding: 0px 30rpx 20rpx;
			box-sizing: border-box;

			.nav-bar-content {
				@include flex(flex-start);
				height: 60rpx;
				background-color: #fff;
				border-radius: 30rpx;
				flex-grow: 1;
				padding-left: 20rpx;
				box-sizing: border-box;
			}

			.nav-bar-search-placeholder {
				width: 100%;
				font-size: 14px;
				color: #999;
				margin-left: 20rpx;
			}

			.nav-bar-search-input {
				width: 100%;
				font-size: 14px;
				color: #333;
				margin-left: 20rpx;
			}
		}

		.back-icon {
			@include flex(center);
			position: absolute;
			left: 1%;
			height: 60rpx;

		}
	}
</style>
<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<view :style="{height:statusHeight + 'rpx'}"></view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight:marginRight + 'rpx'}">
				<uni-icons class="nav-bar-search-icon" type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-placeholder">输入文章标题进行搜索</view>
			</view>
		</view>
		<!-- 底部垫片 -->
		<view :style="{ height: 80 + statusHeight + 'rpx'}"></view>
	</view>
</template>

<script lang="ts" setup>
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'

	const statusHeight = ref(40)
	const marginRight = ref(0)

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
		uni.navigateTo({
			url: '/pages/search/index'
		})
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
		}
	}
</style>
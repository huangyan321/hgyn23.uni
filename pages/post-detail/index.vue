<template>
	<view class="post-detail">
		<zero-markdown-view themeColor="#222" :markdown="dataDetail"></zero-markdown-view>
	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref, } from 'vue';
	import { getPostDetail } from '@/api';
	interface IProps {
	}
	defineProps<IProps>()

	const banner = ref<any>()
	const dataDetail = ref()
	async function load(queryStr : string) {
		var p = decodeURIComponent(queryStr);
		try {
			banner.value = JSON.parse(p);
		} catch (error) {
			banner.value = JSON.parse(p);
		}
		uni.showToast({
			icon: 'loading',
			title: '获取中...',
			mask: true
		})
		await uni.setNavigationBarTitle({
			title: banner.value.title
		});

		await getDetail();
		uni.hideToast()
	}
	async function getDetail() {
		const res = await getPostDetail(banner.value.id)
		dataDetail.value = res.data.content
	}
	onLoad((event) => {
		// 目前在某些平台参数会被主动 decode，暂时这样处理。

		load(event.query);
	})
</script>

<style scoped lang="scss">
	.post-detail {
		width: 100%;
		font-size: 30rpx;
		padding: 30rpx;
		box-sizing: border-box;
		letter-spacing: initial !important;
	}
</style>
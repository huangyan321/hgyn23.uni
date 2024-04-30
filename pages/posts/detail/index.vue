<template>
	<view class="post-detail">
		<zero-markdown-view themeColor="#222" :markdown="dataDetail"></zero-markdown-view>
	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref, nextTick } from 'vue';
	import { getPost } from '@/api';
	import marked from '@/utils/marked'
	interface IProps {
	}
	defineProps<IProps>()

	const banner = ref<any>()
	const dataDetail = ref()
	function load(queryStr : string) {
		var p = decodeURIComponent(queryStr);
		try {
			banner.value = JSON.parse(p);
		} catch (error) {
			banner.value = JSON.parse(p);
		}
		uni.setNavigationBarTitle({
			title: banner.value.title
		});

		getDetail();
	}
	async function getDetail() {
		uni.showToast({
			icon: 'loading',
			title: '获取中...',
			mask: true
		})
		const res = await getPost(banner.value.id)
		dataDetail.value = res.data.content
		nextTick(() => {
			uni.hideToast()
		})
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
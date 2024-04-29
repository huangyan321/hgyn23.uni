<template>
	<view class="post-detail">
		这里是文章详情页面
	</view>
</template>

<script setup lang="ts">
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue';
	interface IProps {
	}
	defineProps<IProps>()

	const banner = ref<any>({})
	function load(queryStr : string) {
		var p = decodeURIComponent(queryStr);
		try {
			banner.value = JSON.parse(p);
		} catch (error) {
			banner.value = JSON.parse(p);
		}
		console.log(banner.value);
		uni.setNavigationBarTitle({
			title: banner.value.title
		});

		getDetail();
	}
	function getDetail() {

	}
	onLoad((event) => {
		// 目前在某些平台参数会被主动 decode，暂时这样处理。

		load(event.query);
	})
</script>

<style scoped lang="scss">

</style>
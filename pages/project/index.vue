<script lang="ts" setup>
	import { getMock, MockKeys } from '@/utils/mock';
	import { parseDate } from '@/utils/format/date';
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue'
	type PostList = MockKeys['archives']['data']['records']
	type Post = PostList[number]

	const getYear = (a : Date | string | number) => new Date(a).getFullYear();
	const isFuture = (a ?: Date | string | number) => a && new Date(a) > new Date();
	const isSameYear = (a ?: Date | string | number, b ?: Date | string | number) => a && b && getYear(a) === getYear(b);
	const isSameGroup = (a : Post, b ?: Post) => {
		const a_created_at = a.created_at.replaceAll('-', '/')
		const b_created_at = b?.created_at.replaceAll('-', '/') || ''
		return isFuture(a_created_at) === isFuture(b_created_at) && isSameYear(a_created_at, b_created_at);
	};
	function goDetail(detail : any) {
		uni.navigateTo({
			url: '../post/detail/index?query=' + encodeURIComponent(JSON.stringify(detail))
		});
	}
	function getGroupName(p : Post) {
		if (isFuture(p.created_at.replaceAll('-', '/'))) return 'Upcoming';
		return getYear(p.created_at.replaceAll('-', '/'));
	}
	const dataList = ref<PostList>([])
	async function load() {
		const res = await getMock('archives')

		dataList.value = res.data.records
	}
	onLoad(load)
</script>
<template>
	<view class="project list-scroll">
		<view v-if="!dataList.length" class="no-data"><text>{ nothing here yet }</text></view>
	</view>
</template>
<style lang="scss" scoped>
	.project {
		.no-data {
			opacity: 0.5;
			padding: 8rpx 0;
		}

	}
</style>
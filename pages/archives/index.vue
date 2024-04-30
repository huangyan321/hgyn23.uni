<script lang="ts" setup>
	import { getMock, MockKeys } from '@/utils/mock';
	import { parseDate } from '@/utils/format/date';
	import { onLoad, onShow, onHide } from '@dcloudio/uni-app'
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
			url: '../posts/detail/index?query=' + encodeURIComponent(JSON.stringify(detail))
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
	onLoad(async () => {
		uni.showToast({
			icon: 'loading',
			title: '请稍后...',
			mask: true
		})
		await load()
		uni.hideToast()
	})
	onShow(load)
	onHide(() => {
		// dataList.value = []
	})
</script>
<template>
	<view class="archives list-scroll">
		<view v-if="!dataList.length" class="no-data"><text>{ nothing here yet }</text></view>
		<template v-for="(post,index) in dataList" :key="post.id">

			<view class="slide-enter group" :style="{
                  '--enter-stage': index - 2,
                  '--enter-step': '30ms'
                }" v-if="!isSameGroup(post, dataList?.[index - 1])">
				<text class="group-text">{{ getGroupName(post) }}</text>
			</view>
			<view class="slide-enter archives-item" :style="{
                  '--enter-stage': index,
                  '--enter-step': '30ms'
                }" @click="goDetail(post)">
				<text class="archives-item-title">{{post.title}}</text>
				<text
					class="archives-item-date">{{parseDate(new Date(post.created_at.replaceAll('-', '/')), 'MM-DD')}}</text>

			</view>
		</template>
	</view>
</template>
<style lang="scss" scoped>
	.list-scroll {
		box-sizing: border-box;
		flex: 1;
	}

	.archives {
		position: relative;
		color: #000;
		.no-data {
			opacity: 0.5;
			padding: 8rpx 0;
		}

		.group {
			position: relative;
			height: 100rpx;
			line-height: 100rpx;
			pointer-events: none;

			&-text {
				font-size: 7em;
				color: transparent;
				position: absolute;
				top: 2rem;
				font-weight: 700;
				-webkit-text-stroke-width: 2px;
				-webkit-text-stroke-color: rgb(170 170 170);
				opacity: 0.1;
			}
		}

		.archives-item {
			font-size: 30rpx;
			line-height: 32rpx;
			margin: 28rpx 32rpx;

			&-title {}

			&-date {
				margin-left: 16rpx;
				opacity: 0.3;
				font-size: 26rpx;
			}
		}
	}

	@keyframes slide-enter {
		from {
			transform: translateY(12px);
			opacity: 0;
		}

		to {
			transform: translateY(0);
			opacity: 100;
		}
	}

	@media (prefers-reduced-motion: no-preference) {

		page:not(.no-sliding) [slide-enter],
		page:not(.no-sliding) .slide-enter,
		page:not(.no-sliding) .slide-enter-content {
			--enter-stage: 0;
			--enter-step: 50ms;
			--enter-initial: 0ms;
			animation: slide-enter 1s both 1;
			animation-delay: calc(var(--enter-initial) + var(--enter-stage) * var(--enter-step));
		}

	}
</style>
<template>
	<view class="tab-bar">
		<scroll-view class="tab-bar-scroll" scroll-x="true">
			<view class="tab-bar-scroll-box">
				<view class="tab-bar-scroll-item" :class="{active: index === tabIndex}" v-for="(tag,index) in tagList"
					:key="tag" @click="handleTabItemClick(tag,index)">{{tag.name}}</view>
			</view>
		</scroll-view>

	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	interface IProps {
		tagList : {
			id : number;
			name : string;
			sort : number;
		}[]
	}
	withDefaults(defineProps<IProps>(), {
		tagList: () => ([])
	})
	const tabIndex = ref(0)

	function handleTabItemClick(item : string, index : number) {
		tabIndex.value = index
	}
</script>

<style lang="scss">
	.tab-bar {
		@include flex();
		width: 100%;
		border-bottom: 1rpx solid #f5f5f5;
		background-color: #fff;
		color: #000000;

		&-scroll {
			flex: 1;
			height: 90rpx;
			width: 100%;

			&-box {
				@include flex(flex-start);
				height: 90rpx;
			}

			&-item {
				flex-shrink: 0;
				padding: 0 20rpx;
				font-size: 28rpx;

				&.active {
					color: $base-color;
				}
			}
		}

	}
</style>
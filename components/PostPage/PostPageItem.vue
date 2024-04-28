<template>
	<view class="post-item">
		<view class="post-item-box">
			<view class="post-item-title">
				<text>{{ postItem?.title || '' }}</text>
				<uni-icons type="fire-filled" color="rgb(248,113,113)"></uni-icons>
			</view>
			<view class="main-row">
				<view class="main-box">
					<view class="abstract">
						{{postItem.description}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface IProps {
		postItem : any
	}
	defineProps<IProps>()
</script>

<style scoped lang="scss">
	.post-item {
		position: relative;
		min-height: 200rpx;
		text-decoration: none;
		margin-top: 10rpx;
		margin-bottom: 20rpx;
		color: rgba(0, 0, 0, 1);

		&-box {
			padding: 24rpx 24rpx 0
		}

		&-title {
			@include flex(flex-start, row);
			opacity: 0.8;
			padding-right: 10rpx;
			transition-property: opacity;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
			gap: 0.5rem;
			word-break: break-all;

			&:hover {
				opacity: 1
			}
		}

		.main-row {
			@include flex(flex-start, column);
			align-items: flex-start;
			width: 100%;
			padding-bottom: 10rpx;
			border-bottom: 1px solid #f5f5f5;
		}

		.main-box {
			@include flex(flex-start, row);
			align-items: flex-start;
			flex-grow: 1;
		}

		.abstract {
			font-size: 13px;
			line-height: 22px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			margin-bottom: 6px;
			height: 66px;
			-webkit-line-clamp: 3;
		}
	}
</style>
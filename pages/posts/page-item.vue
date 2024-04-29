<template>
	<view class="post-item" @click="click">
		<view class="post-item-box">
			<view class="post-item-title">
				<text>{{ postItem?.title || '' }}</text>
				<uni-icons style="margin-left: 4rpx;" type="fire-filled" color="rgb(248,113,113)"></uni-icons>
			</view>
			<view class="main-row">
				<view class="main-box">
					<view class="abstract" v-html="postItem.description">
					</view>
					<image v-if="postItem.img_cover" class="cover" :fade-show="false" :src="postItem.img_cover"
						mode="aspectFill"></image>
				</view>
				<view class="action-list">
					<view class="date">
						<uni-icons fontFamily="iconfont">{{'&#xe712;'}}</uni-icons>
						<view v-if="!!postItem.updated_at">
							<TimeDiffer class="ml" :date="postItem.updated_at.replaceAll('-', '/')" />
							<text>（已编辑）</text>
						</view>
						<view v-else>
							<TimeDiffer class="ml" :date="postItem.created_at.replaceAll('-', '/')" />
						</view>
					</view>

					<view class="view" v-if="postItem.browse">
						<uni-icons type="eye"></uni-icons>
						<text class="ml">{{postItem.browse}}</text>
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

	const emit = defineEmits(['click'])
	function click() {
		emit('click')
	}
</script>

<style scoped lang="scss">
	.post-item {
		position: relative;
		min-height: 280rpx;
		text-decoration: none;
		color: rgba(0, 0, 0, 1);

		&:hover {
			background-color: #f7f8fa;
		}

		.cover {
			flex: 0 0 auto;
			background-color: #fff;
			border-radius: 4rpx;
			border: 1rpx solid rgba(228, 230, 235, 0.5);
			margin-left: 8px;
			width: 108px;
			height: 72px;
		}

		&-box {
			padding: 30rpx 30rpx 0;
			box-sizing: border-box;


		}

		&-title {
			opacity: 0.8;
			transition-property: opacity;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
			transition-duration: 150ms;
			gap: 0.5rem;
			word-break: break-all;
			font-weight: 600;
			line-height: 1.6;
			font-size: 32rpx;

			&:hover {
				opacity: 1
			}
		}

		.main-row {
			@include flex(flex-start, column);
			align-items: flex-start;
			width: 100%;
			padding-bottom: 30rpx;
			border-bottom: 2px solid #f5f5f5;
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

		.action-list {
			width: 100%;
			display: flex;
			align-items: center;
			margin-right: 12px;
			position: relative;
			font-size: 12px;
			line-height: 20px;
			color: rgba(51, 51, 51, 0.8);

			.date {
				@include flex(flex-start);
			}

			.ml {
				margin-left: 8rpx;
			}

			.view {
				@include flex(flex-start);
			}
		}

	}
</style>
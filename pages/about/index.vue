<template>
	<view class="about">
		<zero-markdown-view themeColor="#222" :markdown="about"></zero-markdown-view>
	</view>
</template>

<script lang="ts" setup>
	//@ts-ignore
	import about from './about.md?raw'
</script>

<style lang="scss" scoped>
	.about {
		padding: 30rpx;
	}
</style>
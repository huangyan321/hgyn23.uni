<template>
	<view>
		{{postItem.content}}
	</view>
</template>

<script setup lang="ts">
	interface IProps {
		postItem : any
	}
	defineProps<IProps>()
</script>

<style scoped lang="scss">
	@import "./styles/page-item.scss"
</style>
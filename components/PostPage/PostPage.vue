<template>
	<view class="">tabId: {{tabId}}</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	interface IProps {
		tabId : number
	}
	defineProps<IProps>()
	const dataList = ref([])
	function loadData() {
		console.log('loadData');
	}
	defineExpose({ loadData, dataList })
</script>

<style scoped lang="scss">

</style>
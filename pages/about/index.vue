<template>
	<zero-markdown-view themeColor="#222" :markdown="about"></zero-markdown-view>
</template>

<script lang="ts" setup>
	import about from './about.md?raw'
</script>

<style lang="scss" scoped>
	.about {}
</style>
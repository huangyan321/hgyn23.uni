<template>
	<text>{{ relative }}</text>
</template>

<script setup lang="ts">
	import { ref, onBeforeMount, watchEffect, onBeforeUnmount } from 'vue'
	import { parseDate, relativeTimeFromNow } from '@/utils/format/date';
	import dayjs from 'dayjs';
	const props = withDefaults(
		defineProps<{
			date : string | Date;
			displayAbsoluteTimeAfterDay ?: number;
		}>(),
		{
		}
	);
	const { displayAbsoluteTimeAfterDay = 29 } = props;
	const relative = ref(relativeTimeFromNow(props.date));
	let timer : NodeJS.Timeout;
	onBeforeMount(() => {
		watchEffect(() => {
			timer = setInterval(() => {
				console.log(props.date);
				relative.value = relativeTimeFromNow(props.date);
			}, 60000);
			if (Math.abs(dayjs(props.date).diff(new Date(), 'd')) > displayAbsoluteTimeAfterDay) {
				clearInterval(timer);
				// @ts-expect-error
				relative.value = parseDate(props.date, 'YY 年 M 月 D 日');
			}
		});
	});

	onBeforeUnmount(() => {
		clearInterval(timer);
	});
</script>
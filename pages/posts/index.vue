<template>
	<view class="content">
		<NavBar></NavBar>
		<view class="tab-bar">
			<scroll-view class="tab-bar-scroll" :enable-flex="true" :scroll="false" :scroll-x="true"
				:show-scrollbar="false" scroll-with-animation :scroll-into-view="scrollInto">
				<view style="flex-direction: column;">
					<view class="tab-bar-scroll-box">
						<view class="tab-bar-scroll-item" v-for="(tab,index) in tabList" :key="tab.id"
							:id="'tab-'+tab.id" :ref="'tabitem'+index" :data-id="index" :data-current="index"
							@click="ontabtap">
							<text class="tab-bar-scroll-item-title"
								:class="tabIndex==index ? 'tab-bar-scroll-item-title--active' : ''">{{tab.name}}</text>
						</view>
					</view>
				</view>
				<view class="scroll-view-indicator">
					<view ref="underline" class="scroll-view-underline" :class="isTap ? 'scroll-view-animation':''"
						:style="{transform: `translateX(${indicatorRect.left}px)`, width: indicatorRect.width + 'px'}">
					</view>
				</view>
			</scroll-view>

			<view class="tab-bar-line"></view>
		</view>
		<swiper class="page-box" ref="swiper1" :autoplay="false" :current="tabIndex" :duration="300"
			@change="onswiperchange" @transition="onswiperscroll" @animationfinish="animationfinish"
			@onAnimationEnd="animationfinish">
			<swiper-item class="swiper-item" v-for="(tab, index) in tabList" :key="tab.id">
				<PostPage class="page-item" :tab-id="tab.id !== - 1 ? tab.id : void 0 " :ref="'page' + index" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup lang="ts">
	import { onReady, } from '@dcloudio/uni-app'
	import { getCategoryList } from '@/api';
	import PostPage from './page.vue'
	import { getCurrentInstance, reactive, ref, nextTick, } from 'vue'


	// 缓存页签数量
	const MAX_CACHE_PAGE = 2;
	const MAX_CACHE_DATA = 5;
	const TAB_PRELOAD_OFFSET = 1;

	const emit = defineEmits(['tabChange'])
	const vm = getCurrentInstance()
	const isTap = ref(false)
	const tabList = ref([])
	const tabIndex = ref(0)
	const scrollInto = ref('')
	const cacheTab = []
	let swiperWidth = 0
	let _touchTabIndex = 0
	let _lastTabIndex = 0
	const tabListSize = {}

	const indicatorRect = reactive({
		left: 0,
		width: 0
	})

	const pageList = [];
	onReady(async function () {
		uni.showToast({
			icon: 'loading',
			title: '请稍后...',
			mask: true
		})
		const res = await getCategoryList({ page: 1, page_size: 999 })
		tabList.value = insertHeadTab(res.data.records)
		nextTick(() => {
			uni.hideToast()
			for (var i = 0; i < tabList.value.length; i++) {
				let item = vm.proxy.$refs['page' + i]
				if (Array.isArray(item)) {
					pageList.push(item[0])
				} else {
					pageList.push(item)
				}
			}
			switchTab(tabIndex.value);
			selectorQuery();
		})
	})
	function insertHeadTab(tabList) {
		const header = {
			created_at: "2024-01-12 17:46:12",
			id: -1,
			name: "全部",
			parent_id: 1,
			sort: 1,
			status: 1,
			updated_at: "2024-01-12 17:47:22",
		}
		tabList.unshift(header)
		return tabList
	}
	function ontabtap(e : any) {
		let index = e.target.dataset.current || e.currentTarget.dataset.current;
		// #ifdef  H5 || MP-WEIXIN
		isTap.value = true
		const currentSize = tabListSize[index];
		updateIndicator(currentSize.left, currentSize.width);
		_touchTabIndex = index;
		// #endif
		switchTab(index);
	}
	function switchTab(index : number) {
		if (pageList[index].dataList.length === 0) {
			loadTabData(index);
		}
		if (index === tabIndex.value) return
		tabIndex.value = index;
		// 缓存 tabId
		console.log('pageList[index].dataList.length', pageList[index].dataList.length);
		if (pageList[index].dataList.length > MAX_CACHE_DATA) {
			let isExist = cacheTab.indexOf(tabIndex.value);
			if (isExist < 0) {
				cacheTab.push(tabIndex.value);
			}
		}

		scrollInto.value = 'tab-' + tabList.value[index].id;
		// 释放 tabId
		console.log('cacheTab', cacheTab);
		if (cacheTab.length > MAX_CACHE_PAGE) {
			let cacheIndex = cacheTab.shift();
			clearTabData(cacheIndex);
		}

	}

	function clearTabData(index : number) {
		pageList[index].clear();
	}

	async function loadTabData(index : number) {
		await pageList[index].loadData();
	}
	function selectorQuery() {
		// #ifdef MP-WEIXIN || H5 || MP-QQ
		uni.createSelectorQuery().in(vm.proxy).select('.page-box').fields({
			dataset: true,
			size: true,
		}, (res : UniApp.NodeInfo) => {
			swiperWidth = res.width;
		}).exec();
		uni.createSelectorQuery().in(vm.proxy).selectAll('.tab-bar-scroll-item').boundingClientRect((rects : UniApp.NodeInfo[]) => {
			rects.forEach((rect) => {
				tabListSize[rect.dataset.id] = rect;
			})
			updateIndicator(tabListSize[tabIndex.value].left, tabListSize[tabIndex.value].width);
		}).exec();
		// #endif
	}
	function updateIndicator(left : number, width : number) {
		indicatorRect.left = left;
		indicatorRect.width = width;
	}

	function onswiperchange(e : any) {
		// 注意：百度小程序会触发2次

		// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
		let index = e.target.current || e.detail.current;
		switchTab(index);
		// #endif
	}
	function onswiperscroll(e : any) {
		// TODO 优化卡顿
		if (isTap.value) {
			return;
		}

		const offsetX = e.detail.dx
		let prevIndex = _lastTabIndex
		if (offsetX > TAB_PRELOAD_OFFSET) {
			prevIndex++;
		} else if (offsetX < -TAB_PRELOAD_OFFSET) {
			prevIndex--;
		}

		if (prevIndex === _lastTabIndex || prevIndex < 0 || prevIndex > pageList.length - 1) {
			return;
		}
		// #ifdef H5 || MP-WEIXIN
		// 处理tabbar索引进度条与swiper协同
		var percentage = Math.abs(swiperWidth / offsetX);
		var currentSize = tabListSize[_lastTabIndex];
		var prevSize = tabListSize[prevIndex];
		var lineL = currentSize.left + (prevSize.left - currentSize.left) / percentage;
		var lineW = currentSize.width + (prevSize.width - currentSize.width) / percentage;
		// console.log(lineL);
		// console.log(lineW);
		updateIndicator(lineL, lineW);
		// #endif
	}
	function animationfinish(e : any) {
		let index = e.detail.current;
		if (_touchTabIndex === index) {
			isTap.value = false;
		}
		console.log(index);
		_lastTabIndex = index;
		switchTab(index);
		updateIndicator(tabListSize[index].left, tabListSize[index].width);
	}
</script>

<style scoped lang="scss">
	@import './styles/tab-bar.scss';
	@import './styles/page.scss';



	.content {
		flex: 1;
		@include flex(flex-start, column);
		align-items: flex-start;
	}
</style>
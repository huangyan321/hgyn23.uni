import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const usePublicStore = defineStore('public', () => {
	const searchHistory = ref([]);
	const searchHistoryGetter = computed(() => searchHistory.value)
	function setSearchHistory(record : string) {
		if (searchHistory.value.length > 0 && searchHistory.value.findIndex(item => item === record) > - 1) return
		searchHistory.value.unshift(record)
		uni.setStorageSync('HISTORY_LIST', searchHistory.value)
	}
	function cleanSearchHistory() {
		searchHistory.value = []
		uni.removeStorageSync('HISTORY_LIST')
	}
	return { searchHistoryGetter, setSearchHistory, cleanSearchHistory };
});
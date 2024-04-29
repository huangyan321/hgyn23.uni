import App from './App'
import './global.css'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif
const store = {}
// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.store = store
	return {
		app
	}
}
// #endif


// #ifdef MP-WEIXIN

wx.preDownloadSubpackage({
	packageType: "workers",
	success(res) {
		console.log("load worker success", res)
		var worker = wx.createWorker(
			"workers/markdown.js"
		) // 创建 worker。 如果 worker 分包没下载完就调 createWorker 的话将报错
		store.worker = worker
	},
	fail(res) {
		console.log("load worker fail", res)
	}
})

// #endif
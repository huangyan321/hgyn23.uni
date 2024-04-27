import { requestConfig } from "./config";

import Request from '@/js_sdk/luch-request/luch-request/index.js'

const http = new Request({
	...requestConfig
})

http.interceptors.request.use((config) => {
	// 这里写请求拦截器逻辑
	return config

}, (err) => {
	return Promise.resolve(err)
})

http.interceptors.response.use((response) => {
	console.log(response)
	return response.data
}, (err) => {
	return Promise.resolve(err)

})

export default http
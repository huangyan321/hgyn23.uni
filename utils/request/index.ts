import { requestConfig } from "./config";

import Request, { HttpRequestConfig, HttpData, HttpRequestTask } from '@/js_sdk/luch-request/luch-request/index.js'
import { Response } from '@/api/request.d'
function sleep(delay : number = 500) {
	return new Promise(resolve => {
		setTimeout(resolve, delay)
	})
}
interface HttpRequestConfigPlus extends HttpRequestConfig {
	delay ?: number
}
class Http {
	public http : Request
	constructor(requestConfig : HttpRequestConfig) {
		this.http = new Request({
			...requestConfig
		})

		this.setupInterceptors()
	}
	private setupInterceptors() {
		this.http.interceptors.request.use(async (config : HttpRequestConfigPlus) => {
			console.log(config.delay);
			config.delay ? await sleep(config.delay) : ''
			// 这里写请求拦截器逻辑
			return config

		}, (err) => {
			return Promise.resolve(err)
		})

		this.http.interceptors.response.use((response) => {
			const code = response.data.code
			switch (code) {
				case 200: {
					return Promise.resolve(response.data)
				}
				default: {
					return Promise.reject(response.data.msg)
				}
			}
		}, (err) => {
			return Promise.resolve(err)

		})
	}
	public get<R = Response>(url : string, config ?: HttpRequestConfigPlus) : Promise<R> {
		return this.http.get(url, config)
	}
	public post<R = Response>(url : string, data ?: HttpData, config ?: HttpRequestConfigPlus) : Promise<R> {
		return this.http.post(url, data, config)
	}
	public put<R = Response>(url : string, data ?: HttpData, config ?: HttpRequestConfigPlus) : Promise<R> {
		return this.http.put(url, data, config)
	}
	public delete<R = Response>(url : string, data ?: HttpData, config ?: HttpRequestConfigPlus) : Promise<R> {
		return this.http.delete(url, data, config)
	}
}
export default new Http(requestConfig)
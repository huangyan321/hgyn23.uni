import request from '@/utils/request'

export function getPosts() {
	return request.get('tag/list', {
		params: {
			page: 1,
			page_size: 6
		}
	})
}
import request from '@/utils/request'

export function getCategoryList(params : { page : number; page_size : number }) {
	return request.get('/user/category', {
		params: {
			...params,
			flat: 1
		},
	})
}


export function getPostList(params : { page : number; page_size : number; category_id ?: number }, delay ?: number) {
	return request.get('/user/article', {
		params,
		delay: 500
	})
}

export function getPostDetail(id : number) {
	return request.get(`/user/article/${id}`)
}
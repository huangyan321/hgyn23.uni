import archives from './archives'
import postList from './postlist'
import category from './category'

const mockKeys = {
	archives,
	postList,
	category
}
export type MockKeys = typeof mockKeys
// 使用类型映射与条件类型获取正确的返回类型
type MockReturnType<K extends keyof MockKeys> = MockKeys[K];
export function getMock<T extends keyof MockKeys>(type : T) : Promise<MockReturnType<T>> {
	return new Promise<MockKeys[T]>(resolve => {
		setTimeout(() => {
			resolve(mockKeys[type])
		}, (Math.random()) * 2000)
	})
}
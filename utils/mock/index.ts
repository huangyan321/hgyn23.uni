import archives from './archives'

export interface MockKeys {
	archives : typeof archives
}
export function getMock<T extends keyof MockKeys>(type : T) : Promise<MockKeys[T]> {
	return new Promise(resolve => {
		setTimeout(() => {
			switch (type) {
				case 'archives': {
					resolve(archives)
					return
				}
				default: resolve(archives)
					return
			}
		}, (Math.random()) * 2000)
	})
}
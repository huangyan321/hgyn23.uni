import { getCurrentInstance } from 'vue';

let current = 0;

export function useId() {
	const vm = getCurrentInstance();
	const { tag = 'unknown' } = (vm?.proxy as any).$vnode || {};
	return `${tag}-${++current}`;
}
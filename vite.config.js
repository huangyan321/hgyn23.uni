import path from 'path';
import fs from 'fs-extra';
import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

function copyFile() {
	return {
		enforce: 'post',
		async writeBundle() {
			await fs.copy(
				path.join(
					__dirname,
					'workers',
				),
				path.join(
					__dirname,
					'unpackage/dist',
					process.env.NODE_ENV === 'production' ? 'build' : 'dev',
					process.env.UNI_PLATFORM,
					'workers'
				)
			);
		},
	};
}

export default defineConfig({
	plugins: [uni(), copyFile()],
});
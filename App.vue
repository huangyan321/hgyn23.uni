<script setup lang="ts">
	// import { fromHighlighter } from 'markdown-it-shikiji/core'
	// import { getHighlighterCore } from 'shikiji/core'
	// import getWasm from 'shikiji/wasm'
	// import markdownIt from '@/utils/marked'
	// const highlighter = await getHighlighterCore({
	// 	themes: [import('shikiji/themes/vitesse-light.mjs'), import('shikiji/themes/vitesse-dark.mjs')],
	// 	langs: [
	// 		import('shikiji/langs/stylus.mjs'),
	// 		import('shikiji/langs/sql.mjs'),
	// 		import('shikiji/langs/python.mjs'),
	// 		import('shikiji/langs/nginx.mjs'),
	// 		import('shikiji/langs/less.mjs'),
	// 		import('shikiji/langs/scss.mjs'),
	// 		import('shikiji/langs/json.mjs'),
	// 		import('shikiji/langs/http.mjs'),
	// 		import('shikiji/langs/markdown.mjs'),
	// 		import('shikiji/langs/css.mjs'),
	// 		import('shikiji/langs/bat.mjs'),
	// 		import('shikiji/langs/xml.mjs'),
	// 		import('shikiji/langs/javascript.mjs'),
	// 		import('shikiji/langs/vue.mjs'),
	// 		import('shikiji/langs/vue-html.mjs')
	// 	],
	// 	loadWasm: getWasm
	// });
	// markdownIt.use(
	// 	fromHighlighter(highlighter, {
	// 		defaultColor: false,
	// 		themes: {
	// 			dark: 'vitesse-dark',
	// 			light: 'vitesse-light'
	// 		},
	// 		cssVariablePrefix: '--s-'
	// 	})
	// );
</script>

<style>
	/*每个页面公共css */
	page {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		min-height: 100%;
	}

	@font-face {
		font-family: 'iconfont';
		src: url('static/font/iconfont.ttf?t=1714360363579') format('truetype');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
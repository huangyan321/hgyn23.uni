import MarkdownIt from 'markdown-it';

import { slugify } from './slugify';
import { htmlEscape } from './html-escape';

const markdownIt = MarkdownIt({
	// 启用 HTML 标签
	html: true,
	// 将类似 URL 的文本自动转换为链接。
	linkify: true,
	// 启用一些语言中立的替换 + 引号美化
	typographer: true
});

export default markdownIt
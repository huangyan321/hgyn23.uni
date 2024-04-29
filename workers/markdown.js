const marked = require('./marked.js').markdownIt;
worker.onMessage(function({
	cmd,
	data
}) {
	switch (cmd) {
		case 'renderlist2md': {
			const res = renderList2md(data)
			send(res)
		}
		break;
	}
})

function renderList2md(dataList) {
	for (const data of dataList) {
		const description = data.description
		if (description) {
			data.description = render(description)
		}
	}
	return dataList
}

function render(mdstr) {
	return marked.render(mdstr)
}

function send(data) {
	worker.postMessage(data)
}
const markdownIt = require('./marked')
worker.onMessage(function(res) {
	const str = markdownIt.render('123123')
	console.log(str)
})
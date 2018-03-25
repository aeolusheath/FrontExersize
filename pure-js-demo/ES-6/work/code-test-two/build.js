var readFile = require('./read-file')
var path = require('path')
var Parser = require('./src/class/Parser').default
var filePath = path.join(__dirname, 'test-input.py')

readFile(filePath)
	.then(content=>{
		var parser =  new Parser(content)
		parser.parse()
	}).catch(err=>{
		console.error(err)
	})
	
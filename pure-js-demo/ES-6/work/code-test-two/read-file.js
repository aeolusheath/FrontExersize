var fs = require('fs')

const readFile = (filePath)=>{
	return new Promise((resolve, reject)=>{
		fs.readFile(filePath, 'utf8', (err, content)=>{
			if(err) 
				reject(err)
			else
				resolve(content)
		})
	})
}

module.exports = readFile
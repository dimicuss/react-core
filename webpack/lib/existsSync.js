const fs = require('fs');
const path = require('path');


function testAddition(acc, addition) {
	acc.result = acc.result || fs.existsSync(acc.path + addition);
	return acc;
}


function existsSync(path, additions = []) {
	return additions.reduce(testAddition, { path, result: fs.existsSync(path) }).result
}


module.exports = existsSync;
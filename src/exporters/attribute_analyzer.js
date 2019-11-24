const attr_type = require('../utils/utils.js').attr_type;

const attr_analyzer = (obj) => {
	let attrs = []
	for (var attr in obj) {
		let type = attr_type(obj[attr]);
		attrs.push({
			"name": attr,
			"type": type,
			"defaultValue": obj[attr],
			"required": attr === 'id' ? true : false
		})
	}
	return attrs;
}

module.exports.attr_analyzer = attr_analyzer;

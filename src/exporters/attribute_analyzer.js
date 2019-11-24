const timezoneFormats = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/; //2018-10-17T13:34:15.226Z

const stringIsADateFormat = (string) => {
	if (string.match(timezoneFormats)) {
		return true;
	}
	return false
}

const getType = (attr) => {
	if (typeof attr.__proto__.sort === 'function') {
		return 'array'
	}
	else {
		return 'object'
	}
}

const attr_analyzer = (obj) => {
	let attrs = []
	for (var attr in obj) {
		let type = 'undefined'
		switch (typeof obj[attr]) {
			case 'string':
				stringIsADateFormat(obj[attr]) ?
					type = 'datetime' :
					type = 'string'
				break;
			case 'number':
				type = 'number'
				break;
			case 'boolean':
				type = 'boolean'
				break;
			case 'object':
				type = getType(obj[attr])
		}
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

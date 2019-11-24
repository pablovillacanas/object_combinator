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

const attr_type = (attr) => {
	let type;
	switch (typeof attr) {
		case 'string':
			stringIsADateFormat(attr) ?
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
			type = getType(attr)
	}
	return type;
}

exports.attr_type = attr_type;
exports.stringIsADateFormat = stringIsADateFormat;
const pet_attr_described = [
	{
		"name": "id",
		"type": "number",
		"defaultValue": 1,
		"required": true
	},
	{
		"name": "name",
		"type": "string",
		"defaultValue": "Dogo",
		"required": false
	},
	{
		"name": "age",
		"type": "number",
		"defaultValue": 2,
		"required": false
	},
	{
		"name": "death",
		"type": "boolean",
		"defaultValue": false,
		"required": false
	},
	{
		"name": "birthday",
		"type": "datetime",
		"defaultValue": "2018-10-17T13:34:15.226Z",
		"required": false
	},
	{
		"name": "childs",
		"type": "array",
		"defaultValue": ['Max', 'Deb'],
		"required": false
	},
	{
		"name": "custom",
		"type": "object",
		"defaultValue": { color: 'black' },
		"required": false
	}
]

exports.pet_attr_described = pet_attr_described;

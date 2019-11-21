const pet_combinations = [
	//Actual (1)
	{
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	//Name (3)
	{
		name: "",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	{
		name: 1,
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	{
		name: null,
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	//Age (3)
	{
		name: "Dogo",
		age: "",
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	{
		name: "Dogo",
		age: "1",
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}, {
		name: "Dogo",
		age: null,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}
	//Boolean (3)
	, {
		name: "Dogo",
		age: 2,
		death: "",
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}
	, {
		name: "Dogo",
		age: 2,
		death: "false",
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}
	, {
		name: "Dogo",
		age: 2,
		death: null,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}
	//Date 
	, {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}
	, {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: null,
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	//Array
	{
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: "",
		custom: { color: 'black' }
	}
	, {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: [],
		custom: { color: 'black' }
	}
	, {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: null,
		custom: { color: 'black' }
	},
	//Object
	{
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: "",
	},
	{
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: {}
	},
	{
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: null
	}];

const pet_compbinations_required_name_and_age = [
	{
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	{
		name: "Dogo",
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	},
	{
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	}
];

exports.pet_combinations = pet_combinations;
exports.pet_combinations_required = pet_compbinations_required_name_and_age;
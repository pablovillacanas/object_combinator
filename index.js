const generator = require("./src/combinator/attribute_generator.js").generator;
var pet = {
	name: "Dogo",
	age: 2,
	death: false,
	birthday: "2018-10-17T13:34:15.226Z",
	childs: ['Max', 'Deb'],
	custom: { color: 'black' }
}

var arr = generator(pet);
console.log(arr)
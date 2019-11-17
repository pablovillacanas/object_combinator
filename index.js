const changer = require("./src/combinator/attribute_generator.js");
var pet = { name: [6, 6] };

var arr = changer(pet);
console.log(arr)
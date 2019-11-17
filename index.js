const changer = require("./src/combinator/attribute_generator.js");
var pet = { name: "Dogo" };

var arr = changer(pet);
console.log(arr)
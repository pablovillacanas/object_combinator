const changer = require("./src/combinator/attribute_generator.js").changer;
var pet = { name: new Date() };

var arr = changer(pet);
console.log(arr)
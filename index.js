
/**
 * Function to generate combinations of objects.
 * 
 * @param {Object} jsonObject Object on which it will combinations will be generated  
 */
const generator = require("./src/combinator/object_generator.js").generator;

const attr_analyzer = require("./src/exporters/attribute_analyzer.js").attr_analyzer;

exports.generator = generator;
exports.attr_analyzer = attr_analyzer;
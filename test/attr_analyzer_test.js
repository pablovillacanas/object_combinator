const attr_analyzer = require("../src/exporters/attribute_analyzer.js").attr_analyzer;
var expect = require('chai').expect;

describe('Analyze attribute', function () {

	describe("Of simple object", function () {
		const pet = {
			name: "Dogo",
		};

		it('Get correct attribute syntax analyzed', function () {
			let expected = [{
				"name": "name",
				"type": "string",
				"defaultValue": "Dogo",
				"required": false
			}]
			let actual = attr_analyzer(pet)
			expect(actual).to.deep.equal(expected)
		})
	})
	describe('of complex object', function () {
		const pet = {
			id: 1,
			name: "Dogo",
			age: 2,
			death: false,
			birthday: "2018-10-17T13:34:15.226Z",
			childs: ['Max', 'Deb'],
			custom: { color: 'black' }
		};

		it('Get correct attribute syntax analyzed', function () {
			let expected = require('./obj_drawer/pet_attr_described.js').pet_attr_described;
			let actual = attr_analyzer(pet)
			expect(actual).to.deep.equal(expected)
		})
	})
})
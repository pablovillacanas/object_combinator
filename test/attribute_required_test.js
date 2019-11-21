const withoutRequiredAttributes = require("../src/combinator/object_generator.js").generateObjectsWithoutRequiredAttributes;
var expect = require('chai').expect;

describe('Generate combinations with not required attributes', function () {

	required_attributes = ["name", "age"];
	var pet = {
		name: "Dogo",
		age: 2,
		death: false,
		birthday: "2018-10-17T13:34:15.226Z",
		childs: ['Max', 'Deb'],
		custom: { color: 'black' }
	};

	it("Generated correct malformed entities", function () {
		const generated = withoutRequiredAttributes(pet, required_attributes);
		const expected_pets = require('./obj_drawer/pet_combinations.js').pet_combinations_required
		expect(generated).to.be.an('array').and.to.have.lengthOf(3)
		expect(generated).to.deep.equal(expected_pets)
	})

})
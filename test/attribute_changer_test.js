let changer = require('../src/combinator/attribute_generator')
var expect = require('chai').expect;
var pet = { name: "Dogo" };

describe('Create combinations of attributes', function () {

    let pets = [];
    let expected_pets = [{ name: "Dogo" }, { name: "" }, { name: 1 }, { name: null }];

    before(() =>
        pets = changer(pet)
    )

    it("Generated 4 possibilities for a pet", function () {
        expect(pets).to.be.an('array').and.to.have.lengthOf(4)
    })

    it("Generated 4 different possibilities", function () {
        expect(pets).to.deep.equal(expected_pets)
    })
})

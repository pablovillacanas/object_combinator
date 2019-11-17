let changer = require('../src/combinator/attribute_generator')
var expect = require('chai').expect;

describe('Create combinations of attributes', function () {

    describe('With only one string attribute', function () {
        var pet = { name: "Dogo" };
        let pets = [];

        before(function () {
            pets = changer(pet)
        })

        it('Generated 4 possibilities for a pet', function () {
            let expected_pets = [{ name: "Dogo" }, { name: "" }, { name: 1 }, { name: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(4)
            expect(pets).to.deep.equal(expected_pets)
        })
    })

    describe('With only one number attribute', function () {
        var pet = { age: 2 };
        let pets = [];

        before(() =>
            pets = changer(pet)
        )

        it('Generated 4 possibilities for a pet', function () {
            let expected_pets = [{ age: 2 }, { age: "" }, { age: "1" }, { age: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(4)
            expect(pets).to.deep.equal(expected_pets)
        })
    })

    describe('With only one boolean attribute', function () {
        var pet = { death: false };
        let pets = [];

        before(() =>
            pets = changer(pet)
        )

        it('Generated 4 possibilities for a pet', function () {
            let expected_pets = [{ death: false }, { death: "" }, { death: "false" }, { death: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(4)
            expect(pets).to.deep.equal(expected_pets)
        })
    })

    describe('With only one object attribute', function () {
        const now = new Date();
        var pet = { birthday: now };
        let pets = [];

        before(function () {
            pets = changer(pet)
        })

        it('Generated 4 possibilities for a pet', function () {
            let expected_pets = [{ birthday: now }, { birthday: "" }, { birthday: {} }, { birthday: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(4)
            expect(pets).to.deep.equal(expected_pets)
        })
    })

    describe('With only one array attribute', function () {
        const children = ['Max', 'Deb'];
        var pet = { childs: children };
        let pets = [];

        before(function () {
            pets = changer(pet)
        })

        it('Generated 4 possibilities for a pet', function () {
            let expected_pets = [{ childs: children }, { childs: "" }, { childs: [] }, { childs: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(4)
            expect(pets).to.deep.equal(expected_pets)
        })
    })
})

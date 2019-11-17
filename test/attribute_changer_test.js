const changer = require("../src/combinator/attribute_generator.js").changer;
var expect = require('chai').expect;

describe('Create combinations with', function () {

    describe('only one string attribute', function () {
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

    describe('only one number attribute', function () {
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

    describe('only one boolean attribute', function () {
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

    describe('only one array attribute', function () {
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

    describe('only one date attribute', function () {
        const now = new Date();
        var pet = { birthday: now };
        let pets = [];

        before(function () {
            pets = changer(pet)
        })

        it('Generated 3 possibilities for a pet', function () {
            let expected_pets = [{ birthday: now }, { birthday: "" }, { birthday: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(3)
            expect(pets).to.deep.equal(expected_pets)
        })
    })

    describe('only one object attribute', function () {
        var pet = { custom: { color: 'black' } };
        let pets = [];

        before(function () {
            pets = changer(pet)
        })

        it('Generated 4 possibilities for a pet', function () {
            let expected_pets = [{ custom: { color: 'black' } }, { custom: "" }, { custom: {} }, { custom: null }];
            expect(pets).to.be.an('array').and.to.have.lengthOf(4)
            expect(pets).to.deep.equal(expected_pets)
        })
    })

    describe('several different attributes', function () {
        const children = ['Max', 'Deb'];
        let now = new Date(1574005419000);
        var pet = {
            name: "Dogo",
            age: 2,
            death: false,
            birthday: now,
            childs: children,
            custom: { color: 'black' }
        };
        let pets = [];

        before(function () {
            pets = changer(pet)
        })

        it('Generated 20 possibilities for a pet', function () {
            let expected_pets = require('./obj_drawer/pet_combinations')
            expect(pets).to.be.an('array').and.to.have.lengthOf(3 * 5 + 1 + 2)
            expect(pets).to.deep.equal(expected_pets.pet_combinations)
        })
    })
})

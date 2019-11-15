let changer = require('../src/combinator/attribute_generator') 
var expect = require('chai').expect;
var pet = {name: "Dogo"};

describe('Create combinations of attributes', function() {

    it("Generated 4 possibilities", function() {    
        expect(changer(pet)).to.be.an('array')
    })
})

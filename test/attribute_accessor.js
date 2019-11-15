var expect = require('chai').expect;
var pet = {name: "Dogo"};

describe('Accessing pet attributes', function() {

    it("Pet name is Dogo", function() {    
        expect(pet.name).to.equal("Dogo")
    })

    it("Pet name is a string", function() {    
        expect(pet.name).to.be.a("string")
    })
    
})

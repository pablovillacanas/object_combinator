const isADate = require("../src/combinator/attribute_generator.js").stringIsADateFormat
var expect = require('chai').expect

describe('Get different date formats as attribute', function () {

	it('as 2018-10-17T13:34:15.226Z', function () {
		expect(isADate("2018-10-17T13:34:15.226Z")).to.be.true;
		expect(isADate("201810-17T13:34:15.226Z")).to.be.false;
		expect(isADate("18-10-17T13:34:15.226Z")).to.be.false;
		expect(isADate("2018-1-17T13:34:15.226Z")).to.be.false;
		expect(isADate("2018-10-17T23:34:165.226Z")).to.be.false;
		expect(isADate("2018-10-17T13:34:15.2246Z")).to.be.false;
		expect(isADate("2018-10-17T13:34:15.226D")).to.be.false;
		expect(isADate("2018-10-17 13:34:15.226Z")).to.be.false;
	})

})
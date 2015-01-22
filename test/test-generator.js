var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require("../MultiDimensionalArray.js");
 
 
describe('generate_1d ', function() {
  it('should return an array with a length of 3 when no arguments are given', function() {
    //result = [0,1,1];
    var testResult = mda.generate_1d();

    expect(testResult).to.have.length(3);
  });

  it('should return an array random boolean values when no arguments are given', function() {
    //result = [0,1,1];
    var testResult = mda.generate_1d();
    for(var i = 0; i < testResult.length; i++){
      expect(testResult[i]).to.satisfy(function (val) {
        return val === 0 || val === 1;
      });
    }

  });

  it('should return an array with four boolean values when a single argument is given with a value of 4', function() {
    var testResult = mda.generate_1d(4);

    expect(testResult).to.have.length(4);
    for(var i = 0; i < testResult.length; i++){
      expected(testResult).to.satisfy(function (val) {
        return val === 0 || val === 1;
      });
    }
  });

  it('should return an empty array with the single argument "potato"', function() {
    var testResult = mda.generate_1d("potato");

    expect(testResult).to.be.a("array");
    expect(testResult).to.have.length(0);
  });

});

describe('generate_2d', function() {
  it('should return an array of length 3', function(){     
    var testResult = mda.generate_2d();

    expect(testResult).to.be.a("array");
    expect(testResult).to.have.length(3);
    for(var i = 0; i < testResult.length; i++){
    expect(testResult[i]).to.have.length(3);
    expect(testResult[i]).to.satisfy(function (val) {
      return val === 0 || val === 1;
    });
  }

  });

  it("should take a single argument, 4, and return an array with length 4 and 3 random boolean values in each", function() {
    
  });
  
});

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var mda = require("../MultiDimensionalArray.js");
 
 
describe('generate_1d ', function() {
  it('should return an array with a length of 3 when no arguments are given', function() {
    //result = [0,1,1];
    var testResult = mda.generate_1d();

    expect(testResult).to.be.a("array");
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
      expect(testResult[i]).to.satisfy(function (val) {
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
  it('should return an array of length 3, each containing arrays with 3 random boolean values with no argument', function(){     
    var testResult = mda.generate_2d();

    expect(testResult).to.be.a("array");
    expect(testResult).to.have.length(3);
    for(var i = 0; i < testResult.length; i++){
      expect(testResult[i]).to.have.length(3);
      for(var j = 0; j < testResult[i].length; j++){
        expect(testResult[i][j]).to.satisfy(function (val) {
        return val === 0 || val === 1;
        });
      }
    }
  });

  it("should take a single argument, 4, and return an array with length 4 and 3 random boolean values each", function() {
    var testResult = mda.generate_2d(4);

    expect(testResult).to.be.a("array");
    expect(testResult).to.have.length(4);
    for(var i = 0; i < testResult.length; i++){
      expect(testResult[i]).to.have.length(3);
      for(var j = 0; j < testResult[i].length; j++){
      expect(testResult[i][j]).to.satisfy(function (val) {
        return val === 0 || val === 1;
        });
      } 
    }
  });

  it("should take two arguments (5 and 4), return an array (length 5) containing arrays (length 4) with random boolean values", function() {
    var testResult = mda.generate_2d(5,4);

    expect(testResult).to.be.a("array");
    expect(testResult).to.have.length(5);
    for(var i = 0; i < testResult.length; i++){
      expect(testResult[i]).to.have.length(4);
      for(var j = 0; j < testResult[i].length; j++){
        expect(testResult[i][j]).to.satisfy(function (val) {
          return val === 0 || val === 1;
        });
      }
    }
  });  
});

describe("generate_3d", function() {
  it("should take three arguments (3,4,5), return an array (length 3) containing arrays (length 4) with 5 boolean values each", function() {
    var testResult = mda.generate_3d(3,4,5);

    expect(testResult).to.be.a("array");
    expect(testResult).to.have.length(3);
    for(var i = 0; i < testResult.length; i++){
      expect(testResult[i]).to.have.length(4);
      for(var j = 0; j < testResult[i].length; j++){
        expect(testResult[i][j]).to.have.length(5);
        for(var k = 0; k < testResult[i][j].length; k++){
          expect(testResult[i][j][k]).to.satisfy(function (val) {
            return val === 0 || val === 1;
          });
        }
      }
    }
  });
});

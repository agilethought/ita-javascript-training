/**
 * Created by Jason Wollam on 6/30/2016.
 */

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var scriptToTest = require('../calc.js');


describe("The addNumber function", function(){
    it("Should accept an object with two numbers and return a result with the sum of both numbers", function(){
        //Arrange
        var requestObject = {'Number1': '1', 'Number2' : '1', 'Operation': '+'}

        //Act
        var response = scriptToTest.AddNumbers(requestObject);

        //Assert
        assert(response == 2);
    })
})


/** Created by jason.wollam on 6/17/2016. ...*/

//FullCourseTests.js

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect();

var scriptToTest = require('../FullCourseCode.js');
//var scriptToTest = require('../FullCourseCode-Master.js');
var methodExportTest = scriptToTest.ReturnArrayFromCsvString;
var fizzBuzzMain = scriptToTest.FizzBuzzMain;
var boolCheckForEvenlyDivisibleInteger = scriptToTest.BoolCheckForEvenlyDivisibleInteger;
var returnStringFizzBuzz = scriptToTest.ReturnStringFizzBuzz;

describe('Method Export Test', function(){
    it('should return a array from parsed string', function(){
        var arrayResponse = methodExportTest("one, two, three")

        assert(typeof arrayResponse === "object")
        assert.isOk(arrayResponse.length)
    })
})

describe('Step 1: FizzBuzz Full Run', function(){
    it('should run to completion with no input params supplied', function(){
        assert.doesNotThrow(fizzBuzzMain);
    })

    it('should run to completion without exception with expanded input params', function(){
        //Arrange, Act, Assert;
        assert.doesNotThrow(function() {fizzBuzzMain(50)});
    })

    it('should return undefined when executed successfully', function(){
        var iterations = 50;
        var response = fizzBuzzMain(iterations);

        assert.isUndefined(response)
    })

    it('should throw exception with invalid input parameter types -- object', function(){
        //Arrange, Act, Assert
        assert.Throw(function() {fizzBuzzMain({test:"object"})}, Error, "Invalid input parameters");
    })

    it('should throw exception with invalid input parameter types -- string', function(){
        assert.Throw(function() {fizzBuzzMain("string")}, Error, "Invalid input parameters");
    })

    it('should throw exception with invalid input parameter types -- bool', function(){
        assert.Throw(function() {fizzBuzzMain(false)}, Error, "Invalid input parameters");
        assert.Throw(function() {fizzBuzzMain(true)}, Error, "Invalid input parameters");
    })

    it('should throw exception with invalid input parameter types -- array', function(){
        assert.Throw(function() {fizzBuzzMain([1, 2, 3])}, Error, "Invalid input parameters");
        assert.Throw(function() {fizzBuzzMain(["one", "two", "three"])}, Error, "Invalid input parameters");
        assert.Throw(function() {fizzBuzzMain([1, "two", {"three" : "three"}])}, Error, "Invalid input parameters");
    })

    //it('should return an array of Fizz, Buzz and FizzBuzz indexes', function(){
    //    var response = fizzBuzzMain(50, "array");
    //
    //    //assert.isArray(response);
    //})
    //
    //it('should return a boolean', function(){
    //    var response = fizzBuzzMain();
    //
    //    //assert.isBoolean(response);
    //})
    //
    //it('should return a comma separated string', function(){
    //    var response = fizzBuzzMain();
    //
    //    //assert.isString(response);
    //})
    //
    //it('should return an int representing the number of FizzBuzz values', function(){
    //    var response = fizzBuzzMain();
    //
    //    //assert.isNumber(response);
    //})
    //
    //it('should return an object containing Fizz, Buzz and FizzBuzz properties', function(){
    //    var response = fizzBuzzMain();
    //
    //    //assert.isObject(response);
    //})
})

//describe('Step 2: Bool Check For Evenly Divisible Integer', function(){
//    it('should return an exception when no parameters are passed', function(){
//        //Arrange
//
//
//        //Act
//        var result = boolCheckForEvenlyDivisibleInteger()
//
//        assert.isUndefined(result)
//    })
//
//    it('should return bool when parameters are not divisible', function(){
//        //Arrange
//        var dividend = 11;
//        var divisor = 3;
//
//        //Act
//        var result = boolCheckForEvenlyDivisibleInteger(dividend, divisor)
//
//        //Assert
//        assert.isBoolean(result)
//    })
//
//    it('should return bool when parameters are divisible', function(){
//        //Arrange
//        var dividend = 6;
//        var divisor = 5;
//
//        //Act
//        var result = boolCheckForEvenlyDivisibleInteger(dividend, divisor)
//
//        //Assert
//        assert.isBoolean(result)
//    })
//    it('should return true when parameters are divisible', function(){
//        //Arrange
//        var dividend = 10;
//        var divisor = 5;
//
//        //Act
//        var result = boolCheckForEvenlyDivisibleInteger(dividend, divisor)
//
//        //Assert
//        assert.isTrue(result)
//    })
//    it('should return false when parameters are divisible', function(){
//        //Arrange
//        var dividend = 5;
//        var divisor = 6;
//
//        //Act
//        var result = boolCheckForEvenlyDivisibleInteger(dividend, divisor)
//
//        //Assert
//        assert(result != undefined)
//        assert.isNotTrue(result)
//    })
//})
//
//describe('Step 3: String Test for Fizz Buzz & FizzBuzz', function(){
//    it('should return Fizz when passing an integer evenly divisible by 3', function(){
//        //Arrange
//        var intUnderTest = 6;
//
//        //Act
//        var result = returnStringFizzBuzz(intUnderTest);
//
//        //Assert
//        assert(result == "Fizz", "Result is not Fizz.")
//    })
//
//    it('should return Buzz when passing an integer evenly divisible by 5', function(){
//        //Arrange
//        var intUnderTest = 10;
//
//        //Act
//        var result = returnStringFizzBuzz(intUnderTest);
//
//        //Assert
//        assert(result == "Buzz", "Result is not Buzz.")
//    })
//
//    it('should return FizzBuzz when passing an integer evenly divisible by 3 & 5', function(){
//        //Arrange
//        var intUnderTest = 15;
//
//        //Act
//        var result = returnStringFizzBuzz(intUnderTest);
//
//        //Assert
//        assert(result == "FizzBuzz", "Result is not FizzBuzz.")
//    })
//
//    it('should return undefined return when passing an integer not evenly divisible by 3 or 5', function(){
//        //Arrange
//        var intUnderTest = 7;
//
//        //Act
//        var result = returnStringFizzBuzz(intUnderTest);
//
//        //Assert
//        assert.isUndefined(result);
//    })
//})


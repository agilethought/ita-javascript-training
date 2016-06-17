/** Created by jason.wollam on 6/17/2016. ...*/

//FullCourseTests.js

var chai = require('chai');
var assert = chai.assert;

var className = require('../FullCourseCode.js');
var methodExportTest = className.ReturnArrayFromCsvString;
var fizzBuzzMain = className.FizzBuzzMain;

describe('Method Export Test', function(){
    it('should return a array from parsed string', function(){
        var arrayResponse = methodExportTest("one, two, three")

        assert(typeof arrayResponse === "object")
        assert.isOk(arrayResponse.length)
    })
})

describe('FizzBuzz Full Run', function(){
    it('should run FizzBuzz routine to completion without exception', function(){

        assert.doesNotThrow(fizzBuzzMain, Error, 'function does not throw');
    })

    it('should return a populated array of Fizz Buzz and FizzBuzz indexes', function(){
        var response = fizzBuzzMain();

        assert.isOk(response.length)
    })
})




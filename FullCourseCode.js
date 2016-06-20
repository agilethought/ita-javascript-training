/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js

var returnArrayFromCsvString = function(string){
    return string.split(",")
}

var fizzBuzzMain = function(maxIterations){
    var responseArray = [];
    var iterations  = (maxIterations == undefined)? 100 : maxIterations;

    try{
        if(isNaN(parseInt(iterations, 24)) || typeof iterations === "boolean" || typeof iterations === "object"){
            throw new Error("Invalid input parameters")
        }

        for(var i = 0; i < iterations; i++){
            responseArray.push(returnStringFizzBuzz(i));
        }
    }catch(ex){
        throw ex
    }
}

var returnStringFizzBuzz = function(intUnderTest){
    var fizz = 3;
    var buzz = 5;

    if(isEvenlyDivisibleInteger(intUnderTest, fizz) && isEvenlyDivisibleInteger(intUnderTest, buzz)){
        return "FizzBuzz";
    }

    if(isEvenlyDivisibleInteger(intUnderTest, fizz)){
        return "Fizz";
    }

    if (isEvenlyDivisibleInteger(intUnderTest, buzz)){
        return "Buzz";
    }
}

var isEvenlyDivisibleInteger = function(dividend, divisor){
    return (!isNaN(dividend % divisor))? !(dividend % divisor) : undefined;
}

module.exports = {
    ReturnArrayFromCsvString : returnArrayFromCsvString,
    FizzBuzzMain : fizzBuzzMain,
    BoolCheckForEvenlyDivisibleInteger : isEvenlyDivisibleInteger,
    ReturnStringFizzBuzz : returnStringFizzBuzz
}


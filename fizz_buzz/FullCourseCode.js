/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js

var returnArrayFromCsvString = function(string){
    return string.split(",")
}

//If a number is evenly divisible by 3 return Fizz
//If a number is evenly divisible by 5 return Buzz
//If a number is evenly divisible by both return FizzBuzz
//If a number is not evenly divisible by both the parameter

var fizzBuzzMain = function(valueToTest){


    try{
        var converted = valueToTest || 10;

        if(typeof valueToTest === 'number'){
            throw new Error("Invalid input parameters");
        }

        //throw new Error("Invalid input parameters");

        if(converted % 5 == 0 && converted % 3 == 0 ){
            return "FizzBuzz";
        }
        else if(converted % 3 == 0){
            return "Fizz";
        }
        else if(converted % 5 == 0){
            return "Buzz";
        }else{
            return converted
        }
    }catch(ex){
        throw ex;
    }

}

var returnStringFizzBuzz = function(intUnderTest){

}

var isEvenlyDivisibleInteger = function(dividend, divisor){
}

module.exports = {
    ReturnArrayFromCsvString : returnArrayFromCsvString,
    FizzBuzzMain : fizzBuzzMain,
    BoolCheckForEvenlyDivisibleInteger : isEvenlyDivisibleInteger,
    ReturnStringFizzBuzz : returnStringFizzBuzz
}


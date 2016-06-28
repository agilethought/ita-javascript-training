/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js

var returnArrayFromCsvString = function(string){
    return string.split(",")
}

/*var divisible = function(num, fizzbuzz)
{
    if (num % fizzbuzz == 0)
    {
        return true;
    }
    else
        return false;
}*/

var fizzBuzzMain = function(valueToTest){

    try
    {
        var converted = valueToTest;
        if (typeof converted !== "number" || isNaN(converted))
        {
            throw new Error("Invalid input parameters");
        }
        
        // forces an error to be thrown
        //throw new Error("Invalid input parameters");

        if (converted % 3 === 0 && converted % 5 === 0)
        {
            return "FizzBuzz";
        }
        else if (converted % 5 === 0)
        {
            return "Buzz";
        }
        else if (converted % 3 === 0)
        {
            return "Fizz";
        }
        else
            return valueToTest;
    }
    catch(ex)
    {
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


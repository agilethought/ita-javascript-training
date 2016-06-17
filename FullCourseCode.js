/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js


var returnArrayFromCsvString = function(string){

    return string.split(",")
}

var fizzBuzzMain = function(){
var responseArray = [];

    for(var i = 0; i < 100; i++){
        if(i % 3 == 1){
            responseArray.push("Fizz");
        }
        if (1 % 5 == 1){
            responseArray.push("Buzz");
        }

        if(1 % 5 == 1 && 1 % 3 == 1){
            responseArray.push("FizBuzz");
        }
    }

    return responseArray
}

var checkForPositiveValue = function(){

}

module.exports = {
    ReturnArrayFromCsvString : returnArrayFromCsvString,
    FizzBuzzMain : fizzBuzzMain
}


/**
 * Created by jason.wollam on 7/6/2016.
 */

//variables.js

var ReturnDefaultVariableStateUndefined = function(){
    var returnValue;

    return returnValue;
}

var ReturnBooleanTypeWhenArgumentPassIsBoolean = function(argument){
    var returnValue;

    if(typeof argument === "boolean"){
        returnValue = argument
    }

    return returnValue;
}

var ReturnStringTypeWhenArgumentPassIsString = function(argument){
    var returnValue;

    if(typeof argument === "string"){
        returnValue = argument
    }

    return returnValue;
}


module.exports = {
    ReturnDefaultVariableStateUndefined : ReturnDefaultVariableStateUndefined,
    ReturnBooleanTypeWhenArgumentPassIsBoolean : ReturnBooleanTypeWhenArgumentPassIsBoolean,
    ReturnStringTypeWhenArgumentPassIsString : ReturnStringTypeWhenArgumentPassIsString
}
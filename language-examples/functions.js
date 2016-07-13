/**
 * Created by jason.wollam on 7/5/2016.
 */
// functions.js

function TraditionalFunction(argument){
    return argument;
}

var VarFunction = function(argument){
    return argument;
}

var FunctionWithNoReturn = function(){

}

var NoDefinedArgumentsWithPassedArguments = function(){
    var functionArguments = arguments;

    return functionArguments[0];
}

var PassFunctionAsArgumentAndInvokeIt = function(functionToExecute){
    var response = functionToExecute()

    return response;
}

var StoredResponse;
var StoreAndUpdateVariableInFunctionClosure = function(argument){

    if(typeof argument !== "undefined"){
        StoredResponse = argument;
    }

    return StoredResponse;
}

module.exports = {
    TraditionalFunction : TraditionalFunction,
    VarFunction : VarFunction,
    NoDefinedArgumentsWithPassedArguments : NoDefinedArgumentsWithPassedArguments,
    FunctionWithNoReturn : FunctionWithNoReturn,
    PassFunctionAsArgumentAndInvokeIt : PassFunctionAsArgumentAndInvokeIt,
    StoreAndUpdateVariableInFunctionClosure : StoreAndUpdateVariableInFunctionClosure
}
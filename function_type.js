//function statement or function declaration
function statement() {
    console.log("function statement or function declaration");
}

//function expression
var expression = function() {
    console.log("function expression");
}

//anonymous function
// function () {
//     console.log('anonymous function')
// }

//named function expression
var namedExp = function xyz() {
    console.log("function namedExp");
}

//First class function
//The ability of functions to be used as values and can be passed as an argument to another
//function and can be returned
var b = function (param) {
    return function xyz() {}
}
console.log(b(function () {}))//function xyz() {}
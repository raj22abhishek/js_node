//A polyfill is a piece of code used to provide modern functionality on older
//browsers that do not natively support it.


//eg
//we are adding custom mybind instead of bind
Function.prototype.mybind = function(...args) {
    let obj = this;
    param = args.slice(1);
    return obj.call(args[0],param);
}

let printname = function(x) {
    console.log(this.a, x)
}
let temp = {
    a: "Abhishek"
}
printname.mybind(temp, 123)


//Currying
//It is a technique of transforming function of muliple argument into
//several function of single argument
function sum(a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(5)(2))
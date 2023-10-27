//An object has attached to any variable, array, object,function etc.
//prototype chaining
let arr = ['a','b']
console.log(arr.__proto__.__proto__.__proto__);//null
let obj = {}
console.log(obj.__proto__.__proto__);//null

console.log(Array.prototype == arr.__proto__)//true
console.log(arr.__proto__)//Object(0) []


//eg1
let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    a: 3
}
obj2.__proto__ = obj1;
console.log(obj1)//{ a: 1, b: 2 }
console.log(obj2)//{ a: 3 }
console.log(obj2.a);//3
console.log(obj2.b);//2

//eg2
Function.prototype.mybind = function () {
    console.log("hello")
}
function fun() {

}
fun.__proto__.mybind()//hello
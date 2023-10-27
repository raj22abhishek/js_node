//First argument will always be the reference to  this variable


//CALL
//Later argument will be the argument of the function
//eg1
let example = {
    xyz: 123
}
let abc = function(a,b) {
    console.log(a,b,this.xyz);
}
abc.call(example, "arg1", "arg2")//arg1 arg2 123

//eg2
let name = {
    firstname: "Abhi",
    lastname: "Raj",
    printFullName: function () {
        console.log(this.firstname) // this refers to name object
    }
}
name.printFullName()//Abhi
let name2 = {
    firstname: "X",
    lastname: "Y",
}
name.printFullName.call(name2) //x

//Apply
//Later argument will be pass as LIST
abc.apply(example, ["arg1", "arg2"])//arg1 arg2 123

//Bind
//exactly same as call but only difference is first it will
//bind the data and then later we can call
let bindExample = abc.bind(example, "arg1", "arg2");
console.log(bindExample) // print function
console.log(bindExample())//arg1 arg2 123
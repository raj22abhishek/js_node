const arr = [5,1,3,2,6];
//map
//it will return new array
//eg 1
let mapEg1 = arr.map((x)=> {
    return x * 2
})
console.log(mapEg1);//[ 10, 2, 6, 4, 12 ]
//eg 2
function double(x) {
    return x * 2;
}
let mapEg2 = arr.map(double);
console.log(mapEg2)//[ 10, 2, 6, 4, 12 ]

//filter
//it will return new array
const filterEg1 = arr.filter((x) => {
    return x % 2
})
console.log(arr);//[5,1,3,2,6]
console.log(filterEg1);//[5,1,3]

//reduce
console.log(arr.reduce((acc,curr) => {
    return acc + curr
},0))//17
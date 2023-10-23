//create promise
const pr1 = new Promise((res,rej) => {
    if(false) {
        rej(new Error('Error in pr1'));
    }
    if(true) res('resolved pr1')
})
const pr2 = new Promise((res,rej) => {
    if(false) {
        rej(new Error('Error in pr2'));
    }
    if(true) res('resolved pr2')
})
const pr3 = new Promise((res,rej) => {
    if(false) {
        rej(new Error('Error in pr3'));
    }
    if(true) res('resolved pr3')
})

//consume promise
pr1.then((res) => {
    console.log('123',res) //123 resolved pr1
})
const pr = [pr1, pr2, pr3];

//Promise.all
//If all resolved it give all res and if any fails it immediately return error
Promise.all(pr).then((res) => {
    console.log(res)
}).catch((err)=> console.log(err))


//Promise.allSettled
//If all resolved it give all res and if any fails still we get res with error and success
Promise.allSettled(pr).then((res) => {
    console.log(res)
}).catch((err)=> console.log(err))

//Promise.any
//return first resolved promise
Promise.any(pr).then((res) => {
    console.log(res)
}).catch((err)=> console.log(err))

//Promise.race
//return first resolved/reject promise
Promise.race(pr).then((res) => {
    console.log(res)
}).catch((err)=> console.log(err))
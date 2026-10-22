//handling asyncronus js 
// 1)timers 2) promises 

//blocking operation 
//for (let a = 1; a < 112345678; a++) {}

//timers

setTimeout(() => {
    console.log("call back")
}, 10000); //10000=10 seconds
console.log("last")


//promises-creater,consume promiser it may be fullfiled or rejected
//whick will happen future may happen or not

//creating promise (me)
//i will call u in 5 mins 
let youravailabilityafter5mins = false;
console.log("i promised my friend that i will call my friend after 5 min")
let callPromise = new Promise((fullfiled, rejected) => {
        setTimeout(() => {
            if (youravailabilityafter5mins == true) {
                fullfiled("hello friend")
            } else {
                rejected('sorry......')
            }
        }, 5000);


    })
    //consume a promise
callPromise
    .then(message => console.log("fullfilled state:", message))
    .catch(message => console.log("rejected state:", message))

console.log("hellooooooooooooo")
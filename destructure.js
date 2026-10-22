//packing
let arr = [1, 2, 3, 4]
let obj = {
        a: 10,
        b: 20
    }
    //unpacking(destructing) 
    // //unpack the structure
    //for arrays
console.log(arr[0])
console.log(arr[1])
let [x, y, z, m] = arr;
//for arrays we can declare any variable 
console.log(x)
    //object
console.log(obj.a)
console.log(obj.b)
let { a, b } = obj;
console.log(a, b)
    ///for object when we declare the variables 
    //we should declare what we declred in the 
    //first object 


//template lieral 
let p = 10
let q = 20
let r = 30
    //normal 
console.log("p is", p, "q is", q, "r is", r)
    // with liertal shouled be used ` `
console.log(`p is ${p} q  is ${q} r is ${r}`)
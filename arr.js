let arr = [90, -88, -72, 32, 41]
let result = []

for (let ele of arr) {
    if (ele > 20 && ele < 99) {
        result.push(ele)
    }
}
console.log(result)


//filter
let result1 = arr.filter(ele => ele > 20 && ele < 99)
console.log(result1)


// map function
let result2 = arr.map(ele => ele + 88)
console.log(result2)

//find 
let result3 = arr.find(ele => ele === 0)
console.log(result3)

//search
let result4 = arr.find(ele => ele === 90)
console.log(result4)

//search by index
let result5 = arr.findIndex(ele => ele === 41)
console.log(result5)

//reduce
let result6 = arr.reduce((accumulator, ele) => accumulator + ele)
console.log(result6)

//for each
arr.forEach((ele, ind) => console.log(ind, "->", ele))

//sort
arr.sort(ele => console.log(ele))


//object creation 
let object = {
    name: 'varun',
    roll: 6224,
    age: 19,
    salary: 100000
}
console.log(object.roll)
console.log(object['roll'])

object.name = 'datta'
console.log(object)
delete object.salary
console.log(object)
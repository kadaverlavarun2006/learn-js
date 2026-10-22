//a function can be sgtored in a variable
/*
let a = function() {}


//function can send as an argument
function test(x) {
    console.log(x)
}


test(function() {})

function wish() {
    return function() {
        console.log("wish called")
    }
}

let x = wish()
x()
*/
function creategreeter(timeofday) {
    return function(name) {
        console.log(`good ${timeofday} to ${name}`)
    }
}
let morninggreeter = creategreeter('morning')
let eveninggreeter = creategreeter('evening')

morninggreeter('ravi')
eveninggreeter('Varun')
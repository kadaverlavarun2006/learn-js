//primitive copying
let username = 'Varun'
let copyusername = username;

console.log("original username ", username)
console.log("copied username", copyusername)

//checking copied process
username = 'Varun kadaverla'
console.log("original username: ", username)
console.log("copy username", copyusername)

//non primitive copying
let person = {
    pid: 1000,
    name: 'Varun'

}
let copyperson = person
console.log("original person", person)
console.log("copy person", copyperson)
    //checkng
person.pid = 2000
console.log("orginal :", person)
console.log("copy", copyperson)
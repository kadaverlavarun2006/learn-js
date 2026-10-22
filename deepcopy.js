console.log("CHaran")
let emp = {
    empid: 100,
    name: 'ravi',
    address: {
        city: 'hyd',
        pincode: 4444
    }
}


//let copyemp = {...emp }//shallow it is used for object without nested 
let copyemp = structuredClone(emp) //deep copy it is used for nested objects

emp.empid = 1234;
emp.name = 'sairamm';
emp.address.city = 'knr';
console.log(emp)
console.log(copyemp)
// NOTE: Do not modify the function names/signatures below
// Only implement the function bodies

import employees from './test2.js';

/**
 * Task 1: Get names of employees from Hyderabad.
 *  Array of names.
 */
function getHyderabadEmployees() {
    return employees.filter((employees) => employees.address.city === 'hyderabad')
        .map(employees => employees.name);

}
console.log(getHyderabadEmployees())

function getEmployeesInAgeRange() {
    return employees.filter(employees => employees.age >= 40 && employees.age <= 50)
        .map(employees => ({ name: employees.name, address: employees.address }));
}
console.log(getEmployeesInAgeRange())

function getNonHyderabadEmployees() {
    return employees.filter(employees => employees.address.city != 'hyderabad').map(employees => employees)
}
console.log(getNonHyderabadEmployees())

function getReactJsEmployees() {
    return employees.filter(employees => employees.skills.includes('reactjs')).map(employees => employees.name)
}
console.log(getReactJsEmployees())
export {
    getHyderabadEmployees,
    getEmployeesInAgeRange,
    getNonHyderabadEmployees,
    getReactJsEmployees
};
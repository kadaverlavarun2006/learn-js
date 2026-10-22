//inheritance (parent----> child)
//parent or super or base class
class person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
//student IS A person
//child or subclass or derived class
class student extends person {
    constructor(name, age, address, collagename, fee) {
        super(name, age, address)
        this.collagename = collagename;
        this.fee = fee;
    }
}
//employee IS A person
class employee extends person {
    constructor(name, age, address, companyname, salary) {
        super(name, age, address)
        this.companyname = companyname;
        this.salary = salary;
    }
}

let std = new student('varun', 19, 'knr', 'vnr', 7500)
console.log(std)

let test = {
    a: 10
}
console.log(test)

//Object(root constructor) start with capital-O
//object(data type) if start with small o it is data type..
class student {
    //constructor
    constructor(sno, firstname, lastname) {
            //instance properties (part of each object)
            this.sno = sno;
            this.firstname = firstname;
            this.lastname = lastname;
        }
        //static members
    static collagename = 'vnr'
    static pincode = 5000090
        //instance method (calling an object)
    getname() {
        return this.firstname + ' ' + this.lastname
    }
    static collagedetails() {
        return student.pincode
    }
}

//create student object 
let std1 = new student(100, 'varun', 'kadaverla')
console.log(std1.getname())
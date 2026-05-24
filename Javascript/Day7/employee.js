import {Person, add} from "./person.js";

class Employee
{
    constructor(eid){
        this.EmployeeId = eid;
    }

    showEmployeeInfo(){
        let person = new Person(101,'test person');
        person.personId = 103;
        person.showInfo();
        add(1,2);
    }
}
let emp = new Employee(101);
emp.EmployeeId = 102;
emp.showEmployeeInfo();

export default Employee;

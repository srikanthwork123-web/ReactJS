import {Person, add} from "./person.js";
import employee from "./employee.js";

class Customer
{
    constructor(cid){
        this.CustomerId = cid;
    }

    showCustomerInfo(){
        let emp = new Employee(101);
        emp.EmployeeId = 102;
        emp.showEmployeeInfo();

        alert('Hello');
        add(1,2);
    }
}

export default Customer;

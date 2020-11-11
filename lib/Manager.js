// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email);
            this.role = role;
            this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Import parent Employee class by requiring it into your module
const Employee = require("./employee");

// Create Manager class inheriting (extends) from Empoyee class
class Manager extends Employee {
  //  * create constructor with parameters for id, name, email, office number and set properties (member variables) respectively
//    - you may want to first initialize the parent's properties
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  };

  //  * create get role method which overwrites the parent get role method and returns Manager as role
  getRole() {
    return "Manager";
  }

  //  * create get office number method which returns office number property
  getOfficeNumber() {
    return this.officeNumber;
  }
};

// Exports the Manager class
module.exports = Manager;
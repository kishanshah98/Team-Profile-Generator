/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Create Employee class to be used as parent for all other employees
class Employee {
  //  create constructor with parameters for id, name, email and set member variables (properties) respectively
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  };

//  creat get name method which returns name property
  getName() {
    return this.name;
  }

//  create get id method which returns id property
  getId() {
    return this.id;
  }

//  create get email method which returns email property
  getEmail() {
    return this.email;
  }

//  create get role method which returns role property
  getRole() {
    return "Employee";
  }
};

// Exports Employee class
module.exports = Employee;
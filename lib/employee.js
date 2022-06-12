/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Create Employee class to be used as parent for all other employees
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
//  create constructor with parameters for id, name, email and set member variables (properties) respectively
//  creat get name method which returns name property
//  create get id method which returns id property
//  create get email method which returns email property
//  create get role method which returns role property
// Exports Employee class

module.exports = Employee;
/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Import parent Employee class by requiring it into your module
const Employee = require("./employee");

// Create Engineer class inheriting (extends) from Empoyee class
class Engineer extends Employee {
  //  * create constructor with parameters for id, name, email, github and set properties (member variables) respectively
  // - you need initialize the parent's properties
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  };

  //  * create get role method which overwrites the parent get role method and returns Engineer role
  getRole() {
    return "Engineer";
  }
  //  * create get github method which returns github property
  getGithub() {
    return this.github
  }
};

// Exports the Engineer class
module.exports = Engineer;

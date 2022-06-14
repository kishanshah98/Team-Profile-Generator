/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const { exportAllDeclaration } = require("@babel/types");
const Employee = require("../lib/Employee");

// test instantiation of employee instance
test("", () => {

});

// test constructor initialized with a name
test("should create an object with a name if provided valid argument", () => {
  const personName = new Employee(1, "Jack", "email@gmail.com");

  expect(personName.name).toEqual("Jack");
});

// test constructor initialized wtih an id
test("should create an object with an ID if provided valid argument ", () => {
  const personName = new Employee(1, "Jack", "email@gmail.com");

  expect(personName.id).toEqual(1);
});

// test constructor initialized with an email address
test("should create an object with an email address if provided valid argument", () => {
  const personName = new Employee(1, "Jack", "email@gmail.com");

  expect(personName.email).toEqual("email@gmail.com");

});

// test get name method
test("", () => {

});

// test get Id method
test(")", () => {

});

// test get email method
test("", () => {

});

// test get role method. it should return "Employee"
test("", () => {

});

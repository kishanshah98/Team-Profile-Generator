/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const { newExpression } = require("@babel/types");
const exp = require("constants");
const { getSystemErrorName } = require("util");
const Employee = require("../lib/Employee");

// test instantiation of employee instance
test("Should instantiate employee instance", () => {
  const result = new Employee();

  expect(typeof(result)).toBe("object");
});

// test constructor initialized with a name
test("Should set name properly via constructor", () => {
  const result = "Nick";
  const employee = new Employee(result);
  
  expect(employee.name).toBe(result);
});

// test constructor initialized wtih an id
test("Should set id properly via constructor", () => {
  const value = 100;
  const employee = new Employee("Name", value);

  expect(employee.id).toBe(value);
});

// test constructor initialized with an email address
test("Should set email properly via constructor", () => {
  const result = "email@gmail.com"
  const employee = new Employee("Name", 5, result);

  expect(employee.email).toBe(result);
});

// test get name method
test("Should get name with getName() function", () => {
  const result = "Nick";
  const employee = new Employee(result);

  expect(employee.getName()).toBe(result);
});

// test get Id method
test("Should get id with getId() function", () => {
  const result = 100;
  const employee = new Employee("Name", 100);

  expect(employee.getId()).toBe(result);
});

// test get email method
test("Should get email with getEmail() function", () => {
  const result = "email@gmail.com";
  const employee = new Employee("Name", 100, result);

  expect(employee.getEmail()).toBe(result);
});

// test get role method. it should return "Employee"
test("Should get role with getRole() function", () => {
  const result = "Employee";
  const employee = new Employee("Name", 100, "email@gmail.com");

  expect(employee.getRole()).toBe(result);
});

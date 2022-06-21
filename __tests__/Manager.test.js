const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Should set office number properly via constructor", () => {
  const results = 101;
  const employee = new Manager("Name", 100, "email@gmail.com", results);

  expect(employee.officeNumber).toBe(results);
});

test("Should return Manager with getRole() function", () => {
  const results = "Manager";
  const employee = new Manager();

  expect(employee.getRole()).toBe(results);
});

test("Should return office number with getOfficeNumber() function", () => {
  const results = 101;
  const employee = new Manager("Name", 100, "email@gmail.com", results);

  expect(employee.getOfficeNumber()).toBe(results);
});

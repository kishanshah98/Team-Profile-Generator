/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

const Intern = require("../lib/Intern");

// test constructor to set school
test("Should set school properly via constructor", () => {
  const results = "School";
  const employee = new Intern("Name", 100, "email@gmail.com", results);

  expect(employee.school).toBe(results);
});

// test get role method.
test("Should return Intern with getRole() function", () => {
  const results = "Intern";
  const employee = new Intern();

  expect(employee.getRole()).toBe(results);
});

// test get school method
test("Should return school name with getSchool() function", () => {
  const results = "School";
  const employee = new Intern("Name", 100, "email@gmail.com", results);

  expect(employee.getSchool()).toBe(results);
});

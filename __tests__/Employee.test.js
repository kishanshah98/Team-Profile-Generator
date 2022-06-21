const Employee = require("../lib/Employee");

test("Should instantiate employee instance", () => {
  const result = new Employee();

  expect(typeof(result)).toBe("object");
});

test("Should set name properly via constructor", () => {
  const result = "Nick";
  const employee = new Employee(result);
  
  expect(employee.name).toBe(result);
});

test("Should set id properly via constructor", () => {
  const value = 100;
  const employee = new Employee("Name", value);

  expect(employee.id).toBe(value);
});

test("Should set email properly via constructor", () => {
  const result = "email@gmail.com"
  const employee = new Employee("Name", 5, result);

  expect(employee.email).toBe(result);
});

test("Should get name with getName() function", () => {
  const result = "Nick";
  const employee = new Employee(result);

  expect(employee.getName()).toBe(result);
});

test("Should get id with getId() function", () => {
  const result = 100;
  const employee = new Employee("Name", 100);

  expect(employee.getId()).toBe(result);
});

test("Should get email with getEmail() function", () => {
  const result = "email@gmail.com";
  const employee = new Employee("Name", 100, result);

  expect(employee.getEmail()).toBe(result);
});

test("Should get role with getRole() function", () => {
  const result = "Employee";
  const employee = new Employee("Name", 100, "email@gmail.com");

  expect(employee.getRole()).toBe(result);
});

const Engineer = require("../lib/engineer");

test("Should set github properly via constructor", () => {
  const results = "GithubName";
  const employee = new Engineer("Name", 100, "email@gmail.com", results);

  expect(employee.github).toBe(results);
});

test("Should return Engineer with getRole() function", () => {
  const results = "Engineer";
  const employee = new Engineer();

  expect(employee.getRole()).toBe(results);
});

test("Should return github username with getGithub() function", () => {
  const results = "GithubName";
  const employee = new Engineer("Name", 100, "email@gmail.com", results);

  expect(employee.getGithub()).toBe(results);
});

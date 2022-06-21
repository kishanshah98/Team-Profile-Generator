/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/
const buildCards = function(employees) {
  function buildManager(manager) {
    return `
    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${manager.getName()}</h5>
                            <p class="card-text">Manager</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: ${manager.getEmail()} </li>
                            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()} </li>
                        </ul>
                    </div>
    `
  };

  function buildEngineer(engineer) {
    return `
    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${engineer.getName()}</h5>
                            <p class="card-text">Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                        </ul>
                    </div>
    `
  };

  function buildIntern(intern) {
    return `
    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title"> ${intern.getName()}</h5>
                            <p class="card-text">Intern</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: ${intern.getEmail()}</li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
    `
  };

  const allCards = [];
  const managerHTML = employees.filter(employee => employee.getRole() === 'Manager')
  .map(manager => buildManager(manager));
  allCards.push(managerHTML);

  const engineerHTML = employees.filter(employee => employee.getRole() === 'Engineer')
  .map(engineer => buildEngineer(engineer))
  .join('');
  allCards.push(engineerHTML);

  const internHTML = employees.filter(employee => employee.getRole() === 'Intern')
  .map(intern => buildIntern(intern))
  .join('');
  allCards.push(internHTML);

  return allCards.join('');

};

module.exports = employees => {
  return `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></script>
    <title>Team Profile</title>
</head>

<body>
    <header>
        <div class="row">
            <div class="col-12 col-md-12 jumbotron jumbotron-fluid">
                <div class="jumbotron-container">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="row">
            <div class="col-12 col-md-12">
                <div class="card-container">
                ${buildCards(employees)}
                </div>
            </div>
        </div>
    </main>

</body>

</html>
  `
}
// Step 1. export function to generate entire html page with template literal
// Step 2. function to create team template
// Step 3. functions to generate manager, engineer, and intern templates

// Step 3a. function to generate manager card template
//  - take in manager as input parameter, a manager object
//  - create manager card template
//  -   call get name, get role, get id, get email, and get office number methods to fill in the template
//  - return the template to the caller

// Step 3b. function to generate engineer card template
//  - take in engineer as input parameter, an engineer object
//  - create engineer card template
//  -   call get name, get role, get id, get email, and get github methods to fill in the template
//  - return the template to the caller

// Step 3c. function to generate intern card template
//  - take in intern as input parameter, an intern object
//  - create intern card template
//  -   call get name, get role, get id, get email, and get school methods to fill in the template
//  - return the template to the caller

// Step 2. function to create the team template
// take in team as input parameter from the caller
//  - create an empty array to hold the template literal strings for the entire team members
//  - 1. use array.filter() on team to get the new array with only 'Manager' members via getRole method
//  -   use array.map() on the 'Manager' arrray and in the callback function to call a function to generate manager card template passing each manager as input argument
//  -   convert the resultant manager template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 2. use array.filter() on team to get the new array with only engineer members via getRole method
//  -   use array.map() on the engineer arrray and in the callback function to call a function to generate engineer card template passing each engineer as input argument
//  -   convert the resultant engineer template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 3. use array.filter() on team to get the new array with only intern members via getRole method
//  -   use array.map() on the intern arrray and in the callback function to call a function to generate intern card template passing each intern as input argument
//  -   convert the resultant intern template array from .map() into string using .join()
//  -   the converted template leterail string is pushed to the empty team template array
//  - 4. convert the empty team template array (now is not empty) into template string, then return it to the caller



// Step 1. export function to generate entire html page with template literal
//  - this function takes in team as input parameter from the caller, which is array of answer objects from user input
//  - in this function, within the template literal, you will call another function to create the team template
//  -   passing team , array of answer objects, as input argument
//  - you will return the template to the caller
//  - export the function

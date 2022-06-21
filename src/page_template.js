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
                            <li class="list-group-item">Email: <a href=mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
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
                            <li class="list-group-item">Email: <a href=mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()}</a></li>
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
                            <li class="list-group-item">Email: <a href=mailto:${intern.getEmail()}>${intern.getEmail()}</a></li>
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
};
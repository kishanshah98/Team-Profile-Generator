const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');

const path = require("path");

const fs = require('fs');

const generateHTML = require('./src/page_template');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teamList = [];

const employeeIds = [];

// Calls the starter function to begin program
init();

// Starter function to start the program
function init() {
  createManager();

  // Creates the manager function that asks the user the questions and pushes the results to the teamList array
  function createManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "What is the manager's name?",
          name: 'name',
        },
        {
          type: 'input',
          message: "What is the manager's id?",
          name: 'id',
        },
        {
          type: 'input',
          message: "What is the manager's email?",
          name: 'email',
        },
        {
          type: 'input',
          message: "What is the manager's office number?",
          name: 'officeNumber',
        },
      ])
      .then(function (response) {
        const addManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamList.push(addManager);
        employeeIds.push(addManager.id);
        createTeam();
      })
  };

  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          message: "Would you like to add any of the following to your team?",
          choices: ['Engineer', 'Intern', 'None, I would like to exit'],
          name: 'role',
        },
      ])
      .then(function (response) {
        if (response.role === 'Engineer') {
          addEngineer();
        } else if (response.role === 'Intern') {
          addIntern();
        } else {
          buildTeam();
        };
      });
  };

  // Creates the engineer function that asks the user the questions and pushes the results to the teamList array
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "What is the engineer's name?",
          name: 'name',
        },
        {
          type: 'input',
          message: "What is the engineer's id?",
          name: 'id',
        },
        {
          type: 'input',
          message: "What is the engineer's email?",
          name: 'email',
        },
        {
          type: 'input',
          message: "What is the engineer's github?",
          name: 'github',
        },
      ])
      .then(function (response) {
        const addEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamList.push(addEngineer);
        employeeIds.push(addEngineer.id);
        createTeam();
      })
  };

  // Creates the intern function that asks the user the questions and pushes the results to the teamList array
  function addIntern() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is the intern's id?",
        name: 'id',
      },
      {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'school',
      },
    ])
    .then(function (response) {
      const addIntern = new Intern(response.name, response.id, response.email, response.school);
      teamList.push(addIntern);
      employeeIds.push(addEngineer.id);
      createTeam();
    })
  };

  // Writes the HTML file using the team List array
  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    };
    fs.writeFileSync(distPath, generateHTML(teamList), 'utf-8');
  };

};


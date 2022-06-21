/**********************************************************
  REMOVE ALL THE COMMENTS BEFORE SUBMITTING YOUR HOMEWORK
***********************************************************/

// Imports classes for Manager, Engineer, Intern
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// Imports external package 'inquirer'
const inquirer = require('inquirer');

// Imports 'path' from node library to be used to create output folder and file name
//    Hint: __dirname, process.cwd() or you can use relative path without using 'path' library function
const path = require("path");

// Imports 'fs' from node library
const fs = require('fs');

// Imports page template function and assign the function to a variable
const generateHTML = require('./src/page_template');

// Create variables for the output folder and the html file name
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// Create an empty array to store the team member objects
const teamList = [];

// Create an empty array to store employee IDs to be used to check for the dupliates
const employeeIds = [];

// **********************
// Main Pfocess
// **********************

// Call the starter function
init();

// starter function to start the program
function init() {
  console.log("Starts program")

  //  1a. call create manager function
  createManager();

  //  1b. function to create manager
  //      - inquire user to enter manager's name, id, email, and office number
  //      - in .then callback, create manager object from the Manager class by initializing it with the properties in answer object
  //      - push the manager object to the empty team memeber object array
  //      - push the manager's id to the empty id array
  //      - call create team function
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
        console.log(response);
        const addManager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamList.push(addManager);
        employeeIds.push(addManager.id);
        createTeam();
        console.log(employeeIds);
        console.log(teamList);
      })
  };

  //  2. function to create team (called from create manager, add engineer, add intern functions)
  //      - inquire user to pick employee from the list of engineer, intern, or exit (done with adding employees)
  //      - in .then callback, based on user's choice, call add engineer or add intern or, for the choice of exit, call build team function
  //
  function createTeam() {
    console.log("Create Team function working");
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
        console.log(response);
        if (response.role === 'Engineer') {
          addEngineer();
          console.log("Engineer function called");
        } else if (response.role === 'Intern') {
          addIntern();
          console.log("Intern function called");
        } else  {
          buildTeam();
          console.log("Build team function called");
        };
      });
  };

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
        console.log(response);
        const addEngineer = new Engineer(response.name, response.id, response.email, response.github);
        teamList.push(addEngineer);
        employeeIds.push(addEngineer.id);
        createTeam();
        console.log(employeeIds);
        console.log(teamList);
      })
  };
  //  3. function to add engineer
  //      - inquire user to enter engineer's name, id, email, and github
  //      - in .then callbackl create engineer object from the Engineer class by initializing it with the properties in answer object
  //      - push the engineer object to the empty team member object array
  //      - push the engineer's id to the empty id array
  //      - call create team function
  //
  function addIntern() {
  }
  //  4. function to add intern
  //      - inquire user to enter intern's name, id, email, and school
  //      - in .then callback, create intern object from the intern class by initializing it with the properties in answer object
  //      - push the intern object to the empty team member object array
  //      - push the intern's id to the empty id array
  //      - call create team function
  //
  function buildTeam() {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, generateHTML(teamList), 'utf-8')
  }
  //  5. function build team
  //      - check if the output folder path already exists.
  //      -   if not, create it
  //      - call page template function passing the team member object array as input argument
  //      - write the returned template function to the output
  //
  //      - Hint: fs.existsSync, fs.mkdirSync, and fs.writeFileSync

};

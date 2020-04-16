const inquirer = require("inquirer");


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name",
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of the project?"
      },
      {
        type: "input",
        name: "description",
        message: "Please provide a description?"
      },
      {
        type: "input",
        name: "install",
        message: "What are the steps required to install your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this repo?"
      },
      {
        type: "input",
        name: "credit",
        message: "Please provide any contributors?"
      },
      {
        type: "checkbox",
        name: "license",
        choices: ["Apache", "MIT", "Creative Commons", "None"],
        message: "Please provide the license for this repository?"
      },
      {
        type: "input",
        name: "credit",
        message: "Please provide any contributors that helped make this repo?"
      },
      {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to this repo?"
      },
      {
        type: "input",
        name: "test",
        message: "What command should be run to run tests for this repo?"
      },
    ]);
  }
module.exports = promptUser;

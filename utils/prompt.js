const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([

      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of the repo?"
      },
      {
        type: "input",
        name: "url",
        message: "What is the URL of your repo",
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
        type: "input",
        name: "license",
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

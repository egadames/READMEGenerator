const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// const questions = [

// ];



function writeToFile(fileName, data) {
  writeFileAsync(fileName, data)
  console.log("Successfully wrote to damn.md");
}

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

function generateReadme(data) {
  return `
  # ${data.title}

  Created by ${data.name}

  ## Description 

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


  ## Installation

  ${data.install}

  ## Usage 

  ${data.usage}


  ## Credits

  ${data.credit}

  ## License

  ${data.license}

  ## Badges

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  `;
}

async function init() {
  try {
    const answers = await promptUser();

    const readMe = generateReadme(answers);

    await writeToFile("damn.md", readMe);

  } catch(err) {
    console.log(err);
  }
}

init();

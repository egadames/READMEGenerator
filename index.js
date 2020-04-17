// Loading the different javascript files that contains different function
const markdown = require('./utils/generateMarkdown');
const prompt = require('./utils/prompt');
const api = require('./utils/api');
const writeFile = require('./utils/writeFile');

// This function initialize the readme generator
// It contains async and await so the readme is loaded with the data required to run the function
async function init() {
  try {
    // This runs the prompt to ask the user various question about their repo
    const answers = await prompt();
    // based on the user's response the github API is queried to get required information
    const gitData = await api.getUser(answers.username);
    // The data from the getUser is loaded into an object and the line below extracts the values
    const values = Object.values(gitData)
    // This loads the generateMarkdown function and renders a string containing all README info
    // The parameters take information from the github API and user's response.
    const readMe = await markdown(answers, values);
    // This loads the writeToFile function and creates a README.md file.
    writeFile("README.md", readMe);
  } catch(err) {
    console.log(err);
  }
}

init();

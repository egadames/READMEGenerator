const markdown = require('./utils/generateMarkdown');
const prompt = require('./utils/prompt');
const api = require('./utils/api');
const writeFile = require('./utils/writeFile');
const _ = require('underscore')

async function init() {
  try {
    const answers = await prompt();
    
    const gitData = await api.getUser(answers.username);
    const values = Object.values(gitData)
    // console.log(values[0])
    // console.log(values[1])
    // console.log(values[2])
    const readMe = markdown(answers, values);
    // const repoNames = _.pluck(gitData, 'name');
    // console.log(repoNames)
    writeFile("README.md", readMe);
  } catch(err) {
    console.log(err);
  }
}

init();

// This function creates the string that is loaded into the README.md
// The function takes data from the prompt and API
// It creates a variable that contains a string 
// that will be placed in the README file
function generateMarkdown(data, repoData) {
docText = 
`# ${data.title}

  * Created by ${repoData[1]}

  * Github Repo Link: ${data.url}

## Description 

  * ${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Question](#question)

## Installation

  * ${data.install}

## Usage 

  * ${data.usage}

## Credits

  * ${data.credit}

## License

![license](https://img.shields.io/badge/License-${data.license}-blue)

## Contributing

  * ${data.contribute}

## Tests

  * ${data.test}

## Screenshots

![app screenshot](${data.screenshot})

## Questions

  * If there are any questions, please contact via the information below:

  * User GitHub email

    * Email: ${repoData[0]}
  
  * User GitHub profile picture

  ![github profile image](${repoData[2]})
`;
return docText;
}

// This exports the function
module.exports = generateMarkdown;
